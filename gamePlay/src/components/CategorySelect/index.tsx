import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, ScrollView, Image } from 'react-native';

import { styles } from './styles'
import { categories } from '../../utils/Categories';
import { Category } from '../Category';

type Props = {
    CategorySelect: string;
    // ele tem um categoryId e não precisa retornar nada
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({CategorySelect, setCategory}: Props){
    return(
        <ScrollView 
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false} // não aparecer a barra de rolagem
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map(category =>(
                    <Category key={category.id}
                              icon={category.icon}
                              title={category.title}
                              checked={category.id === CategorySelect}
                              onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    );
}