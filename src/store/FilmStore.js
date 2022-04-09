import {
  makeAutoObservable
} from "mobx";

export default class FilmStore {
  constructor() {
    this._sort = [{
        name: "По рейтингу",
        value: "rating"
      },
      {
        name: "По новизне",
        value: "new"
      },
      {
        name: "По длительности",
        value: "duration"
      },
    ];
    this._ageLimitations = [{
        id: 1,
        age: 6,
        title: "6+"
      },
      // { id: 2, age: 12, title: "12+" },
    ];
    this._formats = [{
        id: 1,
        title: "2D",
        value: "2D"
      },
      // { id: 2, title: "3D", value: "3D" },
    ];
    this._genres = [{
      id: 1,
      title: "Фентези",
      value: "fantasy"
    }, ];
    this._films = [
      {
        id: 2,
        name: "Веном 2",
        year: "2022",
        country: "США",
        language: "Украинский",
        img: "https://razborkatesla.com.ua/o/card.jpg",
        trailer: "222",
        duration: 126,
        startDate: "2022-01-04",
        endDate: "2022-01-04",
        createdAt: "2022-01-02T10:07:32.876Z",
        updatedAt: "2022-01-02T10:07:32.876Z",
        ageLimitationId: 1,
        formats: [
          {
            id: 1,
            title: "2D",
            value: "2d",
            createdAt: "2022-01-02T10:07:32.876Z",
            updatedAt: "2022-01-02T10:07:32.876Z",
          },
          {
            id: 2,
            title: "3D",
            value: "3d",
            createdAt: "2022-01-02T10:07:32.876Z",
            updatedAt: "2022-01-02T10:07:32.876Z",
          },
        ],
        genres: [
          {
            id: 1,
            title: "Фентези",
            value: "fantasy",
            createdAt: "2022-07-31T21:00:00.000Z",
            updatedAt: "2022-07-31T21:00:00.000Z",
          },
          {
            id: 3,
            title: "Трилер",
            value: "thriller",
            createdAt: "2022-01-07T22:00:00.000Z",
            updatedAt: "2022-01-07T22:00:00.000Z",
          },
        ],
        rating: {
          id: 2,
          rate: 4,
          filmId: 2,
          createdAt: "2022-01-02T08:56:36.384Z",
          updatedAt: "2022-01-02T08:56:36.384Z",
        },
      },
      // {
      //   id: 1,
      //   name: "Веном",
      //   year: "2022",
      //   country: "США",
      //   language: "Украинский",
      //   img: "",
      //   trailer: "",
      //   duration: 126,
      //   imgUrl: "https://razborkatesla.com.ua/o/card.jpg",
      //   rating: "7.2",
      //   genres: [
      //     {
      //       id: 1,
      //       title: "Фентези",
      //       value: "fantasy",
      //       createdAt: "2022-07-31T21:00:00.000Z",
      //       updatedAt: "2022-07-31T21:00:00.000Z",
      //     },
      //     {
      //       id: 3,
      //       title: "Трилер",
      //       value: "thriller",
      //       createdAt: "2022-01-07T22:00:00.000Z",
      //       updatedAt: "2022-01-07T22:00:00.000Z",
      //     },
      //   ],
      // },
      // {
      //   id: 2,
      //   name: "Веном 2",
      //   year: "2023",
      //   country: "США",
      //   language: "Украинский",
      //   img: "",
      //   trailer: "",
      //   duration: 126,
      //   imgUrl: "https://razborkatesla.com.ua/o/card.jpg",
      //   rating: "6.5",
      //   genres: [
      //     {
      //       id: 1,
      //       title: "Фентези",
      //       value: "fantasy",
      //       createdAt: "2022-07-31T21:00:00.000Z",
      //       updatedAt: "2022-07-31T21:00:00.000Z",
      //     },
      //     {
      //       id: 3,
      //       title: "Драма",
      //       value: "thriller",
      //       createdAt: "2022-01-07T22:00:00.000Z",
      //       updatedAt: "2022-01-07T22:00:00.000Z",
      //     },
      //   ],
      // },
    ];

    this._sortSelected = "rating";
    this._formatsSelected = {};
    this._ageLimitationSelected = "";
    this._genresSelected = {};
    makeAutoObservable(this);
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
  };

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
}