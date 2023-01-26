import React, { FC } from "react";
import RemoveIcon from "../../../../Icons/RemoveIcon";
import MinusIcon from "../../../../Icons/MinusIcon";

import styles from "../CartActions/CartActions.module.scss";
import PlusIcon from "../../../../Icons/PlusIcon";
import { useAppActions } from "../../../../../hooks/appHooks";

const CartActions: FC<{ id: number; count: number }> = ({ id, count }) => {
  const { removeCart, changeQuantity } = useAppActions();

  return (
    <div className={styles.actions}>
      <div className={styles.leftSide}>
        <button onClick={() => changeQuantity({ id, flag: "plus" })}>
          <PlusIcon />
        </button>
        <span>{count}</span>
        <button onClick={() => changeQuantity({ id, flag: "minus" })}>
          <MinusIcon />
        </button>
      </div>
      <button className={styles.removeItem} onClick={() => removeCart({ id })}>
        <RemoveIcon />
      </button>
    </div>
  );
};

export default CartActions;
