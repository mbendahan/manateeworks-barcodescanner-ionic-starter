# Manateeworks Barcode Scanner using the Ionic 2 Framework

## Description
This is a starter app for the Manatee Works Barcode Scanner and the Ionic 2 frameworks. It uses Cordova to provide access to the native libraries that are used by the Barcode Scanner. The Scanner is provided as a Cordova Plugin.



## Dependencies

- Ionic CLI installed (required) 
- Cordova 5.x.x installed (required)
- node
- git
- npm
- \***Android** and/or iOS environment installed (optional, but required if you don't have devices to test)


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

When installation finishes, you need to put your credentials, the MW_LICENSE_KEY generated on [MWDN](https://manateeworks.com/lpr?type=evaluation) inside the `package.json` file.

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
```

#### Android

Just run the following command to open the project inside a device connected:

```ssh
$ ionic build android
```

Note: when building for ios, it could complain that it doesn't have a signing profile, easily fixed within xcode. 

## Screenshots

TODO ADD SCREENSHOTS

## Observations

This starter is using [Manateeworks Barcode Scanner Phonegap Plugin](https://github.com/manateeworks/phonegap-manateeworks-v3.git)

## App Structure

The app will build as an Ionic 2 Structured project. Ionic 2 utilizes typescript, so things may be a little different than what a "normal" javaScript developer is used to. Familiarity with Ionic 2 is required to run this app.

## License

[Manatee Works](https://manateeworks.com) © Manatee Works
