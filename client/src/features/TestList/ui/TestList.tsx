import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from '../../../main';
import { Table } from '../../../shared/ui/Table';
import { MY_TESTS_TABLE_HEADER, PASSED_TESTS_TABLE_HEADER } from '../../../shared/const/const';
import { Button } from '../../../shared/ui/Button';
import Open from "../../../shared/assets/icons/open.svg?react";
import Edit from "../../../shared/assets/icons/edit.svg?react";
import Delete from "../../../shared/assets/icons/delete.svg?react";
import { useNavigate } from 'react-router-dom';

interface TestListProps {
    className?: string;
    passedTestList?: boolean
}

export const TestList = observer((props: TestListProps) => {
    const {className, passedTestList = false} = props;
    const { test } = useContext(Context);

    const navigate = useNavigate();

    const navigateToPassTest = () => {
      navigate("/passtest/1");
    };

    const navigateToCreateTest = () => {
      navigate("/edittest/1");
    };

    const actions = passedTestList ? (
      <Button variant="outline" size="s">
        Открыть
      </Button>
    ) : (
      <>
        <Button onClick={navigateToPassTest} variant="clear" size="s">
          <Open />
        </Button>
        <Button onClick={navigateToCreateTest} variant="clear" size="s">
          <Edit />
        </Button>
        <Button size="s" variant="clear">
          <Delete />
        </Button>
      </>
    );

    const tableHead = passedTestList ? (
        <tr>
            {PASSED_TESTS_TABLE_HEADER.map(title => (
                <th key={title}>{title}</th>
            ))}
        </tr>
    ) : (
        <tr>        
            {MY_TESTS_TABLE_HEADER.map(title => (
                <th key={title}>{title}</th>
            ))}
        </tr>
    )

    const tableBody = passedTestList ? (
      <>
      {test.ptests.map((test) => (
        <tr key={test.id}>
          <td>{test.title}</td>
          <td>{test.created_at}</td>
          <td>{test.count}</td>
          <td>
              {actions}
          </td>
        </tr>
      ))}
    </>
    ) : (
      <>
        {test.tests.map((test) => (
          <tr key={test.id}>
            <td>{test.title}</td>
            <td>{test.created_at}</td>
            <td>{test.count}</td>
            <td>
                {actions}
            </td>
          </tr>
        ))}
      </>
    );

    return (
         <Table
            tableHead={tableHead}
            tableBody={tableBody}
         />   
    )
});