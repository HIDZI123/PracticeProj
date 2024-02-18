/* import React from 'react' */
import { AiOutlineSearch } from "react-icons/ai";
import { FiAlignRight } from "react-icons/fi";
import "../styles/home.scss";

const Home = () => {
  return (
    <>
      <nav className="nav_2">
        <main>
          <div>
            <button>
              <AiOutlineSearch
                style={{
                  fontSize: "30px",
                  padding: "10px",
                  width: "40px",
                  height: "40px",
                }}
              />
            </button>
            <input />
          </div>

          <form action="">
            <select name="Type" id="Type">
              <option value="volvo">Fruits</option>
              <option value="saab">Vegetables</option>
              <option value="mercedes">Rice</option>
              <option value="audi">WhoelGrain</option>
            </select>
          </form>

          <button
            style={{
              borderRadius: "50%",
              background: "white",
              border: "none",
            }}
          >
            <FiAlignRight
              className="icon-menu"
              style={{
                fontSize: "25px",
                padding: "10px",
                height: "40px",
                width: "40px",
              }}
            />
          </button>
        </main>
      </nav>
    </>
  );
};

export default Home;
