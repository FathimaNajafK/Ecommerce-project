import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    // State to store the fact data
    const [factData, setFactData] = useState({ fact: '', length: 0 });
  
    // useEffect to fetch data when the component mounts
    useEffect(() => {
    
      fetchData();
    }, []);

    const fetchData = async () => {
        try {
          // Make a GET request to your API endpoint
          const response = await axios.get('https://catfact.ninja/fact');
  
          // Update the state with the received data
          setFactData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    return(
        <div>
           <h1>Home</h1> 
           <p>{factData.fact}</p>
           <p>{factData.length}</p>
        </div>
    )
};

export default Home;