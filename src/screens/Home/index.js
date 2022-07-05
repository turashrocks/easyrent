import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from "../../modal/color";

import PostItems from '../../components/postItems';
import HeaderForMobile from '../../components/headerForMobile';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <StatusBar backgroundColor='#e6b706e6' /> 
          <HeaderForMobile/>
          <PostItems/>
        </ScrollView>
    </SafeAreaView>
  );
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


export default Home
