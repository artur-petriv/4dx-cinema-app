import React from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import Card from './../Card';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import CardSkeleton from '../Card/CardSkeleton';

const HomeContent = observer(() => {
  const {
    films: { films, loading },
  } = React.useContext(Context);

  return (
    <Content>
      <CardsList>
        {loading
          ? Array(8)
              .fill()
              .map((n, i) => <CardSkeleton key={i} />)
          : films?.map((film) => <Card key={film.id} film={film} />)}
      </CardsList>
      {!loading && <Pagination />}
    </Content>
  );
});

// Styled Components
const Content = styled.div`
  border-radius: var(--border-radius-medium);
  grid-area: content;
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: 20px;
`;

const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export default HomeContent;
