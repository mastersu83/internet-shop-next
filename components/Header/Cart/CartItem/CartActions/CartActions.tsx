import React, { FC, useState } from "react";
import RemoveIcon from "../../../../Icons/RemoveIcon";
import MinusIcon from "../../../../Icons/MinusIcon";

import styles from "../CartActions/CartActions.module.scss";
import PlusIcon from "../../../../Icons/PlusIcon";
import { useAppActions } from "../../../../../hooks/appHooks";
import ConfirmIcon from "../../../../Icons/ConfirmIcon";
import CloseIcon from "../../../../Icons/CloseIcon";

const CartActions: FC<{
  id: number;
  count: number;
}> = ({ id, count }) => {
  const { removeCart, changeQuantity } = useAppActions();
  const [removeConfirm, setRemoveConfirm] = useState(false);

  const handleRemove = () => {
    setRemoveConfirm(!removeConfirm);
  };

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

      <div className={styles.removeConfirm}>
        {removeConfirm ? (
          <div className={styles.removePopup}>
            <button onClick={() => removeCart({ id })}>
              <ConfirmIcon />
            </button>
            <button onClick={handleRemove}>
              <CloseIcon />
            </button>
          </div>
        ) : (
          <button className={styles.removeItem} onClick={handleRemove}>
            <RemoveIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartActions;
