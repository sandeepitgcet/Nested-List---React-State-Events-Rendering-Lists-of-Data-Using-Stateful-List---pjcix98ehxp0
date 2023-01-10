import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    show: false,
    name: "Madhya Pradesh",
    cities: [
      {
        show: false,
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
        show: false,
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
        show: false,
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
    show: false,
    name: "Jharkhand",
    cities: [
      {
        show: false,
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
        show: false,
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
        show: false,
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
    show: false,
    name: "Assam",
    cities: [
      {
        show: false,
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
        show: false,
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
        show: false,
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
    show: false,
    name: "Bihar",
    cities: [
      {
        show: false,
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
        show: false,
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
        show: false,
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
  const [obj,setObj] = useState(states);
  const onclickhandler = (event) =>
  {
    if(event.target.getAttribute("state"))
    {
      let ind = parseInt(event.target.getAttribute("index"));
      let newarr = [...obj];
      newarr[ind].show = !newarr[ind].show;
      setObj(newarr);
    }
    else if(event.target.getAttribute("city"))
    {
      let ind = parseInt(event.target.getAttribute("index"));
      let ind1 = parseInt(event.target.getAttribute("index1"));
      let newarr = [...obj];
      //alert(ind+" "+ind1);
      newarr[ind].cities[ind1].show = !newarr[ind].cities[ind1].show
      setObj(newarr);
    }

  }
  return <div id="main">
    <ul>
      {
        states.map((state,index) => 
        {
          return <li key={state.name} state={state.name} index={index} id={"state"+(index+1)} onClick={onclickhandler}>{state.name}
            <ul>
              {
                state.show?state.cities.map((city,index1) => {
                return <li key={city.name} index={index} id={"city"+(index1 +1)} index1={index1} city={city.name}>{city.name}
                  <ul>
                    {
                      city.show?city.towns.map((town,index2)=>{
                        return <li key={town.name} id={"town"+(index2+1)}>{town.name}</li>
                      }):""
                    }
                  </ul>
                </li>
              }):""}
            </ul>
          </li>
        })
      }
    </ul>
  </div>;
}

export default App;
