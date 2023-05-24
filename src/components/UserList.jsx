import React, { useEffect, useState } from "react"
import fetchUsers from "../utils/fetch"
import UserCard from "./User"

const UsersList = () => {
  const [users, setUsers] = useState([])
  //   const baseUrl = `${process.env.REACT_APP_API_URL}`
  //   const endpoint = `/api/collections/usuarios/records`

  useEffect(() => {
    async function fetchData() {
      let result = await fetchUsers("http://localhost:8090/api/collections/usuarios/records")
      console.log(result.items)
      setUsers(result.items)
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-4">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersList
