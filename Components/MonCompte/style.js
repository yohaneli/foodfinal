import React from 'react'
import { StyleSheet } from 'react-native';
import { generalColors } from "../../Colors";

export const styles = StyleSheet.create({
    styleFirstView:{
        flex:1,
        padding:10,
        backgroundColor:generalColors.backgroundColorHomeDetailCompte
    },
    styleImageTextView:{
        alignItems:'center',
        flex:0.99,
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:100
    },
})
