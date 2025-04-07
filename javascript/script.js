let pairs = {};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
  const names = document.getElementById("namesInput").value
    .split("\n")
    .map(n => n.trim())
    .filter(n => n !== "");

  if (names.length < 2) {
    alert("Գրիր առնվազն երկու անուն։");
    return;
  }

  const shuffled = shuffle([...names]);
  for (let i = 0; i < names.length; i++) {
    pairs[names[i]] = shuffled[i];
    if (names[i] === pairs[names[i]]) {
      // Avoid giving gift to yourself
      return startGame(); // restart
    }
  }

  // Populate name selector
  const select = document.getElementById("nameSelect");
  select.innerHTML = "";
  names.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("playerSelect").classList.remove("hidden");
}

function revealPair() {
  const selectedName = document.getElementById("nameSelect").value;
  const receiver = pairs[selectedName];
  document.getElementById("receiverName").textContent = receiver;

  document.getElementById("playerSelect").classList.add("hidden");
  document.getElementById("resultBox").classList.remove("hidden");
}

function resetView() {
  document.getElementById("receiverName").textContent = "";
  document.getElementById("resultBox").classList.add("hidden");
  document.getElementById("playerSelect").classList.remove("hidden");
}