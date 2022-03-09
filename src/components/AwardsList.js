import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator, IconArrowForwardIos } from '@aws-amplify/ui-react';
import { listAwards } from '../graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { createAward as createAwardMutation, deleteAward as deleteAwardMutation } from '../graphql/mutations';
import { Link } from "react-router-dom";
import ShowAwards from './ShowAward'
import Header from "./header"
import Modal from 'react-modal';



let isMobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))

const initialFormState = { name: '', description: '' }

const customStyles = {
    
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      fontSize: "75%",
      width: '60vw',
      height: '100vh',
      paddingTop: "5vh",
      textAlign: 'center',
      backgroundColor: "rgb(27, 26, 26)"
    },

}



function SeeAwards () {
   let subtitle;
    const [awards, setAwards] = useState([]);
    const [singleaward, setsingleaward] = useState([])
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [sort, setSort] = useState("")

    useEffect(() => {
        fetchAwards();
      }, []);
      function openModal(id) {
        const newAwardsArray = awards.filter(award => award.id == id);
        setsingleaward(newAwardsArray[0])
        setIsOpen(true);

      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
  async function fetchAwards() {
        const apiData = await API.graphql({ query: listAwards});
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
    await API.graphql({ query: deleteAwardMutation, variables: { input: { id } }});
  }
  async function sortAwards(parameter) {
    console.log(parameter)
    if (parameter === "ascendingalphabetical") {

      const sorted = [...awards].sort((a, b) => a.name.localeCompare(b.name))
        console.log(sorted);
        setAwards(sorted);
  
    }
    if (parameter === "descendingalphabetical") {

      const sorted = [...awards].sort((a, b) => b.name.localeCompare(a.name))
      console.log(sorted);
      setAwards(sorted);

  }
  }
  console.log(awards)
    return (
   
      <div className="AwardsShow">
        <div className="awardshowtopitem">

          <h1>Award Show List</h1>
          </div>
          <div className="awardshowtop">
      <a className="button1" href="/">
      <div class='line'></div> 
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <Link className="seelink" to="/" >Back to Dashboard</Link>
      </a>   
      <a className="button1" href="/addaward">
      <div class='line'></div> 
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
        <Link className="seelink" to="/addaward">Add Award Show</Link>
      </a>   


          </div>
           

              <p> Sort</p>
               
            
            <select className="typedropdown" style={{width: "5vw"}}onChange={(e) => sortAwards(e.target.value)}>
            
            <option
                value="">
                 
                </option>
                <option
                value="ascendingalphabetical">
                  A-Z
                </option>
                <option value="descendingalphabetical">
                  Z-A
                </option>
            </select>
          
            <div className="showawardsdash">

                {
            awards.map(award => (
                <div className="awardsdashitem" key={award.id || award.name}>
                <h2>{award.name}</h2>
                <h3>Description: </h3>
                <p>{award.description}</p>
                <h3>First Deadline:</h3>
                <p>{award.deadline1}</p>
                
                <button className="button4" style={{color: "white"}} onClick={() => openModal(award.id)}>More Information</button>


                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >

                  <div style={{color: "white", fontSize: "50%"}}>
                        <h2 style={{fontSize: "20px"}}>{singleaward.name}</h2>
                        <h3>Parent Company:</h3>
                        <p>{singleaward.parentco}</p>
                        <h3>Type of Show:</h3>
                        <p>{singleaward.type}</p>
                        <h3>Open for Entries Date:</h3>
                        <p>{singleaward.openforentries}</p>
                        <h3>Deadline 1:</h3>
                        <p>{singleaward.deadline1}</p>
                        <h3>Fee 1:</h3>
                        <p>{singleaward.fee}</p>
                        <h3>Deadline 2:</h3>
                        <p>{singleaward.deadline2}</p>
                        <h3>Fee 2:</h3>
                        <p>{singleaward.fee1}</p>
                        <h3>Deadline 3:</h3>
                        <p>{singleaward.deadline3}</p>
                        <h3>Fee 3:</h3>
                        <p>{singleaward.fee2}</p>
                        <h3>Eligibility Period:</h3>
                        <p>{singleaward.eligibility}</p>
                        <h3>Winner's Announcement:</h3>
                        <p>{singleaward.winnersannouncement}</p>
                        <h3>Website Link:</h3>
                        <p>{singleaward.websitelink}</p>
                        <h3>Additional Notes:</h3>
                        <p>{singleaward.notes}</p>

                        <button className="button4" style={{color: "white"}} onClick={closeModal}>Close</button>
                        </div>

                </Modal>
                <button className="button4"style={{marginBottom: "2vh", color: "white"}}onClick={() => deleteAward(award)}>Delete award</button>
                {
                    award.image && <img src={award.image} style={{width:400}} />
                }

                </div>
                

          )
          
          )

        }
         <div className="awarddashitem" key={awards.id || awards.name}>

 


        {/* <button style={{marginBottom: "2vh"}}onClick={() => deleteAward(award)}>Delete award</button> */}
        {
          awards.image && <img src={awards.image}  />
        }
        {/* <button style={{marginBottom: "2vh"}}onClick={() => togglePopup()}>Close Show</button> */}
        </div>

      </div>
    </div>
    
    )
}

export default SeeAwards; 