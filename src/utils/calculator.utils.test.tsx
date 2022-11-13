jest.mock("./calculator-utils")
import { inputType, appendNumber, mainScreenVal } from "./calculator-utils";


describe("inputtype function test", () => {
  test("if passed operator", () => {
    expect(inputType("+")).toBe("isOperator");
    expect(inputType("C")).toBe("isClear");
    expect(inputType("4")).toBe("isNumber");
    expect(inputType("=")).toBe("isEqual");
    expect(inputType(".")).toBe("isDot");
    expect(inputType("del")).toBe("isDelete");
  });
});

describe("append number function test", () => {
  
  test("if mainscreen is 0", () => {
    
    let input = "2";
    if (mainScreenVal === "0") {
      expect(appendNumber(input)).toBe("2");
    } else {
      expect(appendNumber(input)).toEqual(mainScreenVal + "2");
    }
  });
});

describe("testing calculate function",()=>{
  test('if called by operator at start',()=>{

  })
})