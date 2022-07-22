import React, { Component } from "react";

export default class App extends Component {
  state = {
    nomeProduto: "Mouse",
    precoProduto: 300,
    quantidadeProduto: 5
  };

  vendaProduto = () => {
    if (this.state.quantidadeProduto > 0) {
      this.setState({
        quantidadeProduto: this.state.quantidadeProduto - 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Produto: {this.state.nomeProduto}</h1>
        <h2>Preço: R$ {this.state.precoProduto}</h2>
        <h2>Estoque: {this.state.quantidadeProduto}</h2>
        {this.state.quantidadeProduto > 0 ? (
          <button onClick={this.vendaProduto}>Adicionar produto</button>
        ) : (
          <button disabled>Produto esgotado!</button>
        )}
      </div>
    );
  }
}
