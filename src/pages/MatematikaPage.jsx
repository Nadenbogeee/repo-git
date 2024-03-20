import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import "../CSS/Matematika.css";
import Leaderbotmm from "../components/LeaderbotMatematika.jsx";
import KuisPage from "./KuisPage";
import Navbarapp from "../components/Navbarapp.jsx";
import Image from "react-bootstrap/Image";
import gambarKuis from "../assets/ava.png";
import Button from "react-bootstrap/Button";

function MatematikaPage() {
  const [materiData, setMateriData] = useState(null);
  const [selectedQuizId, setSelectedQuizId] = useState(null);

  useEffect(() => {
    const fetchMateriData = async () => {
      try {
        const response = await fetch("http://localhost:3000/materi/details/MATEMATIKA");
        const data = await response.json();
        setMateriData(data.body);
        console.log(data);
      } catch (error) {
        console.error("Error fetching materi data:", error);
      }
    };

    fetchMateriData();
  }, []);

  const handleQuizClick = (quizId) => {
    console.log("Clicked QuizId:", quizId);
    setSelectedQuizId(quizId);
  };

  const handleMateriTitleClick = (materi) => {
    // Redirect to the specified API using window.location.href
    if (materi && materi.Content) {
      const apiUrl = `http://localhost:3000/materi/download/${materi.Content}`;
      window.location.href = apiUrl;
      console.log("Click on materi title. To download, please right-click and choose 'Save Link As'.");

      // Optionally, you can keep the code below to log the materi details
      console.log("Materi details:", materi);
    }
  };

  return (
    <div className="enam">
      {/* ini bagian navbar */}
      {/* ini akhir bagian navbar */}
      {materiData ? (
        <div className="satu">
          {/* ini judul materi testing */}
          <div className="judulHeadline">
            <div className="headLine">
              <div className="materidataTitle">{materiData.Title}</div>
              <p className="loremLimaPuluh">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ex, facilis doloribus ut quod nostrum voluptas vel natus aspernatur, odit culpa amet, praesentium cum corrupti at impedit ratione! Dolor voluptatem tempore eius
                rem placeat quos vitae esse architecto amet quaerat ea, libero laboriosam exercitationem expedita, inventore distinctio fugit! Rerum, dignissimos!
              </p>
              <Button variant="success" onClick={() => handleMateriTitleClick(materiData)}>
                {materiData.Content}
                Silahkan download materi disini
              </Button>{" "}
            </div>

            <div className="childrenMateri">
              {materiData.subMateries.map((child) => (
                <div className="haha" key={child.Name}>
                  <div className="subSib">{child.Title}</div>
                  <div className="buttonBagianbawah">
                    <Button variant="success" onClick={() => handleMateriTitleClick(child)} style={{ cursor: "pointer" }}>
                      {child.Content}
                      Silahkan download sub materi disini
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {materiData.subMateries && (
            <div className="dua">
              <h2>Children Materi</h2>
              {materiData.subMateries.map((child) => (
                <div key={child.Name}>
                  <h6>{child.Title}</h6>
                  <p onClick={() => handleMateriTitleClick(child)} style={{ cursor: "pointer" }}>
                    {child.Content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* segemen 3 */}
          {materiData.quizes && (
            <div className="empat">
              <h2>Quizes</h2>
              <div className="empatDua">
                {materiData.quizes.map((quiz) => (
                  <div key={quiz.Id}>
                    {/* box pertmaa */}
                    <div className="boxPertama">
                      <div className="kotakGambar">
                        <Image src={gambarKuis} fluid className="gambarKKuis" alt="" />
                      </div>
                      <div className="kotakText">
                        <p className="pKuisTitle">{quiz.Title}</p>
                        <p className="pTimeLimit">Time Limit: {quiz.TimeLimit} seconds</p>
                      </div>
                      <div className="kotakTombol">
                        <Link className="linkEdit" to={`/kuis/${quiz.Id}`} onClick={() => handleQuizClick(quiz.Id)}>
                          <Button className="tombolPertama" variant="primary">
                            Mulai Kuis
                          </Button>{" "}
                        </Link>
                      </div>
                    </div>
                    {/* akhir  dari box pertama */}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading materi details...</p>
      )}

      {selectedQuizId && <Route path="/kuis" element={<KuisPage quizId={selectedQuizId} />} />}
    </div>
  );
}

export default MatematikaPage;
