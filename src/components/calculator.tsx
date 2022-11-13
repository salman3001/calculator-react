import { HtmlHTMLAttributes, ReactNode, SyntheticEvent, useState } from "react";
import {
  historyScreenVal,
  mainScreenVal,
  inputType,
} from "../utils/calculator-utils";

const Calculator = () => {
  const [mainScreen, setMainScreen] = useState("0");
  const [historyScreen, setHistoryScreen] = useState([""]);

  const inputHandler = (e: SyntheticEvent) => {
    const input = e.currentTarget.innerHTML;

    switch (inputType(input)) {
      case "isNumber":
        break;
      case "isOperator":
        break;
      case "isEqual":
        break;
      case "isDot":
        break;
      case "isClear":
        break;
      case "isDelete":
        break;

      default:
        break;
    }
  };

  return (
    <div className="h-screen w-screen bg-base-300 flex justify-center items-center ">
      <div className="min-w-[350px] min-h-[500px] flex flex-col justify-center bg-gradient-to-tl from-black to-slate-900 shadow-2xl shadow-gray-700 rounded-l">
        <div className="p-4 text-white text-xl">
          <div className="b flex h-10 w-full items-center justify-end border-2 bg-black  px-2">
            {historyScreen}
          </div>
          <div className="flex h-20 w-full items-center justify-end border-2 border-t-0 bg-black px-2 text-3xl">
            {mainScreen}
          </div>
        </div>
        <div className="grid grid-rows-5 grid-flow-col place-items-center gap-2 p-2 py-4">
          <Button onClick={inputHandler}>C</Button>
          <Button onClick={inputHandler}>7</Button>
          <Button onClick={inputHandler}>4</Button>
          <Button onClick={inputHandler}>1</Button>
          <Button onClick={inputHandler}>%</Button>
          <Button onClick={inputHandler}>/</Button>
          <Button onClick={inputHandler}>8</Button>
          <Button onClick={inputHandler}>5</Button>
          <Button onClick={inputHandler}>2</Button>
          <Button onClick={inputHandler}>0</Button>
          <Button onClick={inputHandler}>*</Button>
          <Button onClick={inputHandler}>9</Button>
          <Button onClick={inputHandler}>6</Button>
          <Button onClick={inputHandler}>3</Button>
          <Button onClick={inputHandler}>.</Button>
          <Button onClick={inputHandler}>del</Button>
          <Button onClick={inputHandler}>-</Button>
          <Button onClick={inputHandler}>+</Button>
          <Button onClick={inputHandler} variant="equal">
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

const Button = (
  prop: HtmlHTMLAttributes<HTMLButtonElement> & { variant?: "equal" }
) => {
  return (
    <button
      {...prop}
      className={`{btn-outline btn btn-lg rounded-full bg-gray-900 text-white
      ${prop.variant === "equal" ? "row-span-2 h-full" : ""}
    `}
    />
  );
};
