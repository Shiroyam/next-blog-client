import type { NextPage } from "next";
import { Menu } from "../app/components/menu/Menu";
import { Navbar } from "../app/components/navbar/Navbar";
import s from "./../styles/main.module.scss";
import Image from "next/image";
import mainPng from "./../app/assets/main.png";
import { Authorization } from "../app/components/modal/authorization/Authorization";
import { useTypesSelector } from "../app/hooks/useTypeSelector";
import { Registration } from "../app/components/modal/registration/Registration";

const Home: NextPage = () => {
  const { flagModal } = useTypesSelector((state) => state.authReducer);
  const { flagModalReg } = useTypesSelector((state) => state.registrationReducer)
  return (
    <>
      {flagModal && <Authorization />}
      {flagModalReg && <Registration />}
      <Navbar />
      <Menu />
      <div className={s.main}>
        <div className={s.main__headerContainer}>
          <div className={s.main__header}>Vasya Pupkin</div>
          <div className={s.main__description}>Блог фронтенд-разработчика</div>
        </div>
        <Image src={mainPng} alt="main" />
        <div className={s.main__textContainer}>
          <div className={s.main__headerText}>Обо мне</div>
          <div className={s.main__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
            fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
            scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
            quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
            nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
            laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet
            phasellus malesuada non nisi.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
