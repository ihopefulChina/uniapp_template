/**
 * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启
 * 参考这个文档：https://blog.csdn.net/jiciqiang/article/details/121009273
 */

// #ifdef APP-PLUS
export const isIos = plus.os.name === 'iOS';
// #endif

// 判断推送权限是否开启
export function judgeIosPermissionPush() {
    let result = false;
    const UIApplication = plus?.ios?.import('UIApplication');
    const app = UIApplication.sharedApplication();
    let enabledTypes = 0;
    if (app.currentUserNotificationSettings) {
        const settings = app.currentUserNotificationSettings();
        enabledTypes = settings.plusGetAttribute('types');
        console.log('enabledTypes1:' + enabledTypes);
        if (enabledTypes === 0) {
            console.log('推送权限没有开启');
        } else {
            result = true;
            console.log('已经开启推送功能!');
        }
        plus.ios.deleteObject(settings);
    } else {
        enabledTypes = app.enabledRemoteNotificationTypes();
        if (enabledTypes === 0) {
            console.log('推送权限没有开启!');
        } else {
            result = true;
            console.log('已经开启推送功能!');
        }
        console.log('enabledTypes2:' + enabledTypes);
    }
    plus.ios.deleteObject(app);
    plus.ios.deleteObject(UIApplication);
    return result;
}

// 判断定位权限是否开启
export function judgeIosPermissionLocation() {
    let result = false;
    const cllocationManger = plus.ios.import('CLLocationManager');
    const status = cllocationManger.authorizationStatus();
    result = status !== 2;
    console.log('定位权限开启：' + result);
    // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation
    /* var enable = cllocationManger.locationServicesEnabled();
	var status = cllocationManger.authorizationStatus();
	console.log("enable:" + enable);
	console.log("status:" + status);
	if (enable && status != 2) {
		result = true;
		console.log("手机定位服务已开启且已授予定位权限");
	} else {
		console.log("手机系统的定位没有打开或未给予定位权限");
	} */
    plus.ios.deleteObject(cllocationManger);
    return result;
}

// 判断麦克风权限是否开启
export function judgeIosPermissionRecord() {
    let result = false;
    const avaudiosession = plus.ios.import('AVAudioSession');
    const avaudio = avaudiosession.sharedInstance();
    const permissionStatus = avaudio.recordPermission();
    console.log('permissionStatus:' + permissionStatus);
    if (permissionStatus === 1684369017 || permissionStatus == 1970168948) {
        console.log('麦克风权限没有开启');
    } else {
        result = true;
        console.log('麦克风权限已经开启');
    }
    plus.ios.deleteObject(avaudiosession);
    return result;
}

// 判断相机权限是否开启
export function judgeIosPermissionCamera() {
    let result = false;
    const AVCaptureDevice = plus.ios.import('AVCaptureDevice');
    const authStatus = AVCaptureDevice?.authorizationStatusForMediaType('vide');
    console.log('authStatus:' + authStatus);
    if (authStatus === 3) {
        result = true;
        console.log('相机权限已经开启');
    } else {
        console.log('相机权限没有开启');
    }
    plus.ios.deleteObject(AVCaptureDevice);
    return result;
}

// 判断相册权限是否开启
export function judgeIosPermissionPhotoLibrary() {
    let result = false;
    const PHPhotoLibrary = plus.ios.import('PHPhotoLibrary');
    const authStatus = PHPhotoLibrary.authorizationStatus();
    console.log('authStatus:' + authStatus);
    if (authStatus === 3) {
        result = true;
        console.log('相册权限已经开启');
    } else {
        console.log('相册权限没有开启');
    }
    plus.ios.deleteObject(PHPhotoLibrary);
    return result;
}

// 判断通讯录权限是否开启
export function judgeIosPermissionContact() {
    let result = false;
    const CNContactStore = plus.ios.import('CNContactStore');
    const cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
    if (cnAuthStatus === 3) {
        result = true;
        console.log('通讯录权限已经开启');
    } else {
        console.log('通讯录权限没有开启');
    }
    plus.ios.deleteObject(CNContactStore);
    return result;
}

