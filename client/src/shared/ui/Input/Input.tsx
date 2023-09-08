import { InputHTMLAttributes, ReactNode, memo, useEffect, useRef, useState } from 'react';
// import { Mods, classNames } from '@/shared/lib/classNames/classNames';
// import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        autofocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    // const mods: Mods = {
    //     [cls.readonly]: readonly,
    //     [cls.focused]: isFocused,
    // };

    return (
        <div /*className={classNames(cls.InputWrapper, mods, [className])}*/>
            <input
                // className={classNames(cls.input, {}, [className])}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler}
                readOnly={readonly}
                onBlur={onBlur}
                onFocus={onFocus}
                {...otherProps}
            />
        </div>
    );
});
