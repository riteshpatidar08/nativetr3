import { Button, TextInput, View } from "react-native"
export default function Form(){
    return (
<View style={{flex:1 , justifyContent:'center' ,margin:10}}>
    <TextInput
    style={{height:40 , borderColor:'gray' ,borderWidth:1 ,margin:5, padding:8}}
    placeholder ="Email"
    keyboardType = 'email-address'
    />
    <TextInput
    style={{height:40 , borderColor:'gray' ,borderWidth:1, padding:8 , margin:5}}
    placeholder ="Password"
   secureTextEntry
    />
    <Button style={{marginTop:10}} title="Login"/>
</View>
    )
}