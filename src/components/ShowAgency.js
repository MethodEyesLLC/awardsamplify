import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator, IconArrowForwardIos } from '@aws-amplify/ui-react';
import { getAgency, getCampaign, listCampaigns, listAwards } from '../graphql/queries';
import { updateAward, updateCampaign, deleteCampaign } from '../graphql/mutations';
import { Link, useLocation } from "react-router-dom";
import '@aws-amplify/ui-react/styles.css';
import Modal from 'react-modal';


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


function ShowAgency() {
  const [agencies, setagencies] = useState([]);
  const [newDeleteArray, setDeleteArray] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [sort, setSort] = useState("")
  const [awards, setawards] = useState([])
  const [campaigns, setcampaigns] = useState([])
  const [currentCampaign, setCurrentCampaign] = useState([])
  const [assignedAwards, setAssignedAwards] = useState([])
  const [unassignedaward, setUnassignedAward] = useState([])
  const location = useLocation()


  useEffect(() => {
    fetchagencies();
    fetchcampaigns();
    fetchawards();
  }, []);

  const { agency } = location.state

  async function fetchagencies() {
    let agencyid = agency.id

    const apiData = await API.graphql({
      query: getAgency, variables: { id: (agencyid) }
    });
    const agenciesFromAPI = apiData.data.getAgency.awards.items;
    await Promise.all(agenciesFromAPI.map(async agency => {
      if (agency.image) {
        const image = await Storage.get(agency.image);
        agency.image = image;
      }
      return agency;
    }))
    setagencies(apiData.data.getAgency.awards.items);
  }
  function openModal(id) {


    setCurrentCampaign(id)
    console.log(id.id)
    awards.map(award => {
      if (award.campaignAwardsId == id.id) {
        console.log(award)
        setAssignedAwards(oldArray => [...oldArray, award])

      }
      else {
        console.log(award)
        setUnassignedAward(oldArray => [...oldArray, award])

      }
    })
    setIsOpen(true);

  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal() {
    setUnassignedAward([])
    setAssignedAwards([])
    setIsOpen(false);
  }
  async function fetchcampaigns() {
    let agencyid = agency.id

    const apiData = await API.graphql({ query: listCampaigns }
    );
    const agenciesFromAPI = apiData.data.listCampaigns.items;
    await Promise.all(agenciesFromAPI.map(async agency => {
      if (agency.image) {
        const image = await Storage.get(agency.image);
        agency.image = image;
      }
      return agency;
    }))
    await Promise.all(agenciesFromAPI.filter(agency => agency.agencyCampaignsId == agencyid).map(filteredAgency => (

      setcampaigns(oldArray => [...oldArray, filteredAgency])
    ))

    )


  }
  async function fetchawards() {
    let agencyid = agency.id


    const apiData = await API.graphql({
      query: listAwards, filter: {
        campaignAwardsId: campaigns
      }
    }

    );

    const agenciesFromAPI = apiData.data.listAwards.items;
    console.log(agenciesFromAPI)

    await Promise.all(agenciesFromAPI.map(async agency => {
      if (agency.image) {
        const image = await Storage.get(agency.image);
        agency.image = image;
      }
      return agency;
    }))
    console.log(agenciesFromAPI)

    setawards(agenciesFromAPI)





  }
  async function addAwardToCampaign(awardid) {


    let realawardid = awardid.id
    console.log(awardid)
    console.log(currentCampaign)


    const updatedArray = await API.graphql({
      query: updateAward, variables: {
        input: {
          id: realawardid,
          campaignAwardsId: currentCampaign.id,


        }
      }
    })

    const transferunit = unassignedaward.filter(item => item.id === awardid.id)
    setUnassignedAward((unassignedaward.filter(item => item.id !== awardid.id)))
    setAssignedAwards(oldArray => [...oldArray, transferunit[0]])
    // setAssignedAwards(oldArray => [...oldArray, finalArray])
  }
  async function removeAwardFromCampaign(awardid) {


    let realawardid = awardid.id
    console.log(awardid)
    console.log(currentCampaign)


    const updatedArray = await API.graphql({
      query: updateAward, variables: {
        input: {
          id: realawardid,
          campaignAwardsId: null,


        }
      }
    })
    const transferunit = assignedAwards.filter(item => item.id === awardid.id)
    setAssignedAwards((assignedAwards.filter(item => item.id !== awardid.id)))
    setUnassignedAward(oldArray => [...oldArray, transferunit[0]])

  }

  async function removeCampaign({ id }) {

    const newCampaignArray = campaigns.filter(campaign => campaign.id !== id);
    setcampaigns(newCampaignArray);
    await API.graphql({
      query: deleteCampaign, variables: {
        input: {
          id


        }
      }
    });
  }


  async function deleteAgencyAward({ id }) {
    const newAgenciesArray = agencies.filter(agency => agency.id !== id);
    const deletedItem = agencies.filter(agency => agency.id === id);
    setagencies(newAgenciesArray);
    (newAgenciesArray).map(id => {
      setDeleteArray(id.id)
    })

    await API.graphql({
      query: updateAward, variables: {
        input: {
          id: id,
          agencyAwardsId: null


        }
      }
    });
  }
  return (
    <div style={{}}>
      <h1>
        Agency Information
      </h1>
      <div className="agencyshowtop">
        <a className="button1" href="/">
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>

          <Link className="seelink" to="/agencylist"


          >To Agency Dashboard</Link>


        </a>
        <a className="button1" href="/addagency">
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <div class='line'></div>
          <Link className="seelink" to="/addcampaign"
            state={{ agency: agency }}>Add Campaign</Link>
        </a>


      </div>
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
            campaigns.map(campaign => (
              <div className="awardsdashitem" key={campaign.id || campaign.name}>
                <h2>{campaign.name}</h2>
                <h3>Description: </h3>
                <p>{campaign.content}</p>
                <h3>First Deadline:</h3>
                <p>{campaign.deadline1}</p>

                <button className="button4" style={{ color: "white" }} onClick={() => openModal(campaign)}>More Information</button>
                <button className="button4" style={{ marginBottom: "2vh", color: "white" }} onClick={() => removeCampaign(campaign)}>Delete Campaign</button>


              </div>
            ))}
        </div>
      </div>
      <div className="showagencypage3">
        <h1>

        </h1>
        <div className="showawardsdashmini">

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2>
              Awards Won
            </h2>
            <div className="showawardsdashmini">

              {assignedAwards.map(award => (
                <div className="awardsdashitemmini"
                  key={award.id || award.name}
                  onClick={() => removeAwardFromCampaign(award)}
                >
                  <h2>Shows Won</h2>
                  <h2>{award.name}</h2>
                  <h3>Click to Remove Award from {currentCampaign.content} </h3>
                  {/* <p>{award.content}</p>
                  <h3>First Deadline:</h3>
                  <p>{award.deadline1}</p> */}




                </div>
              ))}
              <h2>
                Available Awards
              </h2>
              {unassignedaward.map(award => (

                <div className="awardsdashitemmini"
                  key={award.id || award.name}
                  onClick={() => addAwardToCampaign(award)}
                >

                  <h2>{award.name}</h2>
                  <h3>Click to Add Award to {currentCampaign.content} </h3>
                  <p>{award.content}</p>
                  <h3>First Deadline:</h3>
                  <p>{award.deadline1}</p>




                </div>
              ))}
              {/* 
                <button className="button4">
                <Link
                 
                 to='/addcampaign' 
                  state={{ agency: singleagency }}
                >Add Campaign for {singleagency.name}
                </Link>
                </button> */}
              <br />


              <button className="button4" onClick={closeModal}>Close</button>
            </div>

          </Modal>

        </div>
      </div>

    </div>

  )
}

export default ShowAgency;