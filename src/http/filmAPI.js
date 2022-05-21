import { $authHost, $host } from './index';

export const createFilm = async (film) => {
  const { data } = await $authHost.post('api/film', film);
  return data;
};

export const fetchSort = async () => {
  const { data } = await $host.get('api/film');
  return data;
};

export const fetchFormats = async () => {
  const { data } = await $host.get('api/format');
  return data;
};

export const fetchAgeLimitations = async () => {
  const { data } = await $host.get('api/ageLimitation');
  return data;
};

export const fetchGenres = async () => {
  const { data } = await $host.get('api/genre');
  return data;
};

export const fetchFilms = async (
  sortSelected,
  formatsSelected,
  ageLimitationSelected,
  genresSelected,
  page = 1,
  limit = 4,
) => {
  const genresSelectedStr = JSON.stringify(genresSelected);
  const formatsSelectedStr = JSON.stringify(formatsSelected);
  const { data } = await $host.get('api/film', {
    params: {
      sortSelected,
      formatsSelectedStr,
      genresSelectedStr,
      ageLimitationSelected,
      page,
      limit,
    },
  });

  return data;
};

export const searchFilms = async (name) => {
  const { data } = await $host.get('api/film/search', {
    params: { name },
  });

  return data;
};

export const fetchOneFilm = async (id) => {
  const { data } = await $host.get('api/film/' + id);
  return data;
};

export const createAgeLimitation = async (name, value) => {
  const { data } = await $host.post('api/ageLimitation', {
    name,
    value,
  });
  return data;
};

export const createFormat = async (name, value) => {
  const { data } = await $host.post('api/format', {
    name,
    value,
  });
  return data;
};

export const createGenre = async (name, value) => {
  const { data } = await $host.post('api/genre', {
    name,
    value,
  });
  return data;
};
