import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator, IconArrowForwardIos } from '@aws-amplify/ui-react';
import { getAgency, getCampaign, listCampaigns } from '../graphql/queries';
import { updateAward } from '../graphql/mutations';
import { Link, useLocation } from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';



function ShowAgency () {
    const [agencies, setagencies] = useState([]);
    const [newDeleteArray, setDeleteArray] = useState([])
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [sort, setSort] = useState("")

    const [campaigns, setcampaigns] = useState([])
    const location = useLocation()
    useEffect(() => {
        fetchagencies();
        fetchcampaigns()
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
      
    async function fetchcampaigns() {
      let agencyid = agency.id

      console.log(agencyid)
        const apiData = await API.graphql({ query: listCampaigns}
          
      );

        const agenciesFromAPI = apiData.data.listCampaigns.items;
        await Promise.all(agenciesFromAPI.map(async agency => {
          if (agency.image) {
            const image = await Storage.get(agency.image);
            agency.image = image;
          }
          return agency;
        }))
        console.log(apiData.data.listCampaigns.items)
        await Promise.all(agenciesFromAPI.filter(agency => agency.agencyCampaignsId == agencyid).map(filteredAgency => (

          setcampaigns(oldArray => [...oldArray, filteredAgency])
        ))

        )
   

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
          <h1>
                      Agency Information
                    </h1>
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
                    <h1>
                        Campaigns
                      </h1>
                    <div className="showawardsdash">
                    
                    {
                      campaigns.map(agency => (
                      <div className="awardsdashitem" key={agency.id || agency.name}>
                      <h2>{agency.name}</h2>
                      <h3>Description: </h3>
                      <p>{agency.content}</p>
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