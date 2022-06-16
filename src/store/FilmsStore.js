import { makeAutoObservable } from "mobx";

export default class FilmsStore {
  constructor() {
    this._loading = true;
    this._sort = [];
    this._ageLimitations = [];
    this._formats = [];
    this._genres = [];
    this._films = [];
    this._sortSelected = "";
    this._formatsSelected = {};
    this._ageLimitationSelected = "";
    this._genresSelected = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 8;
    makeAutoObservable(this);
  }

  setLoading(boolean) {
    this._loading = boolean;
  }

  setSort(sort) {
    this._sort = sort;
  }

  setAgeLimitation(ages) {
    this._ageLimitations = ages;
  }

  setFilms(films) {
    this._films = films;
  }

  setGenres(genres) {
    this._genres = genres;
  }

  setFormats(formats) {
    this._formats = formats;
  }

  setSortSelected(sort) {
    this._sortSelected = sort;
  }

  setFormatsSelected(formats) {
    this._formatsSelected = formats;
  }

  setAgeLimitationSelected(age) {
    this._ageLimitationSelected = age;
  }

  setGenresSelected(genres) {
    this._genresSelected = genres;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(total) {
    this._totalCount = total;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  get loading() {
    return this._loading;
  }

  get sort() {
    return this._sort;
  }

  get ageLimitations() {
    return this._ageLimitations;
  }

  get formats() {
    return this._formats;
  }

  get genres() {
    return this._genres;
  }

  get films() {
    return this._films;
  }

  get sortSelected() {
    return this._sortSelected;
  }

  get formatsSelected() {
    return this._formatsSelected;
  }

  get ageLimitationSelected() {
    return this._ageLimitationSelected;
  }

  get genresSelected() {
    return this._genresSelected;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
