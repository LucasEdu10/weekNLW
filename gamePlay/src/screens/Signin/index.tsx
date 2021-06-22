import React, { useState } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';

// importando o estilo
import { styles } from './styles'; 
// importando as images
import IllustrationImg  from '../../assets/illustration.png';

// importando a tela do botao
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn(){
    
    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content'
                       backgroundColor='transparent'
                       translucent
             />
            <Image source={IllustrationImg} 
                   style={styles.image}
                   resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title='Entrar com o Discord'/>
            </View>
        </View>
    );
}