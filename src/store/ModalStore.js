import { makeAutoObservable } from "mobx";

export default class ModalStore {
  constructor() {
    this._visible = false;
    this._type = "simple";
    this._name = "Age Limits";
    makeAutoObservable(this);
  }

  setVisible(boolean) {
    this._visible = boolean;
  }
  
  get visible() {
    return this._visible;
  }
}
