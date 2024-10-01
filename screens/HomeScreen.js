import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { TimerContext } from '../contexts/TimerContext';
import Header from '../components/Header';
import KitchenCounter from '../components/KitchenCounter';
import TimerButton from '../components/TimerButton';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); 

const HomeScreen = () => {
  const { timers, ovenTimer } = useContext(TimerContext);
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(0); 

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / width);
    setCurrentPage(page);
  };

  const formatOvenTimer = (time) => {
    if (!time) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      {/* Header with App Name and Logo */}
      <Header />

      {/* Swipeable Views */}
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContent} 
      >
        {/* First Page: Kitchen Counter */}
        <View style={styles.page}>
          <KitchenCounter timers={timers} />
        </View>

        {/* Second Page: Oven Timer */}
        <View style={styles.page}>
          <View style={styles.ovenCounter}>
            {/* Oven Buttons inside the oven counter */}
            <View style={styles.ovenButtonsContainer}>
              <View style={styles.ovenButton} />
              <View style={styles.ovenButton} />
              <View style={styles.ovenButton} />
              <View style={styles.ovenButton} />
            </View>

            <View style={styles.innerBorder}>
              {/* Gray Bar */}
              <View style={styles.grayBar} />

              {/* Timer Text */}
              <Text style={styles.timerText}>
                {formatOvenTimer(ovenTimer)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, currentPage === 0 && styles.activeDot]} />
        <View style={[styles.dot, currentPage === 1 && styles.activeDot]} />
      </View>

      {/* Alarms Header */}
      <View style={styles.alarmsHeader}>
        <Text style={styles.alarmsText}>Alarms</Text>
      </View>

      {/* Timer Buttons */}
      <View style={styles.timerButtonsContainer}>
        <View style={styles.row}>
          <TimerButton
            time={timers[0] ? timers[0].minutes * 60 + timers[0].seconds : null}
            plate="Plate 1"
            onPress={() => navigation.navigate('Set Timer', { plate: 1 })}
          />
          <TimerButton
            time={timers[1] ? timers[1].minutes * 60 + timers[1].seconds : null}
            plate="Plate 2"
            onPress={() => navigation.navigate('Set Timer', { plate: 2 })}
          />
        </View>
        <View style={styles.row}>
          <TimerButton
            time={timers[2] ? timers[2].minutes * 60 + timers[2].seconds : null}
            plate="Plate 3"
            onPress={() => navigation.navigate('Set Timer', { plate: 3 })}
          />
          <TimerButton
            time={timers[3] ? timers[3].minutes * 60 + timers[3].seconds : null}
            plate="Plate 4"
            onPress={() => navigation.navigate('Set Timer', { plate: 4 })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
  scrollViewContent: {
    flexGrow: 1, 
  },
  page: {
    width, 
    alignItems: 'center',
  },
  ovenCounter: {
    width: '90%', 
    height: 280,
    padding: 0,
    borderRadius: 30,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#252525',
    borderWidth: 3,
  },
  innerBorder: {
    width: '95%',
    height: '70%', 
    borderRadius: 30,
    backgroundColor: '#252525',
    borderColor: '#d9d9d9',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  grayBar: {
    width: '60%',
    height: 10,
    backgroundColor: '#bfbfbf', 
    borderRadius: 5,
    marginBottom: 70, 
  },
  ovenButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%', 
    height: '20%',
    marginBottom: 10, 
  },
  ovenButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#252525',
  },
  timerText: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d9d9d9',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333', 
  },
  alarmsHeader: {
    marginVertical: 25,
    alignItems: 'flex-start',
  },
  alarmsText: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: 26,
    marginHorizontal:20
  },
  timerButtonsContainer: {
    marginTop: 30,
    marginHorizontal:20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default HomeScreen;







