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
					if(isNaN(user.prix)){
						var erreur = document.getElementById('error')
						erreur.innerHTML = 'Entrer un nombre'
					}else{
						props.updateUser(user.id, user)
					}
			}}
		>	<div id="over">
			<input type="text" name="prix" value={user.prix} onChange={handleInputChange} />
			<p id="error"></p>
			<button className="btn btn-secondary">OK</button>&nbsp;&nbsp;
			<button onClick={() => props.setEditing(false)} className="btn btn-primary">
				Annuler
			</button>
			</div>
		</form>
	)
}

export default EditUserForm