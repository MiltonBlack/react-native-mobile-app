### REACT NATIVE APPLICATION
This is a mobile application built with the React Native.
It uses hard coded data for its first release (in subsequent builds data will be fetched from an external API).
This App is intended for Educational Purposes in the engineering drawing and construction field only, gathering resources from different sources

# FUTURE UPGRADES
Web Implementation of the Mobile App
Headless CMS
Rich Contents
UI/UX Upgrade
Deployment to PlayStore ;)

## SETTING UP THE REACT NATIVE ENVIRONMENT ON WINDOWS
# REQUIREMENTS
JDK 11
NODE.JS LTS version
ANDROID STUDIO
VSCODE

# JDK 11
Download and Install JDK 11.
Navigate to the bin folder in your JDK 11 installation directory
copy the path and add it to your Environment Variables path

# NODE.JS @LATEST
Download and Install Node.JS

# ANDROID STUDIO @LATEST
Download and Install the Latest Version of Android Studio.
Install Build Tools
Install SDK @latest
Install Platform Tools
Install Google Image
Set Andriod Home Path
Set Java Home Path

# VSCODE
Download and Install VSCode.
This is the Editor to be used for editing the project Template.

# DEPENDENCIES USED
    "@react-native-community/netinfo": "^9.3.7",
    "@react-navigation/material-bottom-tabs": "^6.2.10",
    "@react-navigation/native": "^6.1.1",
    "@react-navigation/native-stack": "^6.9.7",
    "@reduxjs/toolkit": "^1.9.3",
    "react": "18.1.0",
    "react-native": "0.70.6",
    "react-native-modal": "^13.0.1",
    "react-native-paper": "^5.1.0",
    "react-native-safe-area-context": "^4.4.1",
    "react-native-screens": "^3.18.2",
    "react-native-vector-icons": "^9.2.0",
    "react-native-webview": "^11.26.0",
    "react-native-youtube-iframe": "^2.2.2",
    "react-redux": "^8.0.5"

# TO INSTALL NODE MODULES
npm install

# TO RUN USE DEBUG
npx react-native start
npx react-native run-android

NB: Run the two commands on seperate terminals in their order above.

# TO BUILD APP RELEASE VERSION
cd android
./gradlew app:bundleRelease

# INSTALL RELEASE VERSION
npx react-native run-android --variant=Release