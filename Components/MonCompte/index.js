import React,{useState} from 'react';
import { Text, View,Image } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';

const index = ({navigation}) => {

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={styles.styleFirstView}>
            
            <View style={{flexDirection:"row",paddingTop:10}}>

                <Icon 
                name="chevron-left"
                size={24}
                color="orange"
                onPress={() => navigation.goBack("Home")}
                />

                <View style={{flex:1,alignItems:"flex-end"}}>

                    <Icon
                    name="sign-out"
                    size={24}
                    color="orange"
                    onPress={() => console.log("deconnexion")}
                    />

                </View>

            </View>

            <View style={styles.styleImageTextView}>

                <View style={{alignItems:"center"}}>
                
                    <Image 
                    source = {require("../../images/default_avatar.png")}
                    onPress={() => console.log("detail")}
                    style={{height:100,width:100,borderRadius:100}}
                    />

                    <Text style={{fontSize:24,fontWeight:"bold",color:"#434354"}}> Elisabeth</Text>
                    <Text style={{fontSize:24,color:"#72727E"}}> Yohan</Text>

                        <View style={{marginTop:60}}>
                            <Text style={{fontSize:20,color:"#F89502"}}>Mes commandes : </Text>
                            <Text style={{fontSize:20,color:"black",marginLeft:20}}> - Commande 1 </Text>
                            <Text style={{fontSize:20,color:"black",marginLeft:20}}> - Commande 2 </Text>
                            <Text style={{fontSize:20,color:"black",marginLeft:20}}> - Commande 3 </Text>
                            <Text style={{fontSize:20,color:"black",marginLeft:20}}> - Commande 4 </Text>
                        </View>


                </View>

            </View>

        </View>
    )
}

export default index
