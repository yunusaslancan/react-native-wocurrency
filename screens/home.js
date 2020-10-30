import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , ScrollView ,FlatList} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Home() {
    const [people , setPeople] = useState([
        { name :'apo', key: '1' },
        { name :'EXEN', key: '2' },
        { name : 'GAS', key: '3' },
        { name :'BUZZER', key: '4' },
        { name :'LEA', key: '5' },
        { name :'CAERİM', key: '6' },
        { name :'LEAFS', key: '7' },
        { name :'ONİCE', key: '8' },

    ]);
    return (
        <View style={Styles.container}>
        <TextInput
           placeholder="Search:"
           placeholderTextColor="#dddddd"
           style={Styles.place}
           />
          <FlatList
            data={people}
            renderItem={({ item }) =>(
            <Text style={Styles.item}>{item.name}</Text>
            )}
            />
        </View>
      );
}
const Styles = StyleSheet.create({
 container:{
 flex:4,
 backgroundColor: '#fff',
 paddingTop:40,
 paddingHorizontal:20
 },

 place:{
     
     backgroundColor:'#008080',
     borderRadius:10,
     height:40,
     fontSize:15,
     padding:10,
     color:'white',
     marginHorizontal:5
,     
 },

 item:{
     marginTop:24,
     borderRadius:50,
     padding:30,
     backgroundColor:'#778899',
     fontSize:24,
     marginHorizontal:5,
     marginTop:24,
 }
});