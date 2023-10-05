import { observer } from "mobx-react-lite";
import cls from "../../TestList.module.scss";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { Context } from "../../../../main";
import { useContext } from "react";
import { Button } from "../../../../shared/ui/Button";

interface PassedTestListProps {
  className?: string;
}

export const PassedTestList = observer((props: PassedTestListProps) => {
  const { test } = useContext(Context);

  return (
    <div className={classNames(cls.TestList, {}, [])}>
      <div className={classNames(cls.overTable, {}, [])}>
        <h1 className={classNames(cls.title, {}, [])}>Пройденные тесты</h1>
      </div>
      <div className={classNames(cls.tableWrapper, {}, [])}>
        <table>
          <thead>
            <tr>
              <th>Название теста</th>
              <th>Дата прохождения</th>
              <th>Результат</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {test.ptests.map((test) => (
              <tr key={test.id}>
                <td>{test.title}</td>
                <td>{test.created_at}</td>
                <td>{test.result}</td>
                <td>
                  <Button variant='outline' size="s">Открыть</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
