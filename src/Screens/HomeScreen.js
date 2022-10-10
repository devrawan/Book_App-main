import React from 'react';
import {
  ImageBackground,
    Text,
    Pressable,
    View,
    FlatList,
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
  import {images} from './../../constants/index';
  import { useNavigation } from '@react-navigation/native';
import Circle from 'react-native-svg'

const Data =[
    {key: 0, title: 'متطلبات تأسيس منشاة مقاولات',uri :images.group3},
    {key: 1, title: 'التعريف بقطاع المقاولات',uri :images.not},
    {key: 2, title: 'قواعد وإجراءات أساسية بشأن التعاقد',uri :images.business},
    {key: 3, title: 'تراخيص مزاولة نشاط المقاولات',uri :images.filee},
    {key: 4, title: 'منصات الكترونية في خدمة المقاول',uri :images.contract},
    {key: 5, title: 'الجهات المختصة ذات العلاقات  ',uri :images.filee},
    {key: 6, title: 'آليات تسليم مشاريع المقاولات',uri :images.business},
    {key: 7, title: 'أنظمة عقود المقاولات',uri :images.bank},
    {key: 8, title: 'انظمة عقود المقاولات  ',uri :images.group3},

    {key: 9, title: 'الجانب الاجتماعي والوطني',uri :images.not},
    {key: 10, title: 'لجنة المقاولات رسالتها – إنجازاتها ',uri :images.social},
    {key: 11, title:  'آليات تسليم مشاريع المقاولات' ,uri :images.contract},
 
]
//Cairo-SemiBold

const Hed =()=>{
  return (
    <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingHorizontal:20,paddingVertical:5}}>
    <Text style={{fontSize:20,color:'black',fontFamily:'Cairo-Bold'}}> الفهرس </Text>
    </View>

  )
}

         
  
const HomeScreen  = () => {
    const {height, width} = useWindowDimensions();
const {navigate} = useNavigation();

    const renderItem = ({ item } ) => 
    (<Pressable 
      onPress={() => {
        navigate('Details', { item })
          }}
      key={item.key} 
      style={{
    marginHorizontal:5,
       alignSelf:'flex-end',
         marginBottom:15,
          backgroundColor:"white",
          height:160,
          width:'45%',justifyContent:'center',alignItems:'center',paddingHorizontal:8,paddingVertical:10,borderRadius:12,shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 7}}>
           <View style={{
            // backgroundColor:'gray',
           height:"50%",width:"100%",justifyContent:'center',justifyContent:'center',alignItems:'center'}}>
  
            <View style={{marginBottom:7,borderWidth:1,borderColor:'#CED4E3',width:70,height:70,justifyContent:'center',alignItems:'center',borderRadius:50}}> 
                <Image source={item.uri} style={{backgroundColor:'white',width:40,height:40,resizeMode:'contain'}}/>
           </View>
          </View>
           <Text style={{textAlign:'center',fontSize:16,fontFamily:"Cairo-SemiBold"}}>{item.title}</Text>
         
      
           </Pressable>
    ); 




        return (
            <View style={[styles.container,{ 
              // backgroundColor:'black', 
              width:width,height:height,
      
              }]}>

        {/* <ImageBackground source={images.image} style={{width:width,height:140,justifyContent:"flex-end",alignItems:'center',paddingBottom:30}}>
        <Text style={{fontSize:25 ,color:'white',alignSelf:'center',fontFamily:'Cairo-Bold'}}>المقاولات  </Text>
        </ImageBackground> */}
  <View style={{
          height : 180,
              width : "100%",
              transform : [ { scaleX : 2} ],
              borderBottomStartRadius : 300,
              borderBottomEndRadius : 300,
              overflow : 'hidden',
               zIndex:1,
              position:'absolute',
               top:-20,
               marginBottom:10
               
              }}>
            <View style={{ 
          flex:1,
              // zIndex:0,
              transform : [ { scaleX : 0.7 } ],
              backgroundColor : '#7380a1',
              alignItems : 'center',
              justifyContent : 'flex-end'
              }}>
        <Text style={{fontSize:25 ,color:'white',alignSelf:'center',fontFamily:'Cairo-Bold',marginBottom:30}}>المقاولات  </Text>
            </View>
        </View>
  <FlatList
       centerContent= {true}
       style={{     paddingBottom: 10,paddingTop:160 ,width:width,paddingHorizontal:10}}
        numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                    ListHeaderComponent={<Hed/>}
                />
      

     




             </View>
        )}

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#E8E8E8",
      marginTop: 0,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:10,
      // paddingBottom:30
    
    }})