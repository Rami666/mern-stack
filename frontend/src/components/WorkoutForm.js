import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const res = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workout),
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error);
    } 
    if (res.ok) {
        setTitle("");
        setLoad("");
        setReps("");
        setError(null);
        console.log('new workout added');
    }
  };
  return (
    <form className="crate" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Workout Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (in kg):</label>
      <input
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Reps:</label>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
    </form>
  );
};

export default WorkoutForm;
