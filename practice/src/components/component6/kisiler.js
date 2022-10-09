import React from 'react'
import students from "../../data/Students.json"
import Kisi from './kisi'
import "./kisi.css"
const Kisiler = () => {
  return (
    <div className="st-container">
        {
            students.map((student,index)=>(<Kisi key={index} student={student}/> ))
        }
    </div>
  )
}

export default Kisiler