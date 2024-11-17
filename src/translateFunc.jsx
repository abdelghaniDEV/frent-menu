import axios from "axios";

export const translateText = async (text, targetLang = 'ar') => {
  console.log(import.meta.env.VITE_CHATGPT_KEY)
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',  // يمكن استخدام "gpt-4" أيضًا إذا كان لديك الوصول إليه
        messages: [
          { role: 'user', content: `Translate the following text to ${targetLang}: ${text}` }
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_CHATGPT_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    if (error.response && error.response.status === 402) {
      console.error('Quota exceeded. Please check your OpenAI usage.');
    } else {
      console.error('Error during translation:', error.message || error);
    }
  }
};

// مثال على الاستخدام:
translateText("Hello, how are you?", "ar").then(translatedText => {
  console.log("Translated Text:", translatedText);
});
