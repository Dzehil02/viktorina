import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {

    const {
        src,
        alt,
        size,
        className
    } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        }
    }, [size]);
    
    return (
        <img
            alt={alt}
            src={src}
            style={styles}
            className={className}
        />
    )
}