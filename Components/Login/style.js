import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    styleFirstView:{
        flex:1,
        padding:10,
        backgroundColor:"#CABEAB"
    },
    styleViewTitle:{
        backgroundColor:"#CABEAB",
        alignItems:'center',
        flexDirection:"row",
        flex:0.45,
        justifyContent:"center"
    },
    styleViewInputs:{
        backgroundColor:"#CABEAB",
        alignItems:'center',
        flexDirection:"column",
        flex:0.3,
        justifyContent:"center"
    },
    styleButtonsView:{
        justifyContent:"flex-end",
        backgroundColor:"#CABEAB"
    },
    styleButtons:{
        borderRadius:15,
        backgroundColor:"brown",
        margin:10
    }

})