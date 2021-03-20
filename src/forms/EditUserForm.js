import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input className="input is-link" type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input className="input is-link" type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button className="button is-link">Update User</button>
      <button onClick={() => props.setEditing(false)} className="button is-dark">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm