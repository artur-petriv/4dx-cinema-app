import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '../..';
import { createAgeLimitation, createFormat, createGenre } from '../../http/filmAPI';
import LabelInput from '../Label/LabelInput';
import styled from 'styled-components';

const PopupSimple = observer(() => {
  const { modal } = React.useContext(Context);
  const [simpleValues, setSimpleValues] = React.useState({
    firstSimple: '',
    secondSimple: '',
  });

  const onChangeInput = (e) => {
    setSimpleValues({
      ...simpleValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitEvents = () => {
    const name = simpleValues.firstSimple;
    const value = simpleValues.secondSimple;

    if (modal.name === 'ageLimits') {
      createAgeLimitation(name, value).then((data) => {
        setSimpleValues({
          firstSimple: '',
          secondSimple: '',
        });
        modal.setVisible(false);
      });
      return;
    }

    if (modal.name === 'genres') {
      createGenre(name, value).then((data) => {
        setSimpleValues({
          firstSimple: '',
          secondSimple: '',
        });
        modal.setVisible(false);
      });
      return;
    }

    if (modal.name === 'formats') {
      createFormat(name, value).then((data) => {
        setSimpleValues({
          firstSimple: '',
          secondSimple: '',
        });
        modal.setVisible(false);
      });
      return;
    }
  };

  return (
    <LabelsWrap>
      <Legend>{modal.title}</Legend>
      <LabelInput
        title="Назва"
        name="firstSimple"
        value={simpleValues.firstSimple}
        onChange={onChangeInput}
        valuePlaceholder="0+"
      />
      <LabelInput
        title="Значення"
        name="secondSimple"
        value={simpleValues.secondSimple}
        onChange={onChangeInput}
        valuePlaceholder="0"
      />
      <LabelButton onClick={submitEvents}>Добавити</LabelButton>
    </LabelsWrap>
  );
});

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

export default PopupSimple;
