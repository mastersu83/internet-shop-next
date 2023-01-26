import { FC } from "react";
import Image from "next/image";
import { ICartItem } from "../../../../types/cartItem.interface";

import styles from "./CartItem.module.scss";
import CartActions from "./CartActions/CartActions";
import { formatPrice } from "../../../../utils/formatPrice";

const CartItem: FC<ICartItem> = ({ product, quantity, id }) => {
  return (
    <div className={styles.cartItem}>
      <Image
        src={product.images[0]}
        alt={product.name}
        width={100}
        height={100}
      />
      <div className={styles.cartItem__info}>
        <div className={styles.cartItem__name}>{product.name}</div>
        <div className={styles.cartItem__price}>
          {formatPrice(product.price)}
        </div>
        <CartActions id={id} count={quantity} />
      </div>
    </div>
  );
};

export default CartItem;
