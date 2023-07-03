import React ,{Component,Fragment} from "react";


class CourseList extends Component {

  state={
    isEdit : false
  }

renderCourse = () =>{
  return(
    <li>
    <span>{this.props.detalis.name}</span>
    <button onClick={()=>{this.toggleState()}}>Edit Course</button>
    <button onClick={()=>this.props.deleteCourse(this.props.index)}>Delete</button>
  </li>
  )
}

toggleState = () => {
  let { isEdit } = this.state;
  this.setState({
    isEdit:!isEdit
  })
}

updateCourseItem=(e)=>{
  e.preventDefault();
  this.props.editCourse(this.props.index , this.input.value);
  this.toggleState(); 
}



renderUpadteForm=()=>{
  return (
    <form onSubmit={this.updateCourseItem}>
      <input type="text" ref={(v)=>{this.input = v}} defaultValue={this.props.detalis.name}/>
      <button>UpdateCourse</button>      
    </form>
  )

}

    render() {
      let {isEdit}=this.state;
    return (
        <>
        { isEdit ? this.renderUpadteForm():  this.renderCourse() }
        </>
    );
} 
 }
export default CourseList;