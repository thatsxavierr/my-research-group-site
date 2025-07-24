import React from "react";
// Example images. Replace with your actual images in src/assets.
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person6 from "../assets/person6.jpg";

import "./GroupMembers.css"; // We'll write this CSS next.

const presentMembers = [
  {
    name: "Jane Doe",
    title: "Research Scientist",
    email: "jane.doe@email.com",
    image: person1,
  },
  {
    name: "John Smith",
    title: "Postdoctoral Researcher",
    email: "john.smith@email.com",
    image: person2,
  },
  {
    name: "Amina Chen",
    title: "Graduate Student",
    email: "amina.chen@email.com",
    image: person3,
  },
  // Add more present members...
];

const pastMembers = [
  {
    name: "Sam Green",
    title: "Alumni (Now at TechCorp)",
    email: "sam.green@email.com",
    image: person4,
  },
  {
    name: "Ravi Patel",
    title: "Former Lab Assistant",
    email: "ravi.patel@email.com",
    image: person5,
  },
  {
    name: "Maria Lopez",
    title: "PhD Graduate (2023)",
    email: "maria.lopez@email.com",
    image: person6,
  },
  // Add more past members...
];

function MemberGrid({ members }) {
  return (
    <div className="member-grid">
      {members.map((m, idx) => (
        <div className="member-card" key={idx}>
          <img src={m.image} alt={m.name} />
          <div className="member-info">
            <div className="member-name">{m.name}</div>
            <div className="member-title">{m.title}</div>
            <div className="member-email">{m.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function GroupMembers() {
  return (
    <>
      {/* Only heading and intro on the white board */}
      <div className="page-content">
        <h1>Group Members</h1>
        <p>Meet Our Team.</p>
      </div>

      {/* Rest of the content stays on the dark background */}
      <h2 className="members-section-title">Present Members</h2>
      <MemberGrid members={presentMembers} />

      <h2 className="members-section-title" style={{ marginTop: "3rem" }}>Past Members</h2>
      <MemberGrid members={pastMembers} />
    </>
  );
}

