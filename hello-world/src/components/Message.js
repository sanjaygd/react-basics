import { Component } from "react";


class Message extends Component{

    constructor(){
        super()
        this.state = {
                        message:"Welcome Visitor"
        }
    }

    changeMessage(){
        this.setState(
            {
                message:"Thank you for Subscription!"
            }
        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscrib</button>
            </div>
        )
    }
}

export default Message;