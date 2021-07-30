import { StyleSheet } from "react-native";
import { generalColors } from "../../Colors";

export const styles = StyleSheet.create({
    styleFirstView:{
        flex:1,
        padding:10,
        backgroundColor:generalColors.backgroundColorHomeDetailCompte
    },
    item: {
        padding: 9,
        backgroundColor:'orange',
        marginHorizontal:10,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:10
    },
    itemMenus: {
        padding: 9,
        backgroundColor:'white',
        marginHorizontal:10,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:10,
        borderColor:"black",
        width:150,
        height:150
    },
    viewMenuInfos: {
        backgroundColor:"white"
    },
    title: {
        fontSize: 16,
        color:"#535151",
    },
    menuName: {
        fontSize: 16,
        color:"#535151",
    },
    menuPrice:{
        fontSize: 16,
        color:"orange",
    }
})
