import { Text, View, TextInput } from 'react-native';
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

const HeaderForMobile =()=>{

    return(
        <>
        <View style={styles.topHeader}>

          <View style={styles.searchWrap}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder='Search in myjobsbd' style={styles.searchInput} multiline={false}/>
          </View>

          <View style={styles.locAndCat}>
            <View style={styles.locStyles}>
              <MaterialIcons name="location-on" size={24} color="black" />
              <Text style={styles.locText}>Location:</Text>
              <Text style={styles.locDynmText}>Dhaka</Text>
            </View>
            <View style={styles.catStyles}>
              <Entypo name="briefcase" size={24} color="black" />
              <Text style={styles.catText}>Category:</Text>
              <Text style={styles.catDynmText}>Accounting</Text>
            </View>
          </View>
        </View>

        </>
    )
}

export default HeaderForMobile