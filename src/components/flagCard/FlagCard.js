import "./flagCard.css";
import React, { useState } from "react";
import { Card } from "antd";
import congrat from "../../gif/congrats-6.gif";
import fail from "../../gif/failer.gif";

const FlagCard = (props) => {
  const { selectedId, name, isSuccess, srcImg, setSelectedId, styles } = props;
  const srcBg = isSuccess ? congrat : fail;
  const [isShowImg, setIsShowImg] = useState(false);

  const onImageClick = () => {
    setIsShowImg(true);
    setTimeout(() => {
      setSelectedId(selectedId);
      setIsShowImg(false);
    }, 4000);
  };

  return (
    <Card
      hoverable
      className="flag-card-container"
      cover={<img alt="example" src={srcImg} />}
      onClick={onImageClick}
    >
      <h2
        className="nation-name"
        style={{ fontSize: styles.fontSize, marginBottom: styles.marginBottom }}
      >
        {name}
      </h2>
      {isShowImg && (
        <div className={isSuccess ? "img-wrap-success" : "img-wrap-fail"}>
          <img alt="sample" src={srcBg} />
        </div>
      )}
    </Card>
  );
};

export default FlagCard;