// 判断日历权限是否开启
export function judgeIosPermissionCalendar() {
    let result = false;
    const EKEventStore = plus.ios.import('EKEventStore');
    const ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
    if (ekAuthStatus == 3) {
        result = true;
        console.log('日历权限已经开启');
    } else {
        console.log('日历权限没有开启');
    }
    plus.ios.deleteObject(EKEventStore);
    return result;
}

// 判断备忘录权限是否开启
export function judgeIosPermissionMemo() {
    let result = false;
    const EKEventStore = plus.ios.import('EKEventStore');
    const ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
    if (ekAuthStatus == 3) {
        result = true;
        console.log('备忘录权限已经开启');
    } else {
        console.log('备忘录权限没有开启');
    }
    plus.ios.deleteObject(EKEventStore);
    return result;
}

// Android权限查询
export function requestAndroidPermission(permissionID) {
    return new Promise((resolve, reject) => {
        plus.android.requestPermissions(
            [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
            function (resultObj) {
                let result = 0;
                for (var i = 0; i < resultObj.granted.length; i++) {
                    const grantedPermission = resultObj.granted[i];
                    console.log('已获取的权限：' + grantedPermission);
                    result = 1;
                }
                for (var i = 0; i < resultObj.deniedPresent.length; i++) {
                    const deniedPresentPermission = resultObj.deniedPresent[i];
                    console.log('拒绝本次申请的权限：' + deniedPresentPermission);
                    result = 0;
                }
                for (var i = 0; i < resultObj.deniedAlways.length; i++) {
                    const deniedAlwaysPermission = resultObj.deniedAlways[i];
                    console.log('永久拒绝申请的权限：' + deniedAlwaysPermission);
                    result = -1;
                }
                resolve(result);
                // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限
                // if (result != 1) {
                // gotoAppPermissionSetting()
                // }
            },
            function (error) {
                console.log('申请权限错误：' + error.code + ' = ' + error.message);
                resolve({
                    code: error.code,
                    message: error.message,
                });
            }
        );
    });
}

// 使用一个方法，根据参数判断权限
export function judgeIosPermission(permissionID) {
    if (permissionID === 'location') {
        return judgeIosPermissionLocation();
    } else if (permissionID === 'camera') {
        return judgeIosPermissionCamera();
    } else if (permissionID === 'photoLibrary') {
        return judgeIosPermissionPhotoLibrary();
    } else if (permissionID === 'record') {
        return judgeIosPermissionRecord();
    } else if (permissionID === 'push') {
        return judgeIosPermissionPush();
    } else if (permissionID === 'contact') {
        return judgeIosPermissionContact();
    } else if (permissionID === 'calendar') {
        return judgeIosPermissionCalendar();
    } else if (permissionID === 'memo') {
        return judgeIosPermissionMemo();
    }
    return false;
}

// 跳转到**应用**的权限页面
export function gotoAppPermissionSetting() {
    if (isIos) {
        const UIApplication = plus.ios.import('UIApplication');
        const application2 = UIApplication.sharedApplication();
        const NSURL2 = plus.ios.import('NSURL');
        // var setting2 = NSURL2.URLWithString("prefs:root=LOCATION_SERVICES");
        const setting2 = NSURL2.URLWithString('app-settings:');
        application2.openURL(setting2);

        plus.ios.deleteObject(setting2);
        plus.ios.deleteObject(NSURL2);
        plus.ios.deleteObject(application2);
    } else {
        // console.log(plus.device.vendor);
        const Intent = plus.android.importClass('android.content.Intent');
        const Settings = plus.android.importClass('android.provider.Settings');
        const Uri = plus.android.importClass('android.net.Uri');
        const mainActivity = plus.android.runtimeMainActivity();
        const intent = new Intent();
        intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        const uri = Uri.fromParts('package', mainActivity.getPackageName(), null);
        intent.setData(uri);
        mainActivity.startActivity(intent);
    }
}

// 检查系统的设备服务是否开启
// var checkSystemEnableLocation = async function () {
export function checkSystemEnableLocation() {
    if (isIos) {
        var result = false;
        const cllocationManger = plus.ios.import('CLLocationManager');
        var result = cllocationManger.locationServicesEnabled();
        console.log('系统定位开启:' + result);
        plus.ios.deleteObject(cllocationManger);
        return result;
    } else {
        const context = plus.android.importClass('android.content.Context');
        const locationManager = plus.android.importClass('android.location.LocationManager');
        const main = plus.android.runtimeMainActivity();
        const mainSvr = main.getSystemService(context.LOCATION_SERVICE);
        var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);
        console.log('系统定位开启:' + result);
        return result;
    }
}

