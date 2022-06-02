import { makeAutoObservable } from "mobx";

export default class SessionStore {
  constructor() {
    this._session = {};
    this._availableFormats = [];
    this._availableTimes = {};
    this._formatSelected = {};
    this._timeSelected = {};
    this._placesSelected = [];
    this._hallPlaces = {};

    this._currentHallPlaces = {};
    makeAutoObservable(this);
  }

  setSession(session) {
    this._session = session;
  }

  setAvailableFormats(formats) {
    this._availableFormats = formats;
  }

  setAvailableTimes(times) {
    this._availableTimes = times;
  }

  setFormatSelected(format) {
    this._formatSelected = format;
  }

  setTimeSelected(time) {
    this._timeSelected = time;
  }

  setPlacesSelected(places) {
    this._placesSelected = places;
  }

  setHallPlaces(places) {
    this._hallPlaces = places;
  }

  setCurrentHallPlaces(places) {
    this._currentHallPlaces = places;
  }

  get session() {
    return this._session;
  }

  get availableFormats() {
    return this._availableFormats;
  }

  get availableTimes() {
    return this._availableTimes;
  }

  get formatSelected() {
    return this._formatSelected;
  }

  get timeSelected() {
    return this._timeSelected;
  }

  get placesSelected() {
    return this._placesSelected;
  }

  get hallPlaces() {
    return this._hallPlaces;
  }
}
