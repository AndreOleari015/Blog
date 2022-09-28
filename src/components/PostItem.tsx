import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, Fonts } from '../theme/Theme';

type Props = {
    pub: {
        title: string,
        content: string,
        createdAt: string,
    }
}
const PostItem = ({ pub }: Props) => {

    const [like, setLike] = useState(false);

    const { title, content, createdAt } = pub;

    const handleLile = () => {
        setLike(!like);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}>
            <View style={styles.createdAtContainer}>
                <Text style={styles.createdAtLabel}>{createdAt}</Text>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={handleLile}>
                    <AntDesign name={like ? "heart" : "hearto"} size={26} color={COLORS.purple} />
                </TouchableOpacity>
            </View>
            <Text style={styles.titleLabel}>{title}</Text>
            <Text style={styles.contentLabel}>{content}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 20,
        borderRadius: 8,
        marginHorizontal: 20,
        backgroundColor: COLORS.white,
    },
    createdAtContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    createdAtLabel: {
        color: COLORS.gray,
        fontFamily: Fonts.fontLexend400
    },
    icon: {
        padding: 8,
    },
    titleLabel: {
        fontSize: 18,
        fontFamily: Fonts.fontLexend400,
    },
    contentLabel: {
        flex: 1,
        fontSize: 14,
        flexWrap: "wrap",
        color: COLORS.gray,
        fontFamily: Fonts.fontLexend400,
    }
})

export default PostItem;