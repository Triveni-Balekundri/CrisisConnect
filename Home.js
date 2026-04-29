import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function Home() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    location: "",
    message: ""
  });

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "requests"), {
      ...form,
      status: "Pending",
      createdAt: new Date()
    });

    alert("Request Submitted Successfully!");

    setForm({
      name: "",
      category: "",
      location: "",
      message: ""
    });
  };

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Community Crisis Support</h1>
        <p>Fast help for food, shelter, medical & emergency support.</p>
      </div>

      <div className="home-card">
        <h2>Request Help</h2>

        <form onSubmit={submit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={change}
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={change}
            required
          >
            <option value="">Select Help Type</option>
            <option>Food</option>
            <option>Medical</option>
            <option>Shelter</option>
            <option>Transport</option>
          </select>

          <input
            name="location"
            placeholder="Your Location"
            value={form.location}
            onChange={change}
            required
          />

          <textarea
            name="message"
            placeholder="Describe your emergency"
            value={form.message}
            onChange={change}
            required
          ></textarea>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default Home;