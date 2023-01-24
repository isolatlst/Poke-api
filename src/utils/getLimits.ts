import {PaginationType} from "../types";

export const getLimits = (offset: number, paginationType: PaginationType) => {
    let finalOffset = 0
    let finalLimit = 0
    switch (paginationType) {
        case "manual": { // ширина карточки + gap                // высота карточки + gap
            finalLimit = Math.ceil(window.innerWidth / 190) * Math.floor(window.innerHeight / 115)
            finalOffset = offset
            break
        }
        case "dynamic": {
            finalLimit = Math.floor((window.innerWidth / 185) * (window.innerHeight / 115))
            break
        }
    }
    return {offset: finalOffset, limit: finalLimit}
}