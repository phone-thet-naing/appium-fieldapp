const { remote } = require('webdriverio');
const path = require("path");

const capabilities = {
	// capabilities for local Appium web tests on an Android Emulator
	platformName: 'Android',
	'appium:platformVersion': '14.0', // or "16.2" (for running iOS v16)
	'appium:automationName': 'UiAutomator2', // or "XCUITest"
	'appium:app': path.join(
		process.cwd(),
		'./app/android/Hana-MFI-Field-App-2.5.4 - 2050401-uat 2.apk'
	),
	'appium:appPackage': 'com.hanamicrofinance.FieldApp.uat',
	'appium:appActivity':
		'com.kebhanamyanmar.temp.agent.feature.splash.SplashActivity',
	'appium:noReset': true,
	'appium:ignoreHiddenApiPolicyError': true,
}

// const capabilities = {
// 	platformName: 'Android',
// 	'appium:automationName': 'UiAutomator2',
// 	'appium:deviceName': 'Android',
// 	'appium:appPackage': 'com.android.settings',
// 	'appium:appActivity': 'com.android.settings.SubSettings',
// };

const wdOpts = {
	hostname: 'localhost',
	port: 4723,
	logLevel: 'info',
	capabilities
}

async function runTest() {
	const driver = await remote(wdOpts);

	try {
		const menuItem = await driver.$('//*[@text="Collection"]');
		await menuItem.click();
	} finally {
		await driver.pause(1000);
		await driver.deleteSession();
	}
}

runTest().catch(console.error);

