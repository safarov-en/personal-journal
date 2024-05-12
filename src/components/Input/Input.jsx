import { forwardRef } from 'react';
import styles from './Input.module.css'
import cn from 'classnames';

const Input = forwardRef(function Input({ className, isValid, appearence, ...props }, ref) {
    return (
        <input ref={ref} className={cn(className, styles['input'], {
            [styles['invalid']]: isValid,
            [styles['input-title']]: appearence === 'title'
        })} {...props}  />
    )
})

export default Input;