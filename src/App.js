import React, { Component } from 'react';
import './Todo.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "TO-DO LIST",
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
    // hello
    return (
      <div className="List">
      <header>
        <p className="heading">{this.state.message}</p>
      </header> 
      <p>
          <Input placeholder='Add List Item' value ={this.state.inputValue}onChange = {this.handleInputChange} type ='text'/>
          
      </p>
      <Button variant="contained" color = "secondary"
          
           onClick={this.handleSubmit}> Add To-Do </Button>
           <hr />

           <p className = 'back'>
          {this.state.list.map((item)=>{
            return <div>
             <p className ="theList">{item}</p>
             </div>
             
          }
      
            )}
            </p>
      </div>
    );
  }
}

export default App;
