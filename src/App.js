import './App.css';
import React, { Component } from "react";
import ComposantGenerique from './Components/ComposantGenerique';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "EXEMPLE 1",
      showOrientation: true,
      arrowColor: "#C96615FF",
      angleMode: "Sud_0",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChoix = this.handleChoix.bind(this);
  }
  handleChange = (e) => {
    let choix = e.target.value;
    if (choix !== "exemple1") {
      this.setState({
        titre: "EXEMPLE 2",
        arrowColor: "#F29003FF",
        angleMode: "Sud_180",
      });
    } else{
        this.setState({
          titre: "EXEMPLE 1",
          arrowColor: "#C96615FF",
          angleMode: "Sud_0",
        });
    }
  };
  handleChoix = () => {
         this.setState({
        showOrientation: !this.state.showOrientation
      });
  
  };

  render() {
    return (
      <div className="container">
        <div className=" d-flex justify-content-center align-items-center mt-3">
          <label className=" mr-3">Cacher/Afficher l'orientation:</label>
          <input type="checkbox" onChange={this.handleChoix} />
        </div>
        <select
          name="exmpleComponent"
          id="exmpleComponent"
          onChange={this.handleChange}
        >
          <option value="exemple1">Exemple 1</option>
          <option value="exemple2">Exemple 2</option>
        </select>
        <ComposantGenerique
          titre={this.state.titre}
          showOrientation={this.state.showOrientation}
          arrowColor={this.state.arrowColor}
          angleMode={this.state.angleMode}
        />
      </div>
    );
  }
}
export default App;
