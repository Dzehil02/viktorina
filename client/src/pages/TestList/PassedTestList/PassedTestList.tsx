import './PassedTestList.css'

interface PassedTestListProps {
    className?: string;
}

export const PassedTestList = (props: PassedTestListProps) => {

    const test1 = {
        id: 1,
        title: 'Тест 1',
        created_at: '23.06.2023',
        result: '5/25'
    }

    const test2 = {
        id: 2,
        title: 'Тест 2',
        created_at: '24.06.2023',
        result: '6/14'
    }

    const test3 = {
        id: 3,
        title: 'Тест 3',
        created_at: '11.09.2021',
        result: '18/20'
    }

    const test4 = {
        id: 4,
        title: 'Тест 4',
        created_at: '12.07.2023',
        result: '32/40'
    }


    const tests = [test1, test2, test3, test4]
    
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
                        {tests.map(test => (
                        <tr>
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
}