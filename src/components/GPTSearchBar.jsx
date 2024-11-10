import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  console.log('kkkkkkk', langKey)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 rounded-sm col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-md col-span-3">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
