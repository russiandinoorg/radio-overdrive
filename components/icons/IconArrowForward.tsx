import type { ComponentPropsWithRef, FC } from 'react';

export const IconArrowForward: FC<ComponentPropsWithRef<'svg'>> = (props) => (
    <svg width="13" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M10 0L10 10H8.33332L8.33332 5.0002L0 10L0 0L8.33332 4.99961V0L10 0Z" />
    </svg>
);