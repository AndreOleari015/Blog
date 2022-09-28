import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, Fonts } from '../theme/Theme';
import { DATA } from '../utils/BlogContaint';
import PostItem from '../components/PostItem';


const Home = () => {

    const { dark, light } = COLORS.gradientDefault;

    const [data, setData] = useState(DATA);

    const handleSearch = (text: string) => {
        if (text != "") {
            const filtered = data.filter(item => {
                return item.title.match(text);
            })
            setData(filtered);
        } else {
            setData(DATA);
        }
    }

    const ListHeader = () => {
        const [text, setText] = useState("");
        return (
            <LinearGradient
                start={[0.0, 0.7]}
                end={[0.7, 1.0]}
                colors={[dark, light]}
                style={styles.header}>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>Codelândia</Text>
                    <Text style={styles.headerTitle}>blog</Text>
                </View>
                <View style={styles.searchBarContainer}>
                    <TouchableOpacity
                        onPress={() => handleSearch(text)}>
                        <Feather name="search" size={22} color={COLORS.white} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                        placeholder='Pesquisar no blog'
                        placeholderTextColor={COLORS.white}
                    />
                </View>
            </LinearGradient >
        )
    }

    const _renderItem = ({ item }: any) => {
        return (
            <PostItem pub={item} />
        )
    }

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={_renderItem}
            style={styles.container}
            ListHeaderComponent={ListHeader}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white200,
    },
    header: {
        height: 200,
        marginBottom: 40,
    },
    headerTitleContainer: {
        marginTop: 60,
        marginBottom: 30,
        flexDirection: "row",
        paddingHorizontal: 20,
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: 18,
        color: COLORS.white,
        fontFamily: Fonts.fontLexend400
    },
    searchBarContainer: {
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
        paddingHorizontal: 10,
        backgroundColor: COLORS.input,
    },
    input: {
        width: "100%",
        paddingLeft: 10,
        color: COLORS.white,
        fontFamily: Fonts.fontInter400
    },
})

export default Home;