import React, { useState, useEffect } from "react";
import rank1 from "../assets/rank1.png";
import rank2 from "../assets/rank2.png";
import rank3 from "../assets/rank3.png";
import rank from "../assets/rank.png";
import banner from "../assets/bannerKeren.png";

const Leaderbot = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch("http://localhost:3000/quiz/leaderboard");
      const data = await response.json();
      setLeaderboardData(data.body);
    } catch (error) {
      console.error("Error fetching leaderboard data", error);
    }
  };

  return (
    <div className="containerbox">
      <div className="title">
        <img src={banner} alt="" />
      </div>
      <br />
      <div className="containerTambah">
        <div className="pembungkus1">
          <div className="tempat1">
            <div className="badgeSiswa1">
              <img src={rank1} alt="" />
            </div>
            <div className="namaSiswa1">Denys naidu</div>
            <div className="scoreMapel1">92</div>
          </div>
        </div>
        <div className="tempat2">
          <div className="badgeSiswa2">
            <img src={rank2} alt="" />
          </div>
          <div className="namaSiswa2">Satya Prakash</div>
          <div className="scoreMapel2">91</div>
        </div>
        <div className="tempat3">
          <div className="badgeSiswa3">
            <img src={rank3} alt="" />
          </div>
          <div className="namaSiswa3">Yoga naden</div>
          <div className="scoreMapel3">90</div>
        </div>
        <div className="tempat4">
          <div className="badgeSiswa4">
            <img src={rank} alt="" />
          </div>
          <div className="namaSiswa4">Yoga naden</div>
          <div className="scoreMapel4">90</div>
        </div>
        <div className="tempat4">
          <div className="badgeSiswa4">
            <img src={rank} alt="" />
          </div>
          <div className="namaSiswa4">Yoga naden</div>
          <div className="scoreMapel4">90</div>
        </div>
        <div className="tempat4">
          <div className="badgeSiswa4">
            <img src={rank} alt="" />
          </div>
          <div className="namaSiswa4">Yoga naden</div>
          <div className="scoreMapel4">90</div>
        </div>
        <div className="tempat4">
          <div className="badgeSiswa4">
            <img src={rank} alt="" />
          </div>
          <div className="namaSiswa4">Yoga naden</div>
          <div className="scoreMapel4">90</div>
        </div>
        <div className="tempat4">
          <div className="badgeSiswa4">
            <img src={rank} alt="" />
          </div>
          <div className="namaSiswa4">Yoga naden</div>
          <div className="scoreMapel4">90</div>
        </div>
        <div className="tempat4">
          <div className="badgeSiswa4">
            <img src={rank} alt="" />
          </div>
          <div className="namaSiswa4">Yoga naden</div>
          <div className="scoreMapel4">90</div>
        </div>
        <div className="tempat4">
          <div className="badgeSiswa4">
            <img src={rank} alt="" />
          </div>
          <div className="namaSiswa4">Yoga naden</div>
          <div className="scoreMapel4">90</div>
        </div>
      </div>
    </div>
  );
};

export default Leaderbot;
