import { View, Text, Button, StatusBar } from 'react-native';
import Form from './components/Form';
console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <View style={{flex:1}}>
      <Form />
    </View>
    // <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    //   <View style={{ backgroundColor: 'white', flex: 0.5 }}>
    //     <Text style={{ fontSize: 20 }}>Hello</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: 'blue',
    //       flex: 0.5,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Text style={{ fontSize: 20 }}>Hello from native</Text>
    //     <Button
    //       title="Press Here"
    //       onPress={() => console.log('button pressed')}
    //     />
    //   </View>
    // </View>
  );
}
