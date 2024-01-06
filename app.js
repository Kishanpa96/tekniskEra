let string="3+5/2*911+22-88/99-(55+11)/12*59/55/66+55*(12*14-(55/66+(8/2-3)+(7+8-9)))/(-22+11*6/2/2*4+5)"

var newArray = [];
function strToArray() {

  let finalstr = string;
  console.log(finalstr);

  let text = Array.from(finalstr);
  console.log(text);

  let currentNumber = '';

  for (let i = 0; i < text.length; i++) {

    if (text[i] >= '0' && text[i] <= '9') {
      currentNumber += text[i];
    } else {
      newArray.push(Number(currentNumber));
      newArray.push(text[i]);
      currentNumber = '';
    }
  }
  newArray.push(Number(currentNumber));
  console.log(newArray);
  
  preBrack(newArray)
  console.log(newArray);
  
  
  console.log(newArray);
  devis(newArray);
  multiple(newArray);
  let final=addSub(newArray);
  console.log(final);
  
  return final;
  
}
strToArray()




function bracket(newsArray){
   var end=[]
   let smin=[]
  for(let i in newsArray){
    if(newsArray[i]=='('){
     var start = parseInt(i);;
      
    }
    if(newsArray[i]==')'){
       end.push(parseInt(i));
    }
  }
  let maxm=Math.max(parseInt(start))
  let eleme=end.length;

  console.log(end[0]);
  for(let i=0; i<eleme; i++){
  if(end[i]>maxm){
        smin.push(end[i])
  }
}

console.log(smin)
  let minn=Math.min(parseInt(smin))
  console.log(minn);
  let subarray = newsArray.slice(maxm, minn);
  
  let result = subarray.filter(x => x !== '(' && x !== ')'); 
  console.log(result);
  console.log(newsArray)
  devis(result)
  multiple(result)
  let val2=addSub(result)
  newsArray[maxm-1]=val2;
  newsArray.splice(maxm, minn-maxm+2);
  console.log(val2)
 
  return newsArray;
  }
  
  function preBrack(newar){
    let b=0;
    let arrlen = newar.length;
    for (let i=0; i<arrlen; i++) {
      if(newar[i]=="("){
            b+=1;
            console.log(b);
        bracket(newar);
         i--;
      }
    }
    
    return newar;
  }
  
  function devis(equations) {
  
    let b = 0;
    let index = equations.length;
    for (let i = 0; i < index; i++) {
      if (equations[i] == "/") {
  
        b = parseFloat(equations[parseInt(i) - 1]) / parseFloat(equations[parseInt(i) + 1]);
        equations[i - 1] = b;
        equations.splice(i, 2);
  
        i = i - 2;
  
        
      }
    }
    return equations;
  }
  
  
  function multiple(equations) {
    let b = 0;
    let index = equations.length;
    for (let i = index; i >= 0; i--) {
      if (equations[i] == "*") {
  
        b = parseFloat(equations[parseInt(i) - 1]) * parseFloat(equations[parseInt(i) + 1]);
  
        equations[i - 1] = b;
        equations.splice(i, 2);
        
        
      }
    }return equations;
  }
  
  
  function addSub(equations) {
    let myNums = equations;
    let sum = 0;
  
    for (let i = 0; i < myNums.length; i++) {
      
      sum += myNums[i];
    }
    function solve(str) {
      return new Function('return ' + str)();
    }
    var finalResult = solve(sum);
    return finalResult;
    
  }