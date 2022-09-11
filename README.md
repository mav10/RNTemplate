# ![RN template logo](/doc/images/logo.png) react-native-mav10-template
:keyboard: A custom corporate template to bootstrap React Native app with all the time-wasting packages and procedures you need to have.

Preconfigured with

- Synced with the recommended [TypeScript template](https://reactnative.dev/doc/typescript#getting-started-with-typescript)
- Added eslint and prettier support

## Getting Started

Create a new project using the template.

:warning:**Note:**:warning:

- the commands will fail if you have the global legacy react-native-cli installed. Make sure you uninstall it first. More info at [react-native-community/cli](https://github.com/react-native-community/cli#about).

You need to do some steps:
1. Prepare all needed files and integrations (splash logo icon, app icon, firebase files (info.plist for ios and google-services.json for android), register sentry project
1. Clone this repo to your machine
1. Generate you new project based on the template.
1. Grab your generated {PROJECT_NAME} folder and add it to your repo.
1. Replace generated firebase files content with downloaded ones (from 1st step))
1. Install pods if you are on mac (`pod install` from `ios` folder), after that keep coding.
1. (Check [troubleshooting](#troubleshooting) if you have any issues).

### Running script
It will generate apps with all these libraries, your project and display name, configured splash screens and app icons, plus sentry will link it to server. And generates DEV and PROD keystores (with naming which expects in Azure pipelines) for android during teh wizard.


```bash
npx react-native init {PROJECT_NAME} --template {PATH_TO_ROOT_FOLDER_OF_TEMPLATE}
```

As script finished you will see screen like that
Result of it you can see on screen bellow:

!["yarn configure](/doc/images/init_terminal.png)

After that you are able to run Wizard with customization of your project.

```shell
cd {PROJECT_NAME}

yarn init-script
```
!["yarn configure](/doc/images/custom_init.png)


After that you can generate splash screen, app icons, apply renaming for app by manual scripts
**NOTE!!!** all handy scripts should be running from created project folder.


## Optional Steps

###  <img src="https://static.invertase.io/assets/React-Native-Firebase.svg" alt="RN firebase logo" width="20"> Firebase
:red_circle: If you are not going to use push-notifications

it is better to get rid in general. You need to repeat in another order all configurations steps. See https://rnfirebase.io (cloud messaging section).

:ok_hand: **If you are going to use** push notifications

- uncomment in `AndroidManifest.xml` file block with **<meta-data>**.
- Generate icons for notifications. e.g. you can use An android studio. (Here you can find an example of creating https://developer.android.com/studio/write/image-asset-studio).
  By this tool, you can tune already generated icons - if it does not fit (cover/contain) well by the auto script as you desire.
- Copy your own `google-services.json` to `/android/app/google-services.json`. and `GoogleService-Info.plist` to `ios/GoogleService-Info.plist`

### !["Sentry"](/doc/images/sentry.png) Sentry
:red_circle: **If you are not going to use**

You can skip this step as by auto script (just by ctrl/cmd + Z).
Or (re)integrate later with sentry wizard (check it out [here](https://github.com/getsentry/sentry-wizard))

:ok_hand: **If you are going to use**
- add `sentry DSN` to `.env` file.

### CI/CD

#### !["appcenter"](/doc/images/appcenter.png) AppCenter (https://appcenter.ms)
:red_circle: **If you are not going to use**

- You should remove `appcenter-pre-build.sh`

:ok_hand: **You are going to use**
Because distribution will be through the AppCenter anyway (if you want to use codepush). So don't forget to create apps in Appcenter.
You can do it by CLI command - it is described [here](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli#app-management)

```
appcenter orgs apps create -d MccTemplateApp-Android     -a MccTemplateApp-Android -o Android -p React-Native -n MccTomsk
appcenter orgs apps create -d MccTemplateApp-iOS -a MccTemplateApp-iOS -o iOS -p React-Native -n MccTomsk
```
In App Center, you must create them yourself using the following commands:
```
appcenter codepush deployment add -a <ownerName>/<appName> Staging
appcenter codepush deployment add -a <ownerName>/<appName> Production
```

#### !["azure"](/doc/images/azure.png) Azure Pipelines (https://azure.microsoft.com/en-us/services/devops/pipelines/)
- In project, you have got folder ".ci" with azure-pipelines
- More details you can find in [.ci/Readme.md](/template/.ci/)

:ok_hand: **If you are going to use**
just use it

#### 🔑 App signing
Your built app should be signed by developer certificate(key) to be uploaded to store(s) and run on the real (physical) devices.

_A few words about it and more..._

⚠️⚠️⚠️IMPORTANT⚠️⚠️⚠️

First of all, it is recommended to use different certificate for development and production (real app that will be uploaded to store).
So, if you have already uploaded app to store - certificate can not be updated (replaced). You will have to create new (register) new one for uploading the same app with new signing certificate.
It happens, when you lose "certificate" or forgot password, so take care about clear access to such files every time of app life cycle.

##### Android
For android, it is easy - you have to run `Java keytool` CLI for generating keystore certificate. Remember that for production and develop you MUST use different keystores files.

```
keytool -genkey -alias <desired certificate alias> -keystore <keystore name.keystore> -storetype PKCS12 -keyalg RSA -storepass <password> -validity 10000 -keysize 2048
```

after that wizard will ask you about questions Write down corresponding information something like this
```
CN=Mcc Developer, OU=Mobile, O=MCC Tomsk, L=Tomsk, ST=Tomsk, C=RU
```

Or you can run `yarn signing-android` script (_But fill package json - config section before, if you deploy app not from autoscript_)
![signing](doc/images/signing.png)
Generate such files and upload them into CI, where you are going to sign apps (e.g. AppCenter).
Store files somewhere where team members can access to them, but not every person.
Save certificate password, alias name and alias password in secure storage e.g. KeyPass database.

##### iOS

For iOS there are same rules. But you need certificate and provision profile.
Second one must include tester's iphone UDID. (how to get it from device see 👉 https://get.udid.io/)

Ask the person, who is in charge to manage certificate and Apple developer account to generate to you such certificates and provisions
- Development (AD-HOC) - will be distributed thorough AppCenter
- Development (TestFlight) - will be distributed to stakeholders through TestFlight. Can not be installed directly from CI
- Production (Apple certificate) - will be distributed to stakeholders through AppStore. Can not be installed directly from CI.

⚠️⚠️⚠️IMPORTANT⚠️⚠️⚠️

Make sure that he/she saved credentials of certificate somewhere in the secure spot and he/she will be able to upload that certificate to new CI(build definition) any time



---

## Coding

Well you've just created an app from template and do not know what to do before new project.

![App launch](./doc/images/wallper.jpg =150x360) ![App splash](doc/images/splash.jpg =150x360) ![App screen](doc/images/app.jpg =150x360) ![App loading](doc/images/loading.jpg =150x360) ![App network](doc/images/network.jpg =150x360) ![App error](doc/images/error.jpg =150x360)

- Run tests

It is better to try tests (component and E2E) before you changed something, at least that it works.
Your created app also has **README.md** file, and you can figure out how to run tests.

- Check hooks

Take a lok how to use it for future. e.g. `useNotifications` and `useModal` are already in use (in template app);

    List of hooks:
    - useNotifications - initialize and handle pushes
    - useCustomBackBehaviour - to override system back button for navigations
    - useModal - adds modal management. Closed/Open handlers and visibility value ```const { visible, openModal, closeModal } = useModal('CLOSED');```
    - useNetworkError - handles network connection and redirects to `NetworkError` screen
    - useStartupTime - measures app launch time since native to js loading moment and logs it.

- Remove dummy screens and localisations, images.

As do you play enough with a template - clean up project! Maybe you do not need notifications - so remove hook call, or you need it only for auhtorized users - add `IF` statement or move hook call somewhere to authorized screens.
Or maybe you do not need authorization screen flow - so remove it.

- Prepare apps for CI and distributing

Generate signing keystores for android and ios certificates + provision profile.

- As you distribute (build signed apps) - check `Sentry` and `Notification` integrations

Click on sentry test buttons and verify that you receive logs in your sentry project.
Send test push notifications from firebase console, or use [Push notifications tester](https://github.com/onmyway133/PushNotifications). For that you need to know FCM token of your real device (if you are in debug - take look at logs).

## Directory Structure

```
root
├── android
├── assets
|    ├── fonts
|    └── images
├── ios
```

## Quick Overview

Quickly get an idea about each folder's role.

| Directory      | Short Description                                                        |
| :------------- | :----------------------------------------------------------------------- |
| root           | Root directory. Contains many configuration files and all other folders. |
| android        | Android project. Includes modifications to integrate libraries.          |
| assets         | Shared images, fonts etc.                                                |
| ios            | iOS project. Includes modifications to integrate libraries.              |

If you would like to learn more without going through the codebase, read the [file walkthrough here](doc/file-walkthrough.md).

## Image requirements
Template has two options, which related to Splash and app icons.

⚠ App icons️ Requirements :

- The image has to be square.
- Don't use a transparent image. Not allowed on both plarforms.
- Minimum size of the image is 1024x1024.
- It uses android adaptive icons, use guidelines : https://medium.com/google-design/designing-adaptive-icons-515af294c783
- Format accepted : png and jpeg.

As it generates only **adaptive** icon set for android, you have to add legacy support manually + notifications set.
Adaptive icons are dispalyed on android higher 26 API (Android 8.0 Oreo). Everything that is older - will use legacy icons.


## Troubleshooting

- sometimes it does not copy android native .java classes (when rename the app with another bundle).

  If it happened then copy `MainActivity.java` `MainApplication.java` `ReactNativeFlipper.java` from template/android/app/src... to your project. Do not forget to adjust package name in files according to your bundleId.

- wrong version for iOS

we have pre-build script for [appcenter](https://appcenter.ms) CI. So maybe autoscript did not rename appschema for ios project or did it wrong.

Check the `appcenter-pre-build.sh` file row №16 and adjust project scheme (you can find it via xcode)
![app center script](/doc/images/appcenter_build.png)

