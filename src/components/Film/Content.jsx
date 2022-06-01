import React from "react";
import FilmDatepicker from "./Datepicker";
import Select from "../Filter/Select";
import styled from "styled-components";
import FilmMain from "./FilmMain";

export default function FilmContentIndex({ film }) {
  const [formats, setFormats] = React.useState([]);
  const [times, setTimes] = React.useState({});
  const [formatSelected, setFormatSelected] = React.useState({});
  const [timeSelected, setTimeSelected] = React.useState({});

  // console.log("formatSelected", formatSelected);
  // console.log("times", times[formatSelected?.id]);
  // console.log("timeSelected", timeSelected);

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

      <FilmMain
        film={film}
        sessionId={timeSelected.sessionId}
        formatSelected={formatSelected}
        timeSelected={timeSelected}
      />
    </FilmContent>
  );
}

const FilmContent = styled.div`
  display: grid;
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
