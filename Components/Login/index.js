import React,{useState,useContext} from 'react';
import {Text,View } from 'react-native';
import { Button,Input } from 'react-native-elements';
import { styles } from './style';
import { FirebaseContext } from '../../FirebaseContext';

const index = ({navigation}) => {

    const {auth} = useContext(FirebaseContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    // console.log(auth);
    const connexion = () => {
        // console.log(email,password);
        try {

            auth.signInWithEmailAndPassword(email,password);

            navigation.navigate('MonCompte')

        } catch (error) {

            console.log(error);

        }

    }

    return (
        <View style={styles.styleFirstView}>
            <View style={styles.styleViewTitle}>
                <Text style={styles.styleTextTitle}> CONNECTEZ-VOUS ! </Text>
            </View>
            <View style={styles.styleViewInputs}>

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
                    <Text style={{color:"white"}}>
                        Mot de passe oublié
                    </Text>
                </View>
                <View style={styles.styleTextForgotPassword}>
                    <Text style={{color:"white"}} onPress={() => navigation.navigate('Register')}>
                        Pas encore inscrit ? Inscrivez-vous ici !
                    </Text>
                </View>
            </View>
            <View style={styles.styleButtonView}>
                <Button
                    title="CONNEXION"
                    buttonStyle={styles.styleButtonConnexion}
                    titleStyle={{color:'#535151'}}
                    onPress={connexion}
                />
            </View>
        </View>
    )
}

export default index
