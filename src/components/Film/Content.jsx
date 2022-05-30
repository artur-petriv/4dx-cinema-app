import React from "react";
import FilmDatepicker from "./Datepicker";
import FilmTicket from "./Ticket";
import FilmHall from "./Hall";
import Container from "../Container";
import Select from "../Filter/Select";
import styled from "styled-components";

const FiltersData = [
  {
    id: 1,
    name: "Формат",
    type: "select",
    options: [
      { id: 1, name: "2D", value: "2d" },
      { id: 2, name: "3D", value: "3d" },
      { id: 3, name: "4DX", value: "4dx" },
    ],
  },
  {
    id: 2,
    name: "Время",
    type: "select",
    options: [
      { id: 1, name: "11:45", value: "11:45" },
      { id: 2, name: "13:00", value: "13:00" },
      { id: 3, name: "17:45", value: "17:45" },
    ],
  },
];

export default function FilmContentIndex({ film }) {
  const [formats, setFormats] = React.useState([]);
  const [times, setTimes] = React.useState({});
  const [formatSelected, setFormatSelected] = React.useState({});
  const [timeSelected, setTimeSelected] = React.useState({});

  console.log("formatSelected", formatSelected);
  console.log("times", times[formatSelected?.id]);
  console.log("timeSelected", timeSelected);

  return (
    <FilmContent>
      <FilmOptions>
        <FilmDatepicker
          sessions={film.sessions}
          filmId={film.id}
          setFormats={setFormats}
          setTimes={setTimes}
        />
        <FilmFilters>
          <FilterStyled
            title="Формат"
            type="select"
            items={formats}
            onChange={setFormatSelected}
          />
          <FilterStyled
            title="Час"
            type="select"
            items={times[formatSelected?.id]}
            onChange={setTimeSelected}
          />
        </FilmFilters>
      </FilmOptions>

      <FilmMain>
        <FilmTicket />
        <FilmHall formats={formats} sessionId={timeSelected.sessionId} />
      </FilmMain>
    </FilmContent>
  );
}

const FilmContent = styled.div`
  display: grid;
  gap: 32px;
`;

const FilmMain = styled(Container)`
  display: grid;
  grid-template-areas: "ticket ticket ticket hall hall hall hall hall hall hall hall hall";
  gap: 32px;
`;

const FilmFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const FilterStyled = styled(Select)`
  padding: 0;
  border: 0;
  row-gap: 8px;
`;

const FilmOptions = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  background-color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
`;
