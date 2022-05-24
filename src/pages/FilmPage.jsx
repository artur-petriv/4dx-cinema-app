import React from "react";
import { useParams } from "react-router-dom";
import { fetchOneFilm } from "../http/filmAPI";
import FilmIndex from "../components/Film";

export default function Film() {
  const { id } = useParams();
  const [film, setFilm] = React.useState({});

  React.useEffect(() => {
    fetchOneFilm(id).then((data) => setFilm(data));
  }, []);

  return <FilmIndex film={film} />;
}
