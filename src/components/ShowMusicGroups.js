import React from "react";
import MusicGroupsList from "./MusicGroupsList";

const musicGroups = [
  {
    name: "Imagine Dragons",
    img: "../Imagine_Dragons.jpg",
    participants: "Дэн Рейнольдс, Бен МакКи, Уэйн Сермон, Дэн Платцман"
  },
  {
    name: "The Weeknd",
    img: "../The_Weeknd.jpg",
    participants: "Эйбел Макконен Тесфайе"
  },
  {
    name: "KAZKA",
    img: "../KAZKA.jpg",
    participants: "Александра Зарицкая, Никита Будаш, Дмитрий Мазуряк"
  }
];

export default function ShowMusicGroups() {
  return (
    <>
      <MusicGroupsList data={musicGroups} />
    </>
  );
}
