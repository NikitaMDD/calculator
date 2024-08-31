import { useEffect, useState } from "react";
import "./CountButton/CountButton";
import "./Numbers/Numbers";
import "./App.css";
import Numbers from "./Numbers/Numbers";
import CountButton from "./CountButton/CountButton";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light");
  const htmlElement = document.querySelector("html");

  useEffect(() => {
    htmlElement.className = theme;
    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  }, [theme]);

  function toggleDarkModeSwitcher() {
    setTheme((prevThem) => (prevThem === "light" ? "dark" : "light"));
  }

  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");

  function applyExpression(countedNumber) {
    setCounts(countedNumber);
    setResult(eval(counts));
  }

  return (
    <>
      <div className="content">
        <div className="absolute top-6 right-6">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              checked={theme === "dark"}
              onChange={toggleDarkModeSwitcher}
              className="sr-only peer"
            />
            <div
              className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none 
              peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
              rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
              rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
              after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border
              after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
            ></div>
            <span className="ms-3 text-base font-medium text-gray-900 dark:text-gray-300">
              Dark Mode
            </span>
          </label>
        </div>
        <div className="display">
          <p className="display__item">{counts}</p>
          <p className="display__item_color">{result}</p>
        </div>
        <div className="keyboard">
          <div className="keyboard__items">
            <Numbers data={counts} onClick={setCounts} />
            <button
              className="keyboard__buttons"
              onClick={() => {
                setResult(eval(counts));
                setCounts('0');
              }}
            >
              =
            </button>
          </div>
          <div className="items-right-column">
            <CountButton
              data={counts}
              expression={"+"}
              onClick={applyExpression}
            />
            <CountButton
              data={counts}
              expression={"-"}
              onClick={applyExpression}
            />
            <CountButton
              data={counts}
              expression={"*"}
              onClick={applyExpression}
            />
            <CountButton
              data={counts}
              expression={"/"}
              onClick={applyExpression}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
