import React, { Component } from 'react'
import AndhraBank from './AndhraBank'
import Corportation from './Corportation'
import ListRendering from './ListRendering'

export default class UnionBank extends Component {
    render() {
        return (
            <div>
                  {/* <h1>UnionBank</h1>
                  <AndhraBank   location="Vijaywada"  />
                  <Corportation/> */}
                  <ListRendering/>
            </div>
        )
    }
}
