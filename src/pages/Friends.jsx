import React from "react";
import "../styles/friends.css";
import Header from "../components/Header";
const Friends = () => {
  const friends = [
    {
      name: "Ranier 'Rain' Anthony",
      title: "Founder/CEO",
      description: "Aspiring Bruce Wayne",
      image: "/images/ceo.png",
    },
    {
      name: "Winston Burse  Anthony",
      title: "Partner/Chief Quality Officer",
      description: "Renaissance Man",
      image: "/images/mimber1.png",
    },
    {
      name: "Amanda Ortiz",
      title: "VP Business Development",
      description: "Master People Connector",
      image: "/images/mimber2.png",
    },
    {
      name: "Darius McDougle",
      title: "Fractional CMO",
      description: "Marketing Giant",
      image: "/images/ceo.png",
    },
    {
      name: "Clair Rosenthal",
      title: "National Recruiter",
      description: "The Brow Boss",
      image: "/images/mimber1.png",
    },
    {
      name: "Samantha 'Sam' Diaz",
      title: "Head of Legal Intake",
      description: "Cool Calm Collected",
      image: "/images/mimber1.png",
    },
    {
      name: "Dr. Joel Manion, D.C",
      title: "Board Advisor",
      description: "The DC MD Executive",
      image: "/images/mimber1.png",
    },
    {
      name: "Paul Massy",
      title: "Chief Software Architect",
      description: "Mad Scientist",
      image: "/images/ceo.png",
    },
  ];

  return (
    <div className="friends-page">
        <Header />
      <h1 className="friends-title">The Team</h1>
      
      <div className="friends-grid">
        {friends.map((friend, index) => (
          <div className="friend-card" key={index}>
            <img src={friend.image} alt={friend.name} className="friend-image" />
            <h2 className="friend-name">{friend.name}</h2>
            <p className="friend-title">{friend.title}</p>
            <p className="friend-description">{friend.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;