import { StyleSheet} from 'react-native';
import { colors } from "../../modal/color";

const styles = StyleSheet.create({
    topHeader:{
        paddingVertical:10,
        alignItems:'center', 
        backgroundColor:colors.primaryColor, 
        marginBottom: 10,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        alignItems:'center'
    },
    searchWrap:{ 
        backgroundColor: 'white', 
        flexDirection:'row', 
        justifyContent:'space-around', 
        margin:10, 
        padding:10
    },
    searchInput:{width:'90%', marginLeft:5, zIndex:9},
    locAndCat:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:'100%', 
        paddingVertical:5,
        paddingHorizontal:15
    },
    locStyles:{flexDirection:'row'},
    catStyles:{flexDirection:'row', marginLeft: 5},
    locText:{ marginLeft:5},
    catText:{ marginLeft:5},
    locDynmText:{fontWeight:'bold'},
    catDynmText:{fontWeight:'bold', marginLeft:5}
})

export default styles;