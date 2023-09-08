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
        id: 3,
        title: 'Тест 3',
        created_at: '24.06.2023',
        count: 6
    }

    const test4 = {
        id: 4,
        title: 'Тест 4',
        created_at: '24.06.2023',
        count: 6
    }

    const test5 = {
        id: 5,
        title: 'Тест 5',
        created_at: '24.06.2023',
        count: 6
    }

    const test6 = {
        id: 6,
        title: 'Тест 6',
        created_at: '24.06.2023',
        count: 6
    }

    const test7 = {
        id: 7,
        title: 'Тест 7',
        created_at: '24.06.2023',
        count: 6
    }

    const test8 = {
        id: 8,
        title: 'Тест 8',
        created_at: '24.06.2023',
        count: 6
    }

    const tests = [test1, test2, test3, test4, test5, test6, test7, test8]
    
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
}