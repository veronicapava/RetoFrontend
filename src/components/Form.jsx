import React, { useState } from "react"

function Form() {
  const [documentType, setDocumentType] = useState([""])
  const [documentNumber, setDocumentNumber] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [state, setState] = useState([""])

  const [sending, setSending] = useState(false)

  const sendUser = (e) => {
    e.preventDefault()

    const user = {
      documentType: documentType,
      documentNumber: documentNumber,
      name: name,
      lastName: lastName,
      email: email,
      phone: phoneNumber,
      address: address,
      state: state,
    }

    setSending(true)

    const resetInputs = () => {
      setDocumentType()
      setDocumentNumber("")
      setName("")
      setLastName("")
      setEmail("")
      setPhoneNumber("")
      setAddress("")
      setState()
    }

    fetch("http://localhost:8090/api/collections/usuarios/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((e) => {
      console.log(e)
      console.log(user)
      resetInputs()
      setSending(false)
    })
  }

  return (
    <div className="container">
      <form onSubmit={sendUser}>
        <div className="mb-3">
          <label htmlFor="documentType" className="form-label">
            Document type
          </label>
          <select
            className="form-select"
            id="exampleSelect1"
            onChange={(e) => setDocumentType(e.target.value)}
            required
          >
            <option disabled selected>
              Select an option
            </option>
            <option>CC</option>
            <option>CE</option>
            <option>PS</option>
            <option>TI</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="documentNumber" className="form-label">
            Document Number
          </label>
          <input
            type="text"
            className="form-control"
            id="documentNumber"
            onChange={(e) => setDocumentNumber(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastName" onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone number
          </label>
          <input type="text" className="form-control" id="phone" onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select className="form-select" id="exampleSelect1" onChange={(e) => setState(e.target.value)} required>
            <option disabled selected>
              Select an option
            </option>
            <option>active</option>
            <option>inactive</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
