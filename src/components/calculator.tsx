import { HtmlHTMLAttributes, SyntheticEvent, useState, useEffect } from "react";
import calculator from "../utils/calculator-utils";
import InstructionModal from "./InstructionModal";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

const Calculator = () => {
  const [mainScreen, setMainScreen] = useState("0");
  const [historyScreen, setHistoryScreen] = useState([""]);

  useEffect(() => {
    document.addEventListener("keydown", keyboardInputHandler);
    return () => document.removeEventListener("keydown", keyboardInputHandler);
  }, []);

  const keyboardInputHandler = (e: KeyboardEvent) => {
    const input = e.key;
    // console.log(input);

    const setScreens = () => {
      setMainScreen(calculator.mainScreen);
      setHistoryScreen([...calculator.historyScreen]);
    };

    if (["+", "-", "*", "/"].includes(input)) {
      calculator.addOperator(input);
      setScreens();
    } else if (
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(input)
    ) {
      calculator.appendNumber(input);
      setScreens();
    } else if (input === "Delete") {
      calculator.clear();
      setScreens();
    } else if (input === "Backspace") {
      calculator.delete();
      setScreens();
    } else if (input === ".") {
      calculator.addDot(input);
      setScreens();
    } else if (input === "Enter") {
      calculator.equal();
      setScreens();
    } else if (input === "%") {
      calculator.precent();
      setScreens();
    } else {
      return;
    }
  };

  const buttonInputHandler = (e: SyntheticEvent) => {
    const input = e.currentTarget.innerHTML;
    const setScreens = () => {
      setMainScreen(calculator.mainScreen);
      setHistoryScreen([...calculator.historyScreen]);
    };

    if (["+", "-", "*", "/"].includes(input)) {
      calculator.addOperator(input);
      setScreens();
    } else if (
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(input)
    ) {
      calculator.appendNumber(input);
      setScreens();
    } else if (input === "C") {
      calculator.clear();
      setScreens();
    } else if (input === "del") {
      calculator.delete();
      setScreens();
    } else if (input === ".") {
      calculator.addDot(input);
      setScreens();
    } else if (input === "=") {
      calculator.equal();
      setScreens();
    } else if (input === "%") {
      calculator.precent();
      setScreens();
    } else {
      return;
    }
  };

  return (
    <div className="h-screen w-screen bg-base-300 flex flex-col gap-4 justify-center items-center ">
      {/* Calculator Container */}
      <div className="max-w-sm sm:max-w-md flex flex-col justify-center rounded-2xl bg-gradient-to-tl from-black to-slate-900 shadow-2xl shadow-gray-700 ">
        {/* Screens Container */}
        <div className="p-4 text-white text-xs">
          {/* history Screen */}
          <div className="b flex h-10 w-full items-center justify-end border-2 border-b-0 bg-black  px-2  overflow-ellipsis rounded-t-md">
            {historyScreen}
          </div>
          {/* Main Screen */}
          <div className="flex h-20 w-full items-center justify-end border-2 border-t-0 bg-black px-2 text-3xl rounded-b-md">
            {mainScreen}
          </div>
        </div>
        <div className="grid grid-rows-5 grid-flow-col place-items-center gap-2 p-2 py-4">
          <Button onClick={buttonInputHandler}>C</Button>
          <Button onClick={buttonInputHandler}>7</Button>
          <Button onClick={buttonInputHandler}>4</Button>
          <Button onClick={buttonInputHandler}>1</Button>
          <Button onClick={buttonInputHandler}>%</Button>
          <Button onClick={buttonInputHandler}>/</Button>
          <Button onClick={buttonInputHandler}>8</Button>
          <Button onClick={buttonInputHandler}>5</Button>
          <Button onClick={buttonInputHandler}>2</Button>
          <Button onClick={buttonInputHandler}>0</Button>
          <Button onClick={buttonInputHandler}>*</Button>
          <Button onClick={buttonInputHandler}>9</Button>
          <Button onClick={buttonInputHandler}>6</Button>
          <Button onClick={buttonInputHandler}>3</Button>
          <Button onClick={buttonInputHandler}>.</Button>
          <Button onClick={buttonInputHandler} variant="del">
            del
          </Button>
          <Button onClick={buttonInputHandler}>-</Button>
          <Button onClick={buttonInputHandler}>+</Button>
          <Button onClick={buttonInputHandler} variant="equal">
            =
          </Button>
        </div>
      </div>
      {/* instruction button */}
      <InstructionModal />
      <p className="text-center flex flex-col">
        <div>
          Made By <b className="text-primary">Salman Khan</b>
        </div>
        <br />
        Lets connect
        {/* contacts */}
        <div className="flex text-4xl gap-4 justify-center items-center ">
          <a
            href="mailto:therodfighter@gmail.com"
            target="_blank"
            className="group "
          >
            <AiOutlineMail className="group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/salman-k-b922a2144/"
            target="_blank"
            className="group"
          >
            <AiFillLinkedin className="group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://github.com/salman3001/"
            target="_blank"
            className="group"
          >
            <AiOutlineGithub className="group-hover:text-primary transition-colors" />
          </a>
        </div>
      </p>
    </div>
  );
};

export default Calculator;

const Button = (
  prop: HtmlHTMLAttributes<HTMLButtonElement> & { variant?: "equal" | "del" }
) => {
  return (
    <button
      {...prop}
      className={`btn-outline btn btn-lg rounded-full bg-gray-900 text-white
      ${
        prop.variant === "equal"
          ? "row-span-2 h-full  bg-green-500 hover:bg-green-400  text-white"
          : ""
      }
      ${
        prop.variant === "del"
          ? "btn-outline btn btn-lg rounded-full  bg-red-500 hover:bg-red-400  text-white"
          : ""
      }
    `}
    />
  );
};
