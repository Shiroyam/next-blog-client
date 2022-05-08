import { FC } from "react";
import s from "./../styles/create.module.scss";

const Create: FC = () => {
  return (
    <>
      <div className={s.create}>
        <form>
          <div className={s.create__headerContainer}>
            <input
              placeholder="Введите заголовок..."
              className={s.create__headerInput}
            ></input>
            <div className={s.create__context}></div>
          </div>
          <div className={s.create__descriptionContainer}>
            <div className={s.create__header}>Короткое описание</div>
            <textarea className={s.create__input}></textarea>
            <div className={s.create__context}></div>
          </div>
          <div className={s.create__linkContainer}>
            <div className={s.create__header}>Ссылка на изображение:</div>
            <div className={s.create__form}>
              <div className={s.create__container}>
                <input
                  placeholder="Вставьте URL..."
                  className={s.create__input}
                ></input>
                <button disabled className={s.create__button}>
                  Загрузить
                </button>
              </div>
              <div className={s.create__context}></div>
            </div>
          </div>
          <div className={s.create__textContainer}>
            <div className={s.create__header}>Полное описание</div>
            <textarea className={s.create__input}></textarea>
            <div className={s.create__context}></div>
          </div>
          <button type="submit" className={s.create__button}>
            Опубликовать
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;