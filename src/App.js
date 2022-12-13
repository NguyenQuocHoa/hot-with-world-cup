import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";
import FlagCard from "./components/flagCard/FlagCard";

import { data as DATA } from "./data";
const NUMBER_NATION_SUCCESS = 6;

function App() {
  const [isProcess, setInProgress] = useState(false);
  const [span, setSpan] = useState(4);
  const [styles, setStyles] = useState({ fontSize: "0.9em", marginBottom: -26 });
  const [selectedId, setSelectedId] = useState(0);
  const [nations, setNations] = useState(DATA);

  const generateNation = () => {
    let arr = [];
    if (nations.length !== DATA.length) {
      arr = [...DATA].map((nation) => ({
        ...nation,
        rand: Math.random(),
      }));
      setSpan(4);
      setStyles({ fontSize: "0.9em", marginBottom: -26 });
    } else {
      arr = nations.map((nation) => ({
        ...nation,
        rand: Math.random(),
      }));
    }

    arr = arr.sort((a, b) => a.rand - b.rand);
    for (let i = 0; i < NUMBER_NATION_SUCCESS; i++) {
      arr[i].isSuccess = true;
    }
    arr.sort((a, b) => a.id - b.id);
    setNations(arr);
  };

  useEffect(() => {
    const arr = [...nations.filter((nation) => nation.id !== selectedId)];
    if (arr.length === 8) {
      setSpan(6);
      setStyles({ fontSize: "1.8em", marginBottom: -19 });
    } else if (arr.length === 3) {
      setSpan(8);
      setStyles({ fontSize: "3em", marginBottom: -20 });
    } else if (arr.length === 2) {
      setSpan(12);
    }
    setNations(arr);
  }, [selectedId]);

  return (
    <div className="App">
      <h1 className="title-text">NÓNG CÙNG WORLD CUP</h1>
      <Button
        type="primary"
        icon={<PlayCircleFilled />}
        size="large"
        className="btn-play"
        onClick={() => {
          generateNation();
          setInProgress(true);
        }}
      >
        PLAY
      </Button>
      {isProcess && (
        <Row gutter={[32, 32]} className="flag-card-wrap" justify="center">
          {nations.length > 0 &&
            nations.map((flag) => (
              <Col key={flag.id} span={span}>
                <FlagCard
                  selectedId={flag.id}
                  name={flag.name}
                  isSuccess={flag.isSuccess}
                  srcImg={flag.srcImg}
                  setSelectedId={setSelectedId}
                  styles={styles}
                />
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
}

export default App;
