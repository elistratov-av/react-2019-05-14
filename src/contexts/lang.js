import { createContext } from "react";

export const langs = {
  ru: {
    list: "Список",
    map: "Карта",
    showReviews: "Показать ревью",
    hideReviews: "Скрыть ревью",
    gotoMenu: "Меню",
    showOnMap: "На карте"
  },
  en: {
    list: "List",
    map: "Map",
    showReviews: "Show reviews",
    hideReviews: "Hide reviews",
    gotoMenu: "Go to menu",
    showOnMap: "Show on map"
  }
};

export const LangContext = createContext(langs.ru);
