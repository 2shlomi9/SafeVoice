//https://github.com/2shlomi9/SafeVoice.gitimport React, { useRef, useState, useEffect } from 'react';
import './App.css';

import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';
import {useDeviceOrientation} from '@react-native-community/hooks';



export default function App() {
  const {protrait,landscape} = useDeviceOrientation();
  const videoRef = useRef(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        await videoRef.current.loadAsync(
          require('./assets/start.mp4'), // Correctly specify the video source
          {},
          false
        );

        videoRef.current.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            // Video has finished playing
            setShowText(true);
          }
        });

        await videoRef.current.playAsync();
      }
    };

    playVideo();
  }, []);

  return (
    <View style={styles.container}>
      {showText ? (
        <Text>Hello my dear application</Text>
      ) : (
        <Video
          ref={videoRef}
          style={styles.backgroundVideo}
          useNativeControls={false} // Set to true if you want to show video controls
          resizeMode="cover"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});
