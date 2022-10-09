import React from 'react'
import profile from "../../assets/img/profile.jpg"
import "./profile.css"
const Profile = (props) => {

    const bg = {backgroundImage:`url(${profile})`};
  return (
    
    <div className="container-profile">
        <div className="profile" style={bg}>
            <div className="transparent"></div>
        </div>
        <div className="content">
            <div className="avatar">
                <img src={profile} alt="" width="120" height="120"/>
            </div>
            <div className="title">
                <h2>{props.name}</h2>
                <h6>{props.location}</h6>
            </div>
            <div className="follow-info">
                <div className="shot">{props.shots}<span>Shot</span></div>
                <div className="followers">{props.followers}<span>Followers</span></div>
                <div className="following">{props.following}<span>Following</span></div>
            </div>
        </div>
    </div>
    
  )
}

export default Profile