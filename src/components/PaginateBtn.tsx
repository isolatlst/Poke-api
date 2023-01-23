import React from 'react';
import cl from "../styles/Pagination.module.scss";

type PropType = {
    text: string
    portionCount: number
    disabled: boolean
    callback: () => void
}

const PaginateBtn: React.FC<PropType> = ({disabled, portionCount, callback, text}) => {
    return portionCount > 1
        ? <button disabled={disabled}
                  className={`${cl.button} ${disabled && cl.disabled}`}
                  onClick={callback}>
            {text}
        </button>
        : null
};

export default PaginateBtn;