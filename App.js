import React,{Component} from 'react';
import {
  Image,
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class App extends Component{
render() {

  return(

          <View style={{backgroundColor:"#000000", height:"100%", width:"100%"}}>

            <Image source={require('./ios/nature.jpg')}  
            style={{width:'90%', height: '30%', margin:20, alignSelf:"center"}}>
            </Image>
            <Text style={{fontSize:30,color:"#717ade",margin:10, marginTop:-15,alignSelf:"center"}}>Login</Text>
            <View style={{alignItems:"center",backgroundColor:"#ffffff",margin:20}}>
            <TextInput
		            style={{ width:"95%", height: 50,borderWidth: 1, borderColor: "#000000", margin: 10}}
                placeholder="Username"
		        />
            <TextInput
		            style={{ width:"95%", height: 50,borderWidth: 1, borderColor: "#000000", margin: 10}}
                placeholder="Password"
		        />
            <TouchableOpacity style={{height:40,width:100,backgroundColor:"#008B91",
                                      justifyContent:"center",alignItems:"center",
                                      margin:30,borderRadius:25 }}>
              <Text style={{color:"#ffffff",alignSelf:"center"}}>
                LOGIN
              </Text>
            </TouchableOpacity>              
            </View>
            <View style={{flexDirection:"row", width:"100%", backgroundColor:"#ffffff", height:90, marginVertical:20}}>
                <TouchableOpacity style={{flex:1.1}} onPress={()=> console.log("Profile Pic")}>
                  <Image source={require('./ios/profilepic.png')}
                         style={{height:90,width:90,borderRadius:45}}>
                  </Image>
                </TouchableOpacity>
           
                <View style={{flex:4,justifyContent:"center"}}>
                  <Text style={{marginVertical:2,color:"#0a0a0a",fontWeight:'bold',fontSize:18,marginHorizontal:18}}>
                    Ayush Khade
                  </Text>
                  <Text style={{marginVertical:2,color:"#0a0a0a",fontSize:16,marginHorizontal:20}}>
                    I am In!!!
                  </Text>
                </View>
            </View>
            <Text style={{color:"#ffffff",alignSelf:"center"}}>
              About Us
            </Text>
            
          </View>













  )
}
  














}