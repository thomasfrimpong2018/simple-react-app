import React, { Component } from 'react';



class ProjectItems extends Component {

     deleteProject(id){
       this.props.onDelete(id);
     }

    render() {



    return (
      <li className="ProjectItems">
<strong> {this.props.projector.title}</strong>:  {this.props.projector.category}<a href="" onClick={this.deleteProject.bind(this,this.props.projector.id)}> x </a>

      </li>
    );
  }
}

export default ProjectItems;
