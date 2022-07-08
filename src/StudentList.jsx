import Student from "./Student/Student"
import React from "react"

const StudentList = (props) => {
  return (
    <>
      {props.students.map(student => (
        <Student key={Student.name} name={student.name} bio={student.bio} scores={props.scores} />
      ))}
    </>
  )
}

export default StudentList