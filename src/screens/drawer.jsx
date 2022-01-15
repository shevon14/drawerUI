import React from "react";
import { Image, ImageBackground, View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import DrawerItem from '../components/drawerItem';

const Drawer = () => (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/finance.jpeg')}>
            <View style={styles.topContainer}>
                <View style={styles.topDetails}>
                    <Image style={styles.profile} source={require('../assets/profile.jpeg')} />
                    <View>
                        <Text style={styles.name}>Jenna Madelynn</Text>
                        <View style={styles.row}>
                            <Icon name="map-marker"  size={15} style={styles.icon} />
                            <Text style={styles.locationText}>New York, US</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
        <ScrollView>
            <View style={styles.itemContainer}>
                <DrawerItem iconName="chess-king" text="Finance Pro" pro />
                <DrawerItem iconName="account" text="Account" />
                <DrawerItem iconName="chart-timeline-variant" text="Data Usage" />
                <DrawerItem iconName="qrcode-scan" text="Scan QR Code" />
                <View style={styles.line} />
                <DrawerItem iconName="bell-ring" text="Notification" notification />
                <DrawerItem iconName="shield-link-variant" text="Privacy Policy" />
                <DrawerItem iconName="cog" text="Settings" />
            </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
            <Text style={styles.appName}>Finance Management</Text>
            <Text style={styles.versionText}>Version 1.0.1</Text>
        </View>
    </View>
)

export default Drawer;