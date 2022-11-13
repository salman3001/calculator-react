export let mainScreenVal: string = "0";
export let historyScreenVal: string[] = [];
export let result = "0";
export let isResultDisplayed = false;

// funtion which checks the input type
interface Iintputypt {
  (inpuy: string):
    | "isOperator"
    | "isNumber"
    | "isEqual"
    | "isDot"
    | "isClear"
    | "isDelete";
}
export const inputType: Iintputypt = (input) => {
  if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(input)) {
    return "isNumber";
  } else if (["+", "-", "*", "/", "%"].includes(input)) {
    return "isOperator";
  } else if (input === "=") {
    return "isEqual";
  } else if (input === ".") {
    return "isDot";
  } else if (input === "C") {
    return "isClear";
  } else {
    return "isDelete";
  }
};

interface IappendNumber {
  (input: string): string;
}

export const appendNumber: IappendNumber = (input) => {
  if (mainScreenVal === "0" || isResultDisplayed === true) {
    mainScreenVal = input;
    return mainScreenVal;
  } else {
    mainScreenVal += input;
    return mainScreenVal;
  }
};

interface IaddOperator {
  (input: string): [string, string[]];
}

export const addOperator: IaddOperator = (operator) => {
  if (!(mainScreenVal === "0")) {
    historyScreenVal.push(mainScreenVal);
    historyScreenVal.push(operator);
    calculate("addOperator");
    mainScreenVal = result;
    isResultDisplayed = true;
    return [mainScreenVal, historyScreenVal];
  }else{
    return [mainScreenVal, historyScreenVal];
  }
};

interface Icalculate {
  (caller: "addOperator" | "equal"): void;
}

const calculate: Icalculate = (caller) => {
  if (caller === "addOperator") {
    if (historyScreenVal.length <= 2) {
      result = historyScreenVal[historyScreenVal.length - 2];
    }else{
        let operator=historyScreenVal[historyScreenVal.length-1]
        switch (operator) {
            case "+":
                let newResult = parseInt(result) +parseInt(historyScreenVal[historyScreenVal.length-2]) 
                result =newResult.toString()
                return 
                break;
        
            default:
                break;
        }
    }
  } else {
    let operator = historyScreenVal[historyScreenVal.length - 2];
  }
};
