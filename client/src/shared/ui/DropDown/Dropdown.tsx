import { Menu } from '@headlessui/react'
import { ReactNode, Fragment } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './DropDown.module.scss';
import { Link } from 'react-router-dom';

interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    href?: string;
    onClick?: () => void;
}

interface DropdownProps {
    className?: string;
    items?: DropdownItem[];
    trigger?: ReactNode;
}

export function Dropdown(props: DropdownProps) {

    const { className, trigger, items } = props;

  return (
    <Menu as={"div"} className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={classNames(cls.trigger, {}, [])}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [])}>
        {items?.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type={"button"}
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(
                cls.item,
                { [cls.active]: active },
                []
              )}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={`dropdown-key-${index}`}
                as={Link}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              key={`dropdown-key-${index}`}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}