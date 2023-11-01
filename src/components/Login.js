import React from 'react'
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
          username: "",
          password: ""
        }
      };

    login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:9000/api/login', this.state.credentials)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleChange = (e) => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className='form-container'>
                    <form onSubmit={this.login} >
                        <input
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                            placeholder='username'
                        />
                        <input
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                            placeholder='password'
                        />
                        <button>Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
