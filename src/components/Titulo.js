import React from 'react'
import { Text } from "react-native"
import ComumStyles from "../ComumStyles"

export default Titulo = props => {
    return  <Text style={ComumStyles.title}>{props.titulo}</Text>
}