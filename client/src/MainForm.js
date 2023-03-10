import React from "react";
import "./App.css";

const MainForm = () => {
  return (
    <form action="/shortUrls" method="POST" className="my-4 form-inline">
      <div className="row g-3 align-items-center">
        <div className="col-md-11 col-12">
          <label htmlFor="fullUrl" className="col-form-label visually-hidden">Url</label>
          <input required placeholder="Paste the url" type="url" name="fullUrl" id="fullUrl" className="form-control col mr-2" />
        </div>
        <div className="col-md-1 col-12 d-grid">
          <button className="btn btn-success" type="submit">Generate</button>
        </div>
      </div>
    </form>
  )
}

export default MainForm;