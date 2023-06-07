
import React, { useState } from 'react';
import  './App.css';


function App() {
  const [saldo, setSaldo] = useState(0);
  const [valorEntrada, setValorEntrada] = useState('');
  const [valorSaida, setValorSaida] = useState('');

  const handleValorEntradaChange = (event) => {
    setValorEntrada(event.target.value);
  };

  const handleValorSaidaChange = (event) => {
    setValorSaida(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoSaldo = saldo + (valorEntrada - valorSaida);
    setSaldo(novoSaldo);
    setValorEntrada('');
    setValorSaida('');
  };

  return (
    <div>
      <h1>Sistema de Gestão Financeira</h1>
      <p>Saldo: R${saldo.toFixed(2)}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Valor de Entrada:
          <input
            type="number"
            value={valorEntrada}
            onChange={handleValorEntradaChange}
          />
        </label>
        <br />
        <label>
          Valor de Saída:
          <input
            type="number"
            value={valorSaida}
            onChange={handleValorSaidaChange}
          />
        </label>
        <br />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default App;