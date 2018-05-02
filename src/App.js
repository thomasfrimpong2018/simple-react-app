import React, { Component } from 'react';
import Project from "./Components/Project";
import AddProject from "./Components/AddProject";
import Todo from "./Components/Todo";
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';


class App extends Component {
  constructor(){
    super();
  this.state={
      projects:[],
      todos:[]
    }

}
projectState(){
  this.setState({
  projects:[
    {
      id:uuid.v4(),
      title:'Business Website',
      category:"Web Design"
    },
    {
      id:uuid.v4(),
      title:'Ecommerce Application',
      category:"Web Development"
    },
    {
      id:uuid.v4(),
      title:'Ticket App',
      category:"Mobile Application"
    }
  ]


})
}




getTodos(){
  $.ajax({
    url:'https://jsonplaceholder.typicode.com/todos',
    datatype:'json',
    cache:false,
    success:function(data){
      this.setState({ todos:data},
      function(){ console.log(this.state);});
    }.bind(this),
      error:function(xhr,status,err){
        console.log(err)
      }
    }
  );
}

componentWillMount(){
  this.projectState();
  this.getTodos();

}
componentDidMount(){

this.getTodos()
}


  handleAddProject(a){
    //console.log()
    let addOns=this.state.projects;
    addOns.push(a);
    this.setState({addOns:addOns});

  }
handleDelete(id){
  let projects=this.state.projects;
  let index=projects.findIndex(x=>x.id===id);
  projects.splice(index,1);
  this.setState({projects:projects});
}

  render() {
    return (
      <div className="App container">
      <AddProject addProject={this.handleAddProject.bind(this)} onDelete={this.handleDelete.bind(this)
      }/>
        <Project     stuff={this.state.projects} /><hr/>
         <Todo  todos={this.state.todos}  />
      </div>
    );
  }
}

export default App;
