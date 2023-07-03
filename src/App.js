import React,{ Component } from "react";
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';



class App extends Component {
  state={
    courses:[
      {name:"html"},
      {name:"css"},
      {name:"javascript"}

    ],
    current : ""
  }

  // updatecourse
  updateCourse=(e)=>{
    this.setState({
      current: e.target.value
    })
  }

addCourse = (e) => {
  e.preventDefault();
  const current = this.state.current.trim(); // Trim any whitespace from the input value
  
  if (current !== "") {
    const courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses: courses,
      current: ''
    });
  }
}


    deleteCourse =(index)=>{
      console.log(index)
      let courses= this.state.courses;
      courses.splice(index,1);
      this.setState({
        courses:courses
      })
    }

    editCourse=(index,value)=>{
      let courses= this.state.courses;
      let course=courses[index];
      course['name']=value;
      this.setState({
        courses
      })      
    }

  render(){
      let {courses}=this.state;
      const listcourse=courses.length?(courses.map((course,index)=>{
        return    (  <CourseList detalis={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>)
      })
       ):(
        <div className="text-one">there is no courses to show</div>
      )
  return (
    <section className="App">

      <h2>Add cours</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
       <ul> {listcourse} </ul>
    </section>
  );
}
}

export default App;