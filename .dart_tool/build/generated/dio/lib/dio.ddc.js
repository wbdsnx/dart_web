define(['dart_sdk', 'packages/dio/src/dio', 'packages/dio/src/adapter'], function(dart_sdk, packages__dio__src__dio, packages__dio__src__adapter) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interceptor = packages__dio__src__dio.src__interceptor;
  const response = packages__dio__src__adapter.src__response;
  const log = Object.create(dart.library);
  const dio = Object.create(dart.library);
  const $forEach = dartx.forEach;
  const $replaceAll = dartx.replaceAll;
  const $toString = dartx.toString;
  const $split = dartx.split;
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let StringAnddynamicTovoid = () => (StringAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [core.String, dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(core.print, ObjectTovoid());
    }
  });
  let C0;
  const _printResponse = dart.privateName(log, "_printResponse");
  log.LogInterceptor = class LogInterceptor extends interceptor.Interceptor {
    get request() {
      return this[request$];
    }
    set request(value) {
      this[request$] = value;
    }
    get requestHeader() {
      return this[requestHeader$];
    }
    set requestHeader(value) {
      this[requestHeader$] = value;
    }
    get requestBody() {
      return this[requestBody$];
    }
    set requestBody(value) {
      this[requestBody$] = value;
    }
    get responseBody() {
      return this[responseBody$];
    }
    set responseBody(value) {
      this[responseBody$] = value;
    }
    get responseHeader() {
      return this[responseHeader$];
    }
    set responseHeader(value) {
      this[responseHeader$] = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      this[error$] = value;
    }
    get logPrint() {
      return this[logPrint$];
    }
    set logPrint(value) {
      this[logPrint$] = value;
    }
    onRequest(options) {
      return async.async(dart.dynamic, (function* onRequest() {
        let t0;
        this.logPrint("*** Request ***");
        this.printKV("uri", options.uri);
        if (dart.test(this.request)) {
          this.printKV("method", options.method);
          this.printKV("responseType", (t0 = options.responseType, t0 == null ? null : dart.toString(t0)));
          this.printKV("followRedirects", options.followRedirects);
          this.printKV("connectTimeout", options.connectTimeout);
          this.printKV("receiveTimeout", options.receiveTimeout);
          this.printKV("extra", options.extra);
        }
        if (dart.test(this.requestHeader)) {
          let stringBuffer = new core.StringBuffer.new();
          options.headers[$forEach](dart.fn((key, v) => stringBuffer.write("\n  " + dart.str(key) + ":" + dart.str(v)), StringAnddynamicTovoid()));
          this.printKV("headers", stringBuffer.toString());
          stringBuffer.clear();
        }
        if (dart.test(this.requestBody)) {
          this.logPrint("data:");
          this.printAll(options.data);
        }
        this.logPrint("");
      }).bind(this));
    }
    onError(err) {
      return async.async(dart.dynamic, (function* onError() {
        if (dart.test(this.error)) {
          this.logPrint("*** DioError ***:");
          this.logPrint("uri: " + dart.str(err.request.uri));
          this.logPrint(dart.str(err));
          if (err.response != null) {
            this[_printResponse](err.response);
          }
          this.logPrint("");
        }
      }).bind(this));
    }
    onResponse(response) {
      return async.async(dart.dynamic, (function* onResponse() {
        this.logPrint("*** Response ***");
        this[_printResponse](response);
      }).bind(this));
    }
    [_printResponse](response) {
      let t0, t0$;
      this.printKV("uri", (t0 = response.request, t0 == null ? null : t0.uri));
      if (dart.test(this.responseHeader)) {
        this.printKV("statusCode", response.statusCode);
        if (dart.equals(response.isRedirect, true)) {
          this.printKV("redirect", response.realUri);
        }
        if (response.headers != null) {
          this.logPrint("headers:");
          let headers = (t0$ = dart.toString(response.headers), t0$ == null ? null : t0$[$replaceAll]("\n", "\n "));
          if (headers != null) {
            this.logPrint(" " + dart.str(headers));
          }
        }
      }
      if (dart.test(this.responseBody)) {
        this.logPrint("Response Text:");
        this.printAll(dart.toString(response));
      }
      this.logPrint("");
    }
    printKV(key, v) {
      this.logPrint(dart.str(key) + ": " + dart.str(v));
    }
    printAll(msg) {
      dart.toString(msg)[$split]("\n")[$forEach](this.logPrint);
    }
  };
  (log.LogInterceptor.new = function(opts) {
    let request = opts && 'request' in opts ? opts.request : true;
    let requestHeader = opts && 'requestHeader' in opts ? opts.requestHeader : true;
    let requestBody = opts && 'requestBody' in opts ? opts.requestBody : false;
    let responseHeader = opts && 'responseHeader' in opts ? opts.responseHeader : true;
    let responseBody = opts && 'responseBody' in opts ? opts.responseBody : false;
    let error = opts && 'error' in opts ? opts.error : true;
    let logPrint = opts && 'logPrint' in opts ? opts.logPrint : C0 || CT.C0;
    this[request$] = request;
    this[requestHeader$] = requestHeader;
    this[requestBody$] = requestBody;
    this[responseHeader$] = responseHeader;
    this[responseBody$] = responseBody;
    this[error$] = error;
    this[logPrint$] = logPrint;
    ;
  }).prototype = log.LogInterceptor.prototype;
  dart.addTypeTests(log.LogInterceptor);
  const request$ = Symbol("LogInterceptor.request");
  const requestHeader$ = Symbol("LogInterceptor.requestHeader");
  const requestBody$ = Symbol("LogInterceptor.requestBody");
  const responseBody$ = Symbol("LogInterceptor.responseBody");
  const responseHeader$ = Symbol("LogInterceptor.responseHeader");
  const error$ = Symbol("LogInterceptor.error");
  const logPrint$ = Symbol("LogInterceptor.logPrint");
  dart.setMethodSignature(log.LogInterceptor, () => ({
    __proto__: dart.getMethods(log.LogInterceptor.__proto__),
    [_printResponse]: dart.fnType(dart.void, [response.Response]),
    printKV: dart.fnType(dart.dynamic, [core.String, core.Object]),
    printAll: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setLibraryUri(log.LogInterceptor, "package:dio/src/interceptors/log.dart");
  dart.setFieldSignature(log.LogInterceptor, () => ({
    __proto__: dart.getFields(log.LogInterceptor.__proto__),
    request: dart.fieldType(core.bool),
    requestHeader: dart.fieldType(core.bool),
    requestBody: dart.fieldType(core.bool),
    responseBody: dart.fieldType(core.bool),
    responseHeader: dart.fieldType(core.bool),
    error: dart.fieldType(core.bool),
    logPrint: dart.fieldType(dart.fnType(dart.void, [core.Object]))
  }));
  dart.trackLibraries("packages/dio/dio", {
    "package:dio/src/interceptors/log.dart": log,
    "package:dio/dio.dart": dio
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/interceptors/log.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAuBO;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAYwB;;;;;;cAGG;AAAhB;;QACd,cAAS;QACT,aAAQ,OAAO,AAAQ,OAAD;AAEtB,sBAAI;UACF,aAAQ,UAAU,AAAQ,OAAD;UACzB,aAAQ,iBAAsC,KAAtB,AAAQ,OAAD,mCAAe;UAC9C,aAAQ,mBAAmB,AAAQ,OAAD;UAClC,aAAQ,kBAAkB,AAAQ,OAAD;UACjC,aAAQ,kBAAkB,AAAQ,OAAD;UACjC,aAAQ,SAAS,AAAQ,OAAD;;AAE1B,sBAAI;AACW,6BAAe;UAC5B,AAAQ,AAAQ,OAAT,mBAAiB,SAAC,KAAK,MAAM,AAAa,YAAD,OAAO,AAAa,kBAAP,GAAG,mBAAE,CAAC;UACnE,aAAQ,WAAW,AAAa,YAAD;UAC/B,AAAa,YAAD;;AAEd,sBAAI;UACF,cAAS;UACT,cAAS,AAAQ,OAAD;;QAElB,cAAS;MACX;;YAGwB;AAAV;AACZ,sBAAI;UACF,cAAS;UACT,cAAS,AAAyB,mBAAjB,AAAI,AAAQ,GAAT;UACpB,cAAe,SAAJ,GAAG;AACd,cAAI,AAAI,GAAD,aAAa;YAClB,qBAAe,AAAI,GAAD;;UAEpB,cAAS;;MAEb;;eAG2B;AAAV;QACf,cAAS;QACT,qBAAe,QAAQ;MACzB;;qBAE6B;;MAC3B,aAAQ,QAAyB,KAAlB,AAAS,QAAD,8BAAU;AACjC,oBAAI;QACF,aAAQ,cAAc,AAAS,QAAD;AAC9B,YAAwB,YAApB,AAAS,QAAD,aAAe;UACzB,aAAQ,YAAY,AAAS,QAAD;;AAE9B,YAAI,AAAS,QAAD,YAAY;UACtB,cAAS;AACL,yBAAuC,MAAZ,cAAjB,AAAS,QAAD,gCAAqB,iBAAW,MAAM;AAC5D,cAAI,OAAO,IAAI;YACb,cAAS,AAAW,eAAR,OAAO;;;;AAIzB,oBAAI;QACF,cAAS;QACT,cAAkB,cAAT,QAAQ;;MAEnB,cAAS;IACX;YAEe,KAAY;MACzB,cAAmB,SAAR,GAAG,oBAAG,CAAC;IACpB;aAES;MACH,AAAW,AAAY,cAA3B,GAAG,UAAkB,gBAAc;IACrC;;;QAhHO;QACA;QACA;QACA;QACA;QACA;QACA;IANA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL","file":"dio.ddc.js"}');
  // Exports:
  return {
    src__interceptors__log: log,
    dio: dio
  };
});

//# sourceMappingURL=dio.ddc.js.map
