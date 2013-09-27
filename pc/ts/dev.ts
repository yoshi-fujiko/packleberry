module DEV {

  export class setPrefix {

    private ua: string;
    private vendor: any;
    constructor() {
      ua: string = navigator.userAgent;
      vendor: {[key: string]:string} = {};
      vendor['moz'] = "firefox";
      vendor['o'] = "opera";
      vendor['webkit'] = "applewebkit";
      vendor['ms'] = "msie";
    }

    prefix(): string {
      return null;
    }
  }

}
