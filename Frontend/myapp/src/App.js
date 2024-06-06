import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const[Url, SetUrl] = useState('')
  const [inputUrl, setInputUrl] = useState('');

  async function HandleClick()
  {
    try {
      console.log("Handle CLick Called")
      console.log(inputUrl)
      const response = await axios.post('http://localhost:5000/getShorterUrl', {
        OUrl: inputUrl
      });

      SetUrl(response.data.url);
    } catch (error) {
      console.error('There was an error making the API request:', error);
    }
  }
  return (
    <div className="App">
      <div className="main">
        <div className="title">
          <h1>Url Shortener</h1>
        </div>
        <div className="box">
          <input type="text" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)}/>
        </div>
        <div className="btn">
          <button onClick={HandleClick}>Shorten</button>
        </div>
        <div className="result">
          Shortended URL: {Url} 
        </div>
      </div>
    </div>
  );
}

export default App;
