function Ask() {
  ask_question();
  reveal_fortune();
}

function ask_question() {
  // empty for now
}

function get_fortunes() {
  return [
    "nuh uh",
    "idk purple",
    "yea",
    "probably",
    "maybe",
    "is grass green?",
    "no",
    "yes",
    "is the sky brown ahh question 🥀🙏"
  ];
}

function reveal_fortune() {
  const fortunes = get_fortunes();
  const fortune = select_fortune(fortunes);
  document.getElementById("fortune").textContent = fortune;
}

function select_fortune(fortunes) {
    const i = Math.floor(Math.random() * fortunes.length);
    return fortunes[i];
}