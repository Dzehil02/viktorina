import cls from '../../TestList.module.scss';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../shared/ui/Button';
import { Title } from '../../../../shared/ui/Title';
import { TestList } from '../../../../features/TestList';

interface MyTestListProps {
    className?: string;
}

export const MyTestList = (props: MyTestListProps) => {
    const { className } = props;
    const navigate = useNavigate();

    const navigateToCreateTest = () => {
        navigate('/createtest');
    };

    return (
        <div className={classNames(cls.TestList, {}, [])}>
            <div className={classNames(cls.overTable, {}, [])}>
                <Title title={'Мои тесты'} />
                <Button onClick={navigateToCreateTest}>Создать тест</Button>
            </div>
            <div className={classNames(cls.tableWrapper, {}, [])}>
                <TestList />
            </div>
        </div>
    );
};
