import { observer } from 'mobx-react-lite';
import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import AdminItem from './AdminItem';
import { Context } from '../../'

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

const Admin = observer(() => {
	const { modal } = React.useContext(Context);

	const openPopup = () => {
    modal.setVisible(true);
  };

	return (
    <AdminContainer>
      {data?.map(({ title, addTitle, editTitle, removeTitle }, i) => (
        <AdminItem
          key={i}
          title={title}
          addTitle={addTitle}
          editTitle={editTitle}
          removeTitle={removeTitle}
          openPopup={openPopup}
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