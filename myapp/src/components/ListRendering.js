import { getDefaultNormalizer } from '@testing-library/react'
import { keyboard } from '@testing-library/user-event/dist/keyboard'
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils'
import React from 'react'

export default function ListRendering() {




    // let emplist=["sadhak","kavya","Aparana","udaykiran"]
     
    let emplist=[
        
        {
        name:"sadhak",
        salary:40000,
        email:"sadhaksmart42.com"

         },
         {
             name:"k.venkatesh",
             salary:5000,
             email:"sadhaksmart",

         },]




    return (
        <div>
            <h1> List Rendering </h1>
            {/* {
            emplist.map(element =>
            {
                <h1> {element} </h1>
            }
                )
            } */}
            {
                emplist.map(
                    empdata =>
                    <>
                    <p>{emplist.name}</p>
                    <p>{emplist.salary}</p>
                    <p>{emplist.email}</p>

                </>
                )
            }
        

        </div>
    )
}
