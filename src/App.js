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
     <InputForm></InputForm>
    );
  }
}
