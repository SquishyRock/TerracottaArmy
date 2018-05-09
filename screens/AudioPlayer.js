import React, { Component } from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
	Platform,
} from 'react-native';
import Slider from 'react-native-slider';
import FullAudioPlayer from './FullAudioPlayer';
import { Asset, Audio, Font } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import {audioContent} from '../assets/englishContent';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const BACKGROUND_COLOR = '#FFFFFF';
const DISABLED_OPACITY = 0.5;
const FONT_SIZE = 14;
const LOADING_STRING = 'Loading...';
const BUFFERING_STRING = 'Buffering...';
const RATE_SCALE = 3.0;

export default class AudioPlayer extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.index = 0;
		this.isSeeking = false;
		this.shouldPlayAtEndOfSeek = false;
		this.playbackInstance = null;
		this.state = {
			playbackInstanceName: LOADING_STRING,
			playbackInstancePosition: null,
			playbackInstanceDuration: null,
			shouldPlay: false,
			isPlaying: false,
			isBuffering: false,
			isLoading: true,
			volume: 1.0,
			rate: 1.0,
		};
	}

	componentDidMount() {
		Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
			interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
			playsInSilentModeIOS: true,
			shouldDuckAndroid: true,
			interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
		});
		this._loadNewPlaybackInstance(false);
	}

	componentWillUnmount() {
		this.playbackInstance.unloadAsync()
	}

	async _loadNewPlaybackInstance(playing) {
		if (this.playbackInstance != null) {
			await this.playbackInstance.unloadAsync();
			this.playbackInstance.setOnPlaybackStatusUpdate(null);
			this.playbackInstance = null;
		}

		const source = audioContent[this.index].media;
		const initialStatus = {
			shouldPlay: playing,
		};
		const { sound, status } = await Audio.Sound.create(
			source,
			initialStatus,
			this._onPlaybackStatusUpdate
		);
		this.playbackInstance = sound;

		this._updateScreenForLoading(false);
	}

	_updateScreenForLoading(isLoading) {
		if (isLoading) {
			this.setState({
				isPlaying: false,
				playbackInstanceName: LOADING_STRING,
				playbackInstanceDuration: null,
				playbackInstancePosition: null,
				isLoading: true,
			});
		} else {
			this.setState({
				playbackInstanceName: audioContent[this.index].name,
				isLoading: false,
			});
		}
	}

	_onPlaybackStatusUpdate = status => {
		if (status.isLoaded) {
			this.setState({
				playbackInstancePosition: status.positionMillis,
				playbackInstanceDuration: status.durationMillis,
				shouldPlay: status.shouldPlay,
				isPlaying: status.isPlaying,
				isBuffering: status.isBuffering,
			});
		} else {
			if (status.error) {
				console.log(`FATAL PLAYER ERROR: ${status.error}`);
			}
		}
	};


	_advanceIndex(forward) {
		this.index =
			(this.index + (forward ? 1 : audioContent.length - 1)) %
			audioContent.length;
	}

	async _updatePlaybackInstanceForIndex(playing) {
		this._updateScreenForLoading(true);

		this._loadNewPlaybackInstance(playing);
	}

	_onForwardPressed = () => {
		if (this.playbackInstance != null) {
			this._advanceIndex(true);
			this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
		}
	};

	_onBackPressed = () => {
		if (this.playbackInstance != null) {
			this._advanceIndex(false);
			this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
		}
	};

	_onPlayPausePressed = () => {
		if (this.playbackInstance != null) {
			if (this.state.isPlaying) {
				this.playbackInstance.pauseAsync();
			} else {
				this.playbackInstance.playAsync();
			}
		}
	};

	_onSeekSliderValueChange = value => {
		if (this.playbackInstance != null && !this.isSeeking) {
			this.isSeeking = true;
			this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
			this.playbackInstance.pauseAsync();
		}
	};

	_onSeekSliderSlidingComplete = async value => {
		if (this.playbackInstance != null) {
			this.isSeeking = false;
			const seekPosition = value * this.state.playbackInstanceDuration;
			if (this.shouldPlayAtEndOfSeek) {
				this.playbackInstance.playFromPositionAsync(seekPosition);
			} else {
				this.playbackInstance.setPositionAsync(seekPosition);
			}
		}
	};

	_getSeekSliderPosition() {
		if (
			this.playbackInstance != null &&
			this.state.playbackInstancePosition != null &&
			this.state.playbackInstanceDuration != null
		) {
			return (
				this.state.playbackInstancePosition /
				this.state.playbackInstanceDuration
			);
		}
		return 0;
	}

	_getMMSSFromMillis(millis) {
		const totalSeconds = millis / 1000;
		const seconds = Math.floor(totalSeconds % 60);
		const minutes = Math.floor(totalSeconds / 60);

		const padWithZero = number => {
			const string = number.toString();
			if (number < 10) {
				return '0' + string;
			}
			return string;
		};
		return padWithZero(minutes) + ':' + padWithZero(seconds);
	}

	_getTimestamp() {
		if (
			this.playbackInstance != null &&
			this.state.playbackInstancePosition != null &&
			this.state.playbackInstanceDuration != null
		) {
			return `${this._getMMSSFromMillis(
				this.state.playbackInstancePosition
			)} / ${this._getMMSSFromMillis(
				this.state.playbackInstanceDuration
			)}`;
		}
		return '';
	}

	findId = id => {
		if (this.playbackInstance != null) {
			const newIndex = audioContent.findIndex(
				(object) => object.id == id
			);
			this.index = newIndex;
			this._updatePlaybackInstanceForIndex(true);
		}

	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.list}>
					<FullAudioPlayer objectList={audioContent}  findId={this.findId} />
				</View>
				<View style={styles.bottom}>
					<View
						style={[
							styles.buttonsContainerBase,
							{
								opacity: this.state.isLoading
									? DISABLED_OPACITY
									: 1.0,
							},
						]}
					>
						<TouchableHighlight
							underlayColor={BACKGROUND_COLOR}
							style={styles.wrapper}
							onPress={this._onBackPressed}
							disabled={this.state.isLoading}
						>
							<View>
							<Image
								style={{
									width: 20,
									height: 20,
								   }} 
								 resizeMode="contain"
								 source={require("../assets/images/previous.png")}
									  />
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							underlayColor={BACKGROUND_COLOR}
							style={styles.wrapper}
							onPress={this._onPlayPausePressed}
							disabled={this.state.isLoading}
						>
							<View
							style={{
								marginLeft: 15,
								marginRight: 15,
								
									 }} >
								{this.state.isPlaying ? (
								<Image
								style={{
			  
							  width: Platform.OS === 'ios' ? 40 : 35,
							  height: Platform.OS === 'ios' ? 40 : 35,

								   }} 
								 resizeMode="contain"
								 source={require("../assets/images/pause.png")}
									  />
								) : (
	 					<Image
                       style={{
     
						width: Platform.OS === 'ios' ? 40 : 35,
						height: Platform.OS === 'ios' ? 40 : 35,
                          }} 
                        resizeMode="contain"
                        source={require("../assets/images/play.png")}
                             />
									)}
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							underlayColor={BACKGROUND_COLOR}
							style={styles.wrapper}
							onPress={this._onForwardPressed}
							disabled={this.state.isLoading}
						>
							<View>
							<Image
								style={{
			  
							  width: 20,
							  height: 20,
								   }} 
								 resizeMode="contain"
								 source={require("../assets/images/next.png")}
									  />
							</View>
						</TouchableHighlight>
					</View>
					<View style={styles.list2}>
						<Text style={styles.text}>{this.state.playbackInstanceName.toUpperCase()}</Text>
						<Text style={styles.time}>{this.state.isBuffering ? (
								BUFFERING_STRING
							) : (
									this._getTimestamp()
								)}</Text>
					</View>
					<View
						style={[
							styles.playbackContainer,
							{
								opacity: this.state.isLoading
									? DISABLED_OPACITY
									: 1.0,
							},
						]}
					>
						<Slider
							style={styles.playbackSlider}
							value={this._getSeekSliderPosition()}
							onValueChange={this._onSeekSliderValueChange}
							onSlidingComplete={this._onSeekSliderSlidingComplete}
							thumbTintColor="#000000"
							minimumTrackTintColor="#000000"
							disabled={this.state.isLoading}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
		backgroundColor: BACKGROUND_COLOR,
		
	},
	playbackContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	playbackSlider: {
		alignSelf: 'stretch',
		marginLeft: 40,
		marginRight: 40,
		marginTop: -10,
		
	},
	text: {
		fontSize: FONT_SIZE,
		minHeight: FONT_SIZE,
		textAlign: 'center',
	},
	time: {
		textAlign: 'center',
		fontSize: 12,
	},
	buttonsContainerBase: {
		
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

		marginTop: 5,
		marginBottom: 5,
		width: '100%',
	},
	list: {
		flex: 1,
		flexGrow: 3.8,
		// paddingTop: 10,
	},
	list2: {
		flex: 1,
	},
	bottom: {
		flex: 1,
		
	}
});
