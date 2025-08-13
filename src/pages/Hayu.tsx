import { useNavigate } from "react-router-dom";
import "../App.css";
import HayuImage from "../assets/hayu.png"; 

function Hayu() {
  const navigate = useNavigate();
  return (
    <div className="hayu-root">
      <h1 className="snake-text">Hayu is king of India 🚀</h1>
      <div className="curtain-container">
        <img className="curtain-image" src={HayuImage} alt="Hayu" />
        <div className="curtain"></div>
      </div>
      <section>
        <p>Name : Hayansh Krishna 🦈</p>
        <p>Class : PP1</p>
        <p>Age : 4</p>
        <p>School : Presidency</p>
        <button onClick={() => navigate("/mickey")}>
          Click for Mickey 🐭
        </button>
        <br />
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => navigate("/brothers")}>❤️</button>
        </div>
      </section>
    </div>
  );
}

export default Hayu;
