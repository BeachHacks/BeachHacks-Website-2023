// create react component
import React from "react";
import Box from '@mui/material/Box';
import {data} from "./data"
import Profile from "./Profile"



const Team = () => {
  return (
    <Box
    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'null' } }}>
        <section className="team-container" id="team">
          <div className="team-category">
            <h1>Director</h1>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id === 1){
                  return <Profile key={info.id} {...info} />
                } else return null
                  })}
          </div>
          <div className="team-category">
            <h1>Committee Directors and Project Managers</h1>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id <= 12 & info.id > 1){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
          <div className="team-category">
            <h1>Committees</h1>
          </div>
          <div className="sub-team-category">
            <h2>Community</h2>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id === 13){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
          <div className="sub-team-category">
            <h2>Design</h2>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id <= 16 & info.id > 13){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
          <div className="sub-team-category">
            <h2>Finance</h2>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id === 17){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
          <div className="sub-team-category">
            <h2>Logisitics</h2>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id <= 20 & info.id > 17){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
          <div className="sub-team-category">
            <h2>Operations</h2>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id <= 23 & info.id > 20){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
          <div className="sub-team-category">
            <h2>Sponsorship</h2>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id <= 27 & info.id > 23){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
          <div className="team-category">
            <h1>Projects</h1>
          </div>
          <div className="sub-team-category">
            <h2>Website</h2>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id <= 43 & info.id > 27){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
          <div className="sub-team-category">
            <h2>Spotify Queue</h2>
          </div>
          <div className="team-circles">
              {data.map((info) => {
                if (info.id <= 48 & info.id > 43){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
          <div className="sub-team-category">
            <h2>Alert App</h2>
          </div> else return null
          <div className="team-circles">
              {data.map((info) => {
                if (info.id <= 52 & info.id > 48){
                  return <Profile key={info.id} {...info}/>
                } else return null
                  })}
          </div>
        </section>
    </Box>
  );

};

export default Team;