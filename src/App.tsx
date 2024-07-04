import { useState } from "react";

import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const frases = [
    {
      id: "1",
      nome: "Motivação",
      frases: [
        "Siga os bons e aprenda com eles.",
        "O bom-senso vale mais do que muito conhecimento.",
        "O riso é a menor distância entre duas pessoas.",
        "Deixe de lado as preocupações e seja feliz.",
        "Realize o óbvio, pense no improvável e conquiste o impossível.",
        "Acredite em milagres, mas não dependa deles.",
        "A maior barreira para o sucesso é o medo do fracasso.",
      ],
    },
    {
      id: "2",
      nome: "Bom dia",
      frases: [
        "Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!",
        "A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!",
        "Escreva em seu coração: todo dia é o melhor dia do ano.",
        "Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.",
      ],
    },
    {
      id: "3",
      nome: "Coach reverso",
      frases: [
        'Parabéns! Mais um dia calando a boca de quem te elogiava',
        'Seja tudo ou nada! Ou tudo dá errado ou nada dá certo',
        'Acredite, você nasceu para conquistar grandes derrotas',
        'Acreditar que você pode, já é meio caminho errado',
        'Comece do zero mesmo, com muito esforço você pode chegar no negativo',
        'Pare de achar que ninguém gosta de você, comece a ter certeza',
        'Você pode até não ser bom em tudo, mas com certeza pode não ser bom em nada',
        'Só regresso, irmão! Tudo deles, nada nosso',
        'Se existir concorrência, serei desistência!'
      ]
    }
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(Math.random() * frases[categoriaSelecionada].frases.length)

  setTextoFrase(`"${frases[categoriaSelecionada].frases[numeroAleatorio]}"`);
  }

  return (
    <div className="container">
      <p className="nome">by: Gabriel Lemes</p>
      <img src={logoImg} alt="Logo frases" className="logo" />
      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {frases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.nome === frases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== "" && <p className="texto-frase">{textoFrase}</p>}
    </div>
  );
}

export default App;
