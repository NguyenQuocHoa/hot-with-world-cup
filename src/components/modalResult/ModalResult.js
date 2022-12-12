import "./modalResult.css";
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import congrat from "../../gif/congrats-6.gif";
import fail from "../../gif/failer.gif";

const ModalResult = ({ isModalOpen, setIsModalOpen, isSuccess }) => {
  const srcImg = isSuccess ? congrat : fail;
  const [isShowImg, setIsShowImg] = useState(true);
  const handleOk = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    console.log("cancel click", typeof setIsModalOpen);
    setIsModalOpen(0);
    console.log("cancel click after", isModalOpen);
  };

  console.log("props", isModalOpen);

  useEffect(() => {
    setTimeout(() => {
      setIsShowImg(false);
    }, 4000);
  }, []);

  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        className="modal-con"
      >
        {isShowImg && <img alt="sample" src={fail} />}
      </Modal>
    </div>
  );
};

export default ModalResult;
