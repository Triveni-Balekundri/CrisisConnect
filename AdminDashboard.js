import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "requests"), (snapshot) => {
      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data()
      }));
      setRequests(data);
    });

    return () => unsub();
  }, []);

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "requests", id), { status });
  };

  const deleteRequest = async (id) => {
    await deleteDoc(doc(db, "requests", id));
  };

  const total = requests.length;
  const pending = requests.filter((r) => r.status === "Pending").length;
  const approved = requests.filter((r) => r.status === "Approved").length;
  const resolved = requests.filter((r) => r.status === "Resolved").length;

  return (
    <div className="admin-container">
      <h1 className="title">Admin Dashboard</h1>

      {/* STATS CARDS */}
      <div className="stats-grid">
        <div className="card total">Total<br />{total}</div>
        <div className="card pending">Pending<br />{pending}</div>
        <div className="card approved">Approved<br />{approved}</div>
        <div className="card resolved">Resolved<br />{resolved}</div>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Help</th>
              <th>Location</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.location}</td>
                <td>{item.message}</td>
                <td>
                  <span className={`status ${item.status?.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td className="actions">
                  <button onClick={() => updateStatus(item.id, "Approved")}>
                    Approve
                  </button>
                  <button onClick={() => updateStatus(item.id, "Resolved")}>
                    Resolve
                  </button>
                  <button onClick={() => deleteRequest(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {requests.length === 0 && (
              <tr>
                <td colSpan="6" className="empty">
                  No Requests Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;