import { FC } from "react";
import Image from "next/image";
import { ICartItem } from "../../../../types/cartItem.interface";

import styles from "./CartItem.module.scss";

const CartItem: FC<ICartItem> = ({ product }) => {
  return (
    <div className={styles.cartItem}>
      <Image
        src={product.images[0]}
        alt={product.name}
        width={100}
        height={100}
      />
      <div>
        <div className={styles.cartItem__name}>{product.name}</div>
        <div className={styles.cartItem__price}>
          {new Intl.NumberFormat(undefined, {
            currency: "USD",
            style: "currency",
          }).format(product.price)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
