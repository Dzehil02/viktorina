import { Card } from '@/shared/ui/Card';
import { Title } from '@/shared/ui/Title';

const NotAvailable = () => {
    return (
        <Card>
            <Title align='center' title='Нет доступа к странице, пожалуйста авторизуйтесь'/>
        </Card>
    );
};

export default NotAvailable;