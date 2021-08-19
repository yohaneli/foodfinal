import React from 'react';
import {StyleSheet} from 'react-native';
import { generalColors } from '../../Colors';

export const styles = StyleSheet.create({

    styleFirstView:{
        flex:1,
        padding:10,
        backgroundColor:generalColors.backgroundColorLandingAuth,
    },
    styleViewTitle:{
        backgroundColor:generalColors.backgroundColorLandingAuth,
        alignItems:'center',
        flexDirection:"row",
        flex:0.35,
        justifyContent:"center"
    },
    styleViewInputs:{
        backgroundColor:generalColors.backgroundColorLandingAuth,
        alignItems:'center',
        flexDirection:"column",
        flex:0.4,
        justifyContent:"center"
    },
    styleButtonsView:{
        justifyContent:"flex-end",
        backgroundColor:generalColors.backgroundColorLandingAuth,
    },
    styleButtons:{
        borderRadius:15,
        backgroundColor:"brown",
        margin:10
    },
    styleInputs:{
        backgroundColor:generalColors.backgroundColorLandingAuth,
        height:40,
    },
    styleTextTitle:{
        fontWeight:"bold",
        fontSize:28,
        color:"#F89502"
    },
    styleButtonView:{
        justifyContent:"flex-end",
        backgroundColor:generalColors.backgroundColorLandingAuth,
        flex:0.2
    },
    styleButtonInscription:{
        borderRadius:15,
        backgroundColor:"#F89502",
        margin:10
    },
    styleTextForgotPassword:{
        flexDirection:"row",
        alignSelf:"flex-end",
    },
})