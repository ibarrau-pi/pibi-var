// Edit this file to change the game without touching logic.
// Edit this file to change the game without touching logic.
const questions = [
  {
    question: "VAR01",
    gif: "./resources/01- roja.gif",
    correct_answer: "Roja",
    possible_answers: {
      button1: "No es falta",
      button2: "Falta",
      button3: "Amarilla",
      button4: "Roja",
    },
  },
  {
    question: "VAR02",
    gif: "./resources/02- no cobro.gif",
    correct_answer: "No es intencional",
    possible_answers: {
      button1: "Penal",
      button2: "No es intencional",
    },
  },
  {
    question: "VAR03",
    gif: "./resources/03- si cobro.gif",
    correct_answer: "Penal",
    possible_answers: { button1: "Penal", button2: "No hay intención" },
  },
  {
    question: "VAR04",
    gif: "./resources/04- si cobro.gif",
    correct_answer: "Penal",
    possible_answers: { button1: "Penal", button2: "Siga nomás" },
  },
  { 
    question: "VAR05", 
    gif: "./resources/05- si cobro penal.gif", 
    correct_answer: "Penal",
    possible_answers: { button1: "No es falta", button2: "Penal", button3: "Tiro libre" } 
  },
  { 
    question: "VAR06", 
    gif: "./resources/06- si cobro penal.gif", 
    correct_answer: "Penal",
    possible_answers: { button1: "Ni lo toca", button2: "Penal" } 
  },
  { 
    question: "VAR07", 
    gif: "./resources/07- gol.gif", 
    correct_answer: "Gol",
    possible_answers: { button1: "No entra!", button2: "Gol" } 
  },
  { 
    question: "VAR08", 
    gif: "./resources/08- falta en ataque.gif", 
    correct_answer: "Falta en ataque",
    possible_answers: { button1: "Amarilla", button2: "Roja", button3: "No pasó nada", button4: "Falta en ataque"} 
  },
  { 
    question: "VAR09", 
    gif: "./resources/09- no penal.gif", 
    correct_answer: "Siga",
    possible_answers: { button1: "Siga", button2: "Penal" } 
  },
  { 
    question: "VAR10", 
    gif: "./resources/10- no penal.gif", 
    correct_answer: "No es falta",
    possible_answers: { button1: "No es falta", button2: "Penal" } 
  },
  { 
    question: "VAR11", 
    gif: "./resources/11- penal.gif", 
    correct_answer: "Penal",
    possible_answers: { button1: "Penal", button2: "No lo empuja" } 
  },
  { 
    question: "VAR12", 
    gif: "./resources/12- offside.gif", 
    correct_answer: "Offside",
    possible_answers: { button1: "Offside", button2: "No la toca" } 
  },
  { 
    question: "VAR13", 
    gif: "./resources/13- no offside.gif", 
    correct_answer: "Ni la toca",
    possible_answers: { button1: "Offiside hay intención", button2: "Ni la toca" } 
  },
  { 
    question: "VAR14", 
    gif: "./resources/14- amarilla.gif", 
    correct_answer: "Amarilla",
    possible_answers: { button1: "Mmm... no hay contacto", button2: "Falta" , button3: "Amarilla", button4: "Roja" } 
  },
  { 
    question: "VAR15", 
    gif: "./resources/15- roja.gif", 
    correct_answer: "Roja",
    possible_answers: { button1: "Amarilla", button2: "Roja", button3: "Falta" } 
  },
  { 
    question: "VAR16", 
    gif: "./resources/16- no penal.gif", 
    correct_answer: "No es falta",
    possible_answers: { button1: "No es falta", button2: "Penal" } 
  },
  { 
    question: "VAR17", 
    gif: "./resources/17- tiro libre.gif", 
    correct_answer: "Tiro libre",
    possible_answers: { button1: "No es falta", button2: "Penal", button3: "Tiro libre" } 
  },
  { 
    question: "VAR18", 
    gif: "./resources/18- rojo pisa.gif", 
    correct_answer: "El rojo lo pisa",
    possible_answers: { button1: "El rojo lo pisa", button2: "El celeste lo pisa" } 
  },
  { 
    question: "VAR19", 
    gif: "./resources/19- rojo.gif", 
    correct_answer: "Roja",
    possible_answers: { button1: "No la toca", button2: "Falta", button3: "Amarilla", button4: "Roja" } 
  },
  { 
    question: "VAR20", 
    gif: "./resources/20- pecho.gif", 
    correct_answer: "La para de pecho",
    possible_answers: { button1: "Esta en el área", button2: "Mano fuera del area", button3: "La para de pecho" } 
  },
];