import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useNavigation } from '@react-navigation/native';

const VideoScreen = () => {
  const videoRef = useRef(null);
  const { portrait } = useDeviceOrientation();
  const [showText, setShowText] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.loadAsync(
            require('../assets/start.mp4'),
            {},
            false
          );

          videoRef.current.setOnPlaybackStatusUpdate((status) => {
            if (status.didJustFinish) {
              setShowText(true);
              navigation.navigate('HomeScreen'); // Navigate to HomeScreen after video
            }
          });

          await videoRef.current.playAsync();
        }
      } catch (error) {
        console.error('Error playing video:', error.message);
      }
    };

    playVideo();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {showText ? (
        // Handle the transition to the next screen
        null
      ) : (
        <Video
          ref={videoRef}
          style={[
            styles.backgroundVideo,
            portrait ? styles.portrait : styles.landscape,
          ]}
          useNativeControls={false}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
  }
});

export default VideoScreen;
