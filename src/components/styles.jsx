import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 15,
        alignItems: 'center',   
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: COLORS.lightPurple,
        marginRight: 20,
        padding: 8,
        borderRadius: 10,
    },
    text: {
        color: COLORS.title,
        fontSize: SIZES.h2,
    }
});

export default styles;