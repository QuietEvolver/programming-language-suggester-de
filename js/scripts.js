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

  // const questionValue = parseInt(document.querySelector("input[name='question']:checked").value); 
  const questionOne = parseInt(document.querySelector("input[name='question']:checked").value); 
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

  if( questionOne ){
    totalValue = questionOne;
    console.log("total value: a", totalValue)
    return totalValue;
  }
}
// Time permitting, to be added: handleSubmission(languageSelector)
window.addEventListener("load", function() {
  const form = document.getElementById("form-submit");
  form.addEventListener("submit", languageSelector);
});