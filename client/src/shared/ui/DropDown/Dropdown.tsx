import { Menu } from '@headlessui/react'
import { ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './DropDown.module.scss';

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
    <Menu as={"div"} className={classNames(cls.Dropdown, {}, [])}>
      <Menu.Button className={classNames(cls.trigger, {}, [])}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [])}>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}