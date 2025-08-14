import { useNavigate } from "react-router-dom";
import Bro from "../assets/bro.jpg";
import { useEffect } from "react";

const Brothers = () => {
    const navigate = useNavigate();
  useEffect(() => {
    const container = document.querySelector(".confetti-flow-container");
    if (!container) return;
    container.innerHTML = "";
    const colors = [
      "#00fff7",
      "#ff00ea",
      "#fff700",
      "#00ff2a",
      "#ff5e00",
      "#7b2ff2",
      "#f357a8",
      "#00c3ff",
      "#ffaf7b",
      "#f7b42c",
      "#3a1c71",
      "#d76d77",
    ];
    function spawnConfetti() {
      const paper = document.createElement("div");
      paper.className = "confetti-paper";
      paper.style.left = Math.random() * 100 + "vw";
      paper.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      paper.style.boxShadow = `0 0 16px 4px ${paper.style.background}, 0 0 32px 8px ${paper.style.background}55`;
      paper.style.animationDelay = "0s";
      paper.style.width = 12 + Math.random() * 16 + "px";
      paper.style.height = 24 + Math.random() * 24 + "px";
      paper.style.opacity = "0.85";
      paper.style.borderRadius = Math.random() > 0.5 ? "8px" : "50%";
      if (container) {
        container.appendChild(paper);
      }
      paper.addEventListener("animationend", () => {
        paper.remove();
        setTimeout(spawnConfetti, 300 + Math.random() * 700);
      });
    }
    for (let i = 0; i < 30; i++) {
      setTimeout(spawnConfetti, Math.random() * 2000);
    }
  }, []);
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src={Bro}
          alt="Brothers"
          style={{
            width: "100%",
            height: "100vh",
            maxHeight: "100dvh",
            objectFit: "cover",
          }}
        />
        <div
          className="confetti-flow-container"
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
          }}
        ></div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button style={{ color: "white" }} onClick={()=> navigate("/")}>Home 🏠</button>
      </div>
    </>
  );
};

export default Brothers;
