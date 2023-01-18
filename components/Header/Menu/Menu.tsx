import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { menu } from "./menu.data";
import { MenuItem } from "./MenuItem/MenuItem";

import styles from "./Menu.module.scss";

export const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="next-shop"
          priority={true}
        />
      </Link>
      <nav>
        <ul className={styles.menu__navList}>
          {menu.map((i) => (
            <MenuItem key={i.link} item={i} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
