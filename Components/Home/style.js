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
    title: {
        fontSize: 16,
        color:"white",
      },
})
