import React from "react";
import { useParams } from "react-router-dom";
import { fetchOneFilm } from "../http/filmAPI";
import FilmIndex from "../components/Film";
import { Context } from "..";
import { observer } from "mobx-react-lite";

function Film() {
  const { id } = useParams();
  const { film } = React.useContext(Context);

  React.useEffect(() => {
    film.setFilm({});
    film.setLoading(true);

    const timer = setTimeout(() => {
      fetchOneFilm(id).then((data) => film.setFilm(data));
      film.setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return <FilmIndex />;
}

export default observer(Film);
