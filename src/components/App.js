// create your App component here
import React, {useState, useEffect} from "react";


function App() {
    const [renderedDog, setRenderedDog] = useState("") 
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          setRenderedDog(data.message);
          setIsLoaded(true);
        });
    }, []);
  
    if (!isLoaded) return <h3>Loading...</h3>;
  
    return <img alt="A Random Dog" src={renderedDog}/>
  }

  export default App;