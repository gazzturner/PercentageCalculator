import React, {Component} from 'react';
import ResultForm from './ResultForm'
import AdditionalPayments from './AdditionalPayments';

export default class InputForm extends Component {
constructor(props) {
    super(props);
    this.state = {
      total: null,
      percentageTaken: null,
      additionalPayments: [],
      amountForClient: null,
      newAdditionalPayment: null
    };
  }
  
  setTotal = (event) => {
    this.setState({ total: event.target.value });
  }

  setPercentage = (event) => {
    this.setState({ percentageTaken: event.target.value });
  }

  generatePercentage = () => {
    var amountTaken = (this.state.total/100) * this.state.percentageTaken;
    var additionalPaymentAmount = 0;
    this.state.additionalPayments.forEach(payment => {
      additionalPaymentAmount += parseFloat(payment);
    });
    amountTaken += parseFloat(additionalPaymentAmount);
    this.setState({amountForClient: this.state.total - amountTaken}); 
  }

  setAdditionalPayment = (event) => {
    this.setState({newAdditionalPayment: event.target.value});
  }

  addAdditionalPayment = () => {
    let updatedAdditionalPayments = this.state.additionalPayments;
    updatedAdditionalPayments.push(this.state.newAdditionalPayment);
    this.setState({newAdditionalPayment: null});
    this.setState({additionalPayments: updatedAdditionalPayments}); 
  }

  resetForm = () =>  {
    window.location.reload();
  }

  render(){
    let additionalPayments = null;
    additionalPayments = this.state.additionalPayments.map((payment, index) => {
      return(<AdditionalPayments
        additionalPayment={payment}
        />
      )
    });

        return(
            <div>
                Enter Total Damages: £<input value={this.state.total} onChange={this.setTotal} /><br/>
                Enter Percentage Taken: <input value={this.state.percentageTaken} onChange={this.setPercentage} />%<br/>
                Add An Additional Payment: <input value={this.state.newAdditionalPayment} onChange={this.setAdditionalPayment}/> <button onClick={this.addAdditionalPayment}>+</button><br />
                
                Additional Payments: {additionalPayments}<br />
                <button onClick={this.generatePercentage}>Generate</button><br />
                <ResultForm finalAmount={this.state.amountForClient} />

                <button onClick={this.resetForm}>Reset Form</button>
            </div>
        );
    };
};
