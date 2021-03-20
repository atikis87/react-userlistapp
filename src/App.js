import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import Table from './tableForUsers/Table'

const App = () => 
{
	/*
  * Array for users
  */
	const usersData = 
  [
		{ 
      id: 1,
      name: 'Attila',
      username: 'atikis87' 
    },

		{ id: 2,
      name: 'David',
      username: 'DavidFrequentis' 
    },

		{ id: 3,
      name: 'Sophie',
      username: 'SophieDev' 
    },
	]

	const initialFormState = 
  { 
    id: null,
    name: '',
    username: ''
  }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD (Create, Read, Update, Delete) operations

  // Create ----------------------------------------------

	const addUser = user => 
  {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

  // Delete ----------------------------------------------

	const deleteUser = id => 
  {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

  // Update -----------------------------------------------

	const updateUser = (id, updatedUser) => 
  {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

  // Edit -------------------------------------------------

	const editRow = user => 
  {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

  //----------------------------------------------

	return (
		<div className="container is-max-desktop">
			<h1 className="titleFont">UserList Application with CRUD</h1>
			<div className="columns">
				<div className="column is-half">
					{editing ? (
						<Fragment>
							<h2>Edit This User</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add New User</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="column is-two-third">
					<h2>View Added Users</h2>
					<Table users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App