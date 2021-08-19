import { TAB_PRODUITS } from "../Actions/types";

const initStateTabProduits = []

const produits = (state = initStateTabProduits, action) => {
    //console.log(action)

    switch (action.type) {

        case TAB_PRODUITS:
            return action.payload ;
            break;
    
        default:
            return state
            break;
    }
    
    
}

export default produits;