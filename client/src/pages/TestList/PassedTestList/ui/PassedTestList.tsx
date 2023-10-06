import cls from "../../TestList.module.scss";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { Title } from "../../../../shared/ui/Title";
import { TestList } from "../../../../features/TestList";

interface PassedTestListProps {
  className?: string;
}

export const PassedTestList = (props: PassedTestListProps) => {
  const {className} = props;

  return (
    <div className={classNames(cls.TestList, {}, [])}>
      <div className={classNames(cls.overTable, {}, [])}>
        <Title title={'Пройденные тесты'}/>
      </div>
      <div className={classNames(cls.tableWrapper, {}, [])}>
        <TestList passedTestList/>
      </div>
    </div>
  );
};
