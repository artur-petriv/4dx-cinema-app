import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import AdminItem from './AdminItem';

const data = [
  {
    title: "Вікові категорії",
    addTitle: "Добавити категорію",
    editTitle: "Редагувати категорію",
    removeTitle: "Видалити категорію",
  },
  {
    title: "Жанри",
    addTitle: "Добавити жанр",
    editTitle: "Редагувати жанр",
    removeTitle: "Видалити жанр",
  },
  {
    title: "Формати",
    addTitle: "Добавити формат",
    editTitle: "Редагувати формат",
    removeTitle: "Видалити формат",
  },
  {
    title: "Фільми",
    addTitle: "Добавити фільм",
    editTitle: "Редагувати фільм",
    removeTitle: "Видалити фільм",
  },
];

export default function Admin() {
	return (
    <AdminContainer>
      {data?.map(({ title, addTitle, editTitle, removeTitle }, i) => (
        <AdminItem
					key={i}
          title={title}
          addTitle={addTitle}
          editTitle={editTitle}
          removeTitle={removeTitle}
        />
      ))}
    </AdminContainer>
  );
}

// Styled Components
const AdminContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 20px;
`;