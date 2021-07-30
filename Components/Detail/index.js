import React from 'react'
import { Text, View } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card,Button } from 'react-native-elements';

const index = ({navigation}) => {
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
                    name="user"
                    size={24}
                    color="orange"
                    onPress={() => navigation.navigate("MonCompte")}
                    />

                </View>

            </View>

            <Card containerStyle={{elevation:0,marginTop:30,borderColor:"white"}}>
                
                <Card.Image source={require('../../images/imagemenu1home.png')} style={{width:324,height:313}} containerStyle={{borderBottomStartRadius:10,borderBottomEndRadius:10}}>

                </Card.Image>

                <Text style={{fontWeight:"bold",fontSize:24,marginTop:15}}>Double Whopper</Text>

                <Text style={{fontSize:24,color:"#F89502"}}>Prix : 9,90 €</Text>

                <Text>{"\n"}</Text>

                    <Button
                    icon={
                    <Icon
                        name="cart-plus"
                        size={22}
                        color="white"
                    />
                    }
                    title=" COMMANDER "
                    buttonStyle={{backgroundColor:"orange"}}
                    containerStyle={{borderRadius:15,justifyContent:"space-between"}}
                    onPress={() => console.log("add panier")}
                    />

            </Card>

            
        </View>
    )
}

export default index
