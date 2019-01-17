import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });
  }
  render() {
    const { product } = this.state;
    var voltar = "javascript: history.go(-1)";
    return (
      <div className="product-info">
        <div className="voltar">
          <a className="voltar" href={voltar}>
            ← Voltar
          </a>
        </div>

        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL:{" "}
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            {product.url}
          </a>
        </p>
      </div>
    );
  }
}
