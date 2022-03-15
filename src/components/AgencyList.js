import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator, IconArrowForwardIos } from '@aws-amplify/ui-react';
import { listAgencies } from '../graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { createAgency as createAgencyMutation, deleteAgency as deleteagencyMutation } from '../graphql/mutations';
import { Link } from "react-router-dom";
import Header from "./header"
import Modal from 'react-modal';
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;


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

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  marginBottom: "0vh",

};

function AgencyList() {
  let subtitle;
  const [agencies, setagencies] = useState([]);
  const [singleagency, setsingleagency] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [sort, setSort] = useState("")

  useEffect(() => {
    fetchagencies();
  }, []);

  function openModal(id) {
    const newagenciesArray = agencies.filter(agency => agency.id == id);
    setsingleagency(newagenciesArray[0])
    setIsOpen(true);

  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  async function fetchagencies() {
    const apiData = await API.graphql({ query: listAgencies });

    const agenciesFromAPI = apiData.data.listAgencies.items;
    await Promise.all(agenciesFromAPI.map(async agency => {
      if (agency.image) {
        const image = await Storage.get(agency.image);
        agency.image = image;
      }
      return agency;
    }))
    setagencies(apiData.data.listAgencies.items);
  }
  async function deleteagency({ id }) {
    const newagenciesArray = agencies.filter(agency => agency.id !== id);
    setagencies(newagenciesArray);
    await API.graphql({ query: deleteagencyMutation, variables: { input: { id } } });
    setIsOpen(false)
  }
  async function sortagencies(parameter) {
    console.log(parameter)
    if (parameter === "ascendingalphabetical") {

      const sorted = [...agencies].sort((a, b) => a.name.localeCompare(b.name))
      console.log(sorted);
      setagencies(sorted);

    }
    if (parameter === "descendingalphabetical") {

      const sorted = [...agencies].sort((a, b) => b.name.localeCompare(a.name))
      console.log(sorted);
      setagencies(sorted);

    }
  }

  return (

    <div className="AwardsShow">
      <div className="awardshowtopitem">

        <h1>Agency Show List</h1>
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
        <a className="button1" href="/addagency">
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <Link className="seelink" to="/addagency">Add Agency</Link>
        </a>


      </div>


      <p> Sort</p>


      <select className="typedropdown" style={{ width: "5vw" }} onChange={(e) => sortagencies(e.target.value)}>

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
          agencies.map(agency => (
            <div className="awardsdashitem" key={agency.id || agency.name}>
              <h2>{agency.name}</h2>
              <h3>Description: </h3>
              <p>{agency.description}</p>
              <h3>First Deadline:</h3>
              <p>{agency.deadline1}</p>
              {console.log(agency)}
              <button className="button4" style={{ color: "white" }} onClick={() => openModal(agency.id)}>More Information</button>
              <br />

              {/* <button className="button4">
                <Link
                  activeClassName="button4"
                  to='/awardagencydash'
                  style={linkStyle}
                  state={{ id: agency }}



                >Add Award to {agency.name}

                </Link>


              </button> */}
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >

                <div style={{ color: "white", fontSize: "50%" }}>
                  <h2 style={{ fontSize: "20px" }}>{singleagency.name}</h2>
                  <h3>Parent Company:</h3>
                  <p>{singleagency.parentco}</p>
                  <h3>Type of Agency:</h3>
                  <h3>Website Link:</h3>
                  <p>{singleagency.websitelink}</p>
                  <h3>Additional Notes:</h3>
                  <p>{singleagency.notes}</p>
                  {console.log(singleagency)}
                  
                  <button className="button4">
                    <Link
                      style={linkStyle}
                      to='/showagency'
                      
                      state={{ agency: singleagency }}
                      
                    >Show Info For {singleagency.name}
                    </Link>


                  </button>
                  <button className="button4">
                    <Link
                      style={linkStyle}
                      to='/addcampaign'
                      state={{ agency: singleagency }}
                    >Add Campaign for {singleagency.name}
                    </Link>
                  </button>
                  <br />

                  {/* <button className="button4" onClick={() => deleteagency(agency)}>Delete agency</button> */}

                  <button className="button4" onClick={closeModal}>Close</button>
                </div>

              </Modal>


              {
                agency.image && <img src={agency.image} style={{ width: 400 }} />
              }

            </div>


          )

          )

        }
        <div className="awarddashitem" key={agencies.id || agencies.name}>




          {
            agencies.image && <img src={agencies.image} />
          }
          {/* <button style={{marginBottom: "2vh"}}onClick={() => togglePopup()}>Close Show</button> */}
        </div>

      </div>
    </div>

  )
}

export default AgencyList; 