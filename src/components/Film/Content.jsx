import React from "react";
import FilmDatepicker from "./Datepicker";
import Select from "../Filter/Select";
import styled from "styled-components";
import FilmMain from "./FilmMain";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const FilmContentIndex = observer(({ film }) => {
  const { session } = React.useContext(Context);

  const setSelectedTime = (time) => {
    session.setTimeSelected(time);
  };

  const setSelectedFormat = (format) => {
    session.setFormatSelected(format);
  };

  const setFormats = (formats) => {
    session.setAvailableFormats(formats);
  };

  const setTimes = (times) => {
    session.setAvailableTimes(times);
  };

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
            items={session.availableFormats}
            onChange={setSelectedFormat}
          />
          <FilterStyled
            title="Час"
            type="select"
            items={session.availableTimes[session.formatSelected?.id]}
            onChange={setSelectedTime}
          />
        </FilmFilters>
      </FilmOptions>

      <FilmMain
        film={film}
        sessionId={session.timeSelected.sessionId}
        formatSelected={session.formatSelected}
        timeSelected={session.timeSelected}
      />
    </FilmContent>
  );
});

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

export default FilmContentIndex;
