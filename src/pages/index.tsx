import { useState, useEffect } from "react";

import Field from "../components/Field";
import Languages from "../components/Languages";
import Translate from "../components/Translate";

export default function Home() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    console.log("Mi idioma es:", text, language);
  }, [text, language]);

  return (
    <main className="flex h-screen bg-slate-200">
      <div className="container align-middle bg-slate-50 m-auto max-h-4xl w-4/5 max-w-4xl rounded-xl drop-shadow-sm">
        <div className="m-6 flex justify-between items-center">
          <h1 className="text-l font-bold">Translate APP</h1>
          <div>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500">
              <span className="text-xs font-medium leading-none text-white">
                JD
              </span>
            </span>
          </div>
        </div>
        <Languages language={language} onLanguageChange={setLanguage} />
        <div className="flex w-full">
          <Field onChange={setText} />
          <Translate text={text} language={language} />
        </div>
      </div>
    </main>
  );
}
