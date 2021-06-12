import React, { Component } from "react";
import Panneausolaire from "../images/Panneausolaire.PNG";




class ComposantGenerique extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleReset = (e) => {
         this.setState({
        angle: 0
      });
      document.getElementById("saisiAngle").value="";
    }
  handleChange = (e) => {
    if(e.target.value===""){
      this.setState({
        angle: 0
      });
    } else{
        this.setState({
          angle: e.target.value,
        });
    }
   
  };

  render() {

    const x = this.state.angle;
    const rotateComponent = {
      transform: `rotate(${x}deg)`,
    };
    let className = "cardianaux";
    if (!this.props.showOrientation) {
      className += "  d-none";
    } else {
      className = "cardianaux";
    }
    const colorFlech = this.props.arrowColor;
     const Color_de_fleche = {
       color: `${colorFlech}`,
     };
     let panel ="";
     let ul="";
     let ul1="";
      if (this.props.angleMode === "Sud_0"){
        ul1 = (
          <ul className={className}>
            <li className="nord">NORD</li>
            <li className="est">EST</li>
            <li className="sud">SUD</li>
            <li className="ouest">OUEST</li>
          </ul>
        );
        ul = (
          <ul>
            <li className="nord_">180&deg;/-180&deg;</li>
            <li className="est_">-90&deg;</li>
            <li className="sud_">0&deg;</li>
            <li className="ouest_">90&deg;</li>
          </ul>
        );
     panel = (
       <div
         className="paneau d-flex flex-column justify-content-center align-items-center  "
         style={rotateComponent}
       >
         <img
           src={Panneausolaire}
           alt="user profil "
           className="  img-fluid img-rounded  "
         />
         <i className="fas fa-sort-down" style={Color_de_fleche}></i>
       </div>
     );
      }  else{
          ul1 = (
            <ul className={className}>
              <li className="nord1">NORD</li>
              <li className="est1">EST</li>
              <li className="sud1">SUD</li>
              <li className="ouest1">OUEST</li>
            </ul>
          );
           ul = (
             <ul>
               <li className="nord_z">360&deg;/0&deg;</li>
               <li className="est_z">90&deg;</li>
               <li className="sud_z">180&deg;</li>
               <li className="ouest_z">270&deg;</li>
             </ul>
           );
        panel = (
          <div
            className="paneau d-flex flex-column justify-content-center align-items-center"
            style={rotateComponent}
          >
            <i className="fas fa-sort-up" style={Color_de_fleche}></i>
            <img
              src={Panneausolaire}
              alt="user profil "
              className="  img-fluid img-rounded  "
            />
          </div>
        );

      }
        return (
          <div className="componentFils shadow">
            <div className="d-flex justify-content-center align-items-center ">
              <h5 className="mt-2 ml-5">{this.props.titre}</h5>

              <span
                className="btn btn-outline-dark btn-sm ml-auto mr-5 mt-5"
                onClick={this.handleReset}
              >
                Reset
              </span>
            </div>
            <div className="mr-5 box_content_input_degre">
              <label className="ml-3 mr-3">Angle:</label>
              <input
                type="number"
                className="champInput"
                onChange={this.handleChange}
                id="saisiAngle"
              />
              <b className="degre"> o</b>
              <div className="rounded-circle  ml-5 cercle d-flex justify-content-center align-items-center  ">
                {panel}
              </div>
            </div>
            {ul1}
            {ul}
          </div>
        );
  }
}
export default ComposantGenerique;
