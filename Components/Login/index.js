import React from 'react';
import {Text,View } from 'react-native';
import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style';
import Header from '../Header';
import { generalColors } from '../../Colors';

const index = ({navigation}) => {
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
                />

                <Input 
                placeholder="Mot de passe"
                autoCorrect={false}
                secureTextEntry={true}
                placeholderTextColor="white"
                style={styles.styleInputs}
                />

                <View style={styles.styleTextForgotPassword}>

                    <Text style={{color:"white"}}>
                        Mot de passe oublié
                    </Text>

                </View>

            </View>

            <View style={styles.styleButtonView}>
            
                <Button
                    title="CONNEXION"
                    buttonStyle={styles.styleButtonConnexion}
                    titleStyle={{color:'#535151'}}
                    onPress={() => navigation.navigate('Home')}
                />

            </View>

        </View>
    )
}

export default index
