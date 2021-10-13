import React from "react";
import "./styles.css";
import { useState } from "react";

const stateDB = {
  Karnataka: [
    { name: "Udupi", rating: "4/5",
  description:"Udupi, otherwise spelt Udipi and also known as Odipu, is a city in the Indian state of Karnataka. Udupi is situated about 55 km (34 mi) north of the educational, commercial and industrial hub of Mangalore and about 422 km (262 mi) west of state capital Bangalore by road."
  },
    { name: "Shimoga", rating: "3.5/5",
   description:"Shimoga, officially known as Shivamogga,[2] is a city and the district headquarters of Shimoga district in the central part of the state of Karnataka, India. The city lies on the banks of the Tunga River. Being the gateway for the hilly region of the Western Ghats, the city is popularly nicknamed as Gateway of Malnad"
  },
    { name: "Gokarna", rating: "4.5/5",
  description:"Gokarna is a small temple town on the western coast of India in the Kumta taluk of Uttara Kannada district of the state of Karnataka.[1] The main temple and deity is Shiva, who is also known as Mahabaleshwara."
  }
  ],

  TamilNadu: [
    {
      name: "Kodaikanal",
      rating: "5/5",
      description:"Kodaikanal is a hill station which is located in Dindigul district in the state of Tamil Nadu, India. Its name in the Tamil language means The Gift of the Forest. Kodaikanal is referred to as the Princess of Hill stations and has a long history as a retreat and tourist destination."
    },
    {
      name: "Ooty",
      rating: "4.5/5",
      description:"Ooty  officially known as Udhagamandalam (also known as Ootacamund abbreviated as Udhagai), is a city and a municipality in the Nilgiris district of the Indian state of Tamil Nadu."
    },
    {
      name: "Chennai",
      rating: "5/5",
      description:"Chennai  also known as Madras(the official name until 1996), is the capital city of the Indian state of Tamil Nadu. Located on the Coromandel Coast of the Bay of Bengal, it is the largest cultural, economic and educational centre of south India."
    }
  ],
  Maharastra: [
    {
      name: "Lonavala",
      rating: "4/5",
      description:"Lonavala (ISO: Loṇāvaḷā) (Marathi: लोणावळा) is a hill station town and a Municipal Council in the Pune district in the Indian State of Maharashtra. It is about 64 km (40 miles) west of modern-day Pune city and 96 km (60 miles) to the east of Mumbai."
    },
    {
      name: "khandala",
      rating: "5/5",
      description:"Khandala is located at the top end of the Bhor Ghat, a major ghat on the road link between the Deccan Plateau and the Konkan plain. The ghat carries an extensive amount of road and rail traffic. "
    },
    {
      name: "Mumbai",
      rating: "4.5/5",
      description:"Mumbai  is the capital city of the Indian state of Maharashtra. According to the United Nations, as of 2018, Mumbai is the second-most populous city in the country after Delhi and the seventh-most populous city in the world with a population of roughly 20 million."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Karnataka");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Travel Recommendation </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Places. Select a State to get started{" "}
      </p>

      <div>
        {Object.keys(stateDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {stateDB[selectedGenre].map((genre) => (
            <li
              key={genre.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {genre.name} </div>
              <div style={{ fontSize: "smaller" }}> {genre.rating} </div>
              <div style={{ fontSize: "smaller" }}> {genre.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
