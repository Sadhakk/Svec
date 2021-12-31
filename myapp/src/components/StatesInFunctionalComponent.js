import React from 'react'

export default function StatesInFunctionalComponent() {

    let [name,updateName]= useState("sadak")
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("sadak k")} }
            onMouseLeave={()=>{updateName("sadak")}}>
                  {name}
              </h1>
        </div>
    )
}
