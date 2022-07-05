import { Pressable, View, SafeAreaView, ScrollView, TextInput, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { Amplify, Auth } from 'aws-amplify';
import {withAuthenticator} from "aws-amplify-react-native"
import '../../../node_modules/@aws-amplify/ui-react/dist/styles';
import awsExports from '../../aws-exports';

import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
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
            }}>
            <Entypo name="squared-plus" size={32} color="black" />
            </Pressable>
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
          <View>
            <TextInput placeholder="Job Title" style={styles.inputTextStyles}/>
          </View>
          <View>
            <TextInput placeholder="Job Description" style={styles.inputTextStyles}/>
          </View>
          <View>
            <TextInput placeholder="Salary" style={[styles.inputTextStyles, {width:"50%"}]}/>
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