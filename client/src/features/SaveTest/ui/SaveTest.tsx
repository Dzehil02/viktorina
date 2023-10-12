import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../main";
import cls from "./SaveTest.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Button } from "../../../shared/ui/Button";

interface SaveTestProps {
  className?: string;
}
export const SaveTest = observer((props: SaveTestProps) => {
  const { className } = props;

  return (
    <div>
    <Button variant="outline" action="cancel">
      Отменить
    </Button>
    <Button variant="outline" action="accept">
      Сохранить
    </Button>
  </div>
  );
});
