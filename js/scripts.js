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

const questionOne = parseInt(document.getElementById("question-one").value);
const questionTwo = parseInt(document.getElementById("question-Two").value);
const questionThree = parseInt(document.getElementById("question-three").value);
const questionFour = parseInt(document.getElementById("question-four").value);
const questionFive = parseInt(document.getElementById("question-five").value);