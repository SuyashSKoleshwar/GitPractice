import React,{Component} from 'react';
import {
  Image,
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';

export default class App extends Component{
render() {

  return(

          <View style={{flex:1, justifyContent:"flex-end"}}>
             <Image source={require('./ios/nu2.jpg')}  
            style={{width:'100%', height: '30%', margin:0, alignSelf:"center",position:"absolute",top:0,left:0}}>
            </Image>

            <View style={{height:50,width:"100%",backgroundColor:"#520303",top:"30%",position:"absolute",justifyContent:"center"}}>
            <Text style={{alignSelf:"center",color:"#fcfcfc"}}>
                            Northeastern University
            </Text>


            </View>
            <ScrollView style={{height:100,position:"absolute",top:"38%",backgroundColor:"red"}}
                        horizontal={false}>

            <Image source={require('./ios/Indiaflag.png')}  
            style={{width:140, height: 100, margin:0, alignSelf:"center"}}>
            </Image> 

            <Image source={require('./ios/suyash.jpg')}  
            style={{width:140, height: 100, margin:0, alignSelf:"center"}}>
            </Image>

            <Image source={require('./ios/ayush.jpg')}  
            style={{width:140, height: 100, margin:0, alignSelf:"center"}}>
            </Image>

            <Image source={require('./ios/yash1.jpg')}  
            style={{width:140, height: 100, margin:0, alignSelf:"center"}}>
            </Image>

            

            
                
                 </ScrollView>

                 <Image source={require('./ios/nulogo2.png')}  
            style={{width:'32%', height: '15%', margin:0, alignSelf:"center",position:"absolute",top:"37%",left:"34%"}}>
                 </Image>


                 <ScrollView style={{height:100,position:"absolute",top:"38%",right:"0%"}}
                        horizontal={false}>

            <Image source={require('./ios/usflag.jpg')}  
            style={{width:140, height: 100, margin:0, alignSelf:"center"}}>
            </Image> 

            <Image source={require('./ios/c4.jpg')}  
            style={{width:140, height: 100, margin:0, alignSelf:"center"}}>
            </Image>

            <Image source={require('./ios/c2.png')}  
            style={{width:140, height: 100, margin:0, alignSelf:"center"}}>
            </Image>

            <Image source={require('./ios/c3.jpg')}  
            style={{width:140, height: 100, margin:0, alignSelf:"center"}}>
            </Image>

           

           
                 </ScrollView>


                <View style={{flexDirection:"row",padding:20,justifyContent:"center",paddingEnd:10}}>
                    <View style={{flex:1,justifyContent:"center",borderWidth: 1,margin: 10,borderLeftWidth:10}}>
                         <Text style={{alignSelf:"center"}}>
                            Candidate Name :
                        </Text>
                    </View>
                    <View style={{flex:3}}>
                        <TextInput style={{width:"95%", height: 50,borderWidth: 1, borderColor: "#000000", margin: 10}}
                        placeholder= "Name"/>                            
                    </View>

                </View>

                <View style={{flexDirection:"row",padding:20,justifyContent:"center",paddingEnd:10}}>
                    <View style={{flex:1,justifyContent:"center",borderWidth: 1,margin: 10,borderLeftWidth:10}}>
                        <Text style={{alignSelf:"center"}}>
                            Candidate ID :
                        </Text>
                    </View>
                    <View style={{flex:3}}>
                        <TextInput style={{width:"95%", height: 50,borderWidth: 1, borderColor: "#000000", margin: 10}}
                        placeholder= "Address"/>                            
                        
                    </View>

                </View>

                <View style={{flexDirection:"row",padding:20,justifyContent:"center",paddingEnd:10}}>
                    <View style={{flex:1,justifyContent:"center",borderWidth: 1,margin: 10,borderLeftWidth:10}}>
                        <Text style={{alignSelf:"center"}}>
                            Contact No :
                        </Text>
                    </View>
                    <View style={{flex:3}}>
                        <TextInput style={{width:"95%", height: 50,borderWidth: 1, borderColor: "#000000", margin: 10}}
                        placeholder= "Contact No"
                         />                            
                        
                    </View>

                </View>
                <TouchableOpacity style={{height:40,width:100,backgroundColor:"#000000",
                                      justifyContent:"center",alignItems:"center",
                                      margin:10,borderRadius:25,alignSelf:"center" }}>
                        <Text style={{color:"#ffffff",alignSelf:"center"}}>
                            LOGIN
                        </Text>
                </TouchableOpacity>
                
          </View>

  )
}
  


}