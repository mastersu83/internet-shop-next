import { FC, useState } from "react";

import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";
import { useAppSelector } from "../../../hooks/appHooks";
import { formatPrice } from "../../../utils/formatPrice";
import CloseIcon from "../../Icons/CloseIcon";

export const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = useAppSelector((state) => state.cart.items);

  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className={styles.cart}>
      <button
        className={styles.cart__heading}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.cart__badge}>{items.length}</span>
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
              <CloseIcon />
            </div>
          </div>

          <div className={styles.items}>
            {items.length ? (
              items.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  product={item.product}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <p>Basket is empty!</p>
            )}
          </div>
          <div>
            <div className={styles.list__footer}>
              <div>
                <p>Total:</p>
                <p>{formatPrice(total)}</p>
              </div>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
