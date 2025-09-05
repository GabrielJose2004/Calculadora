let display = document.getElementById("display");
let history = document.getElementById("history");
let expressao = "";

// Adicionar número
function adicionarNumero(num) {
  if (expressao === "0") expressao = "";
  expressao += num;
  atualizarDisplay();
}

// Adicionar operação
function adicionarOperacao(op) {
  if (expressao === "") return;
  let ultimo = expressao.slice(-1);
  if ("+-*/".includes(ultimo)) {
    expressao = expressao.slice(0, -1) + op;
  } else {
    expressao += op;
  }
  atualizarDisplay();
}

// Calcular resultado
function calcular() {
  try {
    let resultado = eval(expressao).toString();
    history.textContent = expressao + " = " + resultado; // histórico
    expressao = resultado;
  } catch {
    expressao = "Erro";
  }
  atualizarDisplay();
}

// Limpar tudo
function limpar() {
  expressao = "";
  atualizarDisplay();
  history.textContent = "";
}

// Apagar último
function apagar() {
  expressao = expressao.slice(0, -1);
  atualizarDisplay();
}

// Atualizar tela
function atualizarDisplay() {
  display.textContent = expressao || "0";
}

// -------------------------
// Suporte ao teclado 🎹
// -------------------------
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key)) {
    adicionarNumero(key); // números
  } else if ("+-*/".includes(key)) {
    adicionarOperacao(key); // operações
  } else if (key === "Enter" || key === "=") {
    calcular(); // resultado
  } else if (key === "Backspace") {
    apagar(); // apagar último
  } else if (key === "Escape") {
    limpar(); // limpar tudo
  } else if (key === ".") {
    adicionarNumero("."); // ponto decimal
  }
});
