import { memo } from 'react';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
// В items перенести ссылки на "Мои тесты", "Пройденные тесты", "Профиль", "Выйти", "Главная страница". Главная страница потопму удалить
    const items = [
        {
            content: t('settings'),
            href: getRouteSettings(),
        },
        {
            content: t('profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Exit'),
            onClick: onLogout,
        },
    ]

    return (
        <Dropdown
                    className={classNames(cls.AvatarDropdown, {}, [className])}
                    direction={'bottom left'}
                    items={items}
                    trigger={
                        <Avatar size={40} src={authData.avatar} />
                    }
        />
    );
});
