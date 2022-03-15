import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAwards } from './graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { createAward as createAwardMutation, deleteAward as deleteAwardMutation } from './graphql/mutations';
import { Link } from "react-router-dom";
import Header from "./components/header"
import './amplify.css'

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


  async function deleteAward({ id }) {
    const newAwardsArray = awards.filter(award => award.id !== id);
    setAwards(newAwardsArray);
    await API.graphql({ query: deleteAwardMutation, variables: { input: { id } } });
  }


  return (
    <div >
      <Header>

      </Header>
      <div style={{ paddingTop: "35vh", backgroundColor: "#457D83", paddingBottom: "5vh" }}>


        <Authenticator>

          {({ signOut, user }) => (
            <div className="HomePage" >
              <div>

                <div style={{}}>


                </div>
                <div className="homebuttoncontainer">

                  <a href='/seeawards'>
                    <div className="button1">
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <Link to="/seeawards" className="link">See Award Shows</Link>
                    </div>
                  </a>

                  <a href='/addaward'>

                    <div className="button1">
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>

                      <Link className="link" to="/addaward">Add Award Show</Link>
                    </div>
                  </a>
                  <a href='/addagency'>
                    <div className="button1">
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>

                      <Link className="link" to="/addagency">Add Agency</Link>
                    </div>
                  </a>

                  <a href='/agencylist'>
                    <div className="button1">
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>

                      <Link className="link" to="/agencylist">Agency List</Link>
                    </div>
                  </a>
                  <a onClick={signOut}>


                    <div className="button1">
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>
                      <div class='line'></div>

                      <a style={{ marginLeft: "17.5px" }} className="link" onClick={signOut}>Sign Out</a>

                    </div>
                  </a>
                </div>


                {/* {
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
        } */}
              </div>

            </div>
          )}
        </Authenticator>
      </div>
      <footer style={{ textAlign: "center", paddingTop: "3vh" }}>
        <h2 style={{ color: "white" }}>
          Built By Method Eyes, LLC.
        </h2>
      </footer>


    </div>

  );
}

export default App;