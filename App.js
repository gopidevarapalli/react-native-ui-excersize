import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={{
         backgroundColor:"#fff",
         height:260,
         width:260 ,
         borderTopLeftRadius:10,
         borderTopRightRadius:10, 
         borderBottomLeftRadius:10,
         borderBottomRightRadius:10
       }}>
         
         <View style={{ 
         height:"50%", 
         backgroundColor:"#F4F5FB",
         borderTopLeftRadius:10, 
         borderTopRightRadius:10,
         }}>

        <View style={{
         flexDirection:"row",
          backgroundColor:"white",
          height:"100%",
          borderBottomLeftRadius:35,
          borderTopLeftRadius:10, 
          borderTopRightRadius:10 
           

        }}>   
          <View style={{
            backgroundColor:'black',
            width:35,
            height:35,
            marginTop:50,
            marginLeft:35,
            borderRadius:5
          }}></View>
            <View  style={{ 
              height:30,
              marginTop:50,
              marginLeft:25,
              borderRadius:5
            }}>
              <Text style={{
                color:"black",
                fontSize:18
              }}>
                Name
              </Text>
            </View>
            <View style={{
           backgroundColor:'black',
           width:35,
           height:35,
           marginTop:50,
           marginLeft:30,
           borderRadius:5
         }}>

         </View>
       
        </View>
        </View>
      
      <View style={{
        backgroundColor:"#F4F5FB",
        height:"50%",
        borderTopRightRadius:35,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        alignItems:"center"
      }}>
        <Text style={{
          marginTop:40,
          fontSize:18,
          fontWeight:"bold"
           

        }}
        >Balance</Text>
        
      </View>

       </View>
   
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1C22',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
