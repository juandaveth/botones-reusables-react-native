import React, { Component, PropTypes } from 'react'; 
import { Text, TouchableOpacity, View, } from 'react-native'; 
import Base, { Default, Danger, Info, Success } from './ styles';

const { array, string, object, bool, func, any } = PropTypes;

class Boton extends Component {
    static propTypes = {
        // Paso 4.:
        children: any,
        danger: bool,
        info: bool,
        style: View.propTypes.style,
        success: bool,
        onPress: func,
    };
    getTheme() {
        // Se definirá en el Paso 5.
    }

    render() {
        // Se definirá en el Paso 6.
    }
};

export default Boton;

