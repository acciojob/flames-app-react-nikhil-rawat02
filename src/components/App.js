import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    state = {
        firstName: "",
        secondName: "",
        relationShip: ""
    }

    handleInputChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    handleCalculateButton = () => {
        const { firstName, secondName } = this.state;
        if (firstName === "" || secondName === "") {
            this.setState({ relationShip: "Please Enter valid input" });
            return;
        }

        let updatedFirstName = firstName;
        let updatedSecondName = secondName;

        secondName.split("").forEach((element) => {
            if (updatedFirstName.indexOf(element) !== -1) {
                const index = updatedFirstName.indexOf(element);
                updatedFirstName =
                    updatedFirstName.slice(0, index) +
                    updatedFirstName.slice(index + 1);
            }

        })

        firstName.split("").forEach((element) => {
            if (updatedSecondName.indexOf(element) !== -1) {
                const index = updatedSecondName.indexOf(element);
                updatedSecondName =
                    updatedSecondName.slice(0, index) +
                    updatedSecondName.slice(index + 1);
            }
        })
        
        const length = (updatedFirstName.length + updatedSecondName.length) % 6;

        switch (length) {
            case 0: this.setState({relationShip: "Siblings"})
             break;
            case 1: this.setState({relationShip : "Friends"})
            break;            
            case 2: this.setState({relationShip : "Love"})
             break;
            case 3: this.setState({relationShip : "Affection"})
            break;
            case 4: this.setState({relationShip : "Marriage"})
            break;
            case 5: this.setState({relationShip : "Enemy"})
            break;
            default:
                this.setState({relationShip : ""})
        }

    }
    handleClearButton = () => { this.setState({ firstName: "", secondName: "", relationShip: "" }) }

    render() {

        return (
            <div id="main">
                <input type="text" name="firstName" required placeholder="Enter first name" onChange={this.handleInputChange} data-testid="input1" />
                <input type="text" name="secondName" required placeholder="Enter second name" onChange={this.handleInputChange} data-testid="input2" />
                <button onClick={this.handleCalculateButton} data-testid="calculate_relationship">
                    Calculate Relationship Future
                </button>
                <button onClick={this.handleClearButton} data-testid="clear" >Clear</button>
                <h3 data-testid="answer" >{this.state.relationShip}</h3>
            </div>
        )
    }
}


export default App;
