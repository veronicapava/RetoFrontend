import React from "react"

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">ID: {user.id}</p>
        <p className="card-text">Document Type: {user.documentType}</p>
        <p className="card-text">Document Number: {user.documentNumber}</p>
        <p className="card-text">Name: {user.name}</p>
        <p className="card-text">Last Name: {user.lastName}</p>
        <p className="card-text">Address: {user.address}</p>
        <p className="card-text">State: {user.state}</p>
      </div>
    </div>
  )
}

export default UserCard
