import React, {Component} from 'react';
import './App.css';
import InputForm from './Components/InputForm'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <h3>This is for my own purposes and should not be used for actual cases</h3>
        <InputForm></InputForm>
      </>
    );
  }
}
