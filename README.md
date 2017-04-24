# Manatee Works Barcode Scanner SDK using the Ionic 2 Framework

## Description
This is a starter app for the Manatee Works Barcode Scanner SDK and the Ionic 2 frameworks. It uses Cordova to provide access to the native libraries that are used by the Barcode Scanner. The Scanner is provided as a Cordova Plugin.



## Dependencies

- Ionic CLI installed (required) 
- Cordova 5.x.x installed (required)
- node
- git
- npm
- **Android** and/or **iOS** environment installed (optional, but required if you don't have devices to test)


## Installation
Clone this repository 
```ssh
git clone https://github.com/manateeworks/manateeworks-barcodescanner-ionic2-starter.git myCoolMwApp
```
change directory

```ssh
cd myCoolMwApp
```
and then install the dependencies

```ssh
npm install
```

After that, you need to restore the state of the project. To do this, please run:

```ssh
npm run ionic:build
```
to build it first (looks like it's very much needed on latest version of ionic)


```ssh
$ ionic state reset
```
When ionic state is restored, you can build for your desired platform:

#### iOS

```ssh
$ ionic build ios
$ ionic run ios
$ ionic run ios -l //will start the app in live reload mode
```

#### Android

Just run the following command to open the project inside a device connected:

```ssh
$ ionic build android
```

Note: when building for ios, it could complain that it doesn't have a signing profile, easily fixed within xcode. 

## Explanation of the solution

The main difference from the usual ionic starter project is the provider that we create for manatee scanner (see /src/providers/manatee-scanner). 
mwbScanner is a variable which lives in the global namespace and is provided by the cordova plugin.  
We could use that variable directly in the controllers, but we want to use it as a provider and configure it in one central place, so we wrap that variable in a provider, and create methods for easy setting and configuration of the scanner. 
Then we use the platform ready event to configure the scanner (see /src/app/app.components.ts) 

## Observations

To use our product you need a license, you can get an evaluation license here: [MWDN](https://manateeworks.com/lpr?type=evaluation)

This starter is using [Manatee Works Barcode Scanner SDK Phonegap Plugin](https://github.com/manateeworks/phonegap-manateeworks-v3.git)

## App Structure

The app will build as an Ionic 2 Structured project. Ionic 2 utilizes typescript, so things may be a little different than what a "normal" JavaScript developer is used to. Familiarity with Ionic 2 is required to run this app.

## License

[Manatee Works](https://manateeworks.com) © Cognex Corporation
