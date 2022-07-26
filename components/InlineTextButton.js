import {Text, Pressable} from 'react-native'
import Styles from '../styles/Styles'

export default function InlineTextButton (props){
    return (
        <Pressable onPress={props.onPress}>
            {({ pressed}) => (
                <Text style={ pressed ? Styles.pressedInlineTextButton : Styles.inlineTextButton}>{props.text}</Text>
            )}
            
        </Pressable>
    )
}