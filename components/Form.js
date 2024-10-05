import { Alert, Button, TextInput, View } from "react-native"
import {useState} from 'react'
export default function Form(){
const [email,setEmail] = useState(
    ''
)
const [password,setPassword] = useState('')
console.log(email,password)
const handleRegister =async () => {
     try {
        const res = await axios.post("http://localhost:3000/api/login",{
    username, password
})
Alert.alert('Login successfull')
     } catch (error) {
        Alert.alert(error.response.message)
     }

 
}
    return (
<View style={{flex:1 , justifyContent:'center' ,margin:10}}>
    <TextInput
    style={{height:40 , borderColor:'gray' ,borderWidth:1 ,margin:5, padding:8}}
    placeholder ="Email"
    value={email}
    onChangeText={setEmail}
    keyboardType = 'email-address'
    />
    <TextInput
    style={{height:40 , borderColor:'gray' ,borderWidth:1, padding:8 , margin:5}}
    onChangeText={setPassword}
    value={password}
    placeholder ="Password"
     secureTextEntry
    />
    <Button style={{marginTop:10}} title="Login" onPress={handleRegister}/>
</View>
    )
}