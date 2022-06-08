import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Menu } from "../app/components/menu/Menu";
import { Navbar } from "../app/components/navbar/Navbar";
import { createPost } from "../app/redux/post/action";
import s from "./../styles/create.module.scss";

const Create: FC = () => {
  const dispatch = useDispatch();

  const onSubmitHandlear = (data: any) => {
    dispatch(createPost(data));
    window.location.reload();
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  return (
    <>
      <Menu />
      <Navbar />
      <div className={s.create}>
        <form onSubmit={handleSubmit(onSubmitHandlear)}>
          <div className={s.create__headerContainer}>
            <input
              {...register("title", {
                required: "Поле обязательно!",
                minLength: {
                  value: 6,
                  message: "Нужно ввести минимум 6 символа!",
                },
                maxLength: {
                  value: 35,
                  message: "Вы ввели максимальное допустимое число символов",
                },
              })}
              placeholder="Введите заголовок..."
              className={s.create__headerInput}
            ></input>
            <div className={s.create__context}>
              {errors?.title && <div>{errors?.title?.message || "Error!"}</div>}
            </div>
          </div>
          <div className={s.create__descriptionContainer}>
            <div className={s.create__header}>Короткое описание</div>
            <textarea
              {...register("description", {
                required: "Поле обязательно!",
                minLength: {
                  value: 6,
                  message: "Нужно ввести минимум 6 символа!",
                },
                maxLength: {
                  value: 160,
                  message: "Вы ввели максимальное допустимое число символов",
                },
              })}
              className={s.create__input}
            ></textarea>
            <div className={s.create__context}>
              {" "}
              {errors?.description && (
                <div>{errors?.description?.message || "Error!"}</div>
              )}
            </div>
          </div>
          <div className={s.create__linkContainer}>
            <div className={s.create__header}>Ссылка на изображение:</div>
            <div className={s.create__form}>
              <div className={s.create__container}>
                <input
                  {...register("photoUrl", {
                    required: "Поле обязательно!",
                    minLength: {
                      value: 6,
                      message: "Нужно ввести минимум 6 символа!",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "Вы ввели максимальное допустимое число символов",
                    },
                  })}
                  placeholder="Вставьте URL..."
                  className={s.create__input}
                ></input>
                <button disabled className={s.create__button}>
                  Загрузить
                </button>
              </div>
              <div className={s.create__context}>
                {" "}
                {errors?.photoUrl && (
                  <div>{errors?.photoUrl?.message || "Error!"}</div>
                )}
              </div>
            </div>
          </div>
          <div className={s.create__textContainer}>
            <div className={s.create__header}>Полное описание</div>
            <textarea
              {...register("text", {
                required: "Поле обязательно!",
                minLength: {
                  value: 6,
                  message: "Нужно ввести минимум 6 символа!",
                },
              })}
              className={s.create__input}
            ></textarea>
            <div className={s.create__context}>
              {errors?.text && <div>{errors?.text?.message || "Error!"}</div>}
            </div>
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
