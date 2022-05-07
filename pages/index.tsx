import type { NextPage } from "next";
import { Menu } from "../app/components/menu/Menu";
import { Navbar } from "../app/components/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Menu />
    </div>
  );
};

export default Home;
