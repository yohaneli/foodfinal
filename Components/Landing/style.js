import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    styleFirstView:{
        flex:1,
        padding:10,
        backgroundColor:"#C7A093"
    },
    styleImageTextView:{
        backgroundColor:"#C7A093",
        alignItems:'center',
        flex:1,
        flexDirection:"row",
        justifyContent:"center"
    },
    styleTitle:{
        fontSize:18,
        color:'black',
        fontWeight:"bold"
    },
    styleButtonsView:{
        justifyContent:"flex-end",
        backgroundColor:"#C7A093"
    },
    styleButtons:{
        borderRadius:15,
        backgroundColor:"brown",
        margin:10
    }
})
