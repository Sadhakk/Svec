import React, { Component } from 'react'

export default class FormRendering extends Component {
      constructor(props){
          super(props)
      }
      submitUserData=(event)=>{
          event.preventDefault()
          console.log(`${this.state.uname}`)
      }
    
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.uname} />

                     


                    onchange={this.changeUsername}
                    <br></br>
                    <input type="text" value={this.state.pword}></input>

                    
                    </form>

            </div>
        )
    }
}
