import React, { Component } from 'react';
import uuid from 'uuid'


class AddProject extends Component {
    constructor(){
      super();
       this.state={
         newProject:{}
       }

    }
  static defaultProps={
    categories:['Web Design','Web Development','Mobile Application']
  }

  handleSubmit(e){
  if(this.refs.title.value===""){
    alert("Title is Required");
  }else{
    this.setState({
        newProject:{
          id:uuid.v4(),
          title:this.refs.title.value,
          category:this.refs.category.value
        }
      }, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });



  }
e.preventDefault();

}
    render() {
      let categoryOptions=this.props.categories.map(category=>{
      return  <option value={category} key={category}>{category} </option> ;

    });


    return (
      <div>
        <h1>Add Projects</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
            <label>Title:</label>
            <input ref="title" type="text"/>
            </div><div>
            <label>Category:</label>
            <select ref="category">
             {categoryOptions}
            </select></div>
            <input type="submit" value="submit" className="btn btn-primary"/>
            </form>
      </div>

    );
  }
}

export default AddProject;
