import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import DataTable from './DataTable';

const MainForm = () => {
  const [data, setData] = useState([]);
  const [fullUrl, setFullUrl] = useState('');

  useEffect(() => {
    getUrls();
  }, [])

  const getUrls = async () => {
    const response = await axios.get('http://localhost:3001/urls');
    if(response.status === 200){
      setData(response.data);
      setFullUrl('')
    }
  };

  const AddUrl = async (data) => {
    const response = await axios.post('http://localhost:3001/url', {full_url: data});
    if(response.status === 200){
      getUrls();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AddUrl(fullUrl);
  }

  const handleInputChange = (e) => {
    setFullUrl(e.target.value)
  }

  return (
    <div>
      <form action="/shortUrls" method="POST" className="my-4 form-inline" onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-md-11 col-12">
            <label htmlFor="fullUrl" className="col-form-label visually-hidden">Url</label>
            <input 
              required 
              placeholder="Paste the url" 
              type="url" 
              name="fullUrl" 
              id="fullUrl" 
              onChange={handleInputChange}
              value={fullUrl || ''}
              className="form-control col mr-2" 
            />
          </div>
          <div className="col-md-1 col-12 d-grid">
            <button className="btn btn-success" type="submit">Generate</button>
          </div>
        </div>
      </form>
      {data.length > 0 &&  <DataTable data={data}/>}
    </div>
  )
}

export default MainForm;