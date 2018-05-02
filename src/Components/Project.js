import React, { Component } from 'react';
import ProjectItems from "./ProjectItems";


class Project extends Component {

    deleteProject(id){
      this.props.onDelete(id);
    }

    render() {

     console.log(this.props);
  let Items;
  if(this.props.stuff){
  Items=this.props.stuff.map(project =>{
    return  (<ProjectItems onDelete={this.deleteProject.bind(this)} key={project.title} projector={project}/> );
  });

}

    return (
      <div className="Project">
         {Items}
      </div>
    );
  }
}

export default Project;
