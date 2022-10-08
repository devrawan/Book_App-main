import React ,{useState ,useEffect }from 'react';
import {
    Text,
    Pressable,
    View,
    Keyboard,
    SafeAreaView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    useWindowDimensions,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    Image
  } from 'react-native';
import { Button } from 'react-native-share';

import {images} from './../../constants/index'

const HelloScreen=({navigation}) => {
    const {height, width} = useWindowDimensions();
    const [texActive,setTexActive]=useState(0); 
    const kvArray = [
        { key: 1, value: images.group},
        { key: 2, value: images.card1}
          ];

          onchange =(nativeEvent)=>{
            if(nativeEvent){
                const slide = Math.ceil(nativeEvent.contentOffset.x/ nativeEvent.layoutMeasurement.width);
                if(slide != texActive){
            setTexActive(slide)
                }
            }
            }
            useEffect(() => {
              setTimeout(() => {
                navigation.navigate('Tabbs')

                // navigation.replace('Tabbs')
                // navigation.navigate('AboutUsScreen')

              }, 4000);
            });

    return( 
      <SafeAreaView style={[styles.container,{width:width,height:height}]}>
        <View style={{ width:width,
        height:"60%"
        // ,backgroundColor:'white'
        }}>
                <ScrollView
              
                onScroll={({nativeEvent})=> onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                >
                    {kvArray.map((item,index)=> 
                    <View key={index} style={{paddingHorizontal:25,width:width,flexDirection:'row',justifyContent:'center',
                    // backgroundColor:'blue',
                    height:"100%"}}>
                    {/* <Text style={Styles.textStyle} key={index}> {item.value}</Text> */}
                    <Image source={item.value } style ={{width:300,height:300,resizeMode:'contain'}}/>
                    </View>
                    )}
               
                   
                </ScrollView>

                <View style={styles.wrapDot}>
                {kvArray.map((item,index)=> 
                <Text key={index} style={texActive == index ? styles.dotAct :styles.dot}> ● </Text>)}
                </View>

            </View>
    
    
    {/* <Button onPress={()=>{navigation.navigate('HomeScreen')}}/> */}
    
    
    
     </SafeAreaView>






        )}
export default HelloScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor:"pink",
      marginTop: StatusBar.currentHeight,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:20
    
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
flexDirection:'row',
alignSelf:'center',
height:"20%",
// backgroundColor:'red',
width:'100%',
justifyContent:'center',
alignItems:'center'

    },
    dotAct:{
        margin:3,
        color:'#3C67AF'
    },
    dot:{
        margin :3,
        color:'white'
    }





})