import { classNames } from '../../lib/classNames/classNames';
import { HTMLAttributes, ReactNode } from 'react';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
    className?: string;
    tableHead: ReactNode;
    tableBody: ReactNode;
}

export const Table = (props: TableProps) => {
    const { className, tableHead, tableBody } = props;

    return (
        <table className={classNames('', {}, [className])}>
            <thead>{tableHead}</thead>
            <tbody>{tableBody}</tbody>
        </table>
    );
};
