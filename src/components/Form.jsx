import React from "react"

function Form() {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="documentType" className="form-label">
            Document type
          </label>
          <select
            className="form-select"
            id="exampleSelect1"
            // value={enabled}
            required
          >
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
          <input type="text" className="form-control" id="documentNumber" />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastName" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone number
          </label>
          <input type="text" className="form-control" id="phone" />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="address" />
        </div>

        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select
            className="form-select"
            id="exampleSelect1"
            // value={enabled}
            required
          >
            <option>Active</option>
            <option>Inactive</option>
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
