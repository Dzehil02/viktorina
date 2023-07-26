import './MyTestList.css'

interface MyTestListProps {
    className?: string;
}

export const MyTestList = (props: MyTestListProps) => {

    const test1 = {
        id: 1,
        title: 'Тест 1',
        created_at: '23.06.2023',
        count: 5
    }

    const test2 = {
        id: 2,
        title: 'Тест 2',
        created_at: '24.06.2023',
        count: 6
    }

    const test3 = {
        id: 2,
        title: 'Тест 2',
        created_at: '24.06.2023',
        count: 6
    }

    const test4 = {
        id: 2,
        title: 'Тест 2',
        created_at: '24.06.2023',
        count: 6
    }

    const test5 = {
        id: 2,
        title: 'Тест 2',
        created_at: '24.06.2023',
        count: 6
    }

    const tests = [test1, test2, test3, test4, test5, test5, test5, test5]
    
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
                        {tests.map(test => (
                        <tr>
                            <td>{test.title}</td>
                            <td>{test.created_at}</td>
                            <td>{test.count}</td>
                            <td>Кнопка Кнопка</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}