import { TextInput, View } from "react-native"
export default function Form(){
    return (
<View style={{flex:1 , justifyContent:'center' }}>
    <TextInput
    style={{height:40 , borderColor:'grey'}}
    placeholder ="Email"
    />
</View>
    )
}