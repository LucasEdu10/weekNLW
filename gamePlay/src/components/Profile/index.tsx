import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';


import { Avatar } from '../Avatar';

// importando o estilo
import { styles } from './styles'; 


export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/LucasEdu10.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>Olá,</Text>
                    <Text style={styles.username}>Lucas</Text>
                </View>
                <Text style={styles.message}>Hoje é dia de vitoria!</Text>
            </View>
        </View>
    );
}