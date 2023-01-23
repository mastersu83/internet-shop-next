import { FC, useState } from "react";

import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";
import { cartItems } from "../../../data/cart.data";

export const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.cart}>
      <button
        className={styles.cart__heading}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.cart__badge}>1</span>
        <span className={styles.cart__text}>MY BASKET</span>
      </button>

      <div className={`${styles.listWrapper} ${isOpen ? styles.open : ""}`}>
        <div
          className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className={`${styles.list} ${isOpen ? styles.open : ""}`}>
          <div className={styles.close}>
            <span className={styles.cart__text}>MY BASKET</span>
            <div className={styles.closeBtn} onClick={() => setIsOpen(!isOpen)}>
              <div className={styles.block1}>
                <div className={styles.block2}></div>
              </div>
            </div>
          </div>

          <div className={styles.items}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className={styles.list__footer}>
            <div>
              <p>Total:</p>
              <p>$100</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
