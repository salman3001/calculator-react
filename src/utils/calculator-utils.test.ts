
import calculator from "./calculator-utils";
const moduleReset = ()=>{
  calculator.historyScreen=[]
  calculator.mainScreen="0"
  calculator.result=0
  calculator.isResultDisplayed=true
}


describe("testing setHistoryScreen funtion", () => {
  beforeEach(() => {
  moduleReset()
  })
  it("should set the history screen value to 2", () => {
    calculator.setHistoryScreen("2")
    expect(calculator.historyScreen).toEqual(["2"])

  })
})

describe("testing setMainScreen Function",()=>{
  beforeEach(()=>{
    moduleReset()
  })

  test("if isResultDisplayed is true, it should clear the screen and append number",()=>{
    calculator.mainScreen="3452"
    calculator.isResultDisplayed=true
    calculator.setMainScreen("6")
    expect(calculator.mainScreen).toBe("6")
  })

  test("if isResultDisplayed is false, it should concat with mainscreen value",()=>{
    calculator.mainScreen="46"
    calculator.isResultDisplayed=false
    console.log(calculator.isResultDisplayed);
    
    calculator.setMainScreen("9")
    expect(calculator.mainScreen).toBe("469")
  })
})

describe("test calculate funtion",()=>{
  beforeEach(()=>{
    moduleReset()
  })

  test("if history screen have nothing the result should be zero",()=>{
    calculator.calculate()
    expect(calculator.result).toBe(0)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("if history screen have one value, the result should be equal to first value",()=>{
    calculator.historyScreen=["5"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(5)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("plus test 1",()=>{
    calculator.historyScreen=["5","+","22"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(27)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("plus test 2, multiple values",()=>{
    calculator.historyScreen=["5","+","22","+","105","+"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(132)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("minus test 1",()=>{
    calculator.historyScreen=["88","-","4"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(84)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("minus test 2, multiple values",()=>{
    calculator.historyScreen=["500","-","20","-","30","+"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(450)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("multiply test 1",()=>{
    calculator.historyScreen=["5","*","2"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(10)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("multiply test 2, multiple values",()=>{
    calculator.historyScreen=["5","*","2","*","3","*"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(30)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("divide test 1",()=>{
    calculator.historyScreen=["16","/","2"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(8)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("devide test 2, multiple values",()=>{
    calculator.historyScreen=["32","/","2","/","2","/"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(8)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("mixed operator test 1",()=>{
    calculator.historyScreen=["5","+","20","-","10","+"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(15)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("mixed operator test 2",()=>{
    calculator.historyScreen=["5","+","20","-","10","*","10"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(150)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
  test("mixed operator test 2",()=>{
    calculator.historyScreen=["5","+","20","-","10","*","10","/","5"]
    calculator.isResultDisplayed=false
    calculator.calculate()
    expect(calculator.result).toBe(30)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
})

describe("testing appendNUmber funtion",()=>{
 beforeEach(()=>{
  moduleReset()
 })
 it("should append 6 to mainscreen",()=>{
   calculator.appendNumber("6")
   expect(calculator.mainScreen).toBe("6")
   expect(calculator.isResultDisplayed).not.toBeTruthy()
 })
})

describe("testing addOperator funtion",()=>{
  beforeEach(()=>{
    moduleReset()
  })
  it("should add 4 and + operator to history screen and update result and mainscreen",()=>{
    calculator.mainScreen="4"
    calculator.addOperator("+")
    expect(calculator.historyScreen).toEqual(["4","+"])
    expect(calculator.mainScreen).toBe("4")
  })
  it("should push 60 and - operator to history screen and update result and mainscreen",()=>{
    calculator.historyScreen=["10","+"]
    calculator.mainScreen="60"
    calculator.addOperator("-")
    expect(calculator.historyScreen).toEqual(["10","+","60","-"])
    expect(calculator.mainScreen).toBe("70")
  })

})

describe("testing addDot funtion", ()=>{
  beforeEach(()=>{
    moduleReset()
  })
  test("if result displayed is true",()=>{
    calculator.mainScreen="45"
    calculator.isResultDisplayed=true
    calculator.addDot(".")
    expect(calculator.mainScreen).toBe(".")
  })
  test("if result displayed is false, it should concat .",()=>{
    calculator.mainScreen="45"
    calculator.isResultDisplayed=false
    calculator.addDot(".")
    expect(calculator.mainScreen).toBe("45.")
  })
  test("if result displayed is false, and there is already dot added,  it should not add one more dot",()=>{
    calculator.mainScreen="4.5"
    calculator.isResultDisplayed=false
    calculator.addDot(".")
    expect(calculator.mainScreen).toBe("4.5")
  })
})

describe("testing clear()",()=>{
  beforeEach(()=>{
    moduleReset()
  })
  it("should reset everything",()=>{
    calculator.mainScreen="4545"
    calculator.historyScreen=["23","+","22323"]
    calculator.result=589
    calculator.isResultDisplayed=false
    calculator.clear()
    expect(calculator.mainScreen).toBe("0")
    expect(calculator.historyScreen).toEqual([])
    expect(calculator.result).toBe(0)
    expect(calculator.isResultDisplayed).toBeTruthy()
  })
})

describe('testing equal()',()=>{
  beforeEach(()=>{
  moduleReset()
  })
 test('it should clear history screen and display result on main screen and set isresultdisplayed to true',()=>{
  calculator.mainScreen="44"
  calculator.historyScreen=["23","+","23","-"]
  calculator.isResultDisplayed=false
  calculator.equal()
  expect(calculator.mainScreen).toBe("2")
  expect(calculator.historyScreen).toEqual([])
  expect( calculator.isResultDisplayed).toBeTruthy()
 })
})


