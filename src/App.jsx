import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      name: name,
      age: age,
    });

    // reset form
    setName("");
    setAge("");
  };

  return (
    <div className="container">
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
