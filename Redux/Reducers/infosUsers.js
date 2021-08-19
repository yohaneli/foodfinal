import { INFOS_USERS } from "../Actions/types";

const initStateInfosUsers = {userId:null,pseudo:"Pseudo par défaut",usermail:"adresse@mail.com"}

const infosUsers = (state = initStateInfosUsers, action) => {
    //console.log(action)

    switch (action.type) {

        case INFOS_USERS:
            return action.payload ;
            break;
    
        default:
            return state
            break;
    }
    
    
}

export default infosUsers;