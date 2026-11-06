import { Link } from "react-router-dom"
import styles from './DarkBtn.module.css'
import type { ReactNode } from "react";

export function DarkBtn (
    {
        path,
        linkText,
        leftIcon,
        rightIcon
    }:{
        path: string;
        linkText: string;
        leftIcon?: ReactNode;
        rightIcon?: ReactNode;
    }

) {
    return (
        <Link to={`${path}`} className={styles.darkBtn}>
            {leftIcon}
            {linkText}
            {rightIcon}
        </Link>
    )
}