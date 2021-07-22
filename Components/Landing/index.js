import React from 'react';
import {Text,View,Image} from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './style';

const index = ({navigation}) => {
    return (
        <View style={styles.styleFirstView}>

            <View style={styles.styleImageTextView} >

                <View style={{alignItems:'center'}}>

                    <Image 
                    source = {require("../../images/logoyohanfastfood.png")}
                    />

                    <Text style={styles.styleTitle}>

                    Bienvenue chez Yohan's Fast Food

                    </Text>

                </View>

            </View>

            <View style={styles.styleButtonsView}>

                <Button
                    title="Inscription"
                    buttonStyle={styles.styleButtons}
                    onPress={() => navigation.navigate('Register')}
                />

                <Button
                    title="Connexion"
                    buttonStyle={styles.styleButtons}
                    onPress={() => navigation.navigate('Login')}
                />

            </View>

    </View>

    )
}

export default index
