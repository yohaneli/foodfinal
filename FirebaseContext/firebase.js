import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


class Firebase {

    constructor() {
        
        this.auth = auth();
        this.storage=storage();
    }

    // all queries

    //list users

    queryUsers = () => firestore().collection("users")

    //add un user

    queryAddUser = (id,data) => firestore().collection("users").doc(id).set(data);

    //update user

    queryUpdateUser = (id,data) => firestore().collection("users").doc(id).update(data);

    //selectionner un user

    queryUser = (id) => firestore().collection("users").doc(id).get();

    // list categories

    queryCategories = () => firestore().collection("categories");


}

export default Firebase;
