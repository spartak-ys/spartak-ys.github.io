// Մտքերի ցուցակը
const quotes = [
  "9:00 գնալ դպրոց մինչև 2:20",
    "2:20 անել տնայիները մինչև 3:00",
  "3:00 զբաղվել քո սիրած հոբիով մինչև 5։00",
  "5:00 սովորել նոր բան մինչև 7:00",
  "7:00 նայել հեռուստացույց մինչև 9:00",
  "9:00 գնալ քնելու մինչև 7:00",
];

let index = 0; // Մտքի ինդեքսը

function showNextQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[index];

  index++;
  if (index >= quotes.length) {
    index = 0; // Եթե հասանք վերջ, նորից սկսում է
  }
}