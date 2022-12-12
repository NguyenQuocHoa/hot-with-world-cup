import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";
import FlagCard from "./components/flagCard/FlagCard";

function App() {
  const [span, setSpan] = useState(6);
  const [nations, setNations] = useState([
    { id: 1, name: "Nation 1", isSuccess: true, msg: "Successfully", isChecked: false },
    { id: 2, name: "Nation 2", isSuccess: true, msg: "Successfully", isChecked: false },
    { id: 3, name: "Nation 3", isSuccess: true, msg: "Successfully", isChecked: false },
    { id: 4, name: "Nation 4", isSuccess: true, msg: "Successfully", isChecked: false },
    { id: 5, name: "Nation 5", isSuccess: true, msg: "Successfully", isChecked: false },
    { id: 6, name: "Nation 6", isSuccess: true, msg: "Successfully", isChecked: false },
    { id: 7, name: "Nation 7", isSuccess: true, msg: "Successfully", isChecked: false },
    { id: 8, name: "Nation 8", isSuccess: true, msg: "Successfully", isChecked: false },
    { id: 9, name: "Nation 9", isSuccess: true, msg: "Successfully", isChecked: false },
    { id: 10, name: "Nation 10", isSuccess: true, msg: "Successfully", isChecked: false },
  ]);
  return (
    <div className="App">
      <h1 className="title-text">NÓNG CÙNG WORLD CUP</h1>
      <Button type="primary" icon={<PlayCircleFilled />} size="large" className="btn-play">
        PLAY
      </Button>
      <Row gutter={[30, 30]} className="flag-card-wrap">
        {nations.length > 0 &&
          nations.map((flag) => (
            <Col key={flag.id} span={span}>
              <FlagCard />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default App;
