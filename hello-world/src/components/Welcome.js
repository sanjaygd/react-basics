import { Component } from "react";

class Welcome extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.name} a.k.a {this.props.heroName}</h1>
            </div>
        )
    }
}

export default Welcome