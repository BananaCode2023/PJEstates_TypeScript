
import { useState } from "react";
import styles from "./CustomSelect.module.css";
import { IoIosArrowDown } from "react-icons/io";

interface CustomSelectProps {
    options: string[];
    placeholder?: string;
    onChange?: (value: string) => void;
    label?: string;
    value: string;
}

function CustomSelect({
    options,
    placeholder = "Select an option",
    onChange,
    label,
    value
}: CustomSelectProps) {

    const [isOpen, setIsOpen] = useState(false);
    // const [selected, setSelected] = useState("");

    const handleSelect = (option: string) => {
        setIsOpen(false);
        onChange?.(option);
    };

    return (
        <div className={styles.customSelect}>
            <span className={styles.label}>{label}</span>
            <button
                type="button"
                className={styles.selectButton}
                onClick={() => setIsOpen(!isOpen)}
            >
                {value || placeholder}

                <span className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}>
                    <IoIosArrowDown />
                </span>
            </button>

            
                <div 
                    className={styles.dropdown}
                    style={isOpen ? {} : {height: '0', opacity: 0, transform: 'translateY(-8px)'}}
                >
                    {options.map((option, index) => (
                        <button
                            type="button"
                            key={index}
                            className={`${styles.option} ${
                                value === option ? styles.active : ""
                            }`}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            

        </div>
    );
}

export default CustomSelect;
