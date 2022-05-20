import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { Context } from '../..';
import FilterSelect from '../Filter/FilterSelect';
import LabelInput from '../Label/LabelInput';

const initialSort = [
  {
    name: 'Веном 2',
    value: 'venom 2',
  },
  {
    name: '100% Вовк',
    value: '100% wolf',
  },
  {
    name: 'Я – панда',
    value: 'im panda',
  },
];

const initialSort2 = [
  {
    name: '2D',
    value: '2d',
  },
  {
    name: '3D',
    value: '3d',
  },
];

const initialFormValues = {
  name: '',
  year: '2022',
  country: 'США',
  language: 'Українська',
  img: 'https://razborkatesla.com.ua/o/card.jpg',
  trailer: 'https://www.youtube.com/embed/ueb7NJP9f9w',
  duration: '120',
  rating: '6',
};

const PopupSession = observer(() => {
  const { modal } = React.useContext(Context);
  const [formValues, setFormValues] = React.useState(initialFormValues);

  const onChangeInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Legend>{modal.title}</Legend>
      <FormContainer>
        <LabelsWrap>
          <Select items={initialSort} />
          <LabelInput
            title="Старт Дата"
            name="start_date"
            value={formValues.start_date}
            onChange={onChangeInput}
            valuePlaceholder="10.10.22"
          />
          <LabelInput
            title="Кінець Дата"
            name="end_date"
            value={formValues.end_date}
            onChange={onChangeInput}
            valuePlaceholder="10.11.22"
          />
        </LabelsWrap>
        <LabelsWrap>
          <Select items={initialSort2} />
          <LabelInput
            title="Час початку сеансу"
            name="time_start"
            value={formValues.time_start}
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
    </>
  );
});

const Legend = styled.h6`
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--gray-2);
  font-size: var(--h6-font-size);
  font-weight: var(--font-semi-bold);
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

const Select = styled(FilterSelect)``;

export default PopupSession;
