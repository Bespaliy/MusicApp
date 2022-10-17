import { Image, StyleSheet, View } from 'react-native';
import { Audio, AVPlaybackSource } from 'expo-av';
import { Song } from '../../common/type/song.type';
import {
  ButtonPause,
  ButtonPauseStick,
  ButtonResumeTringle,
  Title,
  TitleContainer,
  MusicBar,
  MusicBarBtn
} from './Song.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect, useRef, useCallback } from 'react';
import {Slider} from '@miblanchard/react-native-slider';

const SongItem = (props: Song) => {
  const [isPaused, setTogglePaused] = useState(true);
  const [duration, setDuration] = useState(0);
  const [timerNumber, setTimerNumber] = useState(0);
  const { title, artwork, artist } = props;

  const sound = useRef(new Audio.Sound());
  
  useEffect(() => {
    loadAudio();
  }, []);

  const playAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
          setTogglePaused(!isPaused);
          const interval = Math.fround((((result.positionMillis/1000) * 100)/(result.durationMillis/1000))/100);
          setDuration(interval);
          const num = setInterval(async () => {
            const { positionMillis, playableDurationMillis } = await sound.current.getStatusAsync();
            const interval = Math.fround((((positionMillis/1000) * 100)/(playableDurationMillis/1000))/100);
            setDuration(interval);
          }, 500);
          setTimerNumber(num);
        }
      }
    } catch (error) {
      console.log(error);
     }
  };

  const pauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          clearInterval(timerNumber);
          sound.current.pauseAsync();
          setTogglePaused(!isPaused);
        }
      }
    } catch (error) {
      console.log(error);
     }
  };

  const loadAudio = async () => {
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(require('../../../skriptonit_-_belmejn_(z2.fm).mp3'));
        if (result.isLoaded === false) {
          console.log('Error in Loading Audio');
        }

      } catch (error) {
        console.error(error);
      }
    };
  }

  return (
    <View style={styles.songMain}>
      <Image
        resizeMode="cover"
        style={styles.songImg}
        source={{ uri: artwork }} />
      <TitleContainer>
        <Title>{artist} - {title}</Title>
      </TitleContainer>
      <View style={styles.songBar}>
        <Icon name="backward" style={styles.ward} size={50} />
        <ButtonPause onPress={pauseAudio}>
          {isPaused ||
            <>
              <ButtonPauseStick />
              <ButtonPauseStick />
            </>
          }
          {!isPaused || <ButtonResumeTringle onPress={playAudio} />}
        </ButtonPause>
        <Icon name="forward" style={styles.ward} size={50} />
      </View>
      <MusicBar>
        {/* <MusicBarBtn></MusicBarBtn> */}
        <Slider value={duration} />
      </MusicBar>
    </View>
  )
}

const styles = StyleSheet.create({
  songMain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1e0039',
  },
  songImg: {
    width: 350,
    height: 350,
    borderRadius: 200,
    marginTop: 100,
  },
  songBar: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00392ff',
    marginTop: 70
  },
  ward: {
    color: 'white',
  },
});

export default SongItem;