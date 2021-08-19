import { TAB_CATEGORIES } from "../Actions/types";

const initStateTabCategories = []

const categories = (state = initStateTabCategories, action) => {
    //console.log(action)

    switch (action.type) {

        case TAB_CATEGORIES:
            return action.payload ;
            break;
    
        default:
            return state
            break;
    }
    
    
}

export default categories;