import React from 'react'
import axios from 'axios'

import { axiosWithAuth } from '../utility/axiosWithAuth';

export class AddFriend extends React.Component {
    state = {
        friend: {
            name: '',
            email: '',
        },
    };

    handleChange = (e) => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    addData = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:9000/api/friends', this.state.friend)
            .catch((err) => {
                console.log(err)
            });
    }


    render() {
        return (
            <div>
                <h1>Add Friend</h1>
                <div className='form-container'>
                    <form onSubmit={this.addData} >
                        <input
                            type="text"
                            name="name"
                            value={this.state.friend.name}
                            onChange={this.handleChange}
                            placeholder='name'
                        />
                        <input
                            type="email"
                            name="email"
                            value={this.state.friend.email}
                            onChange={this.handleChange}
                            placeholder='email'
                        />
                        <button>Add Friend</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default AddFriend
