import React, { Component } from 'react'

export default class StateinClassComponent extends Component {

    constructor(props) {
        super(props)
  // 
        this.state = {
             name:"sadak",
             count:0
             
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({

                name:"k sadak"
                
            
            })

        },3000)
        return (
            <div class="demo">
                <h1>Welcome {this.state.name}</h1>
                <h1>count:{this.state.count}</h1>
                <button onClick={( )=> {
                    this.setState({
                        count:this.state.count+1
                        
                    })


                }}>Increment count</button>
                 <button onClick={( )=> {
                    this.setState({
                        count:this.state.count-1
                        
                    })


                }}>decrement count</button>
                 <button onClick={( )=> {
                    this.setState({
                        count:this.state.count=0
                        
                    })


                }}>count</button>

            </div>
        )
    }
}
