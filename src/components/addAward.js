import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAwards } from '../graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { createAward as createAwardMutation, deleteAward as deleteAwardMutation } from '../graphql/mutations';
const initialFormState = { name: '', description: '' }

function AddAward() {
    const [awards, setAwards] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    
    async function createAward() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createAwardMutation, variables: { input: formData } });
        if (formData.image) {
          const image = await Storage.get(formData.image);
          formData.image = image;
        }
        setAwards([ ...awards, formData ]);
        setFormData(initialFormState);
      }
      async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);

      }
      return (
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
        type="file"
        onChange={onChange}
      />
      <button onClick={createAward}>Create Award</button>
      </div>
      )
}

export default AddAward;