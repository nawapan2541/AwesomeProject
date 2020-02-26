/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet,Text,View,Button} from 'react-native';

export default function App(){
  return (
  <View style={styles.contranier}  >
   <Text style={styles.Text1}> Cafeteria</Text>
   <Text style={styles.Text2}>Management System</Text>
   <View style={styles.buttonLogin}>
     <Button title='login'/>
   </View>
  </View>
  );
}
const styles = StyleSheet.create({
  contranier: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1:{
    
    fontSize: 30,
    fontWeight : 'bold',
    color: '#FF7C2C',
    
  },
  Text2:{
    fontSize: 24,
    fontWeight : 'bold',
    color: '#F7921C',
    
  },
  buttonLogin:{
    marginTop : 20,
    

  },
 
});
 
