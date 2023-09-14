import { observer } from 'mobx-react-lite';
import './MyTestList.css'
import { Context } from '../../../main';
import { useContext } from 'react';

interface MyTestListProps {
    className?: string;
}

export const MyTestList = observer((props: MyTestListProps) => {
    const {test} = useContext(Context);
    
    return (
        <div>
            <div className='overTable'>
                <h1>Мои тесты</h1>
                <button>Создать тест</button>
            </div>
            <div className='tableWrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>Название теста</th>
                            <th>Дата создания</th>
                            <th>Кол-во вопросов</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {test.tests.map(test => (
                        <tr key={test.id}>
                            <td>{test.title}</td>
                            <td>{test.created_at}</td>
                            <td>{test.count}</td>
                            <td>
                                <button>Изменить</button>
                                <button>Удалить</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
})