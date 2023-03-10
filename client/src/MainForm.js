import React from "react";
import "./App.css";

const MainForm = () => {
  return (
    <form action="/shortUrls" method="POST" className="my-4 form-inline">
      <div className="row g-3 align-items-center">
        <div className="col-1 text-end">
          <label htmlFor="fullUrl" className="col-form-label">Url</label>
        </div>
        <div className="col-10">
          <input required placeholder="Paste the url" type="url" name="fullUrl" id="fullUrl" className="form-control col mr-2" />
        </div>
        <div className="col-1 d-flex">
          <button className="btn btn-success" type="submit">Generate</button>
        </div>
      </div>
    </form>
  )
}

export default MainForm;