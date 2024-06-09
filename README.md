# Kabar App

Kabar is a new mobile application that provides users with a seamless and user-friendly interface for navigating through various sections such as Home, Explore, BookMark, and Profile. This README file will guide you through the setup and running process of the Kabar app.

## Features

- **Home Screen**: The main screen displaying the latest content.
- **Explore Screen**: Discover new and trending content.
- **Bookmark Screen**: Save your favorite content for quick access.
- **Profile Screen**: Manage your user profile, including uploading profile pictures and updating personal information.

## Prerequisites

Before you can run the Kabar app, ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (for running on Android/iOS devices or emulators)
- [Xcode](https://developer.apple.com/xcode/) (for running on iOS devices or emulators)
- [Android Studio](https://developer.android.com/studio) (for running on Android devices or emulators)

## Getting Started

Follow these steps to set up and run the Kabar app on your local machine:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/yourusername/kabar-app.git
   cd kabar-app
   ```

2. **Install Dependencies**:
   Using npm:
   ```sh
   npm install
   ```
   Or using Yarn:
   ```sh
   yarn install
   ```

3. **Run the Metro Bundler**:
   ```sh
   npx react-native start
   ```

4. **Run on Android**:
   Make sure you have an Android emulator running or an Android device connected via USB.
   ```sh
   npx react-native run-android
   ```

5. **Run on iOS**:
   Make sure you have Xcode installed and an iOS emulator running or an iOS device connected.
   ```sh
   npx react-native run-ios
   ```

## Directory Structure

```
kabar-app/
├── android/                   # Android native files
├── ios/                       # iOS native files
├── src/
│   ├── Assets/                # Image and other assets
│   ├── Components/            # Reusable components
│   ├── Constants              # Constant Var
│   ├── DataManager            # API Calls
│   ├── Helper                 # Small Helper Fn
│   ├── MockData               # Static Data
│   ├── Navigation/            # Navigation configuration
│   ├── Redux/                 # Redux store and reducers
│   ├── Screens/               # Screen components
├── .gitignore
├── package.json
├── README.md
├── App.js                 # Main app component
├── index.js               # Entry point
└── ...
```

## Screens

- **HomeScreen**: Main screen displaying the latest content.
- **ProfileScreen**: Screen where users can view and edit their profile information.
- **ExploreScreen**: Discover new content.
- **BookmarkScreen**: Access saved content.

## Navigation

The app uses React Navigation for handling navigation between screens. The main navigation is managed by a bottom tab navigator with the following tabs:

- Home
- Explore
- BookMark
- Profile

## Redux Integration

The app uses Redux for state management. The `store` is configured in `src/Redux/Store.js`, and the user details are managed by the `global` reducer in `src/Redux/Reducers.js`.

## Custom Components

- **Header**: Custom header component used across different screens.
- **CustomButton**: Reusable button component.
- **CustomTextInput**: Reusable text input component.

## Contributing

If you wish to contribute to the Kabar app, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please contact us at [priyanshu1kumar24@example.com].

---

We hope you enjoy using the Kabar app! If you have any questions or run into any issues, please don't hesitate to reach out. Happy coding!
