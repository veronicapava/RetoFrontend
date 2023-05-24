import React from "react"

const SearchPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3">
              <label htmlFor="documentNumber" className="form-label">
                Search user by Document Number
              </label>
              <input type="text" className="form-control" id="documentNumber" />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Search user by Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col">
          <form>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Search user by ID
              </label>
              <input type="text" className="form-control" id="id" />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
