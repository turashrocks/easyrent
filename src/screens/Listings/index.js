import React, { useState, useEffect } from "react";
import { Pressable, View, SafeAreaView, ScrollView, TextInput, StyleSheet, Alert,
  Dimensions, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import styles from './styles';

import { Amplify, Auth } from 'aws-amplify';
import {withAuthenticator} from "aws-amplify-react-native"
import '../../../node_modules/@aws-amplify/ui-react/dist/styles';
import awsExports from '../../aws-exports';

import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { colors } from "../../modal/color";
import {Text} from "react-native";

// function Listings({ signOut, user }) {
function Listings({}) {
  // Amplify.configure(awsExports);
  // Auth.currentAuthenticatedUser()
  //   .then((user)=>{
  //     console.log(user)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //     throw err;
  //   })
  const windowWidth = Number(Dimensions.get("window").width);
  const navigation = useNavigation();
  const [imageData, setImageData] = useState([]);
  const [category, setCategory] = useState({ catID: 0, catName: "Category" });
  const [Location, setLocation] = useState({ locID: 0, locName: "Location" });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rentValue, setRentValue] = useState("");
  const [userID, setUserID] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [postSuccess, setPostSuccess] = useState("");
  const [postProcessing, setPostProcessing] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImageData(result.selected);
    }
  };
  useEffect(() => {
    if (postSuccess !== "") {
      setPostProcessing(false);
      Alert.alert("Success", postSuccess, [
        {
          text: "Ok",
          onPress: () => navigation.navigate("Home", { screen: "Explore" }),
        },
      ]);
    }
  }, [postSuccess]);
  Auth.currentAuthenticatedUser()
    .then((user) => {
      // console.log("user id is: ", user.attributes.sub);
      setUserID(user.attributes.sub);
      setUserEmail(user.attributes.email);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  const route = useRoute();
  useEffect(() => {
    if (!route.params) {
      console.log("There is no data in route");
    } else {
      if (route.params.imageData !== undefined) {
        // console.log(route.params.imageData);
        setImageData(route.params.imageData);
      } else if (route.params.catID !== undefined) {
        setCategory(route.params);
      } else if (route.params.locID !== undefined) {
        setLocation(route.params);
      }
    }
  });

  const imageAllUrl = [];
  const storeToDB = async () => {
    setPostProcessing(true);
    imageData &&
      imageData.map(async (compnent, index) => {
        const imageUrl = compnent.uri;
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        if (Platform.OS === "web") {
          const contentType = blob.type;
          const extension = contentType.split("/")[1];
          var key = `${uuidv4()}.${extension}`;
        } else {
          const urlParts = imageUrl.split(".");
          const extension = urlParts[urlParts.length - 1];
          var key = `${uuidv4()}.${extension}`;
        }

        imageAllUrl.push({ imageUri: key });
        await Storage.put(key, blob);

        if (imageData.length == index + 1) {
          const postData = {
            title: title,
            categoryName: category.catName,
            categoryID: category.catID,
            description: description,
            images: JSON.stringify(imageAllUrl),
            locationID: Location.locID,
            locationName: Location.locName,
            owner: userEmail,
            rentValue: rentValue,
            userID: userID,
            commonID: "1",
          };

          await API.graphql({
            query: createListing,
            variables: { input: postData },
            authMode: "AMAZON_COGNITO_USER_POOLS",
          });
          if (Platform.OS === "web") {
            setPostProcessing(false);
            navigation.navigate("Home", { screen: "Explore" });
          } else {
            setPostProcessing(false);
            setPostSuccess("Your adv have successfully published.");
          }
        }
      });
  };

    return (
      <>
       <SafeAreaView style={inlineStyles.container}>
        <ScrollView style={inlineStyles.scrollView}>

        
        <StatusBar backgroundColor='#e6b706e6' /> 
        {/* <h1>Hello {user.username}</h1> */}
        {/* <button onClick={signOut}>Sign out</button> */}
        <View style={{margin: 10}}>
          <View>
            <Text>Upload Company Logo</Text>
            <Pressable style={{
              backgroundColor: colors.white,
              display: 'flex',
              justifyContent: 'center',
              marginVertical:20,
              alignItems:'center',
              height: 150,
              width:150,
              borderWidth:1,
              borderStyle:'dashed',
              borderRadius:30
            }}
            onPress={() => {
              if (Platform.OS === "web") {
                pickImage();
              } else {
                navigation.navigate("SelectPhoto");
              }
            }}>
              <Entypo name="squared-plus" size={32} color="black" />
            </Pressable>
            <View>
              <ScrollView horizontal={true}>
                {imageData &&
                  imageData.map((component, index) => (
                    <Image
                      key={component.id}
                      source={{ uri: component.uri }}
                      style={{
                        height: 100,
                        width: 100,
                        marginBottom: 20,
                        marginTop: -5,
                        marginRight: 5,
                      }}
                    />
                  ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.catStyle}>
            <Entypo name="briefcase" size={24} color="black" />
            <Text style={{fontSize:16}}>Category</Text>
            <Entypo name="triangle-right" size={20} color="black" />          
          </View>
          <View style={styles.catStyle}>
            <MaterialIcons name="location-on" size={24} color="black" />
            <Text style={{fontSize:16}}>Location</Text>
            <Entypo name="triangle-right" size={20} color="black" />    
          </View>
          <View style={styles.inputTextStyles}>
            <MaterialIcons name="title" size={24} color="black" />
            <TextInput placeholder="Add Job Title"  style={{marginLeft:10}}/>
          </View>
          <View style={styles.inputTextStyles}>
            <MaterialIcons name="description" size={24} color="black" />
            <TextInput placeholder="Job Description" style={{marginLeft:10}}/>
          </View>
          <View style={[styles.inputTextStyles, {width:"50%"}]}>
            <FontAwesome name="dollar" size={24} color="black" />
            <TextInput placeholder="Salary" style={{marginLeft:20}}/>
          </View>
          <View style={styles.postButton}>
            <Text style={styles.postText}>POST JOB</Text>
          </View>
        </View>
        </ScrollView>
        </SafeAreaView>
      </>
    )
}

const inlineStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: colors.backgroundColor,
      marginTop:20
    }
  });

export default withAuthenticator(Listings)