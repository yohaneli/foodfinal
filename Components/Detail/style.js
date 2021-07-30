import React from 'react'
import { StyleSheet } from 'react-native';
import { generalColors } from "../../Colors";


export const styles = StyleSheet.create({
    styleFirstView:{
        flex:1,
        padding:10,
        backgroundColor:generalColors.backgroundColorHomeDetailCompte
    },
    styleCard:{
        flex:1,
        borderWidth:2,
        borderColor:"white",
        justifyContent:"center",
        flexDirection:"row",
    }
})
