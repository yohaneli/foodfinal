import React,{useState,useContext,useEffect} from 'react';
import { Text, View,Image } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import { FirebaseContext } from '../../FirebaseContext';
import { useSelector } from 'react-redux';

const index = ({navigation}) => {

    const {auth,queryUser} = useContext(FirebaseContext);

    const {infosUsers} = useSelector(state => state);

    console.log(infosUsers.pseudo);

    const [userName, setUserName] = useState("UserName")

    useEffect(() => {
        setUserName(infosUsers.pseudo);
        console.log(userName);
        return () => {
            
        }
    }, [])

    // console.log(auth);

    // console.log(queryUser);

    const deconnexion = () => {

        auth.signOut();

        navigation.navigate('Login');
        
    }

    return (
        <View style={styles.styleFirstView}>
            
            <View style={{flexDirection:"row",paddingTop:10}}>

                <Icon 
                name="home"
                size={24}
                color="orange"
                onPress={() => navigation.navigate("Home")}
                />

                <View style={{flex:1,alignItems:"flex-end"}}>

                    <Icon
                    name="sign-out"
                    size={24}
                    color="orange"
                    onPress={deconnexion}
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

                    {
                    
                        infosUsers.pseudo 
                        
                        ?

                    <Text style={{fontSize:24,fontWeight:"bold",color:"#434354"}}> 
                        {infosUsers.pseudo}
                    </Text>

                        :

                    <Text style={{fontSize:24,fontWeight:"bold",color:"#434354"}}>
                        Erreur
                    </Text>

                    }

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
