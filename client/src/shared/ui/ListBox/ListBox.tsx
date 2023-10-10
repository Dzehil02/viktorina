import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './ListBox.module.scss';

const variants: ListboxItem[] = [
    {
      content: "Один вариант ответа",
      order: 1,
      type: 'radio',
    },

    {
      content: "Несколько вариантов ответа",
      order: 2,
      type: 'box',
    },

    {
      content: "Вписать ответ",
      order: 3,
      type: 'input',
    },
  ];

interface ListboxItem {
    content?: string;
    type?: string;
    order?: number;
}

interface ListboxProps {
    className?: string;
}

export function ListBox(props: ListboxProps) {
  const {className} = props;
  const [selectedVariant, setSelectedVariant] = useState(variants[0])

  return (
    <Listbox as={"div"} className={classNames(cls.Listbox, {}, [])} value={selectedVariant} onChange={setSelectedVariant}>
      <Listbox.Button className={classNames(cls.btn, {}, [])}>{selectedVariant.content}</Listbox.Button>
      <Listbox.Options className={classNames(cls.menu, {}, [])}>
        {variants?.map((item) => (
          <Listbox.Option
            key={item.order}
            value={item}
            as={Fragment}
          >
            {({active}) => (
                <li className={classNames(cls.option, {[cls.active]: active}, [])}>
                    {item.content}
                </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}