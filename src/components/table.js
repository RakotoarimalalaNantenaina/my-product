import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = props => (

	<table className="table table-bordered">
		<thead>
			<tr>
                <th scope="col"><center>Id</center></th>
				<th scope="col"><center>Produits</center></th>
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
						<td>
						
						<p id="prai">{user.prix.substring(0,1).toUpperCase()+user.prix.substring(1).toLowerCase()}</p>
							
						</td>
						<td>
						<center>
							<button className="btn btn-danger" 
								onClick={() => {
												confirmAlert({
													title: 'Suppression Produit',
													message: user.produit,
													buttons: [
																{
																label: 'OUI',
																onClick: () => props.deleteUser(user.id)
																},
																{
																label: 'NON',
																onClick: () => ''
																}
															]
															}
															)
												}
										}>
										X
							</button>&nbsp;&nbsp;&nbsp;
							<button className="btn btn-success"
								onClick={() => {
											 props.editRow(user)
										}}
										 
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
