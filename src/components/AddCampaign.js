

import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link, useLocation } from "react-router-dom";
import '../buttons.scss'
import { createCampaign } from '../graphql/mutations';

const initialFormState =
{
  content: '',
  agencyCampaignsId: ''
}


function AddCampaign() {
  const [agencies, setAgencies] = useState([]);
  const [formData, setFormData] = useState(initialFormState);


  const location = useLocation()
  const { agency } = location.state
  console.log(agency)


  async function CreateCampaign() {
    // if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createCampaign, variables: {
        input: {
          content: formData.content,
          agencyCampaignsId: agency.id
        }

      }
    });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setAgencies([...agencies, formData]);
    setFormData(initialFormState);
  }
  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);

  }

  console.log(formData)
  return (
    <div className="createpage">
      <h1>
        Add a Campign for {agency.name}
      </h1>

      <div className="awardshowtop">
        <div><a href="/">
          <div className="button1" style={{ marginLeft: "25vw" }}>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <Link className="seelink" to="/" >Back to Dashboard</Link>

          </div>

        </a></div>
        <a href="/agencylist">


          <div className="button1" style={{ marginLeft: "25vw" }}>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <Link className="seelink" to="/agencylist" >Agency Dashboard</Link>
          </div>
        </a>
      </div>



      <div className="createform">


        <input
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'content': e.target.value })}
          placeholder="Campaign name"
          value={formData.content}
        />



        <br></br>






        <button className="button1" style={{ fontSize: "80%" }} onClick={CreateCampaign}>Create Campaign</button>
      </div>
    </div>
  )
}

export default AddCampaign;
