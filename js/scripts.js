// BI

// UI

function languageSelector(e){
  e.preventDefault();

  const questionOne = parseInt(document.querySelector("input[name='question-one']:checked").value); 
  const questionTwo = parseInt(document.querySelector("input[name='question-two']:checked").value);
  const questionThree = parseInt(document.querySelector("input[name='question-three']:checked").value);
  const questionFour = parseInt(document.querySelector("input[name='question-four']:checked").value);
  const questionFive = parseInt(document.querySelector("input[name='question-five']:checked").value);
  const questionSix = parseInt(document.querySelector("input[name='question-six']:checked").value);
  const totalValue = questionOne + questionTwo + questionThree + questionFour + questionFive;

  document.getElementById("language-1").setAttribute("class", "hidden");
  document.getElementById("language-2").setAttribute("class", "hidden");
  document.getElementById("language-3").setAttribute("class", "hidden");

  // TO BE MOVED OUTSIDE:
   // language totals calculations
   if( totalValue <= 6 ){ 
    document.getElementById("language-1").removeAttribute("class"); 
    return totalValue; 
   } 
   else if (( totalValue > 6 ) && ( totalValue <= 12)){
    document.getElementById("language-2").removeAttribute("class");
    return totalValue;
   } else if ( ( totalValue > 12 ) || ( totalValue <= 18 )) {
    document.getElementById("language-3").removeAttribute("class");
    return totalValue;
   }

  document.getElementById("output").innerText = output;
}

// Time permitting, to be added: handleSubmission(languageSelector)
window.addEventListener("load", function() {
  const form = document.getElementById("form-submit");
  form.addEventListener("submit", languageSelector);
});