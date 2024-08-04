
function detectChar(){
 
 const inputText=document.getElementById('inputvalue').value;
 if(inputText){

  const unicodeValue=inputText.charCodeAt(0);
  const result =`The Unicode value of "${inputText}" is ${unicodeValue}`;
  document.getElementById('output').textContent=result;
console.log(result);

 }
 else{
  document.getElementById('output').textContent='Please Enter a Character';

  
 }



};
