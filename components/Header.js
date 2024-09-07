import { Image, View, Text, StyleSheet, SafeAreaView } from 'react-native';


const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/textlogo.png')} 
          style={styles.textlogo} 
        />
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logo} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ececec',
    flex: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  logo: {
    width: 70,
    height: 70,
  },
  textlogo: {
    height: 60,
  },
});

export default Header;

