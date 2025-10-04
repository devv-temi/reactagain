import "./App.css";
import axios from "axios";
import { useState } from "react";
// import Job from "./Job";
// import Planets from "./Planets";
// import TodoList from "./TodoList";

function App() {
  // const [name, setName] = useState("");
  // const [predictedAge, setPredictedAge] = useState(null);

  // const fetchData = () => {
  //   axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setPredictedAge(res.data);
  //   });
  // };

  // return (
  //   <div className="App">
  //     <input
  //       placeholder="Ex. James..."
  //       onChange={(event) => {
  //         setName(event.target.value);
  //       }}
  //     />
  //     <button onClick={fetchData}>Predict Age</button>

  //     <h1>Predicted Name:{predictedAge?.name} </h1>
  //     <h1>Predicted Age:{predictedAge?.age} </h1>
  //     <h1>Predicted Count:{predictedAge?.count} </h1>
  //   </div>
  // );

  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
      setGeneratedExcuse(res.data[0].excuse)
    })
  }

  return (
    <div className="App">
      <h1>Generating an Excuse...</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <button onClick={() => fetchExcuse("developers")}>Developers</button>
      <button onClick={() => fetchExcuse("children")}>Children</button>

      <p style={{fontSize: "20px", fontWeight: 300}}>{generatedExcuse}</p>
    </div>
  )
}

export default App;