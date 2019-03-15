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

	const addition=()=>{
		var init=0;

		for(var i=0;i<users.length;i++){
				init = init + parseInt(users[i].prix);
		}
			
		 var a=[init]   

		var numero = new Intl.NumberFormat("es-ES");
		var forma = a.map(numero.format);     
		
		var av =  document.getElementById('var');
		av.innerHTML = forma;

		return forma.join("; ")
		}

  return (
    <div className="container">
		<center>
      <div className="flex-row">
		
        <div className="flex-large">
          <AddUserForm addUser={addUser} setCount={setCount} count={count}/>
        </div><br></br>
        <div className="flex-large">
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>	
        </div>
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<button id="botton" className="btn btn-secondary" onClick={() => {addition()}} >TOTAL</button>
					</div>
				</div>	
				<div className="container">
					<p id="totalari">TOTAL = <span id="var"></span> &nbsp;Ar</p>
				</div><br/>
				{editing ? (
            <div>
								
								<div id="edit">
                <EditUserForm
								
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
										updateUser={updateUser}
                />
							</div>
            </div>
        ) : (
            <div>
            </div>
      
			)}
			
					
      </div>
			</center>
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
					var yes = document.getElementById('erreur')
					yes.innerHTML = "";
					props.addUser(user)
					props.setCount(props.count +1)
					setUser(initialFormState)		
			}

			}
		}
		>	<center>
			<div className="row">
					<div className="col-md-4">
						<label id="nom">Produit &nbsp;&nbsp;</label>
						<input type="text" name="produit" value={user.produit} onChange={handleInputChange} />
					</div>
					<div className="col-md-4">
							<label id="nom">&nbsp;&nbsp;Prix &nbsp;&nbsp;</label>
							<input id="inputprix" type="text" name="prix" value={user.prix} onChange={handleInputChange} /> 
							&nbsp;&nbsp;&nbsp;<span id="nom">Ar</span><br/>
							<p id="erreur"></p>
					</div>
					<div className="col-md-4">
					 <button className="btn btn-primary">Ajouter</button>
					 <script src="components/erreur.js"></script>
					</div>
			</div>
			</center>
		</form>
	)
}	

export default App