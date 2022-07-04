const TriviaType = {
  Text: 0,
  Textarea: 1,
  Amount: 2,
  Rate: 3,
  SiNo: 4,
  Select: 5
}

var trivias = [
  {
    preguntas: [
      {
        pregunta: "Favorite hobby?",
        tipo: TriviaType.Text
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "Do you believe in love at first sight?",
        tipo: TriviaType.SiNo
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "What is your favorite food?",
        tipo: TriviaType.Text
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "Favorite season of the year?",
        tipo: TriviaType.Select,
        opciones: ["Verano", "Invierno", "Otoño", "Primavera"]
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Ciudad o campo?",
        tipo: TriviaType.Select,
        opciones: ["Ciudad", "Campo"]
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Comida rápida favorita?",
        tipo: TriviaType.Text
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Te gustaría tener un superpoder?",
        tipo: TriviaType.SiNo
      },
      {
        pregunta: "¿Cuál?",
        tipo: TriviaType.Text
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Viajarías al futuro o al pasado?",
        tipo: TriviaType.Select,
        opciones: ["Futuro", "Pasado"]
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Cuál es el secreto más grande que tienes?",
        tipo: TriviaType.Textarea,
        lineas: 3,
        value: "",
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Perros o gatos?",
        tipo: TriviaType.Select,
        opciones: ["Perros", "Gatos"]
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Si tuvieras mucho dinero: lo ahorrarías o lo gastarías?",
        tipo: TriviaType.Select,
        opciones: ["Ahorrar", "Gastar"]
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Tocas algún instrumento?",
        tipo: TriviaType.SiNo
      },
      {
        pregunta: "¿Cuál?",
        tipo: TriviaType.Text
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Te casarías?",
        tipo: TriviaType.SiNo
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Bailar o cantar?",
        tipo: TriviaType.Select,
        opciones: ["Bailar", "Cantar"]
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Playa o bosque?",
        tipo: TriviaType.Select,
        opciones: ["Playa", "Bosque"]
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Qué te parece Iluminatis Coin?",
        tipo: TriviaType.Rate,
        min: 1,
        max: 10,
      }
    ]
  },
  {
    preguntas: [
      {
        pregunta: "¿Qué cantidad te interesaría invertir?",
        tipo: TriviaType.Amount,
        min: 0,
        max: 1000000,
        value: 100
      }
    ]
  }
];

window.hola = "mundo";

function generateInputNumber(name = false, min = false, max = false, value = false) {
  return generateInput("number", name, value, min, max);
}

function generateInputText(name = false, value = false) {
  return generateInput("text", name, value);
}

function generateInputRadio(name = false, value = false) {
  var input = generateInput("radio", name, value);
  return input;
}

function generateInput(type, name = false, value = false, min = false, max = false) {
  var input = document.createElement("input");
  input.type = type;
  if (name) { input.name = name; }
  if (value) { input.value = value; }
  if (min) { input.min = min; }
  if (max) { input.max = max; }
  return input;
}

function generateLabel(text) {
  var label = document.createElement("label");
  label.innerHTML = text;
  return label;
}

function generateTextArea(name = false, lineas = false, value = false) {
  var textarea = document.createElement("textarea");
  if (name) { textarea.name = name; }
  if (value) { textarea.value = value; }
  if (lineas <= 0) { lineas = 1; }

  textarea.rows = lineas;
  textarea.style.height = (38 * lineas) + "px";
  return textarea;
}

triviaOnSuccess = function() {
}



function generateSelect(name = false, opciones = false) {
  var select = document.createElement("select");
  if (name) {
    select.name = name;
  }
  if (opciones) {
    opciones.forEach(opcion => {
      var option = document.createElement("option");
      option.value = opcion;
      option.innerHTML = opcion;
      select.appendChild(option);
    });
  }
  return select;
}

function showRandomTrivia(onSuccess = () => {}){
  triviaOnSuccess = onSuccess;

  var trivia = trivias[Math.floor(Math.random() * trivias.length)];

  var triviamodal = document.querySelector("#triviamodal");

  var divPreguntas = document.querySelector("#triviamodal .preguntas");
  divPreguntas.innerHTML = "";

  for (var i = 0; i < trivia.preguntas.length; i++) {
    var pregunta = trivia.preguntas[i];
    var divPregunta = document.createElement("div");

    var p = document.createElement("p");
    p.innerHTML = pregunta.pregunta;
    divPregunta.appendChild(p);

    var new_name = "pregunta" + i;

    if (pregunta.tipo === TriviaType.SiNo) {
      divPregunta.appendChild(generateInputRadio(new_name, "Si"));
      divPregunta.appendChild(generateLabel("Si"));
      divPregunta.appendChild(generateInputRadio(new_name, "No"));
      divPregunta.appendChild(generateLabel("No"));
    }
    else if (pregunta.tipo === TriviaType.Rate) {
      for (var j = pregunta.min; j <= pregunta.max; j++) {
        divPregunta.appendChild(generateInputRadio(new_name, j));
        divPregunta.appendChild(generateLabel(j));
      }
    }
    else if (pregunta.tipo === TriviaType.Amount) {
      var divAmount = document.createElement("div");
      divAmount.appendChild(generateLabel("Cantidad: "));
      divAmount.appendChild(generateInputNumber(new_name, pregunta.min, pregunta.max, pregunta.value));
      divAmount.appendChild(generateLabel(" Dolares: "));
      divPregunta.appendChild(divAmount);
    }
    else if (pregunta.tipo === TriviaType.Textarea) {
      divPregunta.appendChild(generateTextArea(new_name, pregunta.lineas, pregunta.value));
    }
    else if (pregunta.tipo === TriviaType.Text) {
      divPregunta.appendChild(generateInputText(new_name));
    }
    else if (pregunta.tipo === TriviaType.Select) {
      divPregunta.appendChild(generateSelect(new_name, pregunta.opciones));
    }

    divPreguntas.appendChild(divPregunta);
  }

  triviamodal.style.display = "flex";
}

window.addEventListener("load", function(event) {
    var btnCloseTrivia = document.querySelector("#triviamodal button.closetrivia");
    if (btnCloseTrivia) {
      btnCloseTrivia.addEventListener("click", (e) => {
        e.preventDefault();
        var triviamodal = document.querySelector("#triviamodal");
        triviamodal.style.display = "none";
      });
    }

    var btnAceptarTrivia = document.querySelector("#triviamodal button.aceptartrivia");
    if (btnAceptarTrivia) {
      btnAceptarTrivia.addEventListener("click", (e) => {
        e.preventDefault();
        triviaOnSuccess();
        //window.open("https://mint-coin-seven.vercel.app/")
        var triviamodal = document.querySelector("#triviamodal");
        triviamodal.style.display = "none";
      });
    }
});