import { inputType,appendNumber } from "./calculator-utils";

describe("inputtype function test",()=>{
    test("if passed operator",()=>{
      expect(inputType("+")).toBe("isOperator")  
      expect(inputType("C")).toBe("isClear")  
      expect(inputType("4")).toBe("isNumber")  
      expect(inputType("=")).toBe("isEqual")  
      expect(inputType(".")).toBe("isDot")  
      expect(inputType("del")).toBe("isDelete")  
    })
})

describe("append number function test",()=>{
test("if mainscreen is 0",()=>{
expect(appendNumber("2")).toEqual(["2",[]])
})
test("if mainscreen is not zero",()=>{
  expect(appendNumber("2")).toEqual(["2",[]])
})
})