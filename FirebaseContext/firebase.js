import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


class Firebase {

    constructor() {

        this.auth = auth();
        this.firestore = firestore();
        this.storage = storage();
    }

    //add token

    // queryAddToken = (data) => firestore.collection("token").add(data)

}

export default Firebase;

