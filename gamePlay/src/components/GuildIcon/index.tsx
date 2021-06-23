import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

// importando o estilo
import { styles } from './styles';


export function GuildIcon(){
    const uri = 'https://mmovicio.com.br/wp-content/uploads/2021/06/valorant.jpg';
    return(

        <Image source={{ uri }}
               style={styles.image}
               resizeMode="cover"
        />
    );
}