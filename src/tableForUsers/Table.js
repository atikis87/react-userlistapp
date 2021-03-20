import React from 'react'

const Table = props => (
  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
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
              <button onClick={() => {props.editRow(user)}} className="button is-warning action"> Edit </button>
              <button onClick={() => props.deleteUser(user.id)} className="button is-danger"> Delete </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>There are No Users </td>
        </tr>
      )}
    </tbody>
  </table>
)

export default Table