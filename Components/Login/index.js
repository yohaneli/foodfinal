import React from 'react';
import {Text,View } from 'react-native';
import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';
import Header from '../Header';

const index = ({navigation}) => {
    return (
        <View style={styles.styleFirstView}>

            <Header />

            <View style={styles.styleViewTitle}>

                <Text style={{
                    fontWeight:"bold",
                    fontSize:22
                }}> Se connecter </Text>

            </View>

            <View style={styles.styleViewInputs}>

                <Input 
                placeholder="Adresse Mail"
                autoCorrect={false}
                keyboardType="email-address"
                placeholderTextColor="black"
                style={{
                    backgroundColor:"white",
                    borderRadius:10,
                    height:40,
                    width:50
                }}
                />

                <Input 
                placeholder="Mot de passe"
                autoCorrect={false}
                placeholderTextColor="black"
                style={{
                    backgroundColor:"white",
                    borderRadius:10,
                    height:40,
                    width:50
                }}
                />

                <Button
                    title="Connexion"
                    buttonStyle={styles.styleButtons}
                />

                <Text style={{margin:5}}>
                    Vous êtes nouveau ? Crée ton compte ici     
                </Text>

                <Button 
                title="Inscription"
                />

                <Text style={{margin:5}}>
                    Mot de passe oublié ? Appuyez ici
                </Text>

                <Button 
                title="Mot de passe oublié"
                />

            </View>

        </View>
    )
}

export default index
