import React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'react-native-elements';


const index = () => {
    return (
        <Header
        placement="center"
        leftComponent={{ icon: 'home', color: 'black' }}
        centerComponent={{ text: 'Connexion', style: { color: 'black' } }}
        backgroundColor="#CABEAB"
        containerStyle={{
            borderBottomColor:"black"
        }}
        />
    )
}

export default index
