import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
  AsyncStorage,
} from "react-native";
import FontLoader from "../utilities/Font";
import TextInputDesign from "../components/TextInputDesign";
import Constants from "../utilities/Constants";
import Axios from "axios";
import AppLoading from "./AppLoading";

const windowHeight = Dimensions.get("window").height;

function Login({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const handleLogin = () => {
    console.log(username, password);
    Axios.post(
      "https://running-app-be-0-git-main-voquocminh1209.vercel.app/api/users/login",
      {
        username,
        password,
      }
    )
      .then((res) => {
        _storeData("authToken", res.data);
        _storeData("username", username);
        _storeData("isUsed", "1");
        console.log(res.data, username, 1);
        navigation.navigate("BottomTabNavigator");
      })
      .catch((err) => {
        Alert.alert("Oops!", "Tài khoản hoặc mật khẩu sai rồi!!!");
        console.log(err);
      });
  };

  //run when navigate to this screen
  const unsubscribe = navigation.addListener("didFocus", () => {
    setTimeout(() => {
      console.log("login loading");
      setIsLoading(false);
    }, 1000);
    console.log("get details");
  });

  const _storeData = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: Constants.COLOR.green,
      }}
    >
      <ActivityIndicator size={50} color={Constants.COLOR.white} />
    </View>
  ) : (
    <View>
      <KeyboardAvoidingView
        style={{
          position: "absolute",
        }}
      >
        <Text
          style={{
            fontFamily: "SemiBold",
            fontSize: 70,
            color: Constants.COLOR.white,
            marginLeft: 12,
            marginTop: 92,
          }}
        >
          SIGN IN
        </Text>
      </KeyboardAvoidingView>

      <View
        style={{
          backgroundColor: Constants.COLOR.green,
          height: "100%",
          width: "100%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <KeyboardAvoidingView>
          <TextInputDesign
            placeholder="Username"
            iconName="user-alt"
            isSecured={false}
            onChangeText={(text) => setUsername(text)}
          />

          <TextInputDesign
            placeholder="Password"
            iconName="key"
            isSecured={true}
            onChangeText={(text) => setPassword(text)}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: Constants.COLOR.white,
            elevation: 8,
            alignItems: "center",
            borderRadius: 25,
            marginHorizontal: 25,
            justifyContent: "center",
            paddingVertical: 4,
            marginTop: 20,
          }}
        >
          <FontLoader>
            <Text
              style={{
                color: Constants.COLOR.green,
                fontSize: 35,
                fontFamily: "SemiRegular",
                alignSelf: "center",
              }}
            >
              Sign In
            </Text>
          </FontLoader>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontLoader>
            <Text
              style={{
                fontSize: 21,
                fontFamily: "SemiRegular",
              }}
            >
              Don't have account?{" "}
            </Text>
          </FontLoader>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: "SemiRegular",
                color: Constants.COLOR.white,
              }}
            >
              Sign up now!{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
