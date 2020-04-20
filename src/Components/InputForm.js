import React, {Component} from 'react';


export default class InputForm extends Component {
constructor(props) {
    super(props);
    this.state = {
      total: null,
      percentageTaken: null,
      additionalPayments: []
    };
  }
  
  onChange = (event) => {
    this.setState({ total: event.target.value });
  }

  render(){
        return(
            <>
                <div>Hello from form 2</div>
                <input value={this.state.total} onChange={this.onChange}></input>
                {this.state.total}
            </>
        );
    };
};
