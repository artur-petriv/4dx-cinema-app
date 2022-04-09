import { $authHost, $host } from "./index";

export const createFilm = async (type) => {
	const { data } = await $authHost.post('api/film', type);
	return data;
}

export const fetchSort = async () => {
  const { data } = await $host.get("api/films");
  return data;
};

export const fetchFormats = async () => {
  const { data } = await $host.get("api/format");
  return data;
};

export const fetchAgeLimitations = async () => {
  const { data } = await $host.get("api/ageLimitation");
  return data;
};

export const fetchGenres = async () => {
  const { data } = await $host.get("api/genre");
  return data;
};

export const fetchFilms = async () => {
	const { data } = await $host.get('api/film');
	return data;
}

export const fetchOneFilm = async (id) => {
	const { data } = await $host.get('api/film/' + id);
	return data;
}