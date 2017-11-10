// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

//
import Todo from './Todo';


class App extends React.Component {
  constructor(){
    super();

    this.state={
      tasks: ["first", "second", "third"],
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: '',
    })

  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    })

  }

 handleDelete(e){
  console.log(e)
  console.log(this.state)
  this.setState({
    tasks: this.state.tasks.filter((task)=>task !== e)
  })
 }



  render() {

    let tasks = this.state.tasks.map((task)=>
      <Todo key={task} task={task} del={this.handleDelete}/>
    )
    return (
      <div>
        {/* this is how you coment out in jsx*/}

        <form onSubmit = {(event) => this.handleSubmit(event)}>
        {/*<form onSubmit={(event)=> this.handleSubmit(event)}>*/}

          <input onChange = {(event) => this.handleChange(event)}/>
          {/*<input onChange={(event)=>this.handleChange(event)} />*/}


          <input type="submit"/>
        </form>

        { tasks }

      </div>
    );
  }
}



export default App;
