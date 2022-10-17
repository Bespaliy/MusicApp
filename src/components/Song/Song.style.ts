import styled from 'styled-components/native';

export const ButtonPause = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`

export const ButtonResumeTringle = styled.TouchableOpacity`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-top-width: 20px;
  border-right-width: 0;
  border-bottom-width: 20px;
  border-left-width: 30%;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: #1e0039;
  margin: 0 10px;
  transition: all 1s;
`

export const ButtonPauseStick = styled.View`
  width: 15px;
  height: 50px;
  background: #1e0039;
`

export const TitleContainer = styled.View`
  margin-top: 70px;
`

export const Title = styled.Text`
  color: white;
  font-size: 35px;
`

export const MusicBar = styled.View`
  /* background: white; */
  /* height: 2px; */
  width: 80%;
  margin-top: 40px;
  /* position: relative; */
`

export const MusicBarBtn = styled.Pressable`
  background: white;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  position: absolute;
  z-index: 999;
  top: -7px;
`