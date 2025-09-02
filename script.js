let display = document.getElementById("display");
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
    expressao = eval(expressao).toString();
  } catch {
    expressao = "Erro";
  }
  atualizarDisplay();
}

// Limpar tudo
function limpar() {
  expressao = "";
  atualizarDisplay();
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
