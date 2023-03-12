import React, { useState } from "react";
import "./App.css";
import Modal from 'react-bootstrap/Modal';

const DataTable = (props) => {
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [urlId, setUrlId] = useState(null);

  const handleClose = () => {
    setUrlId(null)
    setUpdateModalVisible(false);
    setDeleteModalVisible(false);
  };

  const handleShow = (id, action) => {
    setUrlId(id);
    if(action === 'update'){
      setUpdateModalVisible(true);
    }else{
      setDeleteModalVisible(true);
    }
  }

  const handleRedirect = (e) => {
    const allData = props.data;
    let fullUrl = '';
    allData.map((url) => { 
      if(url.short_url !== e){
        fullUrl = url.full_url
      }
    })
  }

  return (
    <div className="table table-responsive" id="data-table">
      <table className="table table-light table-striped rounded-4 ">
        <thead>
          <tr>
            <th>No</th>
            <th>Full URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {props.data.map((url, index) => {
            return <tr key={url.id}>
              <td className="lh-lg">{index+1}</td>
              <td className="lh-lg"><a href={url.full_url}>{url.full_url}</a></td>
              <td className="lh-lg"><a href='#' onClick={() => handleRedirect(url.short_url)}>{url.short_url}</a></td>
              <td className="lh-lg">{url.clicks === undefined ? 0 : url.clicks}</td>
              <td>
                <div className="d-flex justify-content-center align-items-center">
                  <button 
                    className="btn btn-outline-success me-2" 
                    type="button"
                    data-bs-toggle="modal" 
                    data-bs-target="urlUpdateModal" 
                    onClick={() => handleShow(url.id, 'update')}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-outline-danger" 
                    type="button"
                    data-bs-toggle="modal" 
                    data-bs-target="urlUpdateModal" 
                    onClick={() => handleShow(url.id, 'delete')}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            })
          }
        </tbody>
      </table>

      <Modal centered show={updateModalVisible} onHide={handleClose} id={urlId} backdrop="data-table" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="fullUrl" className="col-form-label">Url</label>
            <input required placeholder="Paste the url" type="url" name="fullUrl" id="fullUrl" className="form-control col mr-2" />
          </div>
          <div className="mb-3 text-center fw-bolder">
            The short url will be updated after you submit.
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-outline-danger me-2" type="button">Cancel</button>
            <button className="btn btn-outline-success" type="submit">Submit</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal centered show={deleteModalVisible} onHide={handleClose} id={urlId} backdrop="data-table" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Sure to delete this?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3 text-center fw-bolder">
            Cannot be undone once confirmed.
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-outline-danger me-2" type="button">No</button>
            <button className="btn btn-outline-success" type="submit">Yes</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DataTable;