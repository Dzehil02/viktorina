import './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props;

    return (
        <div className={'NotFoundPage'}>
            <h1>Страница не найдена</h1>
        </div>
    );
};
