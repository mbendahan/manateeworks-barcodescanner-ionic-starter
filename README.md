# Manatee Works Barcode Scanner SDK using the Ionic Framework

***NOTE : This document is valid for verison 3.6.0 of the IONIC framework*** 

## Description
This is a starter app for the Manatee Works Barcode Scanner SDK and the Ionic frameworks. 
It uses Cordova to provide access to the native libraries that are used by the Barcode Scanner. The Scanner is provided as a Cordova Plugin.


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

After that, you just need to make a build for a specific platform

```ssh
ionic cordova build ios
```

Start the app

```ssh
ionic run ios
ionic run ios -l //will start the app in live reload mode
```

Or open the generated solution with `Android Studio` / `Xcode` / `Visual Studio` respectively as you would with a `Cordova` / `Phonegap` generated solution.

Note: when building for ios, it could complain that it doesn't have a signing profile, easily fixed within Xcode.

Note: when building for windows, it might complain for invalid CPU type (AnyCPU is the default), which you can easily pick within Visual Studio (or use cli flags, such as `-archs="arm"` for using ARM).

## Explanation of the solution

The main difference from the usual ionic starter project is the provider that we create for manatee scanner (see /src/providers/manatee-scanner). 
mwbScanner is a variable which lives in the global namespace and is provided by the cordova plugin.  
We could use that variable directly in the controllers, but we want to use it as a provider and configure it in one central place, so we wrap that variable in a provider, and create methods for easy setting and configuration of the scanner. 
Then we use the platform ready event to configure the scanner (see /src/app/app.components.ts) 

## Observations

To use our product you need a license, you can get an evaluation license here: [MWDN](https://manateeworks.com/lpr?type=evaluation)

This starter is using [Manatee Works Barcode Scanner SDK Phonegap Plugin](https://github.com/manateeworks/phonegap-manateeworks-v3.git)

## License

[Manatee Works](https://manateeworks.com) © Cognex Corporation
