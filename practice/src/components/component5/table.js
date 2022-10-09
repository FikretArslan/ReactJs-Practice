import React from 'react'
import countries from "./countries.json"
import "./table.css"
const Table = () => {

    const stil = {
        textAlign: 'center',
        backgroundColor:"lightblue"
    }
    const stil2={
        textAlign: 'center',
        backgroundColor:"lightgray"
    }

  return (
    <div className="tblContainer">
        <select name="" id="" defaultValue="ulke">
            <option disabled value="ulke">Bir ülke seçin</option>
            {
                countries.map((country)=>(<option key={country.code}>{country.name}</option>))
            }
        </select>
        <table style={{width:"60%"}}>
            <thead>
                <tr>
                    <th>Sıra No</th>
                    <th>Ülke Adı</th>
                    <th>Ülke Kodu</th>
                </tr>
            </thead>
            <tbody>
                {
                    countries.filter((item)=>item.name.startsWith("A")).map((country,index)=>{
                        return(
                            <tr key={country.code} style={index%2===0 ? stil : stil2}>
                                <td>{index+1}</td>
                                <td>{country.name}</td>
                                <td>{country.code}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table