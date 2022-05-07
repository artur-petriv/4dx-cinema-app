import React from "react";
import SearchSvg from "../../svg/SearchSvg";
import styled from "styled-components";
import CardRating from "../Card/CardRating";

export default function Search() {
  const [show, setShow] = React.useState(false);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {}, [search]);

  return (
    <>
      {show && <Overlay />}
      <SearchMain>
        <SearchForm className={show && search && "search"}>
          <SearchIcon />
          <SearchInput
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onBlur={() => setShow(false)}
            onFocus={() => setShow(true)}
          />
        </SearchForm>
        {show && search && (
          <SearchBox>
            <NotFoundText>Нічого не знайдено</NotFoundText>
            {Array(search.length)
              .fill()
              .map((n, i) => (
                <Card key={i}>
                  <img
                    src="https://razborkatesla.com.ua/o/card.jpg"
                    style={{
                      height: "64px",
                      borderRadius: "4px",
                      display: "flex",
                    }}
                    alt="Item"
                  />
                  <div>
                    <h4>Веном 2</h4>
                    <div
                      style={{
                        fontSize: "13px",
                        paddingTop: "4px",
                        lineHeight: "1",
                      }}
                    >
                      бойовик, трилер, пригоди
                    </div>
                    <CardRating size="small" rating="7" />
                  </div>
                </Card>
              ))}
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
  z-index: var(--z-index-first);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: var(--z-index);
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

const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Поиск",
})`
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
      content: "";
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
`;
