// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false); // Set loading to false after receiving the response
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false); // In case of an error, set loading to false as well
      });
  }, []); // The empty dependency array ensures that the effect runs only once on component mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        dogImage && (
          <img src={dogImage} alt="A Random Dog" style={{ width: "300px", height: "300px" }} />
        )
      )}
    </div>
  );
};

export default App;
