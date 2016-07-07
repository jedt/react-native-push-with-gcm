import React from 'react-native'
var PushWithGCM = React.NativeModules.PushWithGCM

module.exports = {
  configure() {
    PushWithGCM.configureGCM()
  },

  onAppBecomeActive() {
    PushWithGCM.onAppBecomeActiveGCM()
  },

  registerToken(deviceToken) {
    PushWithGCM.registerToGCMWithDeviceToken(deviceToken)
  },

  registerForNotifications() {
    PushWithGCM.registerForNotificationsGCM();
  },

  unregisterToken() {
    PushWithGCM.unregisterTokenFromGCM()
  },

  subscribeToTopics(topics) {
    PushWithGCM.subscribeToTopics(topics)
  },

  unsubscribeFromTopics(topics) {
    PushWithGCM.unsubscribeFromTopics(topics)
  }
}
