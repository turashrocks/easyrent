import { StyleSheet } from "react-native";
import { colors } from "../../modal/color";
const styles = StyleSheet.create({
  catStyle:{
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingVertical:10,
    backgroundColor:colors.white,
    borderRadius:30,
    marginBottom:20,
    paddingRight:10,
    paddingLeft:20
  },   
  inputTextStyles:{
    backgroundColor: colors.white,
    paddingVertical:10,
    borderRadius:30,
    paddingRight:10,
    paddingLeft:20,
    marginBottom:20
  },
  postButton:{
    backgroundColor: colors.black,
    alignItems:'center',
    paddingLeft:20,
    paddingVertical:10, 
    fontWeight: 'bold',
    marginTop:10,
    borderRadius:30,
    elevation:5
  },
  postText:{
    color: colors.primaryColor,
    fontWeight:'bold'
  }
});

export default styles;
