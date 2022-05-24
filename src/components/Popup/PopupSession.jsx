import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { Context } from "../..";
import { createSession } from "../../http/filmAPI";
import Select from "../Filter/Select";
import LabelInput from "../Label/LabelInput";

const initialSort = [
  {
    id: 1,
    name: "Веном 2",
    value: "venom 2",
  },
  {
    id: 2,
    name: "100% Вовк",
    value: "100% wolf",
  },
  {
    id: 3,
    name: "Я – панда",
    value: "im panda",
  },
];

const initialSort2 = [
  {
    id: 1,
    name: "2D",
    value: "2d",
  },
  {
    id: 2,
    name: "3D",
    value: "3d",
  },
];

const initialFormValues = {
  start_date: "",
  end_date: "",
  time: "",
  price: "",
};

const PopupSession = observer(() => {
  const { modal, films } = React.useContext(Context);
  const [formValues, setFormValues] = React.useState(initialFormValues);
  const [filmSelected, setFilmSelected] = React.useState({});
  const [formatSelected, setFormatSelected] = React.useState({});

  const onChangeInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onFilmSelect = (film) => {
    setFilmSelected(film);
  };

  const onFormatSelected = (film) => {
    setFormatSelected(film);
  };

  const submitEvents = () => {
    if (
      formValues.start_date.length === 0 ||
      formValues.end_date.length === 0 ||
      formValues.time.length === 0 ||
      formValues.price.length === 0 ||
      !filmSelected.id ||
      !formatSelected.id
    ) {
      alert("Не заповлене хочаб одне поле");
      return;
    }

    createSession({
      ...formValues,
      filmId: filmSelected.id,
      formatId: formatSelected.id,
    }).then((data) => {
      console.log(data);
      setFormValues(initialFormValues);
      modal.setVisible(false);
    });
  };

  return (
    <>
      <Legend>{modal.title}</Legend>
      <FormContainer>
        <LabelsWrap>
          <Select items={films.films} title="Фільм" onChange={onFilmSelect} />
          <LabelInput
            title="Старт Дата"
            name="start_date"
            value={formValues.start_date}
            type="date"
            onChange={onChangeInput}
            valuePlaceholder="10.10.22"
          />
          <LabelInput
            title="Кінець Дата"
            name="end_date"
            value={formValues.end_date}
            type="date"
            onChange={onChangeInput}
            valuePlaceholder="10.11.22"
          />
        </LabelsWrap>
        <LabelsWrap>
          <Select
            items={filmSelected?.formats ? filmSelected.formats : []}
            title="Формат"
            onChange={onFormatSelected}
          />
          <LabelInput
            title="Час початку сеансу"
            name="time"
            value={formValues.time}
            onChange={onChangeInput}
            valuePlaceholder="13:00"
          />
          <LabelInput
            title="Ціна"
            name="price"
            value={formValues.price}
            onChange={onChangeInput}
            valuePlaceholder="80"
          />
        </LabelsWrap>
      </FormContainer>
      <LabelButton onClick={submitEvents}>Добавити</LabelButton>
    </>
  );
});

const Legend = styled.h6`
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--gray-2);
  font-size: var(--h6-font-size);
  font-weight: var(--font-semi-bold);
  width: 100%;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const LabelsWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
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
  align-self: center;
  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.9;
  }
`;

export default PopupSession;
