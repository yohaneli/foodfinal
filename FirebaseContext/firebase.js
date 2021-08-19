import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


class Firebase {

    constructor() {
        
        this.auth = auth();
        this.storage=storage();
    }

    /****************** toutes les requêtes ****************************/

    //liste des uilisateurs

    queryUsers = () => firestore().collection("users")

    //ajouter un utilisateur en base après son inscription

    queryAddUser = (id,data) => firestore().collection("users").doc(id).set(data);

    //modifier des infos sur un uitlisateur

    queryUpdateUser = (id,data) => firestore().collection("users").doc(id).update(data);

    //selectionner un utilisateur

    queryUser = (id) => firestore().collection("users").doc(id).get();

    // lister toutes les categories

    queryCategories = () => firestore().collection("categories");

    //lister tous les produits

    queryProduits = () => firestore().collection("produits");

    //selectionner un produit
    
    queryProduit = (id) => firestore().collection("produits").doc(id).get();
}

export default Firebase;
