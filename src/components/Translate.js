import { useEffect, useState } from "react";
import axios from "axios";

const Translate = ( {text, language} ) => {
    const [translated] = useTranslation(text, language)
  return (
      <div className={"break-word bg-gray-100 w-full h-20 rounded-br-lg px-6 py-3 overflow-auto"}> {translated} </div>
  );
};

const useTranslation = (text, language) => {
  const [translated, setTranslate] = useState("");
  useEffect(() => {
    //if (!text) {
    //  return;
    //}
    const cancelToken = axios.CancelToken.source();
    doTranslation(text, language, cancelToken, setTranslate);
  }, [text, language]);

  return [translated];
};

//Utility FN - Mover a carpeta utils/utils.js
const debounce = (fn) => {
  let id = null;

  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
};

const doTranslation = debounce(
  async (input, languageCode, cancelToken, callback) => {
    try {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNltKX8oKTEQWRYGUtc4zzFWfNjFV2DvI',
        {
          q: input,
          target: languageCode,
        },
        {
          cancelToken: cancelToken.token,
        }
      );
        console.log('DATOS:', data.data)
      callback(data.data.translations[0].translatedText);
    } catch (error) {
      console.log("ERROR:", error);
    }
  }
);

export default Translate;
