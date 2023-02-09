import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { icon } from '@fortawesome/fontawesome-svg-core';

function App() {

  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const [icon, setIcon] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f446703fa52149386e5d5d922cd218da&units=metric`
  // const iconurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          Weather APP
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <div className="container">
          <div className="search">
            <div className="searchcomponent">
              <input
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder="Enter Location"
              type="text"
              />
              {/* <button type="submit">Search</button> */}
            </div>
          </div>
  
          {data.name !== undefined &&
            <div className="weather__container">
              <div className="weather__location">
                {data.name},
                {data.sys ? data.sys.country : null}
              </div>
              <div className="weather__temperature">
                {data.main ? data.main.temp : null }
              </div>
              <div className="weather__type">
              {/* {data.name != undefined && */}
                {/* {data ? <img src={iconurl} alt="weather icon" /> : null} */}
                {data.weather ? data.weather[0].main : null}
              </div>
            </div>
          }

        </div>
      </header>
    </div>
  );
}

export default App;
