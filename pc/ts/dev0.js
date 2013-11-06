var DEV;
(function (DEV) {
    var CssFileInformation = (function () {
        function CssFileInformation(cssFileArgs) {
            this.cssFileArgs = cssFileArgs;
            this.cssFilePath = new CssFilePath(this.cssFileArgs.path);
            this.cssFilesName = new CssFilesName(this.cssFileArgs.file);
            this.cssSetPrefixFlag = new CssSetPrefixFlag(this.cssFileArgs.pure);
        }
        return CssFileInformation;
    })();
    DEV.CssFileInformation = CssFileInformation;

    var CssFilePath = (function () {
        function CssFilePath(path) {
            this.path = path;
        }
        CssFilePath.prototype.getCssFilePath = function () {
            return this.path;
        };
        return CssFilePath;
    })();
    DEV.CssFilePath = CssFilePath;

    var CssFilesName = (function () {
        function CssFilesName(files) {
            this.files = files;
        }
        CssFilesName.prototype.getCssFilesName = function () {
            return this.files;
        };
        return CssFilesName;
    })();
    DEV.CssFilesName = CssFilesName;

    var CssSetPrefixFlag = (function () {
        function CssSetPrefixFlag(prefixFlag) {
            this.prefixFlag = prefixFlag;
        }
        CssSetPrefixFlag.prototype.getCssSetPrefixFlag = function () {
            return this.prefixFlag;
        };
        return CssSetPrefixFlag;
    })();
    DEV.CssSetPrefixFlag = CssSetPrefixFlag;

    var PrefixCheck = (function () {
        function PrefixCheck() {
        }
        return PrefixCheck;
    })();
    DEV.PrefixCheck = PrefixCheck;
})(DEV || (DEV = {}));
