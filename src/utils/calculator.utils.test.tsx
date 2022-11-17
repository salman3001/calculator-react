// import { getValue } from "@testing-library/user-event/dist/utils";
// import {
//   inputType,
//   appendNumber,
//   mainScreenVal,
//   calculate,
//   result,
//   isResultDisplayed,
//   addOperator,
// } from "./calculator-utils";




// describe("inputtype function test", () => {
//   test("if passed operator", () => {
  
//     expect(inputType("+")).toBe("isOperator");
//     expect(inputType("C")).toBe("isClear");
//     expect(inputType("4")).toBe("isNumber");
//     expect(inputType("=")).toBe("isEqual");
//     expect(inputType(".")).toBe("isDot");
//     expect(inputType("del")).toBe("isDelete");
//   });
// });



// describe("appendnumber function test", () => {
//   test("if mainscreen is 0, it should replace 0", () => {
    
//     let input = "1";
//     expect(appendNumber(input)).toBe("1");
//   });
// });


// describe("testing append number concat feature", () => {
//   test("if mainscreen already have first number, it should concat with it", () => {
//     jest.spyOn().mockReturnValue("0")
//     appendNumber("2");
//     let newval = appendNumber("2");
//     expect(newval).toBe("22");
//   });
// });

// // describe("testing calculate function", () => {
// //   it("it should not calculate if history screen is empty,result expected 0", () => {
// //     calculate("addOperator");
// //     expect(result).toBe("0");
// //     expect(isResultDisplayed).toBe(false);
// //   });
// //   it("is should calculate corectly if there already value in history screeen,", () => {
// //     appendNumber("2");
// //     addOperator("+");
// //     appendNumber("2");
// //     calculate("addOperator");
// //     expect(result).toBe("4");
// //   });
// // });
