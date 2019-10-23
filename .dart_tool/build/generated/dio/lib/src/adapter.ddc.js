define(['dart_sdk', 'packages/http_parser/http_parser'], function(dart_sdk, packages__http_parser__http_parser) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const dio_error = Object.create(dart.library);
  const response = Object.create(dart.library);
  const redirect_record = Object.create(dart.library);
  const headers = Object.create(dart.library);
  const options$ = Object.create(dart.library);
  const cancel_token = Object.create(dart.library);
  const transformer = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const adapter = Object.create(dart.library);
  const $toString = dartx.toString;
  const $last = dartx.last;
  const $trim = dartx.trim;
  const $toLowerCase = dartx.toLowerCase;
  const $map = dartx.map;
  const $_get = dartx._get;
  const $length = dartx.length;
  const $first = dartx.first;
  const $add = dartx.add;
  const $join = dartx.join;
  const $toList = dartx.toList;
  const $_set = dartx._set;
  const $removeWhere = dartx.removeWhere;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  const $keys = dartx.keys;
  const $forEach = dartx.forEach;
  const $startsWith = dartx.startsWith;
  const $split = dartx.split;
  const $replaceAll = dartx.replaceAll;
  const $isNotEmpty = dartx.isNotEmpty;
  const $contains = dartx.contains;
  const $addAll = dartx.addAll;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let LinkedMapOfString$ListOfString = () => (LinkedMapOfString$ListOfString = dart.constFn(_js_helper.LinkedMap$(core.String, ListOfString())))();
  let MapEntryOfString$ListOfString = () => (MapEntryOfString$ListOfString = dart.constFn(core.MapEntry$(core.String, ListOfString())))();
  let StringAndListOfStringToMapEntryOfString$ListOfString = () => (StringAndListOfStringToMapEntryOfString$ListOfString = dart.constFn(dart.fnType(MapEntryOfString$ListOfString(), [core.String, ListOfString()])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let StringAndListOfStringToNull = () => (StringAndListOfStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, ListOfString()])))();
  let LinkedHashMapOfString$dynamic = () => (LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapEntryOfString$dynamic = () => (MapEntryOfString$dynamic = dart.constFn(core.MapEntry$(core.String, dart.dynamic)))();
  let StringAnddynamicToMapEntryOfString$dynamic = () => (StringAnddynamicToMapEntryOfString$dynamic = dart.constFn(dart.fnType(MapEntryOfString$dynamic(), [core.String, dart.dynamic])))();
  let StringAnddynamicToString = () => (StringAnddynamicToString = dart.constFn(dart.fnType(core.String, [core.String, dart.dynamic])))();
  let _StreamHandlerTransformerOfUint8List$dynamic = () => (_StreamHandlerTransformerOfUint8List$dynamic = dart.constFn(async._StreamHandlerTransformer$(typed_data.Uint8List, dart.dynamic)))();
  let Uint8ListAndEventSinkToNull = () => (Uint8ListAndEventSinkToNull = dart.constFn(dart.fnType(core.Null, [typed_data.Uint8List, async.EventSink])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let IterableOfint = () => (IterableOfint = dart.constFn(core.Iterable$(core.int)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let voidToFuture = () => (voidToFuture = dart.constFn(dart.fnType(async.Future, [dart.void])))();
  let String__ToString = () => (String__ToString = dart.constFn(dart.fnType(core.String, [core.String], {encoding: convert.Encoding})))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let dynamicAndStringTovoid = () => (dynamicAndStringTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, core.String])))();
  let StreamOfUint8List = () => (StreamOfUint8List = dart.constFn(async.Stream$(typed_data.Uint8List)))();
  let intToUint8List = () => (intToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.CONNECT_TIMEOUT",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.SEND_TIMEOUT",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.RECEIVE_TIMEOUT",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.RESPONSE",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.CANCEL",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.DEFAULT",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], dio_error.DioErrorType);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: options$.ResponseType.prototype,
        [_name$0]: "ResponseType.json",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: options$.ResponseType.prototype,
        [_name$0]: "ResponseType.stream",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: options$.ResponseType.prototype,
        [_name$0]: "ResponseType.plain",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: options$.ResponseType.prototype,
        [_name$0]: "ResponseType.bytes",
        index: 3
      });
    },
    get C11() {
      return C11 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], options$.ResponseType);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: convert.Latin1Codec.prototype,
        [_allowInvalid]: false
      });
    },
    get C13() {
      return C13 = dart.fn(core.Uri.encodeQueryComponent, String__ToString());
    }
  });
  const _name$ = dart.privateName(dio_error, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  dio_error.DioErrorType = class DioErrorType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (dio_error.DioErrorType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = dio_error.DioErrorType.prototype;
  dart.addTypeTests(dio_error.DioErrorType);
  dart.setLibraryUri(dio_error.DioErrorType, "package:dio/src/dio_error.dart");
  dart.setFieldSignature(dio_error.DioErrorType, () => ({
    __proto__: dart.getFields(dio_error.DioErrorType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(dio_error.DioErrorType, ['toString']);
  dio_error.DioErrorType.CONNECT_TIMEOUT = C0 || CT.C0;
  dio_error.DioErrorType.SEND_TIMEOUT = C1 || CT.C1;
  dio_error.DioErrorType.RECEIVE_TIMEOUT = C2 || CT.C2;
  dio_error.DioErrorType.RESPONSE = C3 || CT.C3;
  dio_error.DioErrorType.CANCEL = C4 || CT.C4;
  dio_error.DioErrorType.DEFAULT = C5 || CT.C5;
  dio_error.DioErrorType.values = C6 || CT.C6;
  dio_error.DioError = class DioError extends core.Object {
    get request() {
      return this[request$];
    }
    set request(value) {
      this[request$] = value;
    }
    get response() {
      return this[response$];
    }
    set response(value) {
      this[response$] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      this[error$] = value;
    }
    get message() {
      let t0, t0$;
      t0$ = (t0 = this.error, t0 == null ? null : dart.toString(t0));
      return t0$ == null ? "" : t0$;
    }
    toString() {
      let msg = "DioError [" + dart.str(this.type) + "]: " + dart.str(this.message);
      if (core.Error.is(this.error)) {
        msg = msg + ("\n" + dart.str(dart.dload(this.error, 'stackTrace')));
      }
      return msg;
    }
  };
  (dio_error.DioError.new = function(opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let response = opts && 'response' in opts ? opts.response : null;
    let type = opts && 'type' in opts ? opts.type : C5 || CT.C5;
    let error = opts && 'error' in opts ? opts.error : null;
    this[request$] = request;
    this[response$] = response;
    this[type$] = type;
    this[error$] = error;
    ;
  }).prototype = dio_error.DioError.prototype;
  dart.addTypeTests(dio_error.DioError);
  const request$ = Symbol("DioError.request");
  const response$ = Symbol("DioError.response");
  const type$ = Symbol("DioError.type");
  const error$ = Symbol("DioError.error");
  dio_error.DioError[dart.implements] = () => [core.Exception];
  dart.setGetterSignature(dio_error.DioError, () => ({
    __proto__: dart.getGetters(dio_error.DioError.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(dio_error.DioError, "package:dio/src/dio_error.dart");
  dart.setFieldSignature(dio_error.DioError, () => ({
    __proto__: dart.getFields(dio_error.DioError.__proto__),
    request: dart.fieldType(options$.RequestOptions),
    response: dart.fieldType(response.Response),
    type: dart.fieldType(dio_error.DioErrorType),
    error: dart.fieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(dio_error.DioError, ['toString']);
  const _is_Response_default = Symbol('_is_Response_default');
  response.Response$ = dart.generic(T => {
    class Response extends core.Object {
      get data() {
        return this[data$];
      }
      set data(value) {
        this[data$] = T._check(value);
      }
      get headers() {
        return this[headers$];
      }
      set headers(value) {
        this[headers$] = value;
      }
      get request() {
        return this[request$];
      }
      set request(value) {
        this[request$] = value;
      }
      get statusCode() {
        return this[statusCode$];
      }
      set statusCode(value) {
        this[statusCode$] = value;
      }
      get statusMessage() {
        return this[statusMessage$];
      }
      set statusMessage(value) {
        this[statusMessage$] = value;
      }
      get extra() {
        return this[extra$];
      }
      set extra(value) {
        this[extra$] = value;
      }
      get redirects() {
        return this[redirects$];
      }
      set redirects(value) {
        this[redirects$] = value;
      }
      get isRedirect() {
        return this[isRedirect$];
      }
      set isRedirect(value) {
        super.isRedirect = value;
      }
      get realUri() {
        let t0, t0$;
        t0$ = (t0 = this.redirects[$last], t0 == null ? null : t0.location);
        return t0$ == null ? this.request.uri : t0$;
      }
      toString() {
        if (core.Map.is(this.data)) {
          return convert.json.encode(this.data);
        }
        return dart.toString(this.data);
      }
    }
    (Response.new = function(opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let request = opts && 'request' in opts ? opts.request : null;
      let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : null;
      let statusCode = opts && 'statusCode' in opts ? opts.statusCode : null;
      let statusMessage = opts && 'statusMessage' in opts ? opts.statusMessage : null;
      let redirects = opts && 'redirects' in opts ? opts.redirects : null;
      let extra = opts && 'extra' in opts ? opts.extra : null;
      this[data$] = data;
      this[headers$] = headers;
      this[request$] = request;
      this[isRedirect$] = isRedirect;
      this[statusCode$] = statusCode;
      this[statusMessage$] = statusMessage;
      this[redirects$] = redirects;
      this[extra$] = extra;
      ;
    }).prototype = Response.prototype;
    dart.addTypeTests(Response);
    Response.prototype[_is_Response_default] = true;
    const data$ = Symbol("Response.data");
    const headers$ = Symbol("Response.headers");
    const request$ = Symbol("Response.request");
    const statusCode$ = Symbol("Response.statusCode");
    const statusMessage$ = Symbol("Response.statusMessage");
    const extra$ = Symbol("Response.extra");
    const redirects$ = Symbol("Response.redirects");
    const isRedirect$ = Symbol("Response.isRedirect");
    dart.setGetterSignature(Response, () => ({
      __proto__: dart.getGetters(Response.__proto__),
      realUri: core.Uri
    }));
    dart.setLibraryUri(Response, "package:dio/src/response.dart");
    dart.setFieldSignature(Response, () => ({
      __proto__: dart.getFields(Response.__proto__),
      data: dart.fieldType(T),
      headers: dart.fieldType(headers.Headers),
      request: dart.fieldType(options$.RequestOptions),
      statusCode: dart.fieldType(core.int),
      statusMessage: dart.fieldType(core.String),
      extra: dart.fieldType(core.Map$(core.String, dart.dynamic)),
      redirects: dart.fieldType(core.List$(redirect_record.RedirectRecord)),
      isRedirect: dart.finalFieldType(core.bool)
    }));
    dart.defineExtensionMethods(Response, ['toString']);
    return Response;
  });
  response.Response = response.Response$();
  dart.addTypeTests(response.Response, _is_Response_default);
  redirect_record.RedirectRecord = class RedirectRecord extends core.Object {
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
  };
  (redirect_record.RedirectRecord.new = function(statusCode, method, location) {
    this[statusCode$] = statusCode;
    this[method$] = method;
    this[location$] = location;
    ;
  }).prototype = redirect_record.RedirectRecord.prototype;
  dart.addTypeTests(redirect_record.RedirectRecord);
  const statusCode$ = Symbol("RedirectRecord.statusCode");
  const method$ = Symbol("RedirectRecord.method");
  const location$ = Symbol("RedirectRecord.location");
  dart.setLibraryUri(redirect_record.RedirectRecord, "package:dio/src/redirect_record.dart");
  dart.setFieldSignature(redirect_record.RedirectRecord, () => ({
    __proto__: dart.getFields(redirect_record.RedirectRecord.__proto__),
    statusCode: dart.finalFieldType(core.int),
    method: dart.finalFieldType(core.String),
    location: dart.finalFieldType(core.Uri)
  }));
  const _map = dart.privateName(headers, "_map");
  headers.Headers = class Headers extends core.Object {
    get map() {
      return this[_map];
    }
    _get(name) {
      return this[_map][$_get](name[$trim]()[$toLowerCase]());
    }
    value(name) {
      let arr = this._get(name);
      if (arr == null) return null;
      if (arr[$length] === 1) return arr[$first];
      dart.throw(core.Exception.new("\"" + dart.str(name) + "\" header has more than one value, please use Headers[name]"));
    }
    add(name, value) {
      let arr = this._get(name);
      if (arr == null) return this.set(name, value);
      arr[$add](value);
      this.set(name, arr[$join](","));
    }
    set(name, value) {
      name = name[$trim]()[$toLowerCase]();
      if (core.List.is(value)) {
        this[_map][$_set](name, value[$map](core.String, dart.fn(e => dart.toString(e), dynamicToString()))[$toList]());
      } else {
        this[_map][$_set](name, JSArrayOfString().of([core.String._check(dart.dsend(value, 'trim', []))]));
      }
    }
    remove(name, value) {
      let arr = this._get(name);
      if (arr == null) return;
      arr[$removeWhere](dart.fn(v => v == value, StringTobool()));
    }
    removeAll(name) {
      this[_map][$remove](name);
    }
    clear() {
      this[_map][$clear]();
    }
    forEach(f) {
      this[_map][$keys][$forEach](dart.fn(key => f(key, this._get(key)), StringTovoid()));
    }
    toString() {
      let stringBuffer = new core.StringBuffer.new();
      this[_map][$forEach](dart.fn((key, value) => {
        value[$forEach](dart.fn(e => stringBuffer.writeln(dart.str(key) + ": " + dart.str(e)), StringTovoid()));
      }, StringAndListOfStringToNull()));
      return stringBuffer.toString();
    }
  };
  (headers.Headers.new = function() {
    this[_map] = new (LinkedMapOfString$ListOfString()).new();
    ;
  }).prototype = headers.Headers.prototype;
  (headers.Headers.fromMap = function(map) {
    this[_map] = map[$map](core.String, ListOfString(), dart.fn((k, v) => new (MapEntryOfString$ListOfString()).__(k[$trim]()[$toLowerCase](), v), StringAndListOfStringToMapEntryOfString$ListOfString()));
    ;
  }).prototype = headers.Headers.prototype;
  dart.addTypeTests(headers.Headers);
  dart.setMethodSignature(headers.Headers, () => ({
    __proto__: dart.getMethods(headers.Headers.__proto__),
    _get: dart.fnType(core.List$(core.String), [core.String]),
    value: dart.fnType(core.String, [core.String]),
    add: dart.fnType(dart.void, [core.String, core.String]),
    set: dart.fnType(dart.void, [core.String, dart.dynamic]),
    remove: dart.fnType(dart.void, [core.String, core.String]),
    removeAll: dart.fnType(dart.void, [core.String]),
    clear: dart.fnType(dart.void, []),
    forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [core.String, core.List$(core.String)])])
  }));
  dart.setGetterSignature(headers.Headers, () => ({
    __proto__: dart.getGetters(headers.Headers.__proto__),
    map: core.Map$(core.String, core.List$(core.String))
  }));
  dart.setLibraryUri(headers.Headers, "package:dio/src/headers.dart");
  dart.setFieldSignature(headers.Headers, () => ({
    __proto__: dart.getFields(headers.Headers.__proto__),
    [_map]: dart.finalFieldType(core.Map$(core.String, core.List$(core.String)))
  }));
  dart.defineExtensionMethods(headers.Headers, ['toString']);
  dart.defineLazy(headers.Headers, {
    /*headers.Headers.acceptHeader*/get acceptHeader() {
      return "accept";
    },
    /*headers.Headers.contentEncodingHeader*/get contentEncodingHeader() {
      return "content-encoding";
    },
    /*headers.Headers.contentLengthHeader*/get contentLengthHeader() {
      return "content-length";
    },
    /*headers.Headers.contentTypeHeader*/get contentTypeHeader() {
      return "content-type";
    },
    /*headers.Headers.wwwAuthenticateHeader*/get wwwAuthenticateHeader() {
      return "www-authenticate";
    },
    /*headers.Headers.jsonContentType*/get jsonContentType() {
      return "application/json; charset=utf-8";
    },
    /*headers.Headers.formUrlEncodedContentType*/get formUrlEncodedContentType() {
      return "application/x-www-form-urlencoded";
    },
    /*headers.Headers.jsonMimeType*/get jsonMimeType() {
      return media_type.MediaType.parse("application/json; charset=utf-8");
    }
  });
  const _name$0 = dart.privateName(options$, "_name");
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  options$.ResponseType = class ResponseType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (options$.ResponseType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = options$.ResponseType.prototype;
  dart.addTypeTests(options$.ResponseType);
  dart.setLibraryUri(options$.ResponseType, "package:dio/src/options.dart");
  dart.setFieldSignature(options$.ResponseType, () => ({
    __proto__: dart.getFields(options$.ResponseType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(options$.ResponseType, ['toString']);
  options$.ResponseType.json = C7 || CT.C7;
  options$.ResponseType.stream = C8 || CT.C8;
  options$.ResponseType.plain = C9 || CT.C9;
  options$.ResponseType.bytes = C10 || CT.C10;
  options$.ResponseType.values = C11 || CT.C11;
  options$._RequestConfig = class _RequestConfig extends core.Object {
    get method() {
      return this[method$0];
    }
    set method(value) {
      this[method$0] = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      this[headers$] = value;
    }
    get sendTimeout() {
      return this[sendTimeout$];
    }
    set sendTimeout(value) {
      this[sendTimeout$] = value;
    }
    get receiveTimeout() {
      return this[receiveTimeout$];
    }
    set receiveTimeout(value) {
      this[receiveTimeout$] = value;
    }
    get responseType() {
      return this[responseType$];
    }
    set responseType(value) {
      this[responseType$] = value;
    }
    get validateStatus() {
      return this[validateStatus$];
    }
    set validateStatus(value) {
      this[validateStatus$] = value;
    }
    get receiveDataWhenStatusError() {
      return this[receiveDataWhenStatusError$];
    }
    set receiveDataWhenStatusError(value) {
      this[receiveDataWhenStatusError$] = value;
    }
    get extra() {
      return this[extra$];
    }
    set extra(value) {
      this[extra$] = value;
    }
    get followRedirects() {
      return this[followRedirects$];
    }
    set followRedirects(value) {
      this[followRedirects$] = value;
    }
    get maxRedirects() {
      return this[maxRedirects$];
    }
    set maxRedirects(value) {
      this[maxRedirects$] = value;
    }
    get requestEncoder() {
      return this[requestEncoder$];
    }
    set requestEncoder(value) {
      this[requestEncoder$] = value;
    }
    get responseDecoder() {
      return this[responseDecoder$];
    }
    set responseDecoder(value) {
      this[responseDecoder$] = value;
    }
    set contentType(contentType) {
      let t0, t0$;
      this.headers[$_set]("content-type", (t0$ = (t0 = contentType, t0 == null ? null : t0[$toLowerCase]()), t0$ == null ? null : t0$[$trim]()));
    }
    get contentType() {
      return this.headers[$_get]("content-type");
    }
  };
  (options$._RequestConfig.new = function(opts) {
    let t0, t0$;
    let method = opts && 'method' in opts ? opts.method : null;
    let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
    let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
    let extra = opts && 'extra' in opts ? opts.extra : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    let responseType = opts && 'responseType' in opts ? opts.responseType : null;
    let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
    let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : true;
    let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : true;
    let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : 5;
    let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
    let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
    this[headers$] = null;
    this[extra$] = null;
    this[method$0] = method;
    this[receiveTimeout$] = receiveTimeout;
    this[sendTimeout$] = sendTimeout;
    this[responseType$] = responseType;
    this[validateStatus$] = validateStatus;
    this[receiveDataWhenStatusError$] = receiveDataWhenStatusError;
    this[followRedirects$] = followRedirects;
    this[maxRedirects$] = maxRedirects;
    this[requestEncoder$] = requestEncoder;
    this[responseDecoder$] = responseDecoder;
    this.headers = (t0 = headers, t0 == null ? new (IdentityMapOfString$dynamic()).new() : t0);
    this.extra = (t0$ = extra, t0$ == null ? new (IdentityMapOfString$dynamic()).new() : t0$);
    this.contentType = contentType;
    this.headers = this.headers[$map](core.String, dart.dynamic, dart.fn((key, v) => new (MapEntryOfString$dynamic()).__(dart.toString(key), v), StringAnddynamicToMapEntryOfString$dynamic()));
  }).prototype = options$._RequestConfig.prototype;
  dart.addTypeTests(options$._RequestConfig);
  const method$0 = Symbol("_RequestConfig.method");
  const headers$ = Symbol("_RequestConfig.headers");
  const sendTimeout$ = Symbol("_RequestConfig.sendTimeout");
  const receiveTimeout$ = Symbol("_RequestConfig.receiveTimeout");
  const responseType$ = Symbol("_RequestConfig.responseType");
  const validateStatus$ = Symbol("_RequestConfig.validateStatus");
  const receiveDataWhenStatusError$ = Symbol("_RequestConfig.receiveDataWhenStatusError");
  const extra$ = Symbol("_RequestConfig.extra");
  const followRedirects$ = Symbol("_RequestConfig.followRedirects");
  const maxRedirects$ = Symbol("_RequestConfig.maxRedirects");
  const requestEncoder$ = Symbol("_RequestConfig.requestEncoder");
  const responseDecoder$ = Symbol("_RequestConfig.responseDecoder");
  dart.setGetterSignature(options$._RequestConfig, () => ({
    __proto__: dart.getGetters(options$._RequestConfig.__proto__),
    contentType: dart.dynamic
  }));
  dart.setSetterSignature(options$._RequestConfig, () => ({
    __proto__: dart.getSetters(options$._RequestConfig.__proto__),
    contentType: core.String
  }));
  dart.setLibraryUri(options$._RequestConfig, "package:dio/src/options.dart");
  dart.setFieldSignature(options$._RequestConfig, () => ({
    __proto__: dart.getFields(options$._RequestConfig.__proto__),
    method: dart.fieldType(core.String),
    headers: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    sendTimeout: dart.fieldType(core.int),
    receiveTimeout: dart.fieldType(core.int),
    responseType: dart.fieldType(options$.ResponseType),
    validateStatus: dart.fieldType(dart.fnType(core.bool, [core.int])),
    receiveDataWhenStatusError: dart.fieldType(core.bool),
    extra: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    followRedirects: dart.fieldType(core.bool),
    maxRedirects: dart.fieldType(core.int),
    requestEncoder: dart.fieldType(dart.fnType(core.List$(core.int), [core.String, options$.RequestOptions])),
    responseDecoder: dart.fieldType(dart.fnType(core.String, [core.List$(core.int), options$.RequestOptions, adapter.ResponseBody]))
  }));
  options$.BaseOptions = class BaseOptions extends options$._RequestConfig {
    get baseUrl() {
      return this[baseUrl$];
    }
    set baseUrl(value) {
      this[baseUrl$] = value;
    }
    get queryParameters() {
      return this[queryParameters$];
    }
    set queryParameters(value) {
      this[queryParameters$] = value;
    }
    get connectTimeout() {
      return this[connectTimeout$];
    }
    set connectTimeout(value) {
      this[connectTimeout$] = value;
    }
    merge(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t1, t0$4, t1$, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12;
      let method = opts && 'method' in opts ? opts.method : null;
      let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let path = opts && 'path' in opts ? opts.path : null;
      let connectTimeout = opts && 'connectTimeout' in opts ? opts.connectTimeout : null;
      let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
      let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
      let extra = opts && 'extra' in opts ? opts.extra : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let responseType = opts && 'responseType' in opts ? opts.responseType : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
      let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : null;
      let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : null;
      let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
      let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
      let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
      return new options$.BaseOptions.new({method: (t0 = method, t0 == null ? this.method : t0), baseUrl: (t0$ = baseUrl, t0$ == null ? this.baseUrl : t0$), queryParameters: (t0$0 = queryParameters, t0$0 == null ? this.queryParameters : t0$0), connectTimeout: (t0$1 = connectTimeout, t0$1 == null ? this.connectTimeout : t0$1), receiveTimeout: (t0$2 = receiveTimeout, t0$2 == null ? this.receiveTimeout : t0$2), sendTimeout: (t0$3 = sendTimeout, t0$3 == null ? this.sendTimeout : t0$3), extra: (t0$4 = extra, t0$4 == null ? LinkedHashMapOfString$dynamic().from((t1 = this.extra, t1 == null ? new _js_helper.LinkedMap.new() : t1)) : t0$4), headers: (t0$5 = headers, t0$5 == null ? LinkedHashMapOfString$dynamic().from((t1$ = this.headers, t1$ == null ? new _js_helper.LinkedMap.new() : t1$)) : t0$5), responseType: (t0$6 = responseType, t0$6 == null ? this.responseType : t0$6), contentType: core.String._check((t0$7 = contentType, t0$7 == null ? this.contentType : t0$7)), validateStatus: (t0$8 = validateStatus, t0$8 == null ? this.validateStatus : t0$8), receiveDataWhenStatusError: (t0$9 = receiveDataWhenStatusError, t0$9 == null ? this.receiveDataWhenStatusError : t0$9), followRedirects: (t0$10 = followRedirects, t0$10 == null ? this.followRedirects : t0$10), maxRedirects: (t0$11 = maxRedirects, t0$11 == null ? this.maxRedirects : t0$11), requestEncoder: requestEncoder, responseDecoder: (t0$12 = responseDecoder, t0$12 == null ? this.responseDecoder : t0$12)});
    }
  };
  (options$.BaseOptions.new = function(opts) {
    let method = opts && 'method' in opts ? opts.method : null;
    let connectTimeout = opts && 'connectTimeout' in opts ? opts.connectTimeout : null;
    let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
    let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
    let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    let extra = opts && 'extra' in opts ? opts.extra : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let responseType = opts && 'responseType' in opts ? opts.responseType : C7 || CT.C7;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
    let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : true;
    let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : true;
    let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : 5;
    let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
    let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
    this[connectTimeout$] = null;
    this[baseUrl$] = baseUrl;
    this[queryParameters$] = queryParameters;
    options$.BaseOptions.__proto__.new.call(this, {method: method, receiveTimeout: receiveTimeout, sendTimeout: sendTimeout, extra: extra, headers: headers, responseType: responseType, contentType: contentType, validateStatus: validateStatus, receiveDataWhenStatusError: receiveDataWhenStatusError, followRedirects: followRedirects, maxRedirects: maxRedirects, requestEncoder: requestEncoder, responseDecoder: responseDecoder});
    ;
  }).prototype = options$.BaseOptions.prototype;
  dart.addTypeTests(options$.BaseOptions);
  const baseUrl$ = Symbol("BaseOptions.baseUrl");
  const queryParameters$ = Symbol("BaseOptions.queryParameters");
  const connectTimeout$ = Symbol("BaseOptions.connectTimeout");
  dart.setMethodSignature(options$.BaseOptions, () => ({
    __proto__: dart.getMethods(options$.BaseOptions.__proto__),
    merge: dart.fnType(options$.BaseOptions, [], {baseUrl: core.String, connectTimeout: core.int, contentType: core.String, extra: core.Map$(core.String, dart.dynamic), followRedirects: core.bool, headers: core.Map$(core.String, dart.dynamic), maxRedirects: core.int, method: core.String, path: core.String, queryParameters: core.Map$(core.String, dart.dynamic), receiveDataWhenStatusError: core.bool, receiveTimeout: core.int, requestEncoder: dart.fnType(core.List$(core.int), [core.String, options$.RequestOptions]), responseDecoder: dart.fnType(core.String, [core.List$(core.int), options$.RequestOptions, adapter.ResponseBody]), responseType: options$.ResponseType, sendTimeout: core.int, validateStatus: dart.fnType(core.bool, [core.int])})
  }));
  dart.setLibraryUri(options$.BaseOptions, "package:dio/src/options.dart");
  dart.setFieldSignature(options$.BaseOptions, () => ({
    __proto__: dart.getFields(options$.BaseOptions.__proto__),
    baseUrl: dart.fieldType(core.String),
    queryParameters: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    connectTimeout: dart.fieldType(core.int)
  }));
  options$.Options = class Options extends options$._RequestConfig {
    merge(opts) {
      let t0, t0$, t0$0, t1, t0$1, t1$, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let method = opts && 'method' in opts ? opts.method : null;
      let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
      let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
      let extra = opts && 'extra' in opts ? opts.extra : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let responseType = opts && 'responseType' in opts ? opts.responseType : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
      let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : null;
      let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : null;
      let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
      let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
      let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
      return new options$.Options.new({method: (t0 = method, t0 == null ? this.method : t0), sendTimeout: (t0$ = sendTimeout, t0$ == null ? this.sendTimeout : t0$), receiveTimeout: (t0$0 = receiveTimeout, t0$0 == null ? this.receiveTimeout : t0$0), extra: (t0$1 = extra, t0$1 == null ? LinkedHashMapOfString$dynamic().from((t1 = this.extra, t1 == null ? new _js_helper.LinkedMap.new() : t1)) : t0$1), headers: (t0$2 = headers, t0$2 == null ? LinkedHashMapOfString$dynamic().from((t1$ = this.headers, t1$ == null ? new _js_helper.LinkedMap.new() : t1$)) : t0$2), responseType: (t0$3 = responseType, t0$3 == null ? this.responseType : t0$3), contentType: core.String._check((t0$4 = contentType, t0$4 == null ? this.contentType : t0$4)), validateStatus: (t0$5 = validateStatus, t0$5 == null ? this.validateStatus : t0$5), receiveDataWhenStatusError: (t0$6 = receiveDataWhenStatusError, t0$6 == null ? this.receiveDataWhenStatusError : t0$6), followRedirects: (t0$7 = followRedirects, t0$7 == null ? this.followRedirects : t0$7), maxRedirects: (t0$8 = maxRedirects, t0$8 == null ? this.maxRedirects : t0$8), requestEncoder: requestEncoder, responseDecoder: (t0$9 = responseDecoder, t0$9 == null ? this.responseDecoder : t0$9)});
    }
  };
  (options$.Options.new = function(opts) {
    let method = opts && 'method' in opts ? opts.method : null;
    let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
    let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
    let extra = opts && 'extra' in opts ? opts.extra : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let responseType = opts && 'responseType' in opts ? opts.responseType : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
    let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : null;
    let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : null;
    let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
    let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
    let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
    options$.Options.__proto__.new.call(this, {method: method, sendTimeout: sendTimeout, receiveTimeout: receiveTimeout, extra: extra, headers: headers, responseType: responseType, contentType: contentType, validateStatus: validateStatus, receiveDataWhenStatusError: receiveDataWhenStatusError, followRedirects: followRedirects, maxRedirects: maxRedirects, requestEncoder: requestEncoder, responseDecoder: responseDecoder});
    ;
  }).prototype = options$.Options.prototype;
  dart.addTypeTests(options$.Options);
  dart.setMethodSignature(options$.Options, () => ({
    __proto__: dart.getMethods(options$.Options.__proto__),
    merge: dart.fnType(options$.Options, [], {contentType: core.String, extra: core.Map$(core.String, dart.dynamic), followRedirects: core.bool, headers: core.Map$(core.String, dart.dynamic), maxRedirects: core.int, method: core.String, receiveDataWhenStatusError: core.bool, receiveTimeout: core.int, requestEncoder: dart.fnType(core.List$(core.int), [core.String, options$.RequestOptions]), responseDecoder: dart.fnType(core.String, [core.List$(core.int), options$.RequestOptions, adapter.ResponseBody]), responseType: options$.ResponseType, sendTimeout: core.int, validateStatus: dart.fnType(core.bool, [core.int])})
  }));
  dart.setLibraryUri(options$.Options, "package:dio/src/options.dart");
  options$.RequestOptions = class RequestOptions extends options$.Options {
    get data() {
      return this[data$];
    }
    set data(value) {
      this[data$] = value;
    }
    get baseUrl() {
      return this[baseUrl$0];
    }
    set baseUrl(value) {
      this[baseUrl$0] = value;
    }
    get path() {
      return this[path$];
    }
    set path(value) {
      this[path$] = value;
    }
    get queryParameters() {
      return this[queryParameters$0];
    }
    set queryParameters(value) {
      this[queryParameters$0] = value;
    }
    get cancelToken() {
      return this[cancelToken$];
    }
    set cancelToken(value) {
      this[cancelToken$] = value;
    }
    get onReceiveProgress() {
      return this[onReceiveProgress$];
    }
    set onReceiveProgress(value) {
      this[onReceiveProgress$] = value;
    }
    get onSendProgress() {
      return this[onSendProgress$];
    }
    set onSendProgress(value) {
      this[onSendProgress$] = value;
    }
    get connectTimeout() {
      return this[connectTimeout$0];
    }
    set connectTimeout(value) {
      this[connectTimeout$0] = value;
    }
    merge(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t1, t0$9, t1$, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17;
      let method = opts && 'method' in opts ? opts.method : null;
      let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
      let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
      let connectTimeout = opts && 'connectTimeout' in opts ? opts.connectTimeout : null;
      let data = opts && 'data' in opts ? opts.data : null;
      let path = opts && 'path' in opts ? opts.path : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let extra = opts && 'extra' in opts ? opts.extra : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let responseType = opts && 'responseType' in opts ? opts.responseType : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
      let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : true;
      let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : true;
      let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
      let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
      let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
      return new options$.RequestOptions.new({method: (t0 = method, t0 == null ? this.method : t0), sendTimeout: (t0$ = sendTimeout, t0$ == null ? this.sendTimeout : t0$), receiveTimeout: (t0$0 = receiveTimeout, t0$0 == null ? this.receiveTimeout : t0$0), connectTimeout: (t0$1 = connectTimeout, t0$1 == null ? this.connectTimeout : t0$1), data: (t0$2 = data, t0$2 == null ? this.data : t0$2), path: (t0$3 = path, t0$3 == null ? this.path : t0$3), queryParameters: (t0$4 = queryParameters, t0$4 == null ? this.queryParameters : t0$4), baseUrl: (t0$5 = baseUrl, t0$5 == null ? this.baseUrl : t0$5), onReceiveProgress: (t0$6 = onReceiveProgress, t0$6 == null ? this.onReceiveProgress : t0$6), onSendProgress: (t0$7 = onSendProgress, t0$7 == null ? this.onSendProgress : t0$7), cancelToken: (t0$8 = cancelToken, t0$8 == null ? this.cancelToken : t0$8), extra: (t0$9 = extra, t0$9 == null ? LinkedHashMapOfString$dynamic().from((t1 = this.extra, t1 == null ? new _js_helper.LinkedMap.new() : t1)) : t0$9), headers: (t0$10 = headers, t0$10 == null ? LinkedHashMapOfString$dynamic().from((t1$ = this.headers, t1$ == null ? new _js_helper.LinkedMap.new() : t1$)) : t0$10), responseType: (t0$11 = responseType, t0$11 == null ? this.responseType : t0$11), contentType: core.String._check((t0$12 = contentType, t0$12 == null ? this.contentType : t0$12)), validateStatus: (t0$13 = validateStatus, t0$13 == null ? this.validateStatus : t0$13), receiveDataWhenStatusError: (t0$14 = receiveDataWhenStatusError, t0$14 == null ? this.receiveDataWhenStatusError : t0$14), followRedirects: (t0$15 = followRedirects, t0$15 == null ? this.followRedirects : t0$15), maxRedirects: (t0$16 = maxRedirects, t0$16 == null ? this.maxRedirects : t0$16), requestEncoder: requestEncoder, responseDecoder: (t0$17 = responseDecoder, t0$17 == null ? this.responseDecoder : t0$17)});
    }
    get uri() {
      let _url = this.path;
      if (!_url[$startsWith](core.RegExp.new("https?:"))) {
        _url = dart.notNull(this.baseUrl) + dart.notNull(_url);
        let s = _url[$split](":/");
        _url = dart.notNull(s[$_get](0)) + ":/" + s[$_get](1)[$replaceAll]("//", "/");
      }
      let query = transformer.Transformer.urlEncodeMap(this.queryParameters);
      if (query[$isNotEmpty]) {
        _url = dart.notNull(_url) + ((_url[$contains]("?") ? "&" : "?") + dart.notNull(query));
      }
      return core.Uri.parse(_url).normalizePath();
    }
  };
  (options$.RequestOptions.new = function(opts) {
    let method = opts && 'method' in opts ? opts.method : null;
    let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
    let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
    let connectTimeout = opts && 'connectTimeout' in opts ? opts.connectTimeout : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let path = opts && 'path' in opts ? opts.path : null;
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
    let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
    let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
    let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
    let extra = opts && 'extra' in opts ? opts.extra : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let responseType = opts && 'responseType' in opts ? opts.responseType : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
    let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : true;
    let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : true;
    let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
    let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
    let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
    this[connectTimeout$0] = connectTimeout;
    this[data$] = data;
    this[path$] = path;
    this[queryParameters$0] = queryParameters;
    this[baseUrl$0] = baseUrl;
    this[onReceiveProgress$] = onReceiveProgress;
    this[onSendProgress$] = onSendProgress;
    this[cancelToken$] = cancelToken;
    options$.RequestOptions.__proto__.new.call(this, {method: method, sendTimeout: sendTimeout, receiveTimeout: receiveTimeout, extra: extra, headers: headers, responseType: responseType, contentType: contentType, validateStatus: validateStatus, receiveDataWhenStatusError: receiveDataWhenStatusError, followRedirects: followRedirects, maxRedirects: maxRedirects, requestEncoder: requestEncoder, responseDecoder: responseDecoder});
    ;
  }).prototype = options$.RequestOptions.prototype;
  dart.addTypeTests(options$.RequestOptions);
  const data$ = Symbol("RequestOptions.data");
  const baseUrl$0 = Symbol("RequestOptions.baseUrl");
  const path$ = Symbol("RequestOptions.path");
  const queryParameters$0 = Symbol("RequestOptions.queryParameters");
  const cancelToken$ = Symbol("RequestOptions.cancelToken");
  const onReceiveProgress$ = Symbol("RequestOptions.onReceiveProgress");
  const onSendProgress$ = Symbol("RequestOptions.onSendProgress");
  const connectTimeout$0 = Symbol("RequestOptions.connectTimeout");
  dart.setMethodSignature(options$.RequestOptions, () => ({
    __proto__: dart.getMethods(options$.RequestOptions.__proto__),
    merge: dart.fnType(options$.RequestOptions, [], {baseUrl: core.String, cancelToken: cancel_token.CancelToken, connectTimeout: core.int, contentType: core.String, data: core.String, extra: core.Map$(core.String, dart.dynamic), followRedirects: core.bool, headers: core.Map$(core.String, dart.dynamic), maxRedirects: core.int, method: core.String, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), path: core.String, queryParameters: core.Map$(core.String, dart.dynamic), receiveDataWhenStatusError: core.bool, receiveTimeout: core.int, requestEncoder: dart.fnType(core.List$(core.int), [core.String, options$.RequestOptions]), responseDecoder: dart.fnType(core.String, [core.List$(core.int), options$.RequestOptions, adapter.ResponseBody]), responseType: options$.ResponseType, sendTimeout: core.int, validateStatus: dart.fnType(core.bool, [core.int])})
  }));
  dart.setGetterSignature(options$.RequestOptions, () => ({
    __proto__: dart.getGetters(options$.RequestOptions.__proto__),
    uri: core.Uri
  }));
  dart.setLibraryUri(options$.RequestOptions, "package:dio/src/options.dart");
  dart.setFieldSignature(options$.RequestOptions, () => ({
    __proto__: dart.getFields(options$.RequestOptions.__proto__),
    data: dart.fieldType(dart.dynamic),
    baseUrl: dart.fieldType(core.String),
    path: dart.fieldType(core.String),
    queryParameters: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    cancelToken: dart.fieldType(cancel_token.CancelToken),
    onReceiveProgress: dart.fieldType(dart.fnType(dart.void, [core.int, core.int])),
    onSendProgress: dart.fieldType(dart.fnType(dart.void, [core.int, core.int])),
    connectTimeout: dart.fieldType(core.int)
  }));
  const _cancelError = dart.privateName(cancel_token, "_cancelError");
  const _completer = dart.privateName(cancel_token, "_completer");
  cancel_token.CancelToken = class CancelToken extends core.Object {
    static isCancel(e) {
      return dart.equals(e.type, dio_error.DioErrorType.CANCEL);
    }
    get cancelError() {
      return this[_cancelError];
    }
    get isCancelled() {
      return this[_cancelError] != null;
    }
    get whenCancel() {
      return this[_completer].future;
    }
    cancel(reason) {
      if (reason === void 0) reason = null;
      this[_cancelError] = new dio_error.DioError.new({type: dio_error.DioErrorType.CANCEL, error: reason});
      this[_completer].complete();
    }
  };
  (cancel_token.CancelToken.new = function() {
    this[_cancelError] = null;
    this[_completer] = null;
    this[_completer] = async.Completer.new();
  }).prototype = cancel_token.CancelToken.prototype;
  dart.addTypeTests(cancel_token.CancelToken);
  dart.setMethodSignature(cancel_token.CancelToken, () => ({
    __proto__: dart.getMethods(cancel_token.CancelToken.__proto__),
    cancel: dart.fnType(dart.void, [], [dart.dynamic])
  }));
  dart.setGetterSignature(cancel_token.CancelToken, () => ({
    __proto__: dart.getGetters(cancel_token.CancelToken.__proto__),
    cancelError: dio_error.DioError,
    isCancelled: core.bool,
    whenCancel: async.Future$(dart.void)
  }));
  dart.setLibraryUri(cancel_token.CancelToken, "package:dio/src/cancel_token.dart");
  dart.setFieldSignature(cancel_token.CancelToken, () => ({
    __proto__: dart.getFields(cancel_token.CancelToken.__proto__),
    [_cancelError]: dart.fieldType(dio_error.DioError),
    [_completer]: dart.fieldType(async.Completer)
  }));
  transformer.Transformer = class Transformer extends core.Object {
    static urlEncodeMap(map) {
      return utils.encodeMap(map, dart.fn((key, value) => {
        if (value == null) return key;
        return dart.str(key) + "=" + dart.str(core.Uri.encodeQueryComponent(dart.toString(value)));
      }, StringAnddynamicToString()));
    }
  };
  (transformer.Transformer.new = function() {
    ;
  }).prototype = transformer.Transformer.prototype;
  dart.addTypeTests(transformer.Transformer);
  dart.setLibraryUri(transformer.Transformer, "package:dio/src/transformer.dart");
  const _isJsonMime = dart.privateName(transformer, "_isJsonMime");
  transformer.DefaultTransformer = class DefaultTransformer extends transformer.Transformer {
    get jsonDecodeCallback() {
      return this[jsonDecodeCallback$];
    }
    set jsonDecodeCallback(value) {
      this[jsonDecodeCallback$] = value;
    }
    transformRequest(options) {
      return async.async(core.String, (function* transformRequest() {
        let t0;
        let data = (t0 = options.data, t0 == null ? "" : t0);
        if (!(typeof data == 'string')) {
          if (dart.test(this[_isJsonMime](core.String._check(options.contentType)))) {
            return convert.json.encode(options.data);
          } else if (core.Map.is(data)) {
            return transformer.Transformer.urlEncodeMap(data);
          }
        }
        return dart.toString(data);
      }).bind(this));
    }
    transformResponse(options, response) {
      return async.async(dart.dynamic, (function* transformResponse() {
        let t0, t0$, t0$0, t2, t2$;
        if (dart.equals(options.responseType, options$.ResponseType.stream)) {
          return response;
        }
        let length = 0;
        let received = 0;
        let showDownloadProgress = options.onReceiveProgress != null;
        if (showDownloadProgress) {
          length = core.int.parse(core.String._check((t0 = response.headers[$_get]("content-length"), t0 == null ? "-1" : t0)));
        }
        let completer = async.Completer.new();
        let stream = response.stream.transform(dart.dynamic, new (_StreamHandlerTransformerOfUint8List$dynamic()).new({handleData: dart.fn((data, sink) => {
            sink.add(_native_typed_data.NativeUint8List.fromList(data));
            if (showDownloadProgress) {
              received = received + dart.notNull(data[$length]);
              options.onReceiveProgress(received, length);
            }
          }, Uint8ListAndEventSinkToNull())}));
        let buffer = JSArrayOfint().of([]);
        let subscription = null;
        subscription = stream.listen(dart.fn(element => buffer[$addAll](IterableOfint()._check(element)), dynamicTovoid()), {onError: dart.fn(e => completer.completeError(e), dynamicTovoid()), onDone: dart.fn(() => completer.complete(), VoidTovoid()), cancelOnError: true});
        t0$0 = (t0$ = options.cancelToken, t0$ == null ? null : t0$.whenCancel);
        t0$0 == null ? null : t0$0.then(dart.dynamic, dart.fn(_ => subscription.cancel(), voidToFuture()));
        if (dart.notNull(options.receiveTimeout) > 0) {
          try {
            yield completer.future.timeout(new core.Duration.new({milliseconds: options.receiveTimeout}));
          } catch (e) {
            let ex = dart.getThrown(e);
            if (async.TimeoutException.is(ex)) {
              yield subscription.cancel();
              dart.throw(new dio_error.DioError.new({request: options, error: "Receiving data timeout[" + dart.str(options.receiveTimeout) + "ms]", type: dio_error.DioErrorType.RECEIVE_TIMEOUT}));
            } else
              throw e;
          }
        } else {
          yield completer.future;
        }
        if (dart.equals(options.responseType, options$.ResponseType.bytes)) return buffer;
        let responseBody = null;
        if (options.responseDecoder != null) {
          responseBody = options.responseDecoder(buffer, options, (t2 = response, t2.stream = null, t2));
        } else {
          responseBody = convert.utf8.decode(buffer, {allowMalformed: true});
        }
        if (responseBody != null && responseBody[$isNotEmpty] && dart.equals(options.responseType, options$.ResponseType.json) && dart.test(this[_isJsonMime]((t2$ = response.headers[$_get]("content-type"), t2$ == null ? null : t2$[$first])))) {
          if (this.jsonDecodeCallback != null) {
            return this.jsonDecodeCallback(responseBody);
          } else {
            return convert.json.decode(responseBody);
          }
        }
        return responseBody;
      }).bind(this));
    }
    [_isJsonMime](contentType) {
      if (contentType == null) return false;
      return media_type.MediaType.parse(contentType).mimeType[$toLowerCase]() === headers.Headers.jsonMimeType.mimeType;
    }
  };
  (transformer.DefaultTransformer.new = function(opts) {
    let jsonDecodeCallback = opts && 'jsonDecodeCallback' in opts ? opts.jsonDecodeCallback : null;
    this[jsonDecodeCallback$] = jsonDecodeCallback;
    ;
  }).prototype = transformer.DefaultTransformer.prototype;
  dart.addTypeTests(transformer.DefaultTransformer);
  const jsonDecodeCallback$ = Symbol("DefaultTransformer.jsonDecodeCallback");
  dart.setMethodSignature(transformer.DefaultTransformer, () => ({
    __proto__: dart.getMethods(transformer.DefaultTransformer.__proto__),
    transformRequest: dart.fnType(async.Future$(core.String), [options$.RequestOptions]),
    transformResponse: dart.fnType(async.Future, [options$.RequestOptions, adapter.ResponseBody]),
    [_isJsonMime]: dart.fnType(core.bool, [core.String])
  }));
  dart.setLibraryUri(transformer.DefaultTransformer, "package:dio/src/transformer.dart");
  dart.setFieldSignature(transformer.DefaultTransformer, () => ({
    __proto__: dart.getFields(transformer.DefaultTransformer.__proto__),
    jsonDecodeCallback: dart.fieldType(dart.fnType(dart.dynamic, [core.String]))
  }));
  const _allowInvalid = dart.privateName(convert, "_allowInvalid");
  let C12;
  let C13;
  utils.isPlainAscii = function isPlainAscii(string) {
    return utils._ASCII_ONLY.hasMatch(string);
  };
  utils.writeStreamToSink = function writeStreamToSink(stream, sink) {
    let completer = async.Completer.new();
    stream.listen(dart.bind(sink, 'add'), {onError: dart.bind(sink, 'addError'), onDone: dart.fn(() => completer.complete(), VoidTovoid())});
    return completer.future;
  };
  utils.encodingForCharset = function encodingForCharset(charset, fallback) {
    if (fallback === void 0) fallback = C12 || CT.C12;
    if (charset == null) return fallback;
    let encoding = convert.Encoding.getByName(charset);
    return encoding == null ? fallback : encoding;
  };
  utils.encodeMap = function encodeMap(data, handler, opts) {
    let encode = opts && 'encode' in opts ? opts.encode : true;
    let urlData = new core.StringBuffer.new("");
    let first = true;
    let leftBracket = dart.test(encode) ? "%5B" : "[";
    let rightBracket = dart.test(encode) ? "%5D" : "]";
    let encodeComponent = dart.test(encode) ? C13 || CT.C13 : dart.fn(e => e, dynamicTodynamic());
    function urlEncode(sub, path) {
      if (core.List.is(sub)) {
        for (let i = 0; i < dart.notNull(sub[$length]); i = i + 1) {
          urlEncode(sub[$_get](i), dart.str(path) + leftBracket + dart.str(core.Map.is(sub[$_get](i)) || core.List.is(sub[$_get](i)) ? i : "") + rightBracket);
        }
      } else if (core.Map.is(sub)) {
        sub[$forEach](dart.fn((k, v) => {
          if (path === "") {
            urlEncode(v, dart.str(encodeComponent(core.String._check(k))));
          } else {
            urlEncode(v, dart.str(path) + leftBracket + dart.str(encodeComponent(core.String._check(k))) + rightBracket);
          }
        }, dynamicAnddynamicToNull()));
      } else {
        let str = handler(path, sub);
        let isNotEmpty = str != null && str[$trim]()[$isNotEmpty];
        if (!first && isNotEmpty) {
          urlData.write("&");
        }
        first = false;
        if (isNotEmpty) {
          urlData.write(str);
        }
      }
    }
    dart.fn(urlEncode, dynamicAndStringTovoid());
    urlEncode(data, "");
    return urlData.toString();
  };
  dart.defineLazy(utils, {
    /*utils._ASCII_ONLY*/get _ASCII_ONLY() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  });
  adapter.HttpClientAdapter = class HttpClientAdapter extends core.Object {};
  (adapter.HttpClientAdapter.new = function() {
    ;
  }).prototype = adapter.HttpClientAdapter.prototype;
  dart.addTypeTests(adapter.HttpClientAdapter);
  dart.setLibraryUri(adapter.HttpClientAdapter, "package:dio/src/adapter.dart");
  adapter.ResponseBody = class ResponseBody extends core.Object {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      this[stream$] = value;
    }
    get headers() {
      return this[headers$0];
    }
    set headers(value) {
      this[headers$0] = value;
    }
    get statusCode() {
      return this[statusCode$0];
    }
    set statusCode(value) {
      this[statusCode$0] = value;
    }
    get statusMessage() {
      return this[statusMessage$];
    }
    set statusMessage(value) {
      this[statusMessage$] = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get redirects() {
      return this[redirects$];
    }
    set redirects(value) {
      this[redirects$] = value;
    }
    get extra() {
      return this[extra];
    }
    set extra(value) {
      this[extra] = value;
    }
  };
  (adapter.ResponseBody.new = function(stream, statusCode, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let statusMessage = opts && 'statusMessage' in opts ? opts.statusMessage : null;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : null;
    let redirects = opts && 'redirects' in opts ? opts.redirects : null;
    this[extra] = new (IdentityMapOfString$dynamic()).new();
    this[stream$] = stream;
    this[statusCode$0] = statusCode;
    this[headers$0] = headers;
    this[statusMessage$] = statusMessage;
    this[isRedirect$] = isRedirect;
    this[redirects$] = redirects;
    ;
  }).prototype = adapter.ResponseBody.prototype;
  (adapter.ResponseBody.fromString = function(text, statusCode, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let statusMessage = opts && 'statusMessage' in opts ? opts.statusMessage : null;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : null;
    this[extra] = new (IdentityMapOfString$dynamic()).new();
    this[redirects$] = null;
    this[statusCode$0] = statusCode;
    this[headers$0] = headers;
    this[statusMessage$] = statusMessage;
    this[isRedirect$] = isRedirect;
    this[stream$] = StreamOfUint8List().fromIterable(convert.utf8.encode(text)[$map](typed_data.Uint8List, dart.fn(e => _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([e])), intToUint8List()))[$toList]());
    ;
  }).prototype = adapter.ResponseBody.prototype;
  (adapter.ResponseBody.fromBytes = function(bytes, statusCode, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let statusMessage = opts && 'statusMessage' in opts ? opts.statusMessage : null;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : null;
    this[extra] = new (IdentityMapOfString$dynamic()).new();
    this[redirects$] = null;
    this[statusCode$0] = statusCode;
    this[headers$0] = headers;
    this[statusMessage$] = statusMessage;
    this[isRedirect$] = isRedirect;
    this[stream$] = StreamOfUint8List().fromIterable(bytes[$map](typed_data.Uint8List, dart.fn(e => _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([e])), intToUint8List()))[$toList]());
    ;
  }).prototype = adapter.ResponseBody.prototype;
  dart.addTypeTests(adapter.ResponseBody);
  const stream$ = Symbol("ResponseBody.stream");
  const headers$0 = Symbol("ResponseBody.headers");
  const statusCode$0 = Symbol("ResponseBody.statusCode");
  const statusMessage$ = Symbol("ResponseBody.statusMessage");
  const isRedirect$ = Symbol("ResponseBody.isRedirect");
  const redirects$ = Symbol("ResponseBody.redirects");
  const extra = Symbol("ResponseBody.extra");
  dart.setLibraryUri(adapter.ResponseBody, "package:dio/src/adapter.dart");
  dart.setFieldSignature(adapter.ResponseBody, () => ({
    __proto__: dart.getFields(adapter.ResponseBody.__proto__),
    stream: dart.fieldType(async.Stream$(typed_data.Uint8List)),
    headers: dart.fieldType(core.Map$(core.String, core.List$(core.String))),
    statusCode: dart.fieldType(core.int),
    statusMessage: dart.fieldType(core.String),
    isRedirect: dart.finalFieldType(core.bool),
    redirects: dart.fieldType(core.List$(redirect_record.RedirectRecord)),
    extra: dart.fieldType(core.Map$(core.String, dart.dynamic))
  }));
  dart.trackLibraries("packages/dio/src/adapter", {
    "package:dio/src/dio_error.dart": dio_error,
    "package:dio/src/response.dart": response,
    "package:dio/src/redirect_record.dart": redirect_record,
    "package:dio/src/headers.dart": headers,
    "package:dio/src/options.dart": options$,
    "package:dio/src/cancel_token.dart": cancel_token,
    "package:dio/src/transformer.dart": transformer,
    "package:dio/src/utils.dart": utils,
    "package:dio/src/adapter.dart": adapter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dio_error.dart","response.dart","redirect_record.dart","headers.dart","options.dart","cancel_token.dart","transformer.dart","utils.dart","adapter.dart"],"names":[],"mappings":"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","file":"adapter.ddc.js"}');
  // Exports:
  return {
    src__dio_error: dio_error,
    src__response: response,
    src__redirect_record: redirect_record,
    src__headers: headers,
    src__options: options$,
    src__cancel_token: cancel_token,
    src__transformer: transformer,
    src__utils: utils,
    src__adapter: adapter
  };
});

//# sourceMappingURL=adapter.ddc.js.map
