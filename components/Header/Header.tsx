import { FC } from "react";
import { Cart } from "./Cart/Cart";
import styles from "./Header.module.scss";
import { Menu } from "./Menu/Menu";
import { Search } from "./Search/Search";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <Search />
      <Cart />
    </header>
  );
};
