import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// importando o estilo
import { styles } from './styles'; 
// importando as images
import IllustrationImg  from '../../assets/illustration.png';

// importando a tela do botao
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn(){
    const navigation = useNavigation();

    function handleSigIn(){
        navigation.navigate('Home');
    }
    
    return(
        <View style={styles.container}>
            <Image source={IllustrationImg} 
                   style={styles.image}
                   resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas jogatinas 
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title='Entrar com o Discord'
                            activeOpacity={0.7}
                            onPress={handleSigIn} 
                />
            </View>
        </View>
    );
}