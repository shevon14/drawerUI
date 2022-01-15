import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, FONTWEIGHT } from "../constants/theme";
import styles from "./styles";

const DrawerItem = (props) => {
    const { iconName, text, pro, notification } = props;

    const [isEnable, setIsEnable] = useState(false);
    const toggleSwitch = () => setIsEnable((state) => !state);

    return(
        <TouchableOpacity disabled={notification} onPress={() => {}}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={[styles.iconContainer, { backgroundColor: pro ? COLORS.primary : COLORS.lightPurple} ]}>
                        <Icon name={iconName} size={30} color={pro ? COLORS.lightPurple : COLORS.primary} />
                    </View>
                    <Text style={[styles.text, { fontWeight: pro ? FONTWEIGHT.bold : FONTWEIGHT.weight500} ]}>{text}</Text>
                </View>
                <View>
                    {notification ? 
                        <Switch 
                            trackColor={{ false: COLORS.lightGrey, true: COLORS.primary}}
                            thumbColor={isEnable ? COLORS.lightGrey : COLORS.primary}
                            ios_backgroundColor={COLORS.lightGrey}
                            onValueChange={toggleSwitch}
                            value={isEnable}
                        />
                    : 
                    <Icon name="chevron-right" size={25} color={COLORS.grey} /> }
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DrawerItem;