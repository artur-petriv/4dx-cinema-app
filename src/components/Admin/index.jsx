import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import AdminItem from './AdminItem';
import { Context } from '../../';

const data = [
  {
    title: 'Вікові категорії',
    name: 'ageLimits',
    type: 'simple',
    addTitle: 'Добавити категорію',
    editTitle: 'Редагувати категорію',
    removeTitle: 'Видалити категорію',
  },
  {
    title: 'Жанри',
    name: 'genres',
    type: 'simple',
    addTitle: 'Добавити жанр',
    editTitle: 'Редагувати жанр',
    removeTitle: 'Видалити жанр',
  },
  {
    title: 'Формати',
    name: 'formats',
    type: 'simple',
    addTitle: 'Добавити формат',
    editTitle: 'Редагувати формат',
    removeTitle: 'Видалити формат',
  },
  {
    title: 'Фільми',
    name: 'films',
    type: 'film',
    addTitle: 'Добавити фільм',
    editTitle: 'Редагувати фільм',
    removeTitle: 'Видалити фільм',
  },
  {
    title: 'Сеанси',
    name: 'sessions',
    type: 'session',
    addTitle: 'Добавити сеанс',
    editTitle: 'Редагувати сеанс',
    removeTitle: 'Видалити сеанс',
  },
];

const Admin = observer(() => {
  const { modal } = React.useContext(Context);

  const openPopup = (name, title, type) => {
    modal.setName(name);
    modal.setTitle(title);
    modal.setType(type);
    modal.setVisible(true);
  };

  return (
    <AdminContainer>
      {data?.map(({ title, name, type, addTitle, editTitle, removeTitle }, i) => (
        <AdminItem
          key={i}
          title={title}
          name={name}
          addTitle={addTitle}
          editTitle={editTitle}
          removeTitle={removeTitle}
          openPopup={() => openPopup(name, addTitle, type)}
        />
      ))}
    </AdminContainer>
  );
});

// Styled Components
const AdminContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export default Admin;
