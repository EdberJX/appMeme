import React from "react";

export default class BoxCount extends React.Component {
  onInputChange = async e => {
    const { tex, position } = this.props;
    const { value } = e.target;

    tex[position] = value;
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12 m6">
          <input type="text" name="text" onChange={this.onInputChange} />
          <label htmlFor="last_name">Texto</label>
        </div>
      </div>
    );
  }
}
