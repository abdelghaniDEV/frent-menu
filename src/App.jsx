import { useEffect, useState } from "react";
import "./App.css";
import MealComponent from "./componnent/Meal";
import MealCart from "./componnent/MealCart";
import Header from "./componnent/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./redux/slices/categories.slice";
import { fetchProducts } from "./redux/slices/products.slice";
import Footer from "./componnent/Footer";

function App() {
  const [selectCategory, setSelectCategory] = useState("");
  const [productFilter, setProductFilter] = useState([]);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    setProductFilter(products);
    setProduct(products[0]);
  }, [products]);

  const filterProduct = (category) => {
    const filterProducts = products.filter(
      (product) => product.category.name === category
    );
    setProductFilter(filterProducts);
  };

  return (
    <div className="text-white  container bg-[url('/bg-des.jpg')] bg-cover  bg-center  relative">
      <Header />
      {products.length > 0 ? (
        <div className="flex gap-[20px] items-start mt-[20px] md:mt-[1\0vh] min-h-screen ">
          <div className="md:w-[450px]  ">
            <div className="bg-[#7b5d499e] border-[1px] text-[15px]  justify-between p-2  border-b-[1px]">
              <ul className="flex flex-wrap gap-2 justify-center font- font-[500] ">
                {categories.map((category) => {
                  return (
                    <li
                      onClick={() => filterProduct(category.name)}
                      key={category.id}
                      className="text-[15px] hover:text-[#DCA57E] cursor-pointer border-[1px] rounded-[15px] py-2 px-2 "
                    >
                      {category.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bg-[#7b5d499e] md:max-h-[650px] md:overflow-y-scroll w-full md:custom-scroll border-[1px] ">
              {productFilter?.map((product) => {
                return <MealCart setProduct={setProduct} product={product} />;
              })}
            </div>
          </div>
          <MealComponent product={product} />
        </div>
      ) : (
        <div className=" min-h-screen relative">
          <div role="status" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <svg
              aria-hidden="true"
              class="w-[100px] h-[100px] text-gray-200 animate-spin dark:text-gray-600 fill-[#DCA57E]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
