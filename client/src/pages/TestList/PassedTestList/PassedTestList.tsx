import { observer } from 'mobx-react-lite';
import './PassedTestList.css'
import { Context } from '../../../main';
import { useContext } from 'react';

interface PassedTestListProps {
    className?: string;
}

export const PassedTestList = observer((props: PassedTestListProps) => {
    const {test} = useContext(Context);

    
    return (
        <div>
            <div className='overTable'>
                <h1>Пройденные тесты</h1>
            </div>
            <div className='tableWrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>Название теста</th>
                            <th>Дата создания</th>
                            <th>Результат</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {test.ptests.map(test => (
                        <tr key={test.id}>
                            <td>{test.title}</td>
                            <td>{test.created_at}</td>
                            <td>{test.result}</td>
                            <td><button>Открыть</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
})