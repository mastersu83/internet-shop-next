import { FC, useState } from "react";

import styles from "./Search.module.scss";
import SearchIcon from "./SearchIcon/SearchIcon";

export const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.search}>
      <div className={styles.search__box}>
        <form className={styles.search__form}>
          <div className={styles.search__inputBox}>
            <div className={styles.search__icon}>
              <SearchIcon />
            </div>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              type="search"
              className={styles.search__input}
              placeholder="Search"
              required
            />
          </div>
          <button type="submit" className={styles.search__button}>
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};
