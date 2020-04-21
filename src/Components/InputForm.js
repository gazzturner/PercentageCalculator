import React, {Component} from 'react';


export default class InputForm extends Component {
constructor(props) {
    super(props);
    this.state = {
      total: null,
      percentageTaken: null,
      additionalPayments: []
    };
    let amountForClient = null;
  }
  
  setTotal = (event) => {
    this.setState({ total: event.target.value });
  }

  setPercentage = (event) => {
    this.setState({ percentageTaken: event.target.value });
  }

  generatePercentage = () => {
    var amountTaken = (this.state.total/100) * this.state.percentageTaken;
    amountForClient = this.state.total - amountTaken
  }

  render(){
        return(
            <>
                <div>Hello from form 2</div>
                <input value={this.state.total} onChange={this.setTotal}></input><br/>
                <input value={this.state.percentageTaken} onChange={this.setPercentage}></input><br/>
                <button onClick={this.generatePercentage}>Generate</button><br />
                {this.amountForClient}
            </>
        );
    };
};
