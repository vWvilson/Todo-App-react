import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "TODO LIST",
      list: [],
      inputValue: ''
      
    }
  }
  

handleInputChange=(e)=> {
 this.setState({inputValue: e.target.value})
}
handleSubmit=()=> {
  const newList = this.state.list;
  newList.push(this.state.inputValue);
  this.setState({list: newList,inputValue :" "});
  
}
  
  render() {
    return (
      <div className="App">
      <header>
        <h2>{this.state.message}</h2>
      </header> 
      <p>
          <input value ={this.state.inputValue}onChange = {this.handleInputChange} type ='text'/>
          <button onClick={this.handleSubmit}> Add Todo </button>
      </p>
           <p className = 'back'>
          {this.state.list.map((item)=>{
            return <div>
             <p className ="list">{item}</p>
             </div>
             
          }
      
            )}
            </p>
      </div>
    );
  }
}

export default App;
