import { View, Text, Button, StatusBar } from 'react-native';
import Form from './components/Form';
import { SafeAreaProvider } from 'react-native-safe-area-context';

console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View>
  <Text> Navigation</Text> 
      </View>
    </SafeAreaProvider>
  );
}
