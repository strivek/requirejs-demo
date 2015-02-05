//Load common code that includes config, then load the app logic for this page.
require(['./common'], function (common) {
    require(['app/main1']);//混杂js
    require(['app/slider'])//轮播
});
