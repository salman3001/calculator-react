import * as x from "./test";
// jest.mock("./test", () => {
//     return {
//         ...jest.requireActual("./test"),
//         get num(){return 0 },

//     }
// });


describe("test", () => {
  test("with default num value should return 4", () => {
    const spy = jest.spyOn(x,"num","get")
    spy.mockReturnValue(2)
    expect(x.addNum(2)).toBe(4);
  });
});
