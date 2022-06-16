import { makeAutoObservable } from "mobx";

export default class SessionStore {
  constructor() {
    this._film = {};
    this._loading = true;
    makeAutoObservable(this);
  }

  setFilm(film) {
    this._film = film;
  }

  setLoading(boolean) {
    this._loading = boolean;
  }

  get film() {
    return this._film;
  }

  get loading() {
    return this._loading;
  }
}
