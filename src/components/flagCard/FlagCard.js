import "./flagCard.css";
import React, { useState } from "react";
import { Card } from "antd";
import ModalResult from "../modalResult/ModalResult";

const FlagCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, isSuccess, msg, isChecked, srcImg } = props;

  React.useEffect(() => {
    console.log("isModalOpen", isModalOpen);
  }, [isModalOpen]);
  return (
    <Card
      hoverable
      className="flag-card-container"
      cover={<img alt="example" src={srcImg} />}
      onClick={() => setIsModalOpen1(true)}
    >
      <h2 className="nation-name">{name}</h2>
      <ModalResult isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Card>
  );
};

export default FlagCard;
