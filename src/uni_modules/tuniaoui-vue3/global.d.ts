// For this project development
import '@vue/runtime-core';

declare module '@vue/runtime-core' {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        TnActionSheet: typeof import('./components')['TnActionSheet'];
        TnAvatar: typeof import('./components')['TnAvatar'];
        TnAvatarGroup: typeof import('./components')['TnAvatarGroup'];
        TnBadge: typeof import('./components')['TnBadge'];
        TnBubbleBox: typeof import('./components')['TnBubbleBox'];
        TnButton: typeof import('./components')['TnButton'];
        TnCalendar: typeof import('./components')['TnCalendar'];
        TnCheckbox: typeof import('./components')['TnCheckbox'];
        TnCheckboxGroup: typeof import('./components')['TnCheckboxGroup'];
        TnCircleProgress: typeof import('./components')['TnCircleProgress'];
        TnCollapse: typeof import('./components')['TnCollapse'];
        TnCollapseItem: typeof import('./components')['TnCollapseItem'];
        TnCountDown: typeof import('./components')['TnCountDown'];
        TnCountScroll: typeof import('./components')['TnCountScroll'];
        TnCountTo: typeof import('./components')['TnCountTo'];
        TnDateTimePicker: typeof import('./components')['TnDateTimePicker'];
        TnEmpty: typeof import('./components')['TnEmpty'];
        TnFooter: typeof import('./components')['TnFooter'];
        TnForm: typeof import('./components')['TnForm'];
        TnFormItem: typeof import('./components')['TnFormItem'];
        TnIcon: typeof import('./components')['TnIcon'];
        TnImageUpload: typeof import('./components')['TnImageUpload'];
        TnIndexList: typeof import('./components')['TnIndexList'];
        TnInput: typeof import('./components')['TnInput'];
        TnKeyboard: typeof import('./components')['TnKeyboard'];
        TnLazyLoad: typeof import('./components')['TnLazyLoad'];
        TnLineProgress: typeof import('./components')['TnLineProgress'];
        TnListItem: typeof import('./components')['TnListItem'];
        TnLoading: typeof import('./components')['TnLoading'];
        TnLoadmore: typeof import('./components')['TnLoadmore'];
        TnModal: typeof import('./components')['TnModal'];
        TnNavbar: typeof import('./components')['TnNavbar'];
        TnNoticeBar: typeof import('./components')['TnNoticeBar'];
        TnNotify: typeof import('./components')['TnNotify'];
        TnNumberBox: typeof import('./components')['TnNumberBox'];
        TnOverlay: typeof import('./components')['TnOverlay'];
        TnPhotoAlbum: typeof import('./components')['TnPhotoAlbum'];
        TnPicker: typeof import('./components')['TnPicker'];
        TnPopup: typeof import('./components')['TnPopup'];
        TnRadio: typeof import('./components')['TnRadio'];
        TnRadioGroup: typeof import('./components')['TnRadioGroup'];
        TnRate: typeof import('./components')['TnRate'];
        TnReadMore: typeof import('./components')['TnReadMore'];
        TnRegionPicker: typeof import('./components')['TnRegionPicker'];
        TnScrollList: typeof import('./components')['TnScrollList'];
        TnSearchBox: typeof import('./components')['TnSearchBox'];
        TnSlider: typeof import('./components')['TnSlider'];
        TnSteps: typeof import('./components')['TnSteps'];
        TnStepsItem: typeof import('./components')['TnStepsItem'];
        TnSticky: typeof import('./components')['TnSticky'];
        TnSubsection: typeof import('./components')['TnSubsection'];
        TnSwipeAction: typeof import('./components')['TnSwipeAction'];
        TnSwipeActionItem: typeof import('./components')['TnSwipeActionItem'];
        TnSwiper: typeof import('./components')['TnSwiper'];
        TnSwitch: typeof import('./components')['TnSwitch'];
        TnSwitchTab: typeof import('./components')['TnSwitchTab'];
        TnTabbar: typeof import('./components')['TnTabbar'];
        TnTabbarItem: typeof import('./components')['TnTabbarItem'];
        TnTabs: typeof import('./components')['TnTabs'];
        TnTabsItem: typeof import('./components')['TnTabsItem'];
        TnTag: typeof import('./components')['TnTag'];
        TnTitle: typeof import('./components')['TnTitle'];
        TnWaterFall: typeof import('./components')['TnWaterFall'];
        TnWeekCalendar: typeof import('./components')['TnWeekCalendar'];
    }

    // interface ComponentCustomProperties {}
}

export {};
