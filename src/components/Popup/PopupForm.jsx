import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import { createFilm } from "../../http/filmAPI";
import FilterCheckbox from "../Filter/FilterCheckbox";
import FilterRadio from "../Filter/FilterRadio";
import LabelInput from "../Label/LabelInput";

const initialFormValues = {
  name: "",
  year: "",
  country: "",
  language: "",
  img: "https://razborkatesla.com.ua/o/card.jpg",
  trailer: "https://razborkatesla.com.ua/o/card.jpg",
  duration: "",
  rating: "",
};

const PopupForm = () => {
  const { modal, films } = React.useContext(Context);
  const [genresSelected, setGenresSelected] = React.useState({});
  const [formatsSelected, setFormatsSelected] = React.useState({});
  const [ageLimitationSelected, setAgeLimitationSelected] = React.useState({});
  const [formValues, setFormValues] = React.useState(initialFormValues);

  React.useEffect(() => {
    setAgeLimitationSelected({ ...films.ageLimitations[0] });
  }, []);

  const onChangeInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const changeFormatsSelected = (checkbox) => {
    setFormatsSelected({
      ...formatsSelected,
      [checkbox.value]: {
        ...checkbox,
        checked: !formatsSelected[checkbox.value]?.checked,
      },
    });
  };

  const changeGenresSelected = (checkbox) => {
    setGenresSelected({
      ...genresSelected,
      [checkbox.value]: {
        ...checkbox,
        checked: !genresSelected[checkbox.value]?.checked,
      },
    });
  };

  const changeAgeLimitationSelected = (radio) => {
    if (ageLimitationSelected.value === radio.value) return;

    setAgeLimitationSelected(radio);
  };

  const submitEvents = () => {
    createFilm({
      ...formValues,
      rating: 5,
      ageLimitationSelected,
      genresSelected,
      formatsSelected,
    }).then((data) => {
      setFormValues(initialFormValues);
      modal.setVisible(false);
    });
  };

  return (
    <>
      <Legend>{modal.title}</Legend>
      <FormContainer>
        <LabelsWrap>
          <LabelInput
            title="Назва фільму"
            name="name"
            value={formValues.name}
            onChange={onChangeInput}
            valuePlaceholder="Назва фільму"
          />
          <LabelInput
            title="Рік"
            name="year"
            value={formValues.year}
            onChange={onChangeInput}
            valuePlaceholder="2022"
          />
          <LabelInput
            title="Країна"
            name="country"
            value={formValues.country}
            onChange={onChangeInput}
            valuePlaceholder="Україна"
          />
          <LabelInput
            title="Мова"
            name="language"
            value={formValues.language}
            onChange={onChangeInput}
            valuePlaceholder="Українська"
          />
          <LabelInput
            title="Картинка URL"
            name="img"
            value={formValues.img}
            onChange={onChangeInput}
            valuePlaceholder="https://ex.ua/123.jpg"
          />
          <FilterCheckbox
            title="Формати"
            items={films.formats}
            selected={formatsSelected}
            changeCheckboxSelected={changeFormatsSelected}
          />
          <FilterCheckbox
            title="Жанри"
            items={films.genres}
            selected={genresSelected}
            changeCheckboxSelected={changeGenresSelected}
          />
        </LabelsWrap>
        <LabelsWrap>
          <LabelInput
            title="Трейлер URL"
            name="trailer"
            value={formValues.trailer}
            onChange={onChangeInput}
            valuePlaceholder="https://youtube.com/watch?v=LvLNP05"
          />
          <LabelInput
            title="Тривалість"
            name="duration"
            value={formValues.duration}
            onChange={onChangeInput}
            valuePlaceholder="120"
          />
          <LabelInput
            title="Рейтинг"
            name="rating"
            value={formValues.rating}
            onChange={onChangeInput}
            valuePlaceholder="5"
          />
          <FilterRadio
            title="Вікове обмеження"
            items={films.ageLimitations}
            selected={ageLimitationSelected}
            changeRadioSelected={changeAgeLimitationSelected}
          />
        </LabelsWrap>
      </FormContainer>
      <LabelButton onClick={submitEvents}>Добавити</LabelButton>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const LabelsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Legend = styled.h6`
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--gray-2);
  font-size: var(--h6-font-size);
  font-weight: var(--font-semi-bold);
`;

const LabelButton = styled.button`
  margin-top: 24px;
  padding: 12px;
  width: 100%;
  max-width: 320px;
  background-color: var(--brand-color);
  color: var(--gray-0);
  border-radius: var(--border-radius-medium);
  line-height: 1;
  font-weight: 600;
  transition: background-color 0.3s, opacity 0.3s;
  opacity: 0.95;
  self-align: center;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.9;
  }
`;

export default observer(PopupForm);
