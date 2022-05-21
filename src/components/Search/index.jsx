import React from 'react';
import SearchSvg from '../../svg/SearchSvg';
import styled from 'styled-components';
import CardRating from '../Card/CardRating';
import { searchFilms } from '../../http/filmAPI';
import { Link } from 'react-router-dom';
import { regExp } from '../../utils/regExp';

export default function Search() {
  const [show, setShow] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState([]);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      setShow(false);
    };

    if (show) {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    }

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [show]);

  React.useEffect(() => {
    if (search.length === 0) {
      setResults([]);
      return;
    }

    searchFilms(search).then((data) => setResults(data.rows));
  }, [search]);

  return (
    <>
      {show && <Overlay />}
      <SearchMain ref={ref}>
        <SearchForm className={show && search && 'search'}>
          <SearchIcon />
          <SearchInput
            onFocus={() => setShow(true)}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            spellCheck="false"
            autoComplete="false"
            type="text"
            placeholder="Поиск"
          />
        </SearchForm>
        {show && search && (
          <SearchBox>
            {results.length > 0 ? (
              results.map(({ id, img, name, rating, genres }) => (
                <Link
                  key={id}
                  to={`film/${id}`}
                  onClick={() => {
                    setShow(false);
                    setSearch('');
                  }}>
                  <Card>
                    <Img src={img} alt={name} />
                    <Info>
                      <H4>
                        {name.split(new RegExp(regExp(search), 'ig')).map((part, i, arr) =>
                          i === arr.length - 1 ? (
                            part
                          ) : (
                            <React.Fragment key={i}>
                              {part}
                              <span>{search.toLocaleLowerCase()}</span>
                            </React.Fragment>
                          ),
                        )}
                      </H4>
                      <Genres>
                        {genres
                          .map((genre) => genre.name.toLowerCase())
                          .join(', ')
                          .toLowerCase()}
                      </Genres>
                      <CardRating size="small" rating={rating} />
                    </Info>
                  </Card>
                </Link>
              ))
            ) : (
              <NotFoundText>Нічого не знайдено</NotFoundText>
            )}
          </SearchBox>
        )}
      </SearchMain>
    </>
  );
}

// Styled Components
const SearchMain = styled.div`
  grid-area: search;
  position: relative;
  z-index: var(--z-index-third);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: var(--z-index-third);
`;

const SearchIcon = styled(SearchSvg)`
  width: 15px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  fill: var(--gray-4);
`;

const SearchInput = styled.input`
  padding: 12px 20px 12px 42px;
  width: 100%;
  border-radius: 8px;
  background-color: var(--gray-1);
  color: var(--gray-8);
`;

const SearchForm = styled.div`
  position: relative;
  &.search {
    &::after {
      content: '';
      margin-left: 20px;
      position: absolute;
      bottom: 0;
      height: 1px;
      width: calc(100% - 40px);
      background-color: var(--gray-3);
      display: block;
      z-index: var(--z-index-second);
    }
    & > input {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

const SearchBox = styled.div`
  position: absolute;
  top: 41px;
  left: 0;
  padding: 16px 20px;
  width: 100%;
  background-color: var(--gray-1);
  border-bottom-left-radius: var(--border-radius-medium);
  border-bottom-right-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow);
  z-index: var(--z-index-first);
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const NotFoundText = styled.div`
  font-size: 13px;
`;

const Card = styled.div`
  padding: 8px;
  border-radius: 4px;
  background-color: var(--gray-0);
  box-shadow: var(--box-shadow);
  display: flex;
  column-gap: 8px;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: var(--box-shadow-overflow);
  }
`;

const Img = styled.img`
  height: 64px;
  border-radius: 4px;
  display: flex;
`;

const H4 = styled.h4`
  &::first-letter {
    text-transform: capitalize;
    letter-spacing: 0.4px;
  }

  & > span {
    background-color: var(--negative-color);
    color: #fff;
  }
`;

const Genres = styled.div`
  font-size: 13px;
  padding-top: 4px;
  line-height: 1;
  color: var(--gray-8);
`;

const Info = styled.div``;
