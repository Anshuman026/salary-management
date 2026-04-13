"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [job, setJob] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const limit = 10;

  useEffect(() => {
    fetchEmployees();
  }, [page, search, country, job]);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError("");

      const url = `http://localhost:5000/employees?page=${page}&limit=${limit}&search=${encodeURIComponent(
        search
      )}&country=${encodeURIComponent(country)}&job=${encodeURIComponent(job)}`;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("API failed");
      }

      const result = await res.json();

      setEmployees(result.data);
      setTotalPages(result.totalPages);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <h1 style={title}>Employee Dashboard</h1>

      {/* 🔍 Filters */}
      <div style={filterContainer}>
        <input
          placeholder="Search by name"
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          style={input}
        />

        <select
          value={country}
          onChange={(e) => {
            setPage(1);
            setCountry(e.target.value);
          }}
          style={input}
        >
          <option value="">All Countries</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>

        <select
          value={job}
          onChange={(e) => {
            setPage(1);
            setJob(e.target.value);
          }}
          style={input}
        >
          <option value="">All Jobs</option>
          <option value="Engineer">Engineer</option>
          <option value="Manager">Manager</option>
          <option value="HR">HR</option>
          <option value="Analyst">Analyst</option>
        </select>
      </div>

      {/* Status */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Table */}
      <table style={table}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={th}>Name</th>
            <th style={th}>Job</th>
            <th style={th}>Country</th>
            <th style={th}>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((e) => (
              <tr key={e.id}>
                <td style={td}>{e.fullName}</td>
                <td style={td}>{e.jobTitle}</td>
                <td style={td}>{e.country}</td>
                <td style={td}>₹ {e.salary}</td>
              </tr>
            ))
          ) : (
            !loading && (
              <tr>
                <td colSpan="4" style={td}>
                  No data found
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={pagination}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={btn}
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          style={btn}
        >
          Next
        </button>
      </div>
    </div>
  );
}

/* 🎨 Styles */

const container = {
  padding: "20px",
  fontFamily: "Arial",
};

const title = {
  fontSize: "28px",
  marginBottom: "20px",
};

const filterContainer = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

const input = {
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const th = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

const td = {
  padding: "10px",
  borderBottom: "1px solid #eee",
};

const pagination = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

const btn = {
  padding: "8px 16px",
  background: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};