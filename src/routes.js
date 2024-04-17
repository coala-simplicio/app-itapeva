import {createBottomTabNavigator} from  '@react-navigation/bottom-tabs'; 

import Casa from "./pages/Casa";
import Historia from "./pages/Historia";
import Loja from './pages/Loja';
import Perfil from "./pages/Perfil"
import Home from  "./screens/Home"


const Tab = createBottomTabNavigator();

function Routes(){
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home} 
            />
              <Tab.Screen
                name="Loja"
                component={Loja} 
            />
              <Tab.Screen
                name="Historia"
                component={Historia} 
            />
              <Tab.Screen
                name="Perfil"
                component={Perfil} 
            />
        </Tab.Navigator>
    )
}
 export default Routes;