import React from 'react'
import { axiosWithAuth } from '../utility/axiosWithAuth'

export class FriendsList extends React.Component {
    state = {
        friends: [],
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get('/friends')
            .then((res) => {
                this.setState({
                    friends: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <h1>FriendsList</h1>
                <div>
                    {this.state.friends.map((friend) => (
                        <div key={friend.id}>
                            {friend.name} - {friend.email}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FriendsList