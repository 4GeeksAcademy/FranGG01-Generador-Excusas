
window.onload = function() {
  function generarExcusa() {
    const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    const action = ['ate', 'peed', 'crushed', 'broke'];
    const what = ['my homework', 'my phone', 'the car'];
    const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    const whoRandom = who[Math.floor(Math.random() * who.length)];
    const actionRandom = action[Math.floor(Math.random() * action.length)];
    const whatRandom = what[Math.floor(Math.random() * what.length)];
    const whenRandom = when[Math.floor(Math.random() * when.length)];

    return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}.`;
  }

  const excusa = generarExcusa();
  document.getElementById("excuse").textContent = excusa;
};