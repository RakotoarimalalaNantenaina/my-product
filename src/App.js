import React, { useState } from 'react'
import UserTable from './components/table'
import EditUserForm from './components/EditUserForm'
import './App.css';

const App = () => {
  const usersData = [
    
  ]
	const [users, setUsers] = useState(usersData)
  const [count, setCount] = useState(0)
  const addUser = user => {
		user.id = count
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id))
	}

	const [ editing, setEditing ] = useState(false)

	const initialFormState = { id: null, produit: '', prix: '' }

	const [ currentUser, setCurrentUser ] = useState(initialFormState)

	

	const editRow = user => {
		setEditing(true)
	
		setCurrentUser({ id: user.id, produit: user.produit, prix: user.prix })
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
	
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <AddUserForm addUser={addUser} setCount={setCount} count={count}/>
        </div><br></br>
        <div className="flex-large">
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>

				<div className="flex-large" id="edit">

				{editing ? (
            <div>
                <EditUserForm
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
            </div>
        ) : (
            <div>
            </div>
      
      )}
			
				</div>
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<button class="btn btn-secondary">TOTAL</button><br/><br/>
						<div className="total"><span>TOTAL =   Ar</span></div>
					</div>
				</div>
      </div>
    </div>
  )
}

const AddUserForm = props => {
	const initialFormState = { id: null, produit: '', prix: '' }
	const [ user, setUser ] = useState(initialFormState)
	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.produit || !user.prix) return

				if(isNaN(user.prix)){
					var erreur = document.getElementById('erreur')
					erreur.innerHTML = 'Entrer un nombre'
			}else{
					var erreur = document.getElementById('erreur')
					erreur.innerHTML = "";
					props.addUser(user)
					props.setCount(props.count +1)
					setUser(initialFormState)		
			}

			}
		}
		>
			<div className="row">
					<div className="col-md-4">
						<label id="nom">Produit &nbsp;&nbsp;</label>
						<input type="text" name="produit" value={user.produit} onChange={handleInputChange} />
					</div>
					<div className="col-md-4">
							<label id="nom">&nbsp;&nbsp;Prix &nbsp;&nbsp;</label>
							<input id="inputprix" type="text" name="prix" value={user.prix} onChange={handleInputChange} /><br/>
							<p id="erreur"></p>
					</div>
					<div className="col-md-4">
					 <button class="btn btn-primary">Ajouter</button>
					 <script src="components/erreur.js"></script>
					</div>
			</div>
		</form>
	)
}	

export default App