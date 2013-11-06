var DEV;
(function (DEV) {
    var createCssInformation = (function () {
        function createCssInformation(cssArgs) {
            this.cssArgs = cssArgs;
            this.cssPath = cssArgs.path;
            this.cssFiles = cssArgs.file;
            this.cssPure = cssArgs.pure;
        }
        return createCssInformation;
    })();
    DEV.createCssInformation = createCssInformation;

    var CreatePrefix = (function () {
        function CreatePrefix() {
        }
        CreatePrefix.prototype.getPrefix = function () {
            var _getUserAgent = navigator.userAgent.toLowerCase();
            var key;

            for (key in UserAgentLowerEnum) {
                if (_getUserAgent.indexOf(UserAgentLowerEnum[key]) != -1) {
                    return this.prefix = PrefixEnum[key];
                }
            }
        };
        return CreatePrefix;
    })();
    DEV.CreatePrefix = CreatePrefix;

    var createCssFileName = (function () {
        function createCssFileName(cssFile) {
            this.cssFile = cssFile;
        }
        return createCssFileName;
    })();
    DEV.createCssFileName = createCssFileName;

    var PrefixFileNameDecorator = (function () {
        function PrefixFileNameDecorator(cssFileName) {
            this.cssFileName = cssFileName;
        }
        PrefixFileNameDecorator.prototype.getCssFileName = function () {
            var createPrefix = new CreatePrefix();
            var _prefix = createPrefix.getPrefix();
            return;
        };
        return PrefixFileNameDecorator;
    })();
    DEV.PrefixFileNameDecorator = PrefixFileNameDecorator;

    var CreateLinkrel = (function () {
        function CreateLinkrel() {
            var _linkElement;

            _linkElement = document.createElement("link");
            _linkElement.setAttribute("rel", "stylesheet");
            _linkElement.setAttribute("type", "text/css");

            this.linkElement = _linkElement;
        }
        CreateLinkrel.prototype.getLinkrel = function () {
            return this.linkElement;
        };
        return CreateLinkrel;
    })();
    DEV.CreateLinkrel = CreateLinkrel;

    (function (PrefixEnum) {
        PrefixEnum[PrefixEnum["webkit"] = 0] = "webkit";
        PrefixEnum[PrefixEnum["moz"] = 1] = "moz";
        PrefixEnum[PrefixEnum["o"] = 2] = "o";
        PrefixEnum[PrefixEnum["ms"] = 3] = "ms";
    })(DEV.PrefixEnum || (DEV.PrefixEnum = {}));
    var PrefixEnum = DEV.PrefixEnum;

    (function (UserAgentLowerEnum) {
        UserAgentLowerEnum[UserAgentLowerEnum["applewebkit"] = 0] = "applewebkit";
        UserAgentLowerEnum[UserAgentLowerEnum["firefox"] = 1] = "firefox";
        UserAgentLowerEnum[UserAgentLowerEnum["opera"] = 2] = "opera";
        UserAgentLowerEnum[UserAgentLowerEnum["msie"] = 3] = "msie";
    })(DEV.UserAgentLowerEnum || (DEV.UserAgentLowerEnum = {}));
    var UserAgentLowerEnum = DEV.UserAgentLowerEnum;
})(DEV || (DEV = {}));
