export let mainScreenVal: string = "0"
export let historyScreenVal: string[] = []
export let result = 0
export let currentOperator: undefined | string = undefined
export let isResultDisplayed = false

// funtion which checks the input type
interface IinputType {
  (input: string):
    | "isOperator"
    | "isNumber"
    | "isEqual"
    | "isDot"
    | "isClear"
    | "isDelete"
}
export const inputType: IinputType = (input) => {
  if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(input)) {
    return "isNumber"
  } else if (["+", "-", "*", "/", "%"].includes(input)) {
    return "isOperator"
  } else if (input === "=") {
    return "isEqual"
  } else if (input === ".") {
    return "isDot"
  } else if (input === "C") {
    return "isClear"
  } else {
    return "isDelete"
  }
}

// function for appwnding numbers on main screen

interface IappendNumber {
  (input: string): string
}

export const appendNumber: IappendNumber = (input) => {
  if (mainScreenVal === "0") {
    mainScreenVal = input
    return mainScreenVal
  } else {
    mainScreenVal += input
    return mainScreenVal
  }
}

//function for adding operator

interface IaddOperator {
  (input: string): [string, string[]]
}

export const addOperator: IaddOperator = (operator) => {
  if (!(mainScreenVal === "0")) {
    historyScreenVal.push(mainScreenVal)
    historyScreenVal.push(operator)
    // calculate("addOperator");
    mainScreenVal = result.toString()
    isResultDisplayed = true
    return [mainScreenVal, historyScreenVal]
  } else {
    return [mainScreenVal, historyScreenVal]
  }
}

// funtion to calculate the results
export const calculate = () => {
  for (let i = 0; i < historyScreenVal.length; i++) {
    if (i <= 1) {
      if (["+", "-", "*", "/", "%"].includes(historyScreenVal[i])) {
        currentOperator = historyScreenVal[i]
      } else {
        result = Number(historyScreenVal[i])
      }
    } else {
      if (["+", "-", "*", "/", "%"].includes(historyScreenVal[i])) {
        currentOperator = historyScreenVal[i]
      } else {
        switch (currentOperator) {
          case "+":
            result += Number(historyScreenVal[i])
            break
          case "-":
            result -= Number(historyScreenVal[i])
            break
          case "*":
            result *= Number(historyScreenVal[i])
            break
          case "/":
            result /= Number(historyScreenVal[i])
            break

          default:
            break
        }
      }
    }
  }
}
