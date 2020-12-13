import React from "react";
import MusicGroups from "./MusicGroups";

const musicGroups = [
  {
    name: "Imagine Dragons",
    img: "",
    participants: "Дэн Рейнольдс, Бен МакКи, Уэйн Сермон, Дэн Платцман"
  },
  {
    name: "The Weeknd",
    img: "",
    participants: "Эйбел Макконен Тесфайе"
  },
  {
    name: "KAZKA",
    img: "",
    participants: "Александра Зарицкая, Никита Будаш, Дмитрий Мазуряк"
  }
];

export default function MusicGroupsList() {
  return (
    <>
      <MusicGroupsList data={musicGroups} />
    </>
  );
}
