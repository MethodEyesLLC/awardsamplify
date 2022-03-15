import React, { useState, useEffect } from 'react';
import '../App.css';
import { API, Storage } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listAwards } from '../graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { Link } from "react-router-dom";
import '../buttons.scss'
import { createAward as createAwardMutation, deleteAward as deleteAwardMutation } from '../graphql/mutations';

//change name
const initialFormState =
{
  name: '', description: '', parentco: '', type: '', openforentries: '',
  deadline1: '', deadline2: '', deadline3: '', fee1: '', fee2: '', fee: '',
  eligibility: '', winnersannouncement: '', websitelink: '', notes: ''
}

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
    setAwards([...awards, formData]);
    setFormData(initialFormState);
  }
  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);

  }

  console.log(formData)
  return (
    <div className="createpage">
      <h1>
        Add an Award
      </h1>

      <div className="awardshowtop">
        <div><a href="/">
          <div className="button1" style={{ marginLeft: "25vw" }}>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <Link className="seelink" to="/seeawards" >Back to Award List</Link>

          </div>

        </a></div>
        <a href="/seeawards">


          <div className="button1" style={{ marginLeft: "25vw" }}>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <div class='line'></div>
            <Link className="seelink" to="/seeawards" >Award Show Dashboard</Link>
          </div>
        </a>
      </div>


      <div className="createform">


        <input
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'name': e.target.value })}
          placeholder="Award name"
          value={formData.name}
        />
        <input
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'description': e.target.value })}
          placeholder="Award description"
          value={formData.description}
        />
        <input
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'parentco': e.target.value })}
          placeholder="Parent Company"
          value={formData.parentco}
        />
        <select
          className="typedropdown"
          onChange={e => setFormData({ ...formData, 'type': e.target.value })}
          placeholder="Award Type"
          value={formData.type}>
          <option value="" disabled selected>
            Type of Award
          </option>
          <option>
            PR
          </option>
          <option>
            Individual
          </option>
          <option>
            Purpose
          </option>
          <option>
            Healthcare
          </option>
          <option>
            Agency
          </option>
          <option>
            Creative
          </option>
          <option>
            Best Places
          </option>
          <option>
            B2B
          </option>
          <option>
            Effectiveness
          </option>
          <option>
            In-House
          </option>
        </select>
        <br></br>
        <label for="openforentries">Open for Entries:</label>
        <input
          type="date"
          id="openforentries"
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'openforentries': e.target.value })}
          placeholder="Open for Entries Date"
          value={formData.openforentries}
        />

        <label for="deadline1">Deadline 1:</label>
        <input
          type="date"
          id="deadline1"
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'deadline1': e.target.value })}
          placeholder="Deadline 1"
          value={formData.deadline1}
        />
        <label for="deadline2">Deadline 2:</label>
        <input
          type="date"
          id="deadline2"
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'deadline2': e.target.value })}
          placeholder="Deadline 2"
          value={formData.deadline2}
        />
        <label for="deadline3">Deadline 3:</label>
        <input
          type="date"
          id="deadline3"
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'deadline3': e.target.value })}
          placeholder="Deadline 3"
          value={formData.deadline3}
        />
        <input
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'fee': e.target.value })}
          placeholder="Fee 1"
          value={formData.fee}
        />
        <input
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'fee1': e.target.value })}
          placeholder="Fee 2"
          value={formData.fee1}
        />
        <input
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'fee2': e.target.value })}
          placeholder="Fee 3"
          value={formData.fee2}
        />
        <label for="eligibility">Eligbility Date:</label>
        <input
          type="date"
          id="eligibility"
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'eligibility': e.target.value })}
          placeholder="Eligibility Date"
          value={formData.eligibility}
        />
        <label for="winnerannouncement">Winner Announcement Date:</label>
        <input
          type="date"
          id="winnerannouncement"
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'winnersannouncement': e.target.value })}
          placeholder="Winner Announcement Date"
          value={formData.winnersannouncement}
        />
        <input
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'websitelink': e.target.value })}
          placeholder="Website Link"
          value={formData.websitelink}
        />
        <input
          className="forminputfield"
          onChange={e => setFormData({ ...formData, 'notes': e.target.value })}
          placeholder="Notes"
          value={formData.notes}
        />
        <label for="file-upload" class="button2">
          <div className="awardlink">
            Upload File
            <input
              id="file-upload"
              style={{ fontSize: "75%" }}
              type="file"
              onChange={onChange}
            />
          </div>
        </label>



        <button className="button1" style={{ fontSize: "80%", color: "white" }} onClick={createAward}>Create Award</button>
      </div>
    </div>
  )
}

export default AddAward;
