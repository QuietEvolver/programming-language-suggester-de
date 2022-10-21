// BI
/* Given langs: a, b, c:
  Q1 - a
  Q2 - b
  Q3 - c
  Q4 - if (a & b) || (a & c) = a
  Q5 - if (a & b) || (b & c) = b
  Q6 - if (a || b) && (c) = c
*/

// UI

function languageSelector(e){
  e.preventDefault();
  let totalValue;
  let output;

  // const questionValue = parseInt(document.querySelector("input[name='question']:checked").value); 
  const questionOne = parseInt(document.querySelector("input[name='question-one']:checked").value); 
  // const questionTwo = parseInt(document.querySelector("input[name='question-two']:checked").value);
  // const questionOne = parseInt(document.querySelector("question#question-one").value);
  // const questionTwo = parseInt(document.querySelector("input#question-Two").value);
  // const questionThree = parseInt(document.querySelector("input#question-three").value);
  // const questionFour = parseInt(document.querySelector("input#question-four").value);
  // const questionFive = parseInt(document.querySelector("input#question-five").value);
  // const questionSix = parseInt(document.querySelector("input#question-six").value);

  document.getElementById("language-1").setAttribute("class", "hidden");
  document.getElementById("language-2").setAttribute("class", "hidden");
  document.getElementById("language-3").setAttribute("class", "hidden");

  /* Given langs: a, b, c:
    Q1 - a 
    Q2 - b
    Q3 - c
    Q4 - if (a & b) || (a & c) = a
    Q5 - if (a & b) || (b & c) = b
    Q6 - if (a || b) && (c) = c
  */
  
  // question totals evaluations
  // if( questionOne ){
  //   console.log("total Q1 if/else value: ", totalValue;

  //   return totalValue;
  // } 
    totalValue = questionOne; // + questionTwo;
    console.log("total Q1 if/else value: ", totalValue) ;

  // TO BE MOVED OUTSIDE:
   // language totals calculations
   if( totalValue < 6 ){ 
    console.log("eval tot", totalValue);   
    output = document.getElementById("language-1").removeAttribute("class"); 
    return totalValue;
    // output.removeAttribute("class"); 
   } 
  //  else if ( totalValue === 6 ){
  //   console.log("eval tot 6", totalValue);    
  //   document.getElementById("language-2").removeAttribute("class");
  //  }

    document.getElementById("output").innerText = output;
}
// Time permitting, to be added: handleSubmission(languageSelector)
window.addEventListener("load", function() {
  const form = document.getElementById("form-submit");
  form.addEventListener("submit", languageSelector);
});