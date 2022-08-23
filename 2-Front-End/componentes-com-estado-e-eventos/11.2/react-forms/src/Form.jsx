import React from "react"
import EstadoFavorito from './EstadoFavorito'

class Form extends React.Component {
  state = {
    estadoFavorito: "",
    name: "",
    email: "",
    age: "",
    vaiComparecer: false,
  };

  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />
          <label htmlFor="name">
            Nome:
            <input
                id="name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="text"
                value={ this.state.email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="age">
              Idade:
              <select
                id="age"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                defaultValue=""
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
            <fieldset>
            <legend>Escolha um arquivo</legend>
              <input type="file" />
            </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
