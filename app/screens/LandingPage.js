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


    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    // :${String(milliseconds).padStart(2, '0')}
  };


  return (
    <View style={{ flexDirection: 'column' }}>
      {/* <View style={{
        height: '10%',
        backgroundColor: 'powderblue',
        justifyContent: 'center',
        alignItems: 'center'
      }}> */}
      {/* </View> */}
      <View style={{
        height: '90%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={styles.showTime}>{formatTime(elapsedTime)}</Text>
      </View>
      <View style={{
        height: '10%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
      }}>


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
    fontSize: 48,
    color: '#fff'
  },

  iconStyle1: {
    fontSize: 48,
    color: '#fff'
  },
  showTime: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 220,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    color: '#4dec1c',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  }
})

