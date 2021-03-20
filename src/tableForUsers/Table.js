import React from 'react'

const Table = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Modification</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button onClick={() => {props.editRow(user)}} className="btn btn-outline-secondary"> Edit </button>
              <button onClick={() => props.deleteUser(user.id)} className="btn btn-outline-secondary"> Delete </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>There are no users </td>
        </tr>
      )}
    </tbody>
  </table>
)

export default Table