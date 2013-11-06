module DEV {

  // cssファイル情報
  export class CssFileInformation {
    private cssFilePath: CssFilePath;
    private cssFilesName: CssFilesName;
    private cssSetPrefixFlag: CssSetPrefixFlag;

    constructor(private cssFileArgs: any) {
      var cssFilePathCreater = new CssFilePath(this.cssFileArgs.path);
      this.cssFilePath.getCssFilePath();
      this.cssFilePath = new CssFilePath(this.cssFileArgs.path);
      this.cssFilesName = new CssFilesName(this.cssFileArgs.file);
      this.cssSetPrefixFlag = new CssSetPrefixFlag(this.cssFileArgs.pure);
    }

  }

  export class CssFilePath {

    constructor(private path: string) {}

    getCssFilePath(): string {
      return this.path;
    }
  }

  export class CssFilesName {

    constructor(private files: string[]) {}

    getCssFilesName(): string[] {
      return this.files;
    }
  }

  export class CssSetPrefixFlag {

    constructor(private prefixFlag: boolean) {}

    getCssSetPrefixFlag(): boolean {
      return this.prefixFlag;
    }
  }

  // prefixチェック
  export class PrefixCheck {
    private prefix: string;
  }

  // prefix + file name(decorator)
  /*export interface PrefixFileName {
    getFileName(): string;
  }

  export class CssFileName implements PrefixFileName {
    
    private fileName: string;

    getFileName(): string {
      return this.fileName;
    }

  }

  export class addPrefixToFileName implements PrefixFileName {
    constructor(private prefixFileName: PrefixFileName) {}

    getFileName(): string {

    }
  }

  // vender prefix
  export enum PrefixEnum {
    webkit,
    moz,
    o,
    ms
  }

  // useragent
  export enum UserAgentLowerEnum {
    applewebkit,
    firefox,
    opera,
    msie
  }*/

}