/** 判断相册权限逻辑 */
export const beforeChooseImage = (chooseImage: Function) => {
    // #ifdef MP-WEIXIN
    chooseImage();
    // #endif

    // #ifdef APP-PLUS

    switch (uni.getSystemInfoSync().platform) {
        case 'android':
            // eslint-disable-next-line no-case-declarations
            const permisionID = 'android.permission.READ_EXTERNAL_STORAGE';
            requestAndroidPermission(permisionID).then((res) => {
                if (res === 1) {
                    chooseImage();
                } else if (res === -1) {
                    uni.showModal({
                        title: '无法访问相册中照片',
                        cancelColor: '#2A2827',
                        confirmText: '前往系统设置',
                        confirmColor: '#FA9240',
                        content: '当前无照片访问权限，建议前往系统设置，允许应用访问相册中照片',
                        success: (res) => {
                            if (res.confirm) {
                                gotoAppPermissionSetting();
                            } else if (res.cancel) {
                                // plus.runtime.openURL('package:');
                                console.log('用户点击取消');
                            }
                        },
                    });
                } else {
                    uni.showModal({
                        title: '无法访问相册中照片',
                        cancelColor: '#2A2827',
                        confirmText: '前往系统设置',
                        confirmColor: '#FA9240',
                        content: '当前无照片访问权限，建议前往系统设置，允许应用访问相册中照片',
                        success: (res) => {
                            if (res.confirm) {
                                plus.android.requestPermissions([permisionID]);
                                // plus.runtime.openURL("package:");
                            } else if (res.cancel) {
                                // plus.runtime.openURL('package:');
                                console.log('用户点击取消');
                            }
                        },
                    });
                }
            });

            break;
        case 'ios':
            if (judgeIosPermissionPhotoLibrary()) {
                chooseImage();
            } else {
                uni.showModal({
                    title: '无法访问相册',
                    cancelColor: '#2A2827',
                    confirmText: '前往系统设置',
                    confirmColor: '#FA9240',
                    content: '当前无照片访问权限，建议前往系统设置，允许应用访问相册',
                    success: (res) => {
                        if (res.confirm) {
                            gotoAppPermissionSetting();
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                        }
                    },
                });
            }
            break;
    }
    // #endif
};

/** 无摄像头权限 */
export const noCameraPermission = (content = '当前无摄像头访问权限，建议前往系统设置，允许应用访问摄像头') => {
    // #ifdef APP-PLUS
    /** 禁止读取摄像头 */
    uni.showModal({
        title: '无法访问摄像头',
        cancelColor: '#2A2827',
        confirmText: '前往系统设置',
        confirmColor: '#FA9240',
        content,
        success: (res) => {
            if (res.confirm) {
                gotoAppPermissionSetting();
            } else if (res.cancel) {
                // plus.runtime.openURL('package:');
                console.log('用户点击取消');
            }
        },
    });

    // #endif
};

/** 判断摄像头权限权限逻辑 */
export const beforeCamera = (scanCode: Function) => {
    // #ifdef MP-WEIXIN
    scanCode();
    // #endif

    // #ifdef APP-PLUS
    switch (uni.getSystemInfoSync().platform) {
        case 'android':
            // eslint-disable-next-line no-case-declarations
            const permisionID = 'android.permission.CAMERA';
            requestAndroidPermission(permisionID).then((res) => {
                if (res === 1) {
                    scanCode();
                } else {
                    noCameraPermission('您已经禁止该应用访问您的“摄像头”，将无法使用扫码功能，如需使用，请在“系统设置”或授权对话框中允许“摄像头”权限');
                }
            });

            break;
        case 'ios':
            scanCode();
            break;
    }
    // #endif
};
