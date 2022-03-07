import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator, IconArrowForwardIos } from '@aws-amplify/ui-react';
import { getAgencyAwards } from '../graphql/queries';
import { Link, useLocation } from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';



function ShowAgency () {
    const [agencies, setagencies] = useState([]);
    const [singleagency, setsingleagency] = useState([])
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [sort, setSort] = useState("")
    const location = useLocation()

    useEffect(() => {
        fetchagencies();
      }, []);

    const { agency } = location.state
    console.log(agency)
    async function fetchagencies() {
      let agencyid = agency.id
        const apiData = await API.graphql({ query: getAgencyAwards, variables: {awardID: {agencyid}}
         });
        const agenciesFromAPI = apiData.data.getAgencyAwards.items;
        console.log(agenciesFromAPI)
        await Promise.all(agenciesFromAPI.map(async agency => {
          if (agency.image) {
            const image = await Storage.get(agency.image);
            agency.image = image;
          }
          return agency;
        }))
        setagencies(apiData.data.getAgencyAwards.items);
      }

    return(
                  
      <div className="showawardsdash">

      {
        agencies.map(award => (
            <div className="awardsdashitem" key={award.id || award.name}>
            <h2>{award.award.name}</h2>
            <h3>Description: </h3>
            <p>{award.description}</p>
            <h3>First Deadline:</h3>
            <p>{award.deadline1}</p>
      


     
      {
          award.image && <img src={award.image} style={{width:400}} />
      }

      </div>
              

        )

        )

        }
     

        </div>
    )
}

export default ShowAgency;