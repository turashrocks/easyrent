import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from "../../modal/color";
import {Text} from "react-native";


const PostDetails = () =>{
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <StatusBar backgroundColor='#e6b706e6' /> 
            <Text>Hello from Post Deails</Text>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: colors.backgroundColor,
      marginTop:20
    }
  });

export default PostDetails