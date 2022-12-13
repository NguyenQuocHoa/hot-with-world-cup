import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";
import FlagCard from "./components/flagCard/FlagCard";
import argentinaSrc from "./flag/argentina-flag-8x5.gif";
import australiaSrc from "./flag/australia-flag-8x5-std.jpg";
import belgiumSrc from "./flag/belgium--flag-8x5.gif";
import franceSrc from "./flag/france-flag-8x5.gif";
import germanySrc from "./flag/germany-flag-8x5.gif";
import hollandSrc from "./flag/holland-flag-8x5.gif";
import japanSrc from "./flag/japan-flag-8x5.gif";
import polandSrc from "./flag/poland-flag-8x5.jpg";
import portugalSrc from "./flag/portugak-flag-8x5.jpg";
import koreaSrc from "./flag/s-korea-8x5-std-1_1.jpg";
import spainSrc from "./flag/spain-flag-8x5.jpg";
import englandSrc from "./flag/st-george-flag-8x5.gif";
import switzerlandSrc from "./flag/switzerland-flag-8x5.jpg";
import mexicoSrc from "./flag/mexico-flag-8x5.gif";
import usaSrc from "./flag/usa-flag-8x5.gif";
import walesSrc from "./flag/wales-flag-8x5.jpg";

const NUMBER_NATION_SUCCESS = 6;

function App() {
  const [isProcess, setInProgress] = useState(false);
  const [span, setSpan] = useState(4);
  const [styles, setStyles] = useState({ fontSize: "0.9em", marginBottom: -26 });
  const [selectedId, setSelectedId] = useState(0);
  const [nations, setNations] = useState([
    {
      id: 1,
      name: "argentina",
      isSuccess: false,
      srcImg: argentinaSrc,
    },
    {
      id: 2,
      name: "australia",
      isSuccess: false,
      srcImg: australiaSrc,
    },
    {
      id: 3,
      name: "belgium",
      isSuccess: false,
      srcImg: belgiumSrc,
    },
    {
      id: 4,
      name: "france",
      isSuccess: false,
      srcImg: franceSrc,
    },
    {
      id: 5,
      name: "germany",
      isSuccess: false,
      srcImg: germanySrc,
    },
    {
      id: 6,
      name: "holland",
      isSuccess: false,
      srcImg: hollandSrc,
    },
    {
      id: 7,
      name: "japan",
      isSuccess: false,
      srcImg: japanSrc,
    },
    {
      id: 8,
      name: "poland",
      isSuccess: false,
      srcImg: polandSrc,
    },
    {
      id: 9,
      name: "portugal",
      isSuccess: false,
      srcImg: portugalSrc,
    },
    {
      id: 10,
      name: "korea",
      isSuccess: false,
      srcImg: koreaSrc,
    },
    {
      id: 11,
      name: "spain",
      isSuccess: false,
      srcImg: spainSrc,
    },
    {
      id: 12,
      name: "england",
      isSuccess: false,
      srcImg: englandSrc,
    },
    {
      id: 13,
      name: "switzerland",
      isSuccess: false,
      srcImg: switzerlandSrc,
    },
    {
      id: 14,
      name: "mexico",
      isSuccess: false,
      srcImg: mexicoSrc,
    },
    {
      id: 15,
      name: "usa",
      isSuccess: false,
      srcImg: usaSrc,
    },
    {
      id: 16,
      name: "wales",
      isSuccess: false,
      srcImg: walesSrc,
    },
  ]);

  const generateNation = () => {
    let arr = nations.map((nation) => ({
      ...nation,
      rand: Math.random(),
    }));
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
