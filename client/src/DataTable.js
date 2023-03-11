import React from "react";
import "./App.css";

const DataTable = (props) => {
  // console.log('props =>', props);

  return (
    <div className="table table-responsive">
      <table className="table table-light table-striped rounded-4 ">
        <thead>
          <tr>
            <th>Full URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {props.data.map((url) => {
            console.log('url.clicks =>', url.clicks);
            return <tr key={url.id}>
              <td className="lh-lg"><a href={url.full_url}>{url.full_url}</a></td>
              <td className="lh-lg"><a href={url.short_url}>{url.short_url}</a></td>
              <td className="lh-lg">{url.clicks === undefined ? 0 : url.clicks}</td>
              <td>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-outline-success me-2" type="submit">Edit</button>
                  <button className="btn btn-outline-danger" type="submit">Delete</button>
                </div>
              </td>
            </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;