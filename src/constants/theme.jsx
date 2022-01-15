const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#633974',  // 99, 57, 116
    lightPurple: '#EBDEF0',
    grey: '#585656',
    lightGrey: '#DCDADD',
    white: '#FFFFFF',
    title: '#482755',
};

export const SIZES = {
    h1: 20,
    h2: 18,
    h3: 16,
    h4: 14,
    h5: 12,
    h6: 10,

    width,
    height,
};

export const FONTWEIGHT = {
    bold: 'bold',
    normal: 'normal',
    weight500: '500',
    weight700: '700',
};

