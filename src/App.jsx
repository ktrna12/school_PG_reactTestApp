import React, { useState } from "react";
import ava from "./ava.png";
import "./App.css";
import Card from "./components/Card.jsx";
import Skill from "./components/Skill.jsx";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        placeItems: "flex-start",
        padding: "10px",
        gap: "20px",
      }}
    >
      <Card ava={ava} name="Чалкова Екатерина Максимовна"></Card>
      <div className={"skill-container"}>
        <h3>МОИ НАВЫКИ:</h3>
        <Skill text={"Знание языка Python"}></Skill>
        <Skill text={"Опыт работы на языке C#"}></Skill>
        <Skill text={"Опыт работы над проектом в команде"}></Skill>
        <Skill text={"Работа по макетам Figma"}></Skill>
      </div>
      <div className={"skill-container"}>
        <h3>ХОЧУ ИЗУЧИТЬ:</h3>
        <Skill text={"Создание проектов на Java Script"}></Skill>
        <Skill text={"Среду Node.js"}></Skill>
        <Skill text={"Язык запросов SQL"}></Skill>
        <Skill text={"Framework React.js"}></Skill>
        <Skill text={"CSS"}></Skill>
        <Skill text={"Развертку приложений"}></Skill>
        <Skill text={"GIT"}></Skill>
        <Skill text={"Процесс работы в новой команде"}></Skill>
        <Skill text={"Создание макетов в Figma"}></Skill>
        <Skill text={"Навыки печати вслепую"}></Skill>
      </div>
    </div>
  );
}

export default App;
