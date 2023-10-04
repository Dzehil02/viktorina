import { observer } from "mobx-react-lite";
import cls from "./MyTestList.module.scss";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { Context } from "../../../../main";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../shared/ui/Button";
import Edit from "../../../../shared/assets/icons/edit.svg?react";
import Delete from "../../../../shared/assets/icons/delete.svg?react";

interface MyTestListProps {
  className?: string;
}

export const MyTestList = observer((props: MyTestListProps) => {
  const { test } = useContext(Context);
  const navigate = useNavigate();

  const navigateToCreateTest = () => {
    navigate("/createtest");
  };

  return (
    <div className={classNames(cls.MyTestList, {}, [])}>
      <div className={classNames(cls.overTable, {}, [])}>
        <h1 className={classNames(cls.title, {}, [])}>Мои тесты</h1>
        <Button onClick={navigateToCreateTest}>Создать тест</Button>
      </div>
      <div className={classNames(cls.tableWrapper, {}, [])}>
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
            {test.tests.map((test) => (
              <tr key={test.id}>
                <td>{test.title}</td>
                <td>{test.created_at}</td>
                <td>{test.count}</td>
                <td>
                  <Button variant="clear" size="s">
                    <Edit />
                  </Button>
                  <Button size="s" variant="clear">
                    <Delete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
