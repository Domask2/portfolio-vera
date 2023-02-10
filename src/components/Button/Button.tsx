import React, {FC} from 'react';

interface ButtonProps {
    children: React.ReactNode
    styleText?: any
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
