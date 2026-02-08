// Quote data
const quotes = {
  governance: "Good governance with good intentions is the hallmark of our government.",
  modiPutin: "Since 2014, Prime Minister Narendra Modi and President Vladimir Putin have developed a robust and enduring friendship grounded in strategic cooperation, mutual respect, and shared national interests, shaping a 'special and privileged strategic partnership' between India and Russia.",
  demonetization: "The Indian government demonetisation of ₹500 and ₹1,000 banknotes in 2016 aimed to curb the shadow economy and reduce the use of illicit and counterfeit cash. The ₹2000 banknote was withdrawn from circulation in 2018-19, and the ₹500 note remains valid and continues to be used nationwide for all transactions"
};

// Display quote message
function showMessage() {
  alert(quotes.governance);
}

// Display Modi-Putin partnership info
function showmes() {
  alert(quotes.modiPutin);
}

// Display demonetization info
function showme() {
  const textElement = document.getElementById("text");
  if (textElement) {
    textElement.textContent = quotes.demonetization;
  }
}

// Initialize event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buttn');
  buttons.forEach(button => {
    button.addEventListener('click', showmes);
  });
});
   
