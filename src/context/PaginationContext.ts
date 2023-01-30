import React from "react";
import {PaginationType} from "../types";

type PaginationContextType = {
    paginationType: PaginationType
    togglePaginationType: (value: PaginationType) => void
}


export const PaginationContext = React.createContext<PaginationContextType>('No Pagination Provider' as unknown as PaginationContextType)