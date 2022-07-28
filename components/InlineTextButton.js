import {Text, Pressable} from 'react-native'
import Styles from '../styles/Styles'

export default function InlineTextButton (props){

    let style ={};
    if (props.color) {
        style.color = props.color
    }
    return (
        <Pressable onPress={props.onPress}>
            {({ pressed}) => (
                <Text style={ [pressed ? Styles.pressedInlineTextButton : Styles.inlineTextButton, style]}>{props.text}</Text>
            )}
            
        </Pressable>
    )
}