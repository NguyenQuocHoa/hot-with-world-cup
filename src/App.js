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

function App() {
  const [span, setSpan] = useState(4);
  const [nations, setNations] = useState([
    {
      id: 1,
      name: "argentina",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: argentinaSrc,
    },
    {
      id: 2,
      name: "australia",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: australiaSrc,
    },
    {
      id: 3,
      name: "belgium",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: belgiumSrc,
    },
    {
      id: 4,
      name: "france",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: franceSrc,
    },
    {
      id: 5,
      name: "germany",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: germanySrc,
    },
    {
      id: 6,
      name: "holland",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: hollandSrc,
    },
    {
      id: 7,
      name: "japan",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: japanSrc,
    },
    {
      id: 8,
      name: "poland",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: polandSrc,
    },
    {
      id: 9,
      name: "portugal",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: portugalSrc,
    },
    {
      id: 10,
      name: "korea",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: koreaSrc,
    },
    {
      id: 11,
      name: "spain",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: spainSrc,
    },
    {
      id: 12,
      name: "england",
      isSuccess: true,
      msg: "Successfully",
      isChecked: false,
      srcImg: englandSrc,
    },
  ]);
  return (
    <div className="App">
      <h1 className="title-text">NÓNG CÙNG WORLD CUP</h1>
      <Button type="primary" icon={<PlayCircleFilled />} size="large" className="btn-play">
        PLAY
      </Button>
      <Row gutter={[32, 32]} className="flag-card-wrap">
        {nations.length > 0 &&
          nations.map((flag) => (
            <Col key={flag.id} span={span}>
              <FlagCard
                name={flag.name}
                isSuccess={flag.isSuccess}
                msg={flag.msg}
                isChecked={flag.isChecked}
                srcImg={flag.srcImg}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default App;
