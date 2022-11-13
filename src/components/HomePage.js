import React from "react";

function HomePage() {
  return (
    <main>
      <div className="tophead">
        {" "}
        <h1> CLINIC NAME </h1>
      </div>
      <span className="subhead">
        {" "}
        <h3>
          {" "}
          <a href="#"> Write Patient Prescription </a>
        </h3>{" "}
         <h3> <a href="#"> Access Patient Reports</a></h3>
      </span>
      <form className="form">
        <div className="subform">
          <input
            type="text"
            className="inputfields"
            placeholder="Patient Name"
          />
          <input type="text" className="inputfields" placeholder="Patient ID" />
          <input
            type="text"
            className="inputfields"
            placeholder="Contact Details"
          />
          <input type="text" className="inputfields" placeholder="Sex" />
          <button className="btn"> Confirm Details </button>
        </div>
      </form>
      <div>{/* <img src={require('./hospital.jpg')}></img> */}</div>
    </main>
  );
}

export default HomePage;
