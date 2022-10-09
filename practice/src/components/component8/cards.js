import React from 'react'
import students from "../../data/Students.json"
import StudentCard from './studentCard';

const Cards = () => {
  return (
    <div>
        {
            students.map((student,index)=>{
                const {isim,img,yas,kurs}=student;
                return(
                    <StudentCard key={index} isim={isim} img={img} yas={yas} kurs={kurs}/>
                )
            })
        }
    </div>
  )
}

export default Cards