const Languages = ({ language, onLanguageChange }) => {
  return (
    <div className="mx-6 border-t-2 border-b-2 border-gray-100 py-6">
      {LANGUAGES.map(({ label, value }) => {
        return (
          <button
            key={value}
            type="button"
            className={`${
              language === value
                ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                : "bg-gray-200 hover:bg-gray-100"
            } m-1 rounded px-2 py-1 text-xs font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            onClick={() => {
              onLanguageChange(value);
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" },
];

export default Languages;
