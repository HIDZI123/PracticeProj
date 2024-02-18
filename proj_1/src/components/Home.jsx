/* import React from 'react' */
import "../styles/home.scss";

const Home = () => {
  return (<><div className="main">
    <div className="parent">

      <div className="leftbox">
      <select name="cars" id="select1">
           <option value="volvo">Volvo</option>
           <option value="saab">Saab</option>
           <option value="mercedes">Mercedes</option>
           <option value="audi">Audi</option>
      </select>
      <select name="city" id="select2">
           <option value="volvo">Volvo</option>
           <option value="saab">Saab</option>
           <option value="mercedes">Mercedes</option>
           <option value="audi">Audi</option>
      </select>
      <div className="1">Lorem ipsum dolor sit amet consectetur </div>
      </div>
      <div className="rightbox">
    
      </div>
    </div>
    </div>
  </>)
}

export default Home