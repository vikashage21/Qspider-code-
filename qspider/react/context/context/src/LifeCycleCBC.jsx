import React from 'react'
import { Component } from 'react'

export default class LifeCycleCBC extends Component {
    constructor() {
        super()
        console.log('i am constructor'
            this.state = { count: 0 }
        )
    }
    componentDidMount() {
        console.log('component mounted')
    }
    increment = () => this.setState({
        count: this.state.count + 1
    })
    render() {
        console.log(' i am render ')
    }
    componentDidUpdate(){
        console.log('component updated')
    }

}

function LifeCycleCBC() {
    return (
        <div>
            <h1>LifeCycleCBC {this.state.count}</h1>
            <button onClick={this.increment}>increment</button>

        </div>
    )
}

export default LifeCycleCBC
