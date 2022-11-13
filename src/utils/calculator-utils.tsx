
export let mainScreenVal:string="0"
export let historyScreenVal:string[]=[]

// funtion which checks the input type
interface Iintputypt {
    (inpuy:string):"isOperator"|"isNumber"|"isEqual"|"isDot"|"isClear"|"isDelete"
}
export const inputType:Iintputypt=(input)=>{
  if (["1","2","3","4","5","6","7","8","9","0"].includes(input)) {
    return "isNumber"
  }
  else if (["+","-","*","/","%"].includes(input)) {
    return "isOperator"
  }
  else if (input==="=") {
    return "isEqual"
  }
  else if (input===".") {
    return "isDot"
  }
  else if (input==="C") {
    return "isClear"
  }
  else{
    return "isDelete"
  }
}

interface IappendNumber {
    (input:string):[string,string[]]
}

export const appendNumber:IappendNumber=(input)=>{
    if (mainScreenVal==="0") {
       mainScreenVal=input  
       return [mainScreenVal,historyScreenVal]      
    }
    else {
       mainScreenVal+=input
       return [mainScreenVal,historyScreenVal] 
    }
}