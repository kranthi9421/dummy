import { useNavigate } from "react-router-dom";
import BuddaImage from "../assets/budda.png";

const Budda = () => {
  const navigate = useNavigate();
  return (
    <div className="hayu-root">
      <h1 className="snake-text-budda">Mickey 🐭 is a Sadist</h1>
      <div className="curtain-container">
        <img className="curtain-image" src={BuddaImage} alt="Hayu" />
        <div className="curtain"></div>
      </div>
      <section>
        <p>Name : Daksh Adhreen 🦭</p>
        <p>Class : Nursery</p>
        <p>Age : 3</p>
        <p>School : Giggle Garden</p>
        <button onClick={() => navigate("/")}>Click for Hayu 🚀</button>
         <div style={{ marginTop: "20px" }}>
          <button onClick={() => navigate("/brothers")}>❤️</button>
        </div>
      </section>
    </div>
  );
};

export default Budda;
