import React, {FC} from 'react';
import './Button.scss';

interface ButtonProps {
    children: React.ReactNode
    styleText?: React.CSSProperties
}

const Button: FC<ButtonProps> = ({children, styleText}) => (
    <button
        className='btn' type='button'
        onMouseMove={(e: any) => {
            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
            e.target.style.setProperty('--x', `${x}px`)
            e.target.style.setProperty('--y', `${y}px`)
        }}>
        <span style={styleText}>{children}</span>
    </button>
)

export default Button;
