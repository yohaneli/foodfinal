import React from 'react';
import {StyleSheet} from 'react-native';
import { generalColors } from '../../Colors';

export const styles = StyleSheet.create({
    styleFirstView:{
        flex:1,
        padding:10,
        backgroundColor:generalColors.backgroundColorLandingAuth
    },
    styleImageTextView:{
        backgroundColor:generalColors.backgroundColorLandingAuth,
        alignItems:'center',
        flex:0.99,
        flexDirection:"row",
        justifyContent:"center"
    },
    styleTitle:{
        fontSize:20,
        color:'#DBDAFF',
        fontWeight:"bold"
    },
    styleButtonsView:{
        justifyContent:"flex-end",
        backgroundColor:generalColors.backgroundColorLandingAuth,
    },
    styleButtonConnexion:{
        borderRadius:15,
        backgroundColor:"#FFFDFD",
        margin:10
    },
    styleButtonInscription:{
        borderRadius:15,
        backgroundColor:"#F89502",
        margin:10
    }
})
