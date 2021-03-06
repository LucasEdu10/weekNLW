import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

// importando o estilo
import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/Categories';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { theme } from '../../global/styles/theme';

export type GuildPropos = {
    id: string;
    name: string;
    icon: null;
    owner: boolean;
}

export type AppointmentsProps = {
    id: string;
    guild: GuildPropos;
    category: string,
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentsProps;
}

export function Appointments({data, ...rest}: Props){

    const [category] = categories.filter(item => item.id === data.category );
    const { owner } = data.guild
    const { primary, on } = theme.colors

    return(
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            { data.guild.name }
                        </Text>
                        <Text style={styles.category}>
                            { category.title }
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                { data.date }
                            </Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={ owner ? primary : on} />
                                <Text style={[
                                    styles.player, {color: owner ? primary : on}
                                ]}>
                                    { owner ? 'Anfitri??o' : 'Visitante' }
                                </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}