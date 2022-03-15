import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAwards } from '../graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { createAward as createAwardMutation, deleteAward as deleteAwardMutation } from '../graphql/mutations';
import { Link } from "react-router-dom";
const initialFormState = { name: '', description: '' }

function ShowAward(props) {
    const [awards, setAwards] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    let award = props.data
    // useEffect(() => {
    //     fetchAwards(awardid);
    //   }, []);

    // async function fetchAwards(id) {
    //     const apiData = await API.graphql({ query: listAwards, variables: {input: {id} }});
    //     const awardsFromAPI = apiData.data.listAwards.items;
    //     await Promise.all(awardsFromAPI.map(async award => {
    //       if (award.image) {
    //         const image = await Storage.get(award.image);
    //         award.image = image;
    //       }
    //       return award;
    //     }))
    //     setAwards(awardsFromAPI[0]);
    //     togglePopup()
    //   }


    //      async function deleteAward({ id }) {
    //     const newAwardsArray = awards.filter(award => award.id !== id);
    //     setAwards(newAwardsArray);
    //     await API.graphql({ query: deleteAwardMutation, variables: { input: { id } }});
    //   }
    return (

        <div className="awardwrapper" >
            {/*           
          {isOpen == false ?
          null
                <button style={{marginBottom: "2vh"}} onClick={() => fetchAwards(award.id)}>Show award</button>
                : 
                 */}
            <div className="showawarddash">

                {/* <button style={{marginBottom: "2vh"}}onClick={() => togglePopup()}>Close Show</button> */}


                <div className="awarddashitem" key={awards.id || awards.name}>

                    {/* <h2>{awards.name}</h2>
            <h3>Description:</h3>
            <p>{awards.description}</p> */}
                    <h3>Parent Company:</h3>
                    <p>{awards.parentco}</p>
                    <h3>Type of Show:</h3>
                    <p>{awards.type}</p>
                    <h3>Open for Entries Date:</h3>
                    <p>{awards.openforentries}</p>
                    <h3>Deadline 1:</h3>
                    <p>{awards.deadline1}</p>
                    <h3>Fee 1:</h3>
                    <p>{awards.fee}</p>
                    <h3>Deadline 2:</h3>
                    <p>{awards.deadline2}</p>
                    <h3>Fee 2:</h3>
                    <p>{awards.fee1}</p>
                    <h3>Deadline 3:</h3>
                    <p>{awards.deadline3}</p>
                    <h3>Fee 3:</h3>
                    <p>{awards.fee2}</p>
                    <h3>Eligibility Period:</h3>
                    <p>{awards.eligibility}</p>
                    <h3>Winner's Announcement:</h3>
                    <p>{awards.winnersannouncement}</p>
                    <h3>Website Link:</h3>
                    <p>{awards.websitelink}</p>
                    <h3>Additional Notes:</h3>
                    <p>{awards.notes}</p>

                    {/* <button style={{marginBottom: "2vh"}}onClick={() => deleteAward(award)}>Delete award</button> */}
                    {
                        awards.image && <img src={awards.image} />
                    }
                    {/* <button style={{marginBottom: "2vh"}}onClick={() => togglePopup()}>Close Show</button> */}
                </div>


            </div>




        </div>
    )
}

export default ShowAward;