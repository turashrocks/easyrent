import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import react from "react";

const PostItems = (props) => {
  const navigation = useNavigation();
  const singlePost = props.post;
  // const [images, setimages] = useState(JSON.parse(singlePost.images));
  // // console.log(singlePost);
  return (
  //   <Pressable
  //     onPress={() => {
  //       navigation.navigate("PostDetails", {
  //         postInfo: singlePost,
  //       });
  //     }}
  //     style={styles.container}>
  //     <View style={styles.postWrap}>
  //       <Image
  //         source={{
  //           uri:
  //             "https://dnezpuwttqdfg.cloudfront.net/fit-in/400x400/public/" +
  //             images[0].imageUri,
  //         }}
  //         style={styles.postImage}></Image>
  //       <View style={styles.postContentWrap}>
  //         <View>
  //           <Text style={styles.postTitle}>{singlePost.title}</Text>
  //           <Text style={styles.postPlace}>{singlePost.locationName}</Text>
  //         </View>
  //         <Text style={styles.postValue}>${singlePost.rentValue} / Day</Text>
  //       </View>
  //     </View>
  //   </Pressable>
  // );
  <>
    <Pressable 
      onPress={() => {
        navigation.navigate("PostDetails", {
          postInfo: singlePost,
        });
      }}
      style={styles.jobPost}>
      <View style={styles.jobInfo}>
        <Text style={styles.jobCompany}>Unilever Bangladesh </Text>
        <Text style={styles.jobTitle}>Senior Fullstack Developer </Text>
        <Text style={styles.jobSalary}>Salary: $5000</Text>
      </View>
      <Image 
        source={{uri: "https://picsum.photos/id/1031/200/200"}} 
        style={styles.postImage}></Image>
    </Pressable>

    <Pressable style={styles.jobPost}>
      <View style={styles.jobInfo}>
        <Text style={styles.jobCompany}>Grameenphone Ltd </Text>
        <Text style={styles.jobTitle}>Senior Marketing Executive </Text>
        <Text style={styles.jobSalary}>Salary: $5000</Text>
      </View>
    <Image 
      source={{uri: "https://picsum.photos/id/1032/200/200"}} 
      style={styles.postImage}></Image>
    </Pressable>

    <Pressable style={styles.jobPost}>
      <View style={styles.jobInfo}>
        <Text style={styles.jobCompany}>Standard Chartered </Text>
        <Text style={styles.jobTitle}>Human Resource Manager </Text>
        <Text style={styles.jobSalary}>Salary: $5000</Text>
      </View>
      <Image 
        source={{uri: "https://picsum.photos/id/1033/200/200"}} 
        style={styles.postImage}></Image>
    </Pressable>
  </>
  )
};

export default PostItems;
