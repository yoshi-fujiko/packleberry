var DEV;
(function (DEV) {
    var setPrefix = (function () {
        function setPrefix() {
            var ua = navigator.userAgent;
            var vendor = {};
            vendor['moz'] = "firefox";
            vendor['o'] = "opera";
            vendor['webkit'] = "applewebkit";
            vendor['ms'] = "msie";
        }
        setPrefix.prototype.prefix = function () {
            return null;
        };
        return setPrefix;
    })();
    DEV.setPrefix = setPrefix;
})(DEV || (DEV = {}));
