import React, {useState, useEffect} from 'react';
import {Text, Dimensions, TouchableOpacity , ImageBackground, AsyncStorage,View} from 'react-native';
import FontLoader from '../utilities/Font';
import Constants from '../utilities/Constants';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function Welcome({navigation}) {

    const  _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem("isUsed");
          console.log(value); // log 1
          if (value == 1) {
            navigation.navigate('Login');
          }
        } catch (error) {
            
        }
      };
      
    useEffect(() => {
        let isMounted = true;
        console.log("welcome")
        _retrieveData();
        return () => { isMounted = false };
    }, []);
    
    return (
        <ImageBackground source={require('../images/welcome1.jpg')}
            style={{width:"100%",height:"100%"}}>
            <FontLoader>
                <Text 
                    style={{color: Constants.COLOR.white,
                    fontSize: windowHeight/10, 
                    alignSelf: 'center',
                    fontFamily: 'SemiBold',
                    marginTop: 80
                    }}>
                    Welcome!
                </Text>
            </FontLoader>
            <FontLoader>
                    <Text
                        style={{color: Constants.COLOR.white,
                        fontSize: 16,
                        fontFamily: 'SemiRegular',
                        alignSelf: 'center',
                        textAlign:'center',
                        marginHorizontal:20
                    }}
                    >Don't wait for the perfect moment, make it happen now by opening the app and starting your run</Text>
                </FontLoader> 
            <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={{backgroundColor: Constants.COLOR.green,
                elevation: 8,
                height: 70,
                borderRadius: 50,
                paddingVertical: 10,
                position:'absolute',
                bottom:50,
                width:windowWidth-120,
                right:60,
                flexDirection:'row',
                alignItems:'center'
                }}>
                    <View style={{
                        backgroundColor:'white',
                        height:60,
                        width:60,
                        borderRadius:30,
                        alignItems:'center',
                        justifyContent:'center',
                        marginLeft:5,
                        marginRight:20
                    }}>
                        <MaterialCommunityIcons name="transfer-right" size={28} color={Constants.COLOR.green} />
                    </View>
                <FontLoader>
                    <Text
                        style={{color: Constants.COLOR.white,
                        fontSize: 22,
                        fontWeight:'bold',
                        fontFamily: 'SemiRegular',
                        alignSelf: 'center',}}
                    >Get Started</Text>
                </FontLoader>  
            </TouchableOpacity>          
        </ImageBackground>
    )
}

export default Welcome