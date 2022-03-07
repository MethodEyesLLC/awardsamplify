

import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Link } from "react-router-dom";
import '../buttons.scss'
import { createAgency as createAgencyMutation, deleteAgency as deleteAgencyMutation } from '../graphql/mutations';
const initialFormState = 
        { name: '', description: '', parentco: '', type: '', openforentries: '',
          deadline1: '', deadline2: '', deadline3: '', fee1: '', fee2: '', fee: '',
          eligibility: '', winnersannouncement: '', websitelink: '', notes: ''
        }

function AddAgency() {
    const [agencies, setAgencies] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    
    async function createAgency() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createAgencyMutation, variables: { input: formData } });
        if (formData.image) {
          const image = await Storage.get(formData.image);
          formData.image = image;
        }
        setAgencies([ ...agencies, formData ]);
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
            Add an Agency
          </h1>

    
        <div><a href="/">
        <div className="button3"  style={{marginLeft: "25vw"}}>
      <div class='line'></div> 
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <Link className="seelink" to="/" >Back to Dashboard</Link>
      </div>   
          
          </a></div>

   
    <div className="createform">

         
        <input  
        className="forminputfield"
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Award name"
        value={formData.name}
      />
      <input
          className="forminputfield"
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Award description"
        value={formData.description}
      />
      <input
          className="forminputfield"
        onChange={e => setFormData({ ...formData, 'parentco': e.target.value})}
        placeholder="Parent Company"
        value={formData.parentco}
      />
      <select
          className="typedropdown"
        onChange={e => setFormData({ ...formData, 'type': e.target.value})}
        placeholder="Award Type"
        value={formData.type}>
          <option value="" disabled selected>
          Type of Award
          </option>
          <option>
            PR
          </option>
          <option>
            Individual
          </option>
          <option>
            Purpose
          </option>
          <option>
            Healthcare
          </option>
          <option>
            Agency
          </option>
          <option>
            Creative
          </option>
          <option>
            Best Places
          </option>
          <option>
            B2B
          </option>
          <option>
            Effectiveness
          </option>
          <option>
            In-House
          </option>
        </select>
        <br></br>
        

      <input
          className="forminputfield"
        onChange={e => setFormData({ ...formData, 'websitelink': e.target.value})}
        placeholder="Website Link"
        value={formData.websitelink}
      />
      <input
          className="forminputfield"
        onChange={e => setFormData({ ...formData, 'notes': e.target.value})}
        placeholder="Notes"
        value={formData.notes}
      />
      <label for="file-upload" class="button2">
        <div className="awardlink">
          Upload File
        <input
        id="file-upload"
        style={{fontSize: "75%"}}
          type="file"
          onChange={onChange}
        />
        </div>
      </label>



      <button className="button1" style={{fontSize: "80%"}} onClick={createAgency}>Create Agency</button>
      </div>
      </div>
      )
}

export default AddAgency;
