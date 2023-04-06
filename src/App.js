import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchbar";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
padding:10px,
border-radius:5px;
border:none;
background-color: white;
border: solid 1px #ccc;
cursor: pointer;

&:hover{
  background-color: #efefef;
}
`;

const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisión de pendientes con cliente",
  },
];

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  {
    id: "people-02",
    title: "Marcos Rivas",
  },
  {
    id: "people-03",
    title: "Sergio Martinez",
  },
  {
    id: "people-04",
    title: "Laura Jimenez",
  },
  {
    id: "people-05",
    title: "Horario Martinez",
  },
];

function App() {
  const [items, setItems] = useState([...emails, ...calendar, ...people]);
  const [selection, setSelection] = useState("");
  const [currentOption, setCurrentOption] = useState("");

  function handleClick(e) {
    const value = e.target.name;

    switch (value) {
      case "all":
        setItems([...emails, ...calendar, ...people]);
        setCurrentOption("all");
        break;

      case "emails":
        setItems([...emails]);
        setCurrentOption("emails");
        break;

      case "calendar":
        setItems([...calendar]);
        setCurrentOption("calendar");
        break;

      case "people":
        setItems([...people]);
        setCurrentOption("people");
        break;

      default:
    }
  }

  function itemSelected(select) {
    setSelection(select);
  }

  return (
    <div>
      <Button name="all" onClick={handleClick}>
        All
      </Button>
      <Button name="people" onClick={handleClick}>
        People
      </Button>
      <Button name="calendar" onClick={handleClick}>
        Calendar
      </Button>
      <Button name="emails" onClick={handleClick}>
        Emails
      </Button>
      {selection ? <span>You selected: {selection}</span> : ""}
      <SearchBar items={items} itemSelected={itemSelected} />
    </div>
  );
}

export default App;
