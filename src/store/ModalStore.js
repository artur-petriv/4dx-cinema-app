import { makeAutoObservable } from "mobx";

export default class ModalStore {
  constructor() {
    // this._options = {
    //   visible: false,
    //   type: "simple",
    //   title: "Добавити вікову категорію",
    //   name: "ageLimits",
    // };
    this._visible = false;
    this._type = "simple";
    this._title = "Добавити вікову категорію";
    this._name = "genres";
    makeAutoObservable(this);
  }

  setVisible(boolean) {
    this._visible = boolean;
  }

  setType(type) {
    this._type = type;
  }

  setTitle(title) {
    this._title = title;
  }

  setName(name) {
    this._name = name;
  }

  get visible() {
    return this._visible;
  }

  get type() {
    return this._type;
  }

  get title() {
    return this._title;
  }

  get name() {
    return this._name;
  }
}
