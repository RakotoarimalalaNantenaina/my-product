import React, { useState } from 'react'

const EditUserForm = props => {
	const [ user, setUser ] = useState(props.currentUser)

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
			<input type="text" name="prix" value={user.prix} onChange={handleInputChange} /><br/><br/>
			<button className="btn btn-secondary">OK</button>&nbsp;&nbsp;
			<button onClick={() => props.setEditing(false)} className="btn btn-primary">
				Annuler
			</button>
		</form>
	)
}

export default EditUserForm