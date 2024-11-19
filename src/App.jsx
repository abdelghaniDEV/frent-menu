import { useEffect, useState } from "react";
import "./App.css";
import MealComponent from "./componnent/Meal";
import MealCart from "./componnent/MealCart";
import Header from "./componnent/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./redux/slices/categories.slice";
import { fetchProducts } from "./redux/slices/products.slice";


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
    <div className="text-white  container  my-[20px]">
      <Header />
      <div className="flex gap-[20px] items-start mt-[20px] md:mt-[1\0vh] ">
        <div className="md:w-[450px] md:overflow-scroll w-full ">
          <div className="bg-[#7B5D49] border-[1px] text-[15px]  justify-between p-2  border-b-[1px]">
            <ul className="flex items-center flex-wrap gap-2 justify-center font- font-[500] ">
              {categories.map((category) => {
                return (
                  <li
                    onClick={() => filterProduct(category.name)}
                    key={category.id}
                    className="text-[15px] hover:text-[#DCA57E] cursor-pointer"
                  >
                    {category.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bg-[#13120F] md:max-h-[650px] border-[1px]  custom-scroll   ">
            {productFilter?.map((product) => {
              return <MealCart setProduct={setProduct} product={product} />;
            })}
          </div>
        </div>
        <MealComponent product={product} />
      </div>
    </div>
  );
}

export default App;
