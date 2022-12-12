import "./flagCard.css";
import React from "react";
import { Card } from "antd";
import srcImg from "../../flag/portugak-flag-8x5.jpg";

const FlagCard = () => {
  return (
    <Card
      hoverable
      className="flag-card-container"
      cover={<img alt="example" src={srcImg} />}
    ></Card>
  );
};

export default FlagCard;
