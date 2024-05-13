import React from "react";
import styled from "styled-components";
import Button from "./Button";
import AddIcon from "../Icons/Add.png";
import EditIcon from "../Icons/Edit.png";
import DeleteIcon from "../Icons/Delete.png";

const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: #181818;
`;

const Text = styled.div`
  margin-left: 30px;
  font-weight: 400;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.8);
`;

const LText = styled.div`
  margin-left: 10px;
  margin-top: 12px;
  font-size: 15px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
`;

const Btns = styled.div`
  margin-right: 20px;
  margin-left: auto;
`;

const ToolBar: React.FC = () => {
  const handleAddBtnClick = () => {
    alert("추가버튼누름");
  };

  const handleEditBtnClick = () => {
    alert("수정버튼누름");
  };

  const handleDeleteBtnClick = () => {
    alert("삭제버튼누름");
  };

  return (
    <Bar>
      <Text>Fancy ToolBar</Text>
      <LText>번지르르한 툴바 - React Typescript Practice</LText>
      <Btns>
        <Button onClick={handleAddBtnClick}>
          <img src={AddIcon} alt="Add" />
        </Button>
        <Button onClick={handleEditBtnClick}>
          <img src={EditIcon} alt="Edit" />
        </Button>
        <Button onClick={handleDeleteBtnClick}>
          <img src={DeleteIcon} alt="Delete" />
        </Button>
      </Btns>
    </Bar>
  );
};

export default ToolBar;
