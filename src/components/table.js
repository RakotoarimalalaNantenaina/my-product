import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = props => (
		
	<table class="table table-bordered">
		<thead class="thead-dark">
			<tr>
                <th scope="col"><center>id</center></th>
				<th scope="col"><center>Produit</center></th>
				<th scope="col"><center>Prix</center></th>
				<th scope="col"><center>Actions</center></th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
                        <td><center>{user.id}</center></td>
						<td><center id="prod">{user.produit}</center></td>
						<td id="prai">{user.prix}</td>
						<td>
						<center><button className="btn btn-danger" onClick={() => {
															confirmAlert({
															title: 'Suppression Produit',
															message: user.produit,
															buttons: [
																{
																label: 'Oui',
																onClick: () => props.deleteUser(user.id)
																},
																{
																label: 'Non',
																onClick: () => ''
																}
															]
															})}}>X
								</button>
								&nbsp;&nbsp;&nbsp;<button
										onClick={() => {
											 props.editRow(user)
										}}
										className="btn btn-success" 
										>
										Edit
								</button>
						</center>
						</td>
					</tr>
				))
			) : (
				<tr>	
				</tr>
			)}
			
		</tbody>
	</table>
)

export default UserTable