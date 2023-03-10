import React from "react";
import "./App.css";

const DataTable = (props) => {

  return (
    <div className="table table-responsive">
      <table className="table table-light table-striped rounded-4 ">
        <thead>
          <tr>
            <th>Full URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {props.data.map((shortUrl) => {
            return <tr key={shortUrl.id}>
              <td><a href={shortUrl.full}>{shortUrl.full}</a></td>
              <td><a href={shortUrl.short}>{shortUrl.short}</a></td>
              <td>{shortUrl.clicks}</td>
            </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;