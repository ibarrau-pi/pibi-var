const questions = [
  {
    question: "VAR01",
    gif: "./resources/01- roja.mp4",
    correct_answer: "Red card",
    possible_answers: {
      button1: "No foul",
      button2: "Foul",
      button3: "Yellow card",
      button4: "Red card",
    },
  },
  {
    question: "VAR02",
    gif: "./resources/02- no cobro.mp4",
    correct_answer: "Not intentional",
    possible_answers: {
      button1: "Penalty",
      button2: "Not intentional",
    },
  },
  {
    question: "VAR03",
    gif: "./resources/03- si cobro.mp4",
    correct_answer: "Penalty",
    possible_answers: { button1: "Penalty", button2: "No intention" },
  },
  {
    question: "VAR04",
    gif: "./resources/04- si cobro.mp4",
    correct_answer: "Penalty",
    possible_answers: { button1: "Penalty", button2: "Play on" },
  },
  { 
    question: "VAR05", 
    gif: "./resources/05- si cobro penal.mp4", 
    correct_answer: "Penalty",
    possible_answers: { button1: "No foul", button2: "Penalty", button3: "Free kick" } 
  },
  { 
    question: "VAR06", 
    gif: "./resources/06- si cobro penal.mp4", 
    correct_answer: "Penalty",
    possible_answers: { button1: "He doesn't touch him", button2: "Penalty" } 
  },
  { 
    question: "VAR07", 
    gif: "./resources/07- gol.mp4", 
    correct_answer: "Goal",
    possible_answers: { button1: "It doesn't go in!", button2: "Goal" } 
  },
  { 
    question: "VAR08", 
    gif: "./resources/08- falta en ataque.mp4", 
    correct_answer: "Attacking foul",
    possible_answers: { button1: "Yellow card", button2: "Red card", button3: "Nothing happened", button4: "Attacking foul"} 
  },
  { 
    question: "VAR09", 
    gif: "./resources/09- no penal.mp4", 
    correct_answer: "Play on",
    possible_answers: { button1: "Play on", button2: "Penalty" } 
  },
  { 
    question: "VAR10", 
    gif: "./resources/10- no penal.mp4", 
    correct_answer: "No foul",
    possible_answers: { button1: "No foul", button2: "Penalty" } 
  },
  { 
    question: "VAR11", 
    gif: "./resources/11- penal.mp4", 
    correct_answer: "Penalty",
    possible_answers: { button1: "Penalty", button2: "He doesn't push him" } 
  },
  { 
    question: "VAR12", 
    gif: "./resources/12- offside.mp4", 
    correct_answer: "Offside",
    possible_answers: { button1: "Offside", button2: "He doesn't touch it" } 
  },
  { 
    question: "VAR13", 
    gif: "./resources/13- no offside.mp4", 
    correct_answer: "He doesn't touch it",
    possible_answers: { button1: "Offside, there is intention", button2: "He doesn't touch it" } 
  },
  { 
    question: "VAR14", 
    gif: "./resources/14- amarilla.mp4", 
    correct_answer: "Yellow card",
    possible_answers: { button1: "Hmm... there is no contact", button2: "Foul" , button3: "Yellow card", button4: "Red card" } 
  },
  { 
    question: "VAR15", 
    gif: "./resources/15- roja.mp4", 
    correct_answer: "Red card",
    possible_answers: { button1: "Yellow card", button2: "Red card", button3: "Foul" } 
  },
  { 
    question: "VAR16", 
    gif: "./resources/16- no penal.mp4", 
    correct_answer: "No foul",
    possible_answers: { button1: "No foul", button2: "Penalty" } 
  },
  { 
    question: "VAR17", 
    gif: "./resources/17- tiro libre.mp4", 
    correct_answer: "Free kick",
    possible_answers: { button1: "No foul", button2: "Penalty", button3: "Free kick" } 
  },
  { 
    question: "VAR18", 
    gif: "./resources/18- rojo pisa.mp4", 
    correct_answer: "The red player steps on him",
    possible_answers: { button1: "The red player steps on him", button2: "The light blue player steps on him" } 
  },
  { 
    question: "VAR19", 
    gif: "./resources/19- rojo.mp4", 
    correct_answer: "Red card",
    possible_answers: { button1: "He doesn't touch him", button2: "Foul", button3: "Yellow card", button4: "Red card" } 
  },
  { 
    question: "VAR20", 
    gif: "./resources/20- pecho.mp4", 
    correct_answer: "He controls it with his chest",
    possible_answers: { button1: "He is inside the box", button2: "Handball outside the box", button3: "He controls it with his chest" } 
  },
];