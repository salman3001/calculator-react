class CalculatorClass {
  result: number
  historyScreen: string[]
  mainScreen: string
  isResultDisplayed: boolean
  constructor() {
    this.result = 0
    this.historyScreen = []
    this.mainScreen = "0"
    this.isResultDisplayed = true
  }

  setHistoryScreen(input: string) {
    this.historyScreen.push(input)
  }

  setMainScreen(input: string) {
    if (this.isResultDisplayed) {
      this.mainScreen = input
    } else {
      this.mainScreen = this.mainScreen += input
    }
  }

  calculate = () => {
    let currentOperator: undefined | string = undefined

    for (let i = 0; i < this.historyScreen.length; i++) {
      if (i <= 1) {
        if (["+", "-", "*", "/"].includes(this.historyScreen[i])) {
          currentOperator = this.historyScreen[i]
          this.isResultDisplayed = true
        } else {
          this.result = Number(this.historyScreen[i])
          this.isResultDisplayed = true
        }
      } else {
        if (["+", "-", "*", "/"].includes(this.historyScreen[i])) {
          currentOperator = this.historyScreen[i]
          this.isResultDisplayed = true
        } else {
          switch (currentOperator) {
            case "+":
              this.result += Number(this.historyScreen[i])
              this.isResultDisplayed = true
              break
            case "-":
              this.result -= Number(this.historyScreen[i])
              this.isResultDisplayed = true
              break
            case "*":
              this.result *= Number(this.historyScreen[i])
              this.isResultDisplayed = true
              break
            case "/":
              this.result /= Number(this.historyScreen[i])
              this.isResultDisplayed = true
              break

            default:
              break
          }
        }
      }
    }
  }
  appendNumber(input: string) {
    if (input==="0" && this.mainScreen==="0") {
      this.mainScreen="0"
    }else{
      this.setMainScreen(input)
      this.isResultDisplayed = false
    }

  }
  addOperator(input: string) {
    this.setHistoryScreen(this.mainScreen)
    this.setHistoryScreen(input)
    this.calculate()
    this.mainScreen = this.result.toFixed(2).toString().replace(".00", "")
  }
  addDot(input: string) {
    if (!this.mainScreen.includes(".") || this.isResultDisplayed) {
      this.setMainScreen(input)
      this.isResultDisplayed = false
    } else return
  }
  clear() {
    this.mainScreen = "0"
    this.historyScreen = []
    this.result = 0
    this.isResultDisplayed = true
  }
  equal() {
    this.historyScreen.push(this.mainScreen)
    this.calculate()
    this.historyScreen = []
    this.mainScreen = this.result.toFixed(2).toString().replace(".00", "")
    this.isResultDisplayed = true
  }
  delete() {
    if (this.mainScreen.length!==1) {
      this.mainScreen = this.mainScreen.slice(undefined,this.mainScreen.length-1)
      this.isResultDisplayed = false
    }
    else{
      this.mainScreen="0"
      this.isResultDisplayed=false
    }

  }
  precent() {
    if (this.historyScreen.length === 2) {
      let lastOperator = this.historyScreen[1]
      switch (lastOperator) {
        case "+":
          this.result =
            Number(this.historyScreen[0]) +
            (Number(this.historyScreen[0]) / 100) * Number(this.mainScreen)
          this.mainScreen = this.result.toFixed(2).toString().replace(".00", "")
          this.historyScreen = []
          this.isResultDisplayed = true
          break
        case "-":
          this.result =
            Number(this.historyScreen[0]) -
            (Number(this.historyScreen[0]) / 100) * Number(this.mainScreen)
          this.mainScreen = this.result.toFixed(2).toString().replace(".00", "")
          this.historyScreen = []
          this.isResultDisplayed = true
          break
        case "*":
          this.result =
            (Number(this.historyScreen[0]) / 100) * Number(this.mainScreen)
          this.mainScreen = this.result.toFixed(2).toString().replace(".00", "")
          this.historyScreen = []
          this.isResultDisplayed = true
          break
        case "/":
          this.result =
            (Number(this.historyScreen[0]) /
             Number(this.mainScreen)) * 100
          this.mainScreen = this.result.toFixed(2).toString().replace(".00", "")
          this.historyScreen = []
          this.isResultDisplayed = true
          break

        default:
          break
      }
    } else {
      this.historyScreen = []
      this.mainScreen = "0"
      this.result = 0
      this.isResultDisplayed = true
    }
  }
}

const calculator = new CalculatorClass()

export default calculator
