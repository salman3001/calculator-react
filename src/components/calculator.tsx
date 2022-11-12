import { SyntheticEvent, useState } from "react";
import tw from "tailwind-styled-components";
import { myCalc } from "../utils/calculator/calculator";

const Calculator = () => {
  const [mainScreen, setMainScreen] = useState("0");
  const [historyScreen, setHistoryScreen] = useState([""]);

  const inputHandler = (e: SyntheticEvent) => {
    let input = e.currentTarget.innerHTML;
    if (myCalc.input.isClear(input)) {
      const [mainScreenVal, historyScreebVAl] = myCalc.clear();
      setMainScreen(mainScreenVal);
      setHistoryScreen(historyScreebVAl);
    } 
    else if (myCalc.input.isNumber(input)) {
      setMainScreen(myCalc.appendNumber(input));
    }
     else if (myCalc.input.isOperator(input)) {
      const [mainScreenVal, historyScreebVAl] = myCalc.addOperator(input)
      setMainScreen(mainScreenVal)
      setHistoryScreen([...historyScreebVAl])
    } 
    else if (myCalc.input.isDot(input)) {
      setMainScreen(myCalc.addDot())
    } 
    else if (myCalc.input.isEqual(input)) {
      const [mainScreenVal,historyScreenval]=myCalc.calculate(input)
      setMainScreen(mainScreenVal)
      setHistoryScreen([...historyScreenval])
    } 
    else if (myCalc.input.isDelet(input)) {
      myCalc.delete();
    }
  };
  return (
    <Container>
      <CalculatorContainer>
        <ScreenContainer>
          <div className="b flex h-10 w-full items-center justify-end border-2 bg-black  px-2">
            {historyScreen}
          </div>
          <div className="flex h-20 w-full items-center justify-end border-2 border-t-0 bg-black px-2 text-3xl">
            {mainScreen}
          </div>
        </ScreenContainer>
        <ButtonContainer>
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
          <Button onClick={inputHandler} className="row-span-2 h-full">
            =
          </Button>
        </ButtonContainer>
      </CalculatorContainer>
    </Container>
  );
};

export default Calculator;

const Container = tw.div`
h-screen w-screen bg-base-300 flex justify-center items-center 
`;

const CalculatorContainer = tw.div`
min-w-[350px] min-h-[500px] flex flex-col justify-center bg-gradient-to-tl from-black to-slate-900 shadow-2xl shadow-gray-700 rounded-l
`;

const ScreenContainer = tw.div`
p-4 text-white text-xl
`;
const ButtonContainer = tw.div`
grid grid-rows-5 grid-flow-col place-items-center gap-2 p-2 py-4
`;

const Button = tw.button`
btn-outline btn btn-lg rounded-full bg-gray-900 text-white
`;
