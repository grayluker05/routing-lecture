import React, {Component} from 'react';

class User extends Component {
    constructor(){
        super();

        this.state = {
            users: ['Matt', 'Matias', 'Rob']
        }
    }


    render(){
        console.log(this.props.match)
        return(
            <div>
                {this.state.users[+this.props.match.params.id]}
            </div>
        )
    }
}

export default User;