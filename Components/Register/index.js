import React,{useState,useContext} from 'react';
import {Text,View } from 'react-native';
import { Button,Input } from 'react-native-elements';
import { styles } from './style';
import {FirebaseContext} from '../../FirebaseContext';
import { useSelector,useDispatch } from 'react-redux';
import {lireInfosUsers} from '../../Redux/Actions/infosUsers';

const index = ({navigation}) => {

    const {auth,queryAddUser} = useContext(FirebaseContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [username, setUsername] = useState("");

    const {infosUsers} = useSelector(state => state);

    console.log(infosUsers);

    const dispatch = useDispatch();

    const inscription = () => {

        // console.log(username,email,password);

        try {

            auth.createUserWithEmailAndPassword(email,password).then( async ({user}) => {

                //dispatchProduct(affProduct({affModalProduct : !affModalProduct,data}))

                dispatch(lireInfosUsers({userId:user.uid,pseudo:username,usermail:user.email}));

                await queryAddUser(user.uid, {username:username,email:user.email , date:Date.now()})

                navigation.navigate('Login');

            }).catch(error => {

                if (error.code === 'auth/email-already-in-use') {

                    console.log('Cette adresse mail est déjà utilisée !');

                }
            
                if (error.code === 'auth/invalid-email') {

                    console.log("Cette adresse mail n'est pas valide");

                }

                console.error(error);

            });

        } catch (error) {

            console.log(error);

        }


    }

    return (

        <View style={styles.styleFirstView}>

            <View style={styles.styleViewTitle}>

                <Text style={styles.styleTextTitle}> INSCRIVEZ-VOUS ! </Text>

            </View>

            <View style={styles.styleViewInputs}>

                <Input 
                placeholder="Nom d'utilisateur"
                autoCorrect={false}
                placeholderTextColor="white"
                style={styles.styleInputs}
                onChangeText={setUsername}
                value={username}
                inputStyle={{color:"white"}}
                />

                <Input 
                placeholder="Adresse Mail"
                autoCorrect={false}
                keyboardType="email-address"
                placeholderTextColor="white"
                style={styles.styleInputs}
                onChangeText={setEmail}
                value={email}
                inputStyle={{color:"white"}}
                />

                <Input 
                placeholder="Mot de passe"
                autoCorrect={false}
                secureTextEntry={true}
                placeholderTextColor="white"
                style={styles.styleInputs}
                onChangeText={setPassword}
                value={password}
                inputStyle={{color:"white"}}
                />

                <View style={styles.styleTextForgotPassword}>

                    <Text style={{color:"white"}} onPress={() => navigation.navigate('Login')} >
                        Déjà inscrit ? Connectez-vous ici !
                    </Text>

                </View>

            </View>

            <View style={styles.styleButtonView}>
            
                <Button
                    title="INSCRIPTION"
                    buttonStyle={styles.styleButtonInscription}
                    titleStyle={{color:'white'}}
                    onPress={inscription}
                />

            </View>

        </View>

    )

}

export default index