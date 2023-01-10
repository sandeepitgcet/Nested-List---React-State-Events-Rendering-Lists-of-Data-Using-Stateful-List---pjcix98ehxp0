import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const showCitiesHandler = (event) => {
    const id = event.target.id;
    console.log("id "+id);
    const element =event.target.querySelector("#"+id+" + ul");
    const isBlock = element.style.display=="block";
    element.style.display = isBlock?"none":"block";

  }
  const  showTownHandler = event => {
    //console.log(event.target.parentElement.id);
    const id = event.target.id;
    console.log("id "+id);
    const element =event.target.parentElement.querySelector("#"+id+" + ul");
    const isBlock = element.style.display=="block";
    element.style.display = isBlock?"none":"block";
  }
  return <div id="main">
    { states.map( (state,index) => {
      return (
        <React.Fragment key={"state"+(index+1)}>
          <li id={"state"+(index+1)} onClick={showCitiesHandler}>{state.name}</li>
          <ul style={{display:"none"}}>
                { state.cities.map( (city,  index1) => {
                  return (
                    <React.Fragment key={"city"+(index1+1)}>
                      <li id={"city"+(index1+1)} onClick={showTownHandler}>{city.name}</li>
                      <ul style={{display:"none"}}>
                            {city.towns.map( (town,index2) => {
                              return (
                                <React.Fragment key={"town"+(index2+1)}>
                                  <li id={"town"+(index2+1)}>{town.name}</li>
                                </React.Fragment>
                              )
                            })}
                      </ul>
                    </React.Fragment>
                  )
                }) }
          </ul>
        </React.Fragment>
        
      )
    })}
  </div>;
}

export default App;
