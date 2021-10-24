import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// https://docs.expo.io/versions/latest/sdk/constants/
import Constants from 'expo-constants';
import * as TaskManager from 'expo-task-manager';
import * as Notifications from 'expo-notifications';
// https://reactnative.dev/docs/components-and-apis
import {
  ActionSheetIOS,
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  LogBox,
  Platform,
  RefreshControl,
  ScrollView,
  SectionList,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// https://github.com/react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// https://github.com/peacechen/react-native-modal-selector
import ModalSelector from 'react-native-modal-selector';

LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import",
  "Disconnected from the Metro",
]);

// https://github.com/react-native-community/react-native-webview
import WebView from 'react-native-webview';

// https://react-native-elements.github.io/react-native-elements/docs/overview
// https://github.com/react-native-elements/react-native-elements/
import {
  Avatar,
  Badge,
  Button,
  CheckBox,
  Divider,
  ListItem,
  Overlay,
  SearchBar,
  Slider,
  ThemeProvider,
  Tooltip,
} from 'react-native-elements';

// https://callstack.github.io/react-native-paper/index.html
import {
  FAB,
  Snackbar,
} from 'react-native-paper';

// https://github.com/mmazzarolo/react-native-radio-button
//import RadioButton from 'react-native-radio-button';

// https://docs.expo.io/versions/latest/sdk/app-loading/
import AppLoading from 'expo-app-loading';

// https://docs.expo.io/versions/latest/sdk/linking/
import * as Linking from 'expo-linking';

// https://docs.expo.io/versions/latest/sdk/asset/
import { Asset } from 'expo-asset';

// https://docs.expo.io/versions/latest/sdk/camera/
import { Camera } from 'expo-camera';

// https://docs.expo.io/versions/latest/sdk/localization/
import * as Localization from 'expo-localization';

// https://docs.expo.io/versions/latest/sdk/video/
import { Audio, Video } from 'expo-av';

// https://github.com/ihmpavel/expo-video-player
//import VideoPlayer from 'expo-video-player';

// https://docs.expo.io/versions/latest/sdk/filesystem/
import * as FileSystem from 'expo-file-system';

import * as Font from 'expo-font';

import axios from 'axios';

// https://expo.github.io/vector-icons/
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';

import i18n from 'i18n-js';

import {
  CommonActions,
  DrawerActions,
  NavigationContainer,
} from '@react-navigation/native';

import {
  createStackNavigator,
} from '@react-navigation/stack';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// https://github.com/jemise111/react-native-swipe-list-view
//import { SwipeListView } from 'react-native-swipe-list-view';

// https://github.com/FaridSafi/react-native-gifted-chat
import {
  Bubble,
  Composer,
  Day,
  GiftedChat,
  Message,
  MessageText,
  SystemMessage
} from 'react-native-gifted-chat';

// https://github.com/archriss/react-native-snap-carousel
// See also: https://github.com/CrowdLinker/react-native-pager
import Carousel, { Pagination } from 'react-native-snap-carousel';

import uuid from 'uuid';

// https://github.com/wix/react-native-calendars
//import { Calendar } from 'react-native-calendars';

// https://github.com/stephy/CalendarPicker
//import CalendarPicker from 'react-native-calendar-picker';

import { createStore } from 'redux';

import { connect, Provider } from 'react-redux';

// https://docs.expo.io/versions/latest/sdk/device/
import * as Device from 'expo-device';

// https://github.com/FaridSafi/react-native-google-places-autocomplete
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// https://docs.expo.io/versions/latest/sdk/linear-gradient/
import { LinearGradient } from 'expo-linear-gradient';

// https://github.com/ggunti/react-native-amazing-cropper
import AmazingCropper, { DefaultFooter } from 'react-native-amazing-cropper';

// https://github.com/expo/react-native-action-sheet
import { connectActionSheet, ActionSheetProvider } from '@expo/react-native-action-sheet';

// https://github.com/react-native-community/react-native-slider
//import Slider from '@react-native-community/slider';

// https://github.com/ptomasroos/react-native-multi-slider
//import MultiSlider from '@ptomasroos/react-native-multi-slider';

// https://github.com/s-yadav/react-number-format
//import NumberFormat from 'react-number-format';

// https://github.com/arronhunt/react-native-emoji-selector
//import EmojiSelector from 'react-native-emoji-selector';

// https://github.com/tunoltd/emoji-mart-native
//import { ModalPicker as EmojiModalPicker, Picker as EmojiPicker } from 'emoji-mart-native';

// https://github.com/liangl1412/react-native-emoji-keyboard
//import EmojiBoard from 'react-native-emoji-board';

// https://github.com/sskhandek/react-native-emoji-input
import EmojiInput from 'react-native-emoji-input';

// https://github.com/mridgway/hoist-non-react-statics
import hoistNonReactStatics from 'hoist-non-react-statics';

// https://github.com/Monte9/react-native-ratings
import { Rating } from 'react-native-ratings';

// https://github.com/oblador/react-native-progress
//import * as Progress from 'react-native-progress';

// https://github.com/RobertFOConnor/react-native-progress-wheel
//import AnimatedProgressWheel from 'react-native-progress-wheel';

// https://github.com/brewskey/react-native-progress
//import * as Progress from 'react-native-progress';

// https://github.com/MrToph/react-native-progress-circle
//import ProgressCircle from 'react-native-progress-circle';

// https://github.com/pajicf/react-native-semi-circle-progress
import SemiCircleProgress from 'react-native-semi-circle-progress';

// https://docs.expo.dev/versions/latest/sdk/keep-awake/
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

// https://reactnavigation.org/docs/en/react-native-screens.html
// https://docs.expo.io/versions/latest/sdk/screens/
// https://github.com/software-mansion/react-native-screens#android
// Note: https://github.com/software-mansion/react-native-screens/issues/17#issuecomment-763996402
import { enableScreens } from 'react-native-screens';
enableScreens();


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
