 import React from 'react'
import Boys from './Boys'
 
 function List() {
    
    const number=[10,20,30,40]
    const students=["Hassu","Shami","Ali","Tanya"]
    const result=students.map(std=><h1>{std}</h1>)
    const boys=[{
        name:"Hassu",
        Roll:20

    },
    {
    name:"Imran",
    Roll:21

},
{
name:"Kaif",
Roll:22

}
]
   return (
     <>
     {boys.map(by=><Boys by={by}/>)}
     {result}
     {number.map(nmb=><h1>{nmb=nmb*2}</h1>)}</>
   )
 }
 
 export default List