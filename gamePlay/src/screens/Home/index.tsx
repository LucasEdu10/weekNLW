import React, { useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';

// importando o estilo
import { styles } from './styles';

// COMPONENTS
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointments } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';


export function Home(){
    const [category, setCategory] = useState('');
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos ao challenger sem perder uma partida da md10'
        }
    ]

    function handelCategorySelect(categoryId: string){
        // se a categoryId se for igual, seta ele como nada, se nao for igual ele seta um id
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return(
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect 
                CategorySelect={category}
                setCategory={handelCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader title="Partidas agendadas"
                            subTitle="Total 6"
                />

                <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={( { item } ) => (
                        <Appointments data={item} />
                    )}
                    // função para usar um component de separador
                    ItemSeparatorComponent={() => <ListDivider/>}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}