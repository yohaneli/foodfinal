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
                    source = {require("../../images/logofinal.png")}
                    />

                    <Text style={styles.styleTitle}>

                    Bienvenue chez Yohan's Fast Food

                    </Text>

                </View>

            </View>

            <View style={styles.styleButtonsView}>

                <Button
                    title="CONNEXION"
                    buttonStyle={styles.styleButtonConnexion}
                    onPress={() => navigation.navigate('Login')}
                    titleStyle={{color:'#535151'}}
                />

                <Button
                    title="INSCRIPTION"
                    buttonStyle={styles.styleButtonInscription}
                    onPress={() => navigation.navigate('Register')}
                />

            </View>

    </View>

    )
}

export default index
