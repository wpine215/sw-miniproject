# EC463 Software Miniproject
COVID-19 Tracker miniproject for Fall 2020 Senior Design

## Backend

The original Django backend (/backend/) is deprecated. The current backend is made using JavaScript and Express, and deployed via Google Firestore and Google Cloud Functions. Its code is in `/firebase/`.

![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-5.png?raw=true)

## Admin Dashboard

The admin dashboard is hosted locally, and requires SSO (single sign on) for verified administrators to log in. To run the dashboard locally, execute `serve.sh` in the `/admin/` directory. If you run into any errors, make sure the script has execute permissions. The dashboard is present at `http://localhost:8000/`

### Screenshots:

Login screen:
![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-1.png?raw=true)

Dashboard with COVID-19 API statistics
![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-2.png?raw=true)

Dashboard with submitted survey results
![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-3.png?raw=true)

Dashboard during unauthenticated login
![](https://github.com/wpine215/sw-miniproject/blob/master/docs/covid-19-4.png?raw=true)

## Frontend

The current version of the app is built for Android only. The app can be run locally with a virtual device on Android Studio or with your own physical Android device.

To run with Android Studio:
  1. Download [Android Studio](https://developer.android.com/studio).
  2. Clone the repo and open the project in Android Studio.
  3. Create a virtual device to run the app on.
  4. Navigate to the "Run" menu and click "Run 'app'".
  5. Enjoy the app!
  
  More details on running apps in Android Studio [here](https://developer.android.com/studio/run).
  
To run with your own Android device:
  1. Download [npx](https://www.npmjs.com/package/npx), an npm package execution library.
  1. Clone the repo and navigate to the `frontend/CovidSymptomTracker` folder.
  2. Open a terminal window and run `npx react-native start` to start the app server.
  3. Open another terminal window and run `npx react-native run-android` while your Android device is connected to install the app on your phone.
  - To run the debug version, include the tag `--variant=debug`. 
    - For example: `npx react-native run-android --variant=debug`.
  - To run the release version, include tag `--variant=release` instead. 
    - For example: `npx react-native run-android --variant=release`.
  5. Enjoy the app!
  
  ## Potential Improvements
  
  - Implement app state management.
  - Implement proper back button functionality.
