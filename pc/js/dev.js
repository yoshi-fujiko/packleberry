(function() {

// うっかりconsole対応
if (typeof window.console === "undefined") window.console = {};
if (typeof window.console.log !== "function") window.console.log = function () {};

if(typeof(DEV) == 'undefined' || !DEV ){
  window.DEV = new Object();
}

DEV = {
  /**
  * changeStylesheet
  * CSSを出し分けする。
  * @param {String} ary CSSファイル名をプレフィックスなしで記述
  *  DEV.changeStylesheet({
  *    path: '../../css/',
  *    file: ['core','sub_emoji'],
  *    pure: true //ベンダープレフィックスなしで書き出し
  *  });
  */
  
  // 振り分け用 {Prefix:Ua}
  vendor: {
    moz: "firefox",
    o: "opera",
    webkit: "applewebkit",
    ms7: "msie 7",
    ms8: "msie 8",
    ms9: "msie 9",
    ms10: "msie 10"
  },
  
  changeStylesheet: function(args){
    var ua = navigator.userAgent,
        head = document.getElementsByTagName("head")[0];
        venderRegObj = null;
        linkNode = null;
        prefix = "",
        cssFile = ""

    // Prefixセット
    if (!args.pure) {
      for (var i in this.vendor) {
        vendorRegObj = new RegExp(this.vendor[i], "i");
        if (ua.match(vendorRegObj)) prefix = i + "_";
      }
    }
    // link rel出力
    for (var j = 0, J = args.file.length; j < J; j++) {
      cssFile = args.path + prefix + args.file[j] + ".css";
      linkNode = document.createElement("link");
      linkNode.setAttribute("rel", "stylesheet");
      linkNode.setAttribute("type", "text/css");
      linkNode.setAttribute("href", cssFile);
      if (typeof linkNode != "undefined") {
        head.appendChild(linkNode);
      }
      //console.log(linkNode);
    }
  }
}

})(window);
