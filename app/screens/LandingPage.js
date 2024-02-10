import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const LandingPage = () => {
  const [startTime, setStartTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setElapsedTime(performance.now() - startTime);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, startTime]);


  const startWatch = () => {
    setRunning(true);
    setStartTime(performance.now() - elapsedTime);
  };

  const stopWatch = () => {
    setRunning(false);
  };

  const resetWatch = () => {
    setElapsedTime(0);
    setRunning(false);
  };

  const formatTime = (timeInMilliseconds) => {
    let hours = Math.floor(timeInMilliseconds / (1000 * 60 * 60));
    let minutes = Math.floor((timeInMilliseconds / (1000 * 60)) % 60);
    let seconds = Math.floor((timeInMilliseconds / 1000) % 60);
    let milliseconds = Math.floor((timeInMilliseconds % 1000) / 10);


    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };


  return (
    <View style={styles.container}>
      <View style={styles.background}>

        <Text style={styles.showTime}>{formatTime(elapsedTime)}</Text>
        <View style={styles.btns}>
          <TouchableOpacity
            title="Reset"
            onPress={resetWatch}
          >
            <FontAwesomeIcon name="undo" style={styles.iconStyle} />
          </TouchableOpacity>

          {running ? (
            <TouchableOpacity
              title="Pause"
              onPress={stopWatch}
            >
              <FontAwesomeIcon name="pause-circle" style={styles.iconStyle} />
            </TouchableOpacity>

          ) : (
            <TouchableOpacity
              title="Start"
              onPress={startWatch}
            >
              <FontAwesomeIcon name="play-circle" style={styles.iconStyle1} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  iconStyle: {
    fontSize: 58,
    color: '#fff'
  },

  iconStyle1: {
    fontSize: 58,
    color: '#fff'
  },
  showTime: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 70,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    color: '#4dec1c',
    // backgroundColor: 'red'
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    gap: 50,
    // backgroundColor: 'blue'
  }
})

