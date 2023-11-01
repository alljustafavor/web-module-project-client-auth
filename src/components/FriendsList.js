import React from 'react'

export class FriendsList extends React.Component {
    state = {
        friends: [],
    }

    componentDidMount() {
        this.getData()
    }

  render() {
    return (
      <div>FriendsList</div>
    )
  }
}

export default FriendsList