import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator, IconArrowForwardIos } from '@aws-amplify/ui-react';
import { getAgency } from '../graphql/queries';
import { updateAward } from '../graphql/mutations';
import { Link, useLocation } from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';



function ShowAgency () {
    const [agencies, setagencies] = useState([]);
    const [newDeleteArray, setDeleteArray] = useState([])
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [sort, setSort] = useState("")
    const location = useLocation()

    useEffect(() => {
        fetchagencies();
      }, []);

    const { agency } = location.state

    async function fetchagencies() {
      console.log(agency)
      let agencyid = agency.id

        const apiData = await API.graphql({ query: getAgency, variables: {id: (agencyid)}
         });
         console.log(apiData)
        const agenciesFromAPI = apiData.data.getAgency.awards.items;
        console.log(agenciesFromAPI)
        await Promise.all(agenciesFromAPI.map(async agency => {
          if (agency.image) {
            const image = await Storage.get(agency.image);
            agency.image = image;
          }
          return agency;
        }))
        console.log(apiData.data.getAgency)
        setagencies(apiData.data.getAgency.awards.items);
      }
      async function deleteAgencyAward({ id }) {
        console.log(id)
        const newAgenciesArray = agencies.filter(agency => agency.id !== id);
        const deletedItem = agencies.filter(agency => agency.id === id);
        setagencies(newAgenciesArray);
        (newAgenciesArray).map(id => {
          setDeleteArray(id.id)
        })

        await API.graphql({ query: updateAward, variables: { input: { 
          id: id,
          agencyAwardsId: null
        
        
        } }});
      }
    return(
      <div style={{}}>
                  <div className="showagencypage">
                    <div className="showagencypanelleft">
                      <ul>
                        Name:
                      </ul>
                      <ul>
                        Description:
                      </ul>
                      <ul>
                        Parent Company:
                      </ul>
                      <ul>
                        Type of Agency:
                      </ul>
                      <ul>
                        Website Link:
                      </ul>

                    </div>


                    
                    <div className="showagencypanelright">
                     {/* {
                      agencies.map(agency => ( */}
                          <div key={agency.id || agency.name}>
                          <ul>{agency.name}</ul>
                          <ul>{agency.description}</ul>
                          <ul>{agency.parentco}</ul>
                          <ul>{agency.type}</ul>
                          <ul>{agency.websitelink}</ul>
                    </div>
                 
                   </div>
                   </div>
                    <div className="showagencypage2">
 
                    <div className="showawardsdash">

                    {
                      agencies.map(agency => (
                      <div className="awardsdashitem" key={agency.id || agency.name}>
                      <h2>{agency.name}</h2>
                      <h3>Description: </h3>
                      <p>{agency.description}</p>
                      <h3>First Deadline:</h3>
                      <p>{agency.deadline1}</p>
                        {console.log(agency)}
                     

                    </div>
                         ))}
                    </div>
                    </div>
                   </div>

    )
}

export default ShowAgency;