import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Linking} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Button from './Button';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);
const Drawer = createDrawerNavigator();
const ArtImage = require('./assets/art.png');
const magnificentImage = require('./assets/mile.png');
const WillisImage = require('./assets/willis.png');
const navyImage = require('./assets/pier.png');
const waterImage = require('./assets/water.png');

export default function App() {
  

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstitute} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function ArtInstitute(){
  
  return(
    <View style={styles.container}>
    <Image style = {styles.imageContainer} source = {ArtImage}/>
    <Button info style={styles.Button} 
    onPress={()=>Linking.openURL('https://www.artic.edu/')}>More Information</Button> 
    </View>
  );
  
}
function MagnificentMile(){
  return(
    <View style={styles.container}>
    <Image style = {styles.imageContainer} source = {magnificentImage}/>
    <Button info style={styles.Button} 
    onPress={()=>Linking.openURL('https://www.themagnificentmile.com/')}>More Information</Button> 
    </View>
    );
}
function NavyPier(){
  return(
    <View style={styles.container}>
    <Image style = {styles.imageContainer} source = {navyImage}/>
    <Button info style={styles.Button} 
    onPress={()=>Linking.openURL('https://navypier.org/')}>More Information</Button> 
    </View>
    );
}
function WaterTower(){
  return(
    <View style={styles.container}>
    <Image style = {styles.imageContainer} source = {waterImage}/>
    <Button info style={styles.Button} 
    onPress={()=>Linking.openURL('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')}>More Information</Button> 
    </View>
    );
}
function WillisTower(){
  return(
    <View style={styles.container}>
    <Image style = {styles.imageContainer} source = {WillisImage}/>
    <Button info style={styles.Button} 
    onPress={()=>Linking.openURL('https://www.willistower.com/')}>More Information</Button> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    width: 240,
    height: 360,
    alignSelf: 'center',
    
  },
  Button:{
margin:10,
width:150,
height:50,
alignItems:'center'
  }
});
