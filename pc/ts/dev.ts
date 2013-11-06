module DEV {

  export class createCssInformation {

    cssPath: string;
    cssFiles: string[];
    cssPure: boolean;

    constructor(private cssArgs) {
      this.cssPath = cssArgs.path;
      this.cssFiles = cssArgs.file;
      this.cssPure = cssArgs.pure;
    }

  }

  export class CreatePrefix {
    
    private prefix: string;

    getPrefix(): string {
      var _getUserAgent: string = navigator.userAgent.toLowerCase();
      var key: string;

      for (key in UserAgentLowerEnum) {

        if (_getUserAgent.indexOf(UserAgentLowerEnum[key]) != -1) {
          return this.prefix = PrefixEnum[key];
        }

      }

    }

  }

  export interface CssFileName {
    getCssFileName(): string;
  }

  export class createCssFileName {

    constructor(private cssFile: string) {

    }

  }

  export class PrefixFileNameDecorator implements CssFileName {

    private prefixFileName: string;
    private prefix: string;

    constructor(private cssFileName: CssFileName) {}

    getCssFileName(): string {
      var createPrefix: CreatePrefix = new CreatePrefix();
      var _prefix: string = createPrefix.getPrefix();
      return ;
    }
  }

  export class CreateLinkrel {

    private linkElement: HTMLLinkElement;
    
    constructor() {
      
      var _linkElement: HTMLLinkElement;

      _linkElement = document.createElement("link");
      _linkElement.setAttribute("rel", "stylesheet");
      _linkElement.setAttribute("type", "text/css");

      this.linkElement = _linkElement;

    }

    getLinkrel(): HTMLLinkElement {
      return this.linkElement;
    }

  }

  export enum PrefixEnum {
    webkit,
    moz,
    o,
    ms
  }

  export enum UserAgentLowerEnum {
    applewebkit,
    firefox,
    opera,
    msie
  }

}


  /*export class AppendCss {
    
    private filePath: string[];
    private linkrel: HTMLLinkElement;

    constructor(private fileArgs: any) {
      var path: string = this.fileArgs.path;
      var filesName: any = this.fileArgs.file;
      var createFilePath: CreateFilePath = new CreateFilePath(path, filesName);
      this.filePath = createFilePath.setFilePath();
      var createLinkrel: CreateLinkrel = new CreateLinkrel();
      this.linkrel = createLinkrel.setLinkrel();
    }

    headAppend() {

      var linkTag: HTMLLinkElement;
      var headElem: HTMLHeadElement = document.getElementsByTagName("head")[0];

      for (var i: number = 0, I: any = this.filePath.length; i < I; i++) {
        linkTag = this.linkrel;
        linkTag.setAttribute("href", this.filePath[i]);
        headElem.appendChild(linkTag);
      }

    }

  }

  export class CreateFilePath {

    private filePath: string[];

    constructor(
      private path: string,
      private filesName: any
    ) {
      
      var _filePath: string[];
      var prefixChk: PrefixCheck = new PrefixCheck();
      var prefix: string = prefixChk.getPrefix();

      for (var i: number = 0, I: any = this.filesName.file.length; i < I; i++) {
        _filePath[i] = this.path + prefix + this.filesName.file[i] + ".css";
      }

      this.filePath = _filePath;

    }

    setFilePath(): string[] {
      return this.filePath;
    }

  }*/