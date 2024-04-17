import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
// import { Roleta } from './src/components/home/Roleta';
// LEMBRAR DE INSTALAR O NATIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Home/>
      <StatusBar style="light" />
   
    </NavigationContainer>
    
  );
}