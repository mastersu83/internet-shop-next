import React, { useState } from "react";
import RemoveIcon from "../../../../Icons/RemoveIcon";
import MinusIcon from "../../../../Icons/MinusIcon";

import styles from "../CartActions/CartActions.module.scss";
import PlusIcon from "../../../../Icons/PlusIcon";

const CartActions = () => {
  const [count, setCount] = useState(1);

  const handleCount = (flag: boolean) => {
    if (flag) {
      setCount(count + 1);
    } else if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className={styles.actions}>
      <div className={styles.leftSide}>
        <button onClick={() => handleCount(true)}>
          <PlusIcon />
        </button>
        <span>{count}</span>
        <button onClick={() => handleCount(false)}>
          <MinusIcon />
        </button>
      </div>
      <button className={styles.removeItem}>
        <RemoveIcon />
      </button>
    </div>
  );
};

export default CartActions;
