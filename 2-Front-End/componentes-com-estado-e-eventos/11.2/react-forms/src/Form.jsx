import React from "react";

class Form extends React.Component {
  state = {
    estadoFavorito: "",
    name: "",
    email: "",
  };

  handleChangeEstado = (event) => {
    this.setState({
      estadoFavorito: event.target.value,
    });
  };

  handleChangeName = (event) => {
    this.setState({
        name: event.target.value,
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
        email: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            =)
            <textarea
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.handleChangeEstado}
            />
          </label>
          <label htmlFor="name">
            Nome:
            <input
                id="name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
            />
          </label>
          <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="text"
                value={ this.state.email }
                onChange={ this.handleChangeEmail }
              />
            </label>
            <label htmlFor="age">
              Idade:
              <select
                id="age"
                name="age"
                defaultValue=""
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>

            <label htmlFor="anecdote">
              Anedota:
              <textarea id="anecdote" name="anecdote" />
            </label>
        </form>
      </div>
    );
  }
}

export default Form;
