import React from "react";
import { Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import Constants from "../utilities/Constants";
import FontLoader from "../utilities/Font";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const FoodRecommendCard = ({ image, text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        height:windowHeight / 6,
        marginTop: 10,
        shadowColor: '#000000',
        borderWidth:1,
        borderColor:Constants.COLOR.second_green,
        borderRadius:7,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 7,
        shadowOpacity: 1.0,
        elevation: 5,
      }}
    >
      <View
        style={{
          width:'100%',
          height:'100%'
        }}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{ height: '100%', width: "100%", borderRadius: 7 }}
        ></Image>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            height: windowHeight / 18,
            width: windowWidth / 2,
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderTopLeftRadius: 7,
            borderBottomRightRadius: 7,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontLoader>
            <Text
              style={{
                position: "absolute",
                fontSize: windowHeight / 28,
                fontFamily: "SemiBold",
                color: Constants.COLOR.green,
              }}
            >
              {text}
            </Text>
          </FontLoader>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodRecommendCard;
