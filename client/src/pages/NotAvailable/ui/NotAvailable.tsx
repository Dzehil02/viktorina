import './NotAvailable.module.scss'

interface NotAvailableProps {
    className?: string;
}

export const NotAvailable = (props: NotAvailableProps) => {
    const {className} = props
    
    return (

            <div className={'NotAvailable'}>
                <h1>Нет доступа к странице, пожалуйста авторизуйтесь</h1>
            </div>
    )
}