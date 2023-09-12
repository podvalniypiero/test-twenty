import { Note } from "./Note";

// Реализовать интерфейс заметок
// По кнопке + заметки должны добавляться
// Поле ввода должно очищаться после добавления
// Заметки должны хранится в стейте компонента
// Note - компонент одной заметки
// Заметки могут быть с одинаковыми названиями
// Заметки должны удалятся по клику на Note
// Заметки должны быть отсортированы по алфавиту
// Количество заметок должно быть подсчитано в header

export const App = () => {
  return (
    <>
      <div className="header">{/* here must be number of notes */}</div>
      <div className="container">
        {/* button must add notes */}
        <button>+</button>

        <input type="text" className="textInput" autoFocus />

        <div className="notes-container">{/* render notes here */}</div>
      </div>
    </>
  );
};
