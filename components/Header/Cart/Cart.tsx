import { FC } from "react";

import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";

export const Cart: FC = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__heading}>
        <span className={styles.cart__badge}>1</span>
        <span className={styles.cart__text}>MY BASKET</span>
      </div>
      <div className={styles.cart__list}>
        <CartItem id={1} product={} quantity={} />
      </div>
    </div>
  );
};
