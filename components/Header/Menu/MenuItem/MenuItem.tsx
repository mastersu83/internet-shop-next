import Link from "next/link";
import { FC } from "react";
import { IMenuLink } from "./MenuItem.interface";

interface IMenuItem {
  item: IMenuLink;
}

export const MenuItem: FC<IMenuItem> = ({ item }) => {
  return (
    <li>
      <Link href={item.link}>{item.name}</Link>
    </li>
  );
};
