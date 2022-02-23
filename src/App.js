import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAwards } from './graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { createAward as createAwardMutation, deleteAward as deleteAwardMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [awards, setAwards] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchAwards();
  }, []);

  async function fetchAwards() {
    const apiData = await API.graphql({ query: listAwards });
    const awardsFromAPI = apiData.data.listAwards.items;
    await Promise.all(awardsFromAPI.map(async award => {
      if (award.image) {
        const image = await Storage.get(award.image);
        award.image = image;
      }
      return award;
    }))
    setAwards(apiData.data.listAwards.items);
  }

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

  async function deleteAward({ id }) {
    const newAwardsArray = awards.filter(award => award.id !== id);
    setAwards(newAwardsArray);
    await API.graphql({ query: deleteAwardMutation, variables: { input: { id } }});
  }
  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchAwards();
  }

  return (
    <Authenticator>
    {({ signOut, user }) => (
    <div className="App">
      <h1>My Awards App</h1>
      <input  
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Award name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Award description"
        value={formData.description}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createAward}>Create Award</button>
      <div style={{marginBottom: 30}}>
        {
          awards.map(award => (
            <div key={award.id || award.name}>
              <h2>{award.name}</h2>
              <p>{award.description}</p>
              <button onClick={() => deleteAward(award)}>Delete award</button>
              {
                award.image && <img src={award.image} style={{width:400}} />
              }
            </div>
          ))
        }
      </div>
      <button onClick={signOut}>Sign out</button>
    </div>
    )}
    </Authenticator>
  );
}

export default App;