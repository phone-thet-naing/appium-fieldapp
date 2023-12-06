---
runme:
  id: 01HGYTGG6SR76BFYKG906702YW
  version: v2.0
---

# Mobile Test Automation with Appium (WebdriverIO)

This repository contains automated tests for Hana Field App using Appium with WebdriverIO.

## Prerequisites

Before running the tests, ensure you have the following installed:

1. **Node.js:** Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)

2. **Android Studio:** Install Android Studio for Android UIAutomator tests and emulator. Download it from [https://developer.android.com/studio](https://developer.android.com/studio)

## Installation

1. **Clone Repository:**
   Clone the repo via ssh or https
2. **Install the Necessary Node Modules:**
   npm install

# Appium Setup
1. **Install Appium.**
2. **Install UIAutomator.**
Visit [https://appium.io/docs/en/2.2/] for reference

# Configuring Android Emulator (Optional)
1. **Open Android Studio:**
   Open Android Studio and launch the AVD Manager to create an Android Virtual Device (AVD).

2. **Create AVD:**
   Create a new virtual device using the AVD Manager.

3. **Run AVD:**
   Start the AVD to launch the emulator.


# Running Tests

   You can run tests by the `scripts` defined in package.json file

   **Running A Specific Test File**
   Run a specific test file with `npm run test -- --spec path/to/test`

   Visit this site for reference. [https://webdriver.io/docs/organizingsuites/#run-selected-tests]

# Wdio Configuration File
   Visit [https://webdriver.io/docs/configuration] for `wdio.config.js` reference