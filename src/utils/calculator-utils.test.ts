import {
  calculate,
  currentOperator,
  historyScreenVal,
  result,
} from "./calculator-utils"
import * as C from "./calculator-utils"

describe("testing calculate function", () => {
  test("if histtory screen is empty", () => {
    const mockModule:typeof import("./calculator-utils") = require("./calculator-utils") 
    mockModule.historyScreenVal = ["2","+"]
    calculate()
    expect(result).toBe("2")
    expect(currentOperator).toBe("+")
  })
})
