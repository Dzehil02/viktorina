import avatar from "../../../shared/assets/Avatar.png";
import { memo } from "react";
import { AppRoutes } from "../../../app/router/consts/consts";
import { Avatar } from "../../../shared/ui/Avatar";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from "./AvatarDropdown.module.scss";
import { Dropdown } from "../../../shared/ui/DropDown";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;

  const items = [
    {
      content: "Мои тесты",
      href: AppRoutes.TESTS,
    },
    {
      content: "Пройденные тесты",
      href: AppRoutes.PASSED_TESTS,
    },
    {
      content: "Профиль",
      href: AppRoutes.MAIN,
    },
    {
      content: "Выйти",
      // onClick: onLogout,
      href: AppRoutes.LOGIN,
    },
  ];

  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      items={items}
      trigger={
        <Avatar
          src={avatar}
          size={50}
          alt="avatar"
          className={classNames(cls.avatar, {}, [className])}
        />
      }
    />
  );
});
