define(['dart_sdk', 'packages/dio/src/adapter', 'packages/http_parser/http_parser', 'packages/dio/src/adapters/browser_adapter'], function(dart_sdk, packages__dio__src__adapter, packages__http_parser__http_parser, packages__dio__src__adapters__browser_adapter) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const options$ = packages__dio__src__adapter.src__options;
  const response$ = packages__dio__src__adapter.src__response;
  const dio_error = packages__dio__src__adapter.src__dio_error;
  const utils = packages__dio__src__adapter.src__utils;
  const transformer = packages__dio__src__adapter.src__transformer;
  const headers$ = packages__dio__src__adapter.src__headers;
  const redirect_record = packages__dio__src__adapter.src__redirect_record;
  const cancel_token = packages__dio__src__adapter.src__cancel_token;
  const adapter = packages__dio__src__adapter.src__adapter;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const browser_adapter = packages__dio__src__adapters__browser_adapter.src__adapters__browser_adapter;
  const interceptor = Object.create(dart.library);
  const multipart_file_stub = Object.create(dart.library);
  const multipart_file = Object.create(dart.library);
  const dio_for_browser = Object.create(dart.library);
  const dio = Object.create(dart.library);
  const form_data = Object.create(dart.library);
  const $_get = dartx._get;
  const $length = dartx.length;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $_equals = dartx._equals;
  const $forEach = dartx.forEach;
  const $contains = dartx.contains;
  const $runtimeType = dartx.runtimeType;
  const $keys = dartx.keys;
  const $toLowerCase = dartx.toLowerCase;
  const $toString = dartx.toString;
  const $any = dartx.any;
  const $ceil = dartx.ceil;
  const $sublist = dartx.sublist;
  const $remove = dartx.remove;
  const $addAll = dartx.addAll;
  const $toUpperCase = dartx.toUpperCase;
  const $padLeft = dartx.padLeft;
  const $replaceAll = dartx.replaceAll;
  let dynamicToFutureOr = () => (dynamicToFutureOr = dart.constFn(dart.fnType(async.FutureOr, [dart.dynamic])))();
  let JSArrayOfInterceptor = () => (JSArrayOfInterceptor = dart.constFn(_interceptors.JSArray$(interceptor.Interceptor)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidToFutureOr = () => (VoidToFutureOr = dart.constFn(dart.fnType(async.FutureOr, [])))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  let dynamicAndboolToFn = () => (dynamicAndboolToFn = dart.constFn(dart.fnType(dynamicToFuture(), [dart.dynamic, core.bool])))();
  let dynamicToFn = () => (dynamicToFn = dart.constFn(dart.fnType(dynamicToFuture(), [dart.dynamic])))();
  let InterceptorToNull = () => (InterceptorToNull = dart.constFn(dart.fnType(core.Null, [interceptor.Interceptor])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let IdentityMapOfString$ListOfString = () => (IdentityMapOfString$ListOfString = dart.constFn(_js_helper.IdentityMap$(core.String, ListOfString())))();
  let JSArrayOfRedirectRecord = () => (JSArrayOfRedirectRecord = dart.constFn(_interceptors.JSArray$(redirect_record.RedirectRecord)))();
  let VoidToResponse = () => (VoidToResponse = dart.constFn(dart.fnType(response$.Response, [])))();
  let voidTobottom = () => (voidTobottom = dart.constFn(dart.fnType(dart.bottom, [dart.void])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StreamOfList = () => (StreamOfList = dart.constFn(async.Stream$(core.List)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let _StreamHandlerTransformerOfListOfint$Uint8List = () => (_StreamHandlerTransformerOfListOfint$Uint8List = dart.constFn(async._StreamHandlerTransformer$(ListOfint(), typed_data.Uint8List)))();
  let EventSinkOfUint8List = () => (EventSinkOfUint8List = dart.constFn(async.EventSink$(typed_data.Uint8List)))();
  let ListOfintAndEventSinkOfUint8ListToNull = () => (ListOfintAndEventSinkOfUint8ListToNull = dart.constFn(dart.fnType(core.Null, [ListOfint(), EventSinkOfUint8List()])))();
  let EventSinkOfUint8ListToNull = () => (EventSinkOfUint8ListToNull = dart.constFn(dart.fnType(core.Null, [EventSinkOfUint8List()])))();
  let StreamOfUint8List = () => (StreamOfUint8List = dart.constFn(async.Stream$(typed_data.Uint8List)))();
  let LinkedHashMapOfString$dynamic = () => (LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let ListOfRedirectRecord = () => (ListOfRedirectRecord = dart.constFn(core.List$(redirect_record.RedirectRecord)))();
  let MapEntryOfString$String = () => (MapEntryOfString$String = dart.constFn(core.MapEntry$(core.String, core.String)))();
  let JSArrayOfMapEntryOfString$String = () => (JSArrayOfMapEntryOfString$String = dart.constFn(_interceptors.JSArray$(MapEntryOfString$String())))();
  let MapEntryOfString$MultipartFile = () => (MapEntryOfString$MultipartFile = dart.constFn(core.MapEntry$(core.String, multipart_file.MultipartFile)))();
  let JSArrayOfMapEntryOfString$MultipartFile = () => (JSArrayOfMapEntryOfString$MultipartFile = dart.constFn(_interceptors.JSArray$(MapEntryOfString$MultipartFile())))();
  let StringAnddynamicToNull = () => (StringAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [core.String, dart.dynamic])))();
  let MapEntryOfString$StringToNull = () => (MapEntryOfString$StringToNull = dart.constFn(dart.fnType(core.Null, [MapEntryOfString$String()])))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async.StreamController$(ListOfint())))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let ListOfintAndListOfintToListOfint = () => (ListOfintAndListOfintToListOfint = dart.constFn(dart.fnType(ListOfint(), [ListOfint(), ListOfint()])))();
  const CT = Object.create(null);
  const _lock = dart.privateName(interceptor, "_lock");
  const _completer = dart.privateName(interceptor, "_completer");
  interceptor.Lock = class Lock extends core.Object {
    get locked() {
      return this[_lock] != null;
    }
    lock() {
      if (!dart.test(this.locked)) {
        this[_completer] = async.Completer.new();
        this[_lock] = this[_completer].future;
      }
    }
    unlock() {
      if (dart.test(this.locked)) {
        this[_completer].complete();
        this[_lock] = null;
      }
    }
    clear(msg) {
      if (msg === void 0) msg = "cancelled";
      if (dart.test(this.locked)) {
        this[_completer].completeError(msg);
        this[_lock] = null;
      }
    }
    enqueue(callback) {
      if (dart.test(this.locked)) {
        return this[_lock].then(dart.dynamic, dart.fn(d => callback(), dynamicToFutureOr()));
      }
      return null;
    }
  };
  (interceptor.Lock.new = function() {
    this[_lock] = null;
    this[_completer] = null;
    ;
  }).prototype = interceptor.Lock.prototype;
  dart.addTypeTests(interceptor.Lock);
  dart.setMethodSignature(interceptor.Lock, () => ({
    __proto__: dart.getMethods(interceptor.Lock.__proto__),
    lock: dart.fnType(dart.void, []),
    unlock: dart.fnType(dart.void, []),
    clear: dart.fnType(dart.void, [], [core.String]),
    enqueue: dart.fnType(async.Future, [dart.fnType(async.FutureOr, [])])
  }));
  dart.setGetterSignature(interceptor.Lock, () => ({
    __proto__: dart.getGetters(interceptor.Lock.__proto__),
    locked: core.bool
  }));
  dart.setLibraryUri(interceptor.Lock, "package:dio/src/interceptor.dart");
  dart.setFieldSignature(interceptor.Lock, () => ({
    __proto__: dart.getFields(interceptor.Lock.__proto__),
    [_lock]: dart.fieldType(async.Future),
    [_completer]: dart.fieldType(async.Completer)
  }));
  interceptor.Interceptor = class Interceptor extends core.Object {
    onRequest(options) {
      return async.async(dart.dynamic, function* onRequest() {
        return options;
      });
    }
    onResponse(response) {
      return async.async(dart.dynamic, function* onResponse() {
        return response;
      });
    }
    onError(err) {
      return async.async(dart.dynamic, function* onError() {
        return err;
      });
    }
  };
  (interceptor.Interceptor.new = function() {
    ;
  }).prototype = interceptor.Interceptor.prototype;
  dart.addTypeTests(interceptor.Interceptor);
  dart.setMethodSignature(interceptor.Interceptor, () => ({
    __proto__: dart.getMethods(interceptor.Interceptor.__proto__),
    onRequest: dart.fnType(async.Future, [options$.RequestOptions]),
    onResponse: dart.fnType(async.Future, [response$.Response]),
    onError: dart.fnType(async.Future, [dio_error.DioError])
  }));
  dart.setLibraryUri(interceptor.Interceptor, "package:dio/src/interceptor.dart");
  const _onRequest = dart.privateName(interceptor, "_onRequest");
  const _onResponse = dart.privateName(interceptor, "_onResponse");
  const _onError = dart.privateName(interceptor, "_onError");
  interceptor.InterceptorsWrapper = class InterceptorsWrapper extends interceptor.Interceptor {
    onRequest(options) {
      return async.async(dart.dynamic, (function* onRequest() {
        if (this[_onRequest] != null) {
          return this[_onRequest](options);
        }
      }).bind(this));
    }
    onResponse(response) {
      return async.async(dart.dynamic, (function* onResponse() {
        if (this[_onResponse] != null) {
          return this[_onResponse](response);
        }
      }).bind(this));
    }
    onError(err) {
      return async.async(dart.dynamic, (function* onError() {
        if (this[_onError] != null) {
          return this[_onError](err);
        }
      }).bind(this));
    }
  };
  (interceptor.InterceptorsWrapper.new = function(opts) {
    let onRequest = opts && 'onRequest' in opts ? opts.onRequest : null;
    let onResponse = opts && 'onResponse' in opts ? opts.onResponse : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    this[_onRequest] = onRequest;
    this[_onResponse] = onResponse;
    this[_onError] = onError;
    ;
  }).prototype = interceptor.InterceptorsWrapper.prototype;
  dart.addTypeTests(interceptor.InterceptorsWrapper);
  dart.setLibraryUri(interceptor.InterceptorsWrapper, "package:dio/src/interceptor.dart");
  dart.setFieldSignature(interceptor.InterceptorsWrapper, () => ({
    __proto__: dart.getFields(interceptor.InterceptorsWrapper.__proto__),
    [_onRequest]: dart.finalFieldType(dart.fnType(dart.dynamic, [options$.RequestOptions])),
    [_onResponse]: dart.finalFieldType(dart.fnType(dart.dynamic, [response$.Response])),
    [_onError]: dart.finalFieldType(dart.fnType(dart.dynamic, [dio_error.DioError]))
  }));
  const _list = dart.privateName(interceptor, "_list");
  const _requestLock = dart.privateName(interceptor, "_requestLock");
  const _responseLock = dart.privateName(interceptor, "_responseLock");
  const _errorLock = dart.privateName(interceptor, "_errorLock");
  interceptor.Interceptors = class Interceptors extends collection.ListMixin$(interceptor.Interceptor) {
    get length() {
      return this[length];
    }
    set length(value) {
      this[length] = value;
    }
    get requestLock() {
      return this[_requestLock];
    }
    get responseLock() {
      return this[_responseLock];
    }
    get errorLock() {
      return this[_errorLock];
    }
    _get(index) {
      return this[_list][$_get](index);
    }
    _set(index, value$) {
      let value = value$;
      interceptor.Interceptor._check(value);
      if (this[_list][$length] == index) {
        this[_list][$add](value);
      } else {
        this[_list][$_set](index, value);
      }
      return value$;
    }
  };
  (interceptor.Interceptors.new = function() {
    this[_list] = JSArrayOfInterceptor().of([]);
    this[_requestLock] = new interceptor.Lock.new();
    this[_responseLock] = new interceptor.Lock.new();
    this[_errorLock] = new interceptor.Lock.new();
    this[length] = 0;
    ;
  }).prototype = interceptor.Interceptors.prototype;
  dart.addTypeTests(interceptor.Interceptors);
  const length = Symbol("Interceptors.length");
  dart.setMethodSignature(interceptor.Interceptors, () => ({
    __proto__: dart.getMethods(interceptor.Interceptors.__proto__),
    _get: dart.fnType(interceptor.Interceptor, [core.int]),
    [$_get]: dart.fnType(interceptor.Interceptor, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.Object]),
    [$_set]: dart.fnType(dart.void, [core.int, core.Object])
  }));
  dart.setGetterSignature(interceptor.Interceptors, () => ({
    __proto__: dart.getGetters(interceptor.Interceptors.__proto__),
    requestLock: interceptor.Lock,
    responseLock: interceptor.Lock,
    errorLock: interceptor.Lock
  }));
  dart.setLibraryUri(interceptor.Interceptors, "package:dio/src/interceptor.dart");
  dart.setFieldSignature(interceptor.Interceptors, () => ({
    __proto__: dart.getFields(interceptor.Interceptors.__proto__),
    [_list]: dart.fieldType(core.List$(interceptor.Interceptor)),
    [_requestLock]: dart.fieldType(interceptor.Lock),
    [_responseLock]: dart.fieldType(interceptor.Lock),
    [_errorLock]: dart.fieldType(interceptor.Lock),
    length: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(interceptor.Interceptors, ['_get', '_set']);
  dart.defineExtensionAccessors(interceptor.Interceptors, ['length']);
  multipart_file_stub.multipartFileFromPath = function multipartFileFromPath(filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(multipart_file_stub._err);
  };
  multipart_file_stub.multipartFileFromPathSync = function multipartFileFromPathSync(filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(multipart_file_stub._err);
  };
  dart.defineLazy(multipart_file_stub, {
    /*multipart_file_stub._err*/get _err() {
      return new core.UnsupportedError.new("MultipartFile is only supported where dart:io is available.");
    }
  });
  const _isFinalized = dart.privateName(multipart_file, "_isFinalized");
  const _stream = dart.privateName(multipart_file, "_stream");
  multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static fromBytes(value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = StreamOfListOfint().fromIterable(JSArrayOfListOfint().of([value]));
      return new multipart_file.MultipartFile.new(stream, value[$length], {filename: filename, contentType: contentType});
    }
    static fromString(value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType = contentType == null ? new media_type.MediaType.new("text", "plain") : contentType;
      let encoding = utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", encoding.name])});
      return multipart_file.MultipartFile.fromBytes(encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static fromFile(filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPath(filePath, {filename: filename, contentType: contentType});
    }
    static fromFileSync(filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPathSync(filePath, {filename: filename, contentType: contentType});
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (multipart_file.MultipartFile.new = function(stream, length, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = stream;
    this[contentType$] = contentType != null ? contentType : new media_type.MediaType.new("application", "octet-stream");
    ;
  }).prototype = multipart_file.MultipartFile.prototype;
  dart.addTypeTests(multipart_file.MultipartFile);
  const length$ = Symbol("MultipartFile.length");
  const filename$ = Symbol("MultipartFile.filename");
  const contentType$ = Symbol("MultipartFile.contentType");
  dart.setMethodSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(async.Stream$(core.List$(core.int)), [])
  }));
  dart.setGetterSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(multipart_file.MultipartFile.__proto__),
    isFinalized: core.bool
  }));
  dart.setLibraryUri(multipart_file.MultipartFile, "package:dio/src/multipart_file.dart");
  dart.setFieldSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(multipart_file.MultipartFile.__proto__),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(core.String),
    contentType: dart.finalFieldType(media_type.MediaType),
    [_stream]: dart.finalFieldType(async.Stream$(core.List$(core.int))),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  const _interceptors$ = dart.privateName(dio, "_interceptors");
  const _closed = dart.privateName(dio, "_closed");
  const _request = dart.privateName(dio, "_request");
  const _dispatchRequest = dart.privateName(dio, "_dispatchRequest");
  const _transformData = dart.privateName(dio, "_transformData");
  dio.DioMixin = class DioMixin extends core.Object {
    get options() {
      return this[options];
    }
    set options(value) {
      this[options] = value;
    }
    get httpClientAdapter() {
      return this[httpClientAdapter];
    }
    set httpClientAdapter(value) {
      this[httpClientAdapter] = value;
    }
    get transformer() {
      return this[transformer$];
    }
    set transformer(value) {
      this[transformer$] = value;
    }
    get interceptors() {
      return this[_interceptors$];
    }
    close(opts) {
      let force = opts && 'force' in opts ? opts.force : false;
      this[_closed] = true;
      this.httpClientAdapter.close({force: force});
    }
    get(T, path, opts) {
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return this.request(T, path, {queryParameters: queryParameters, options: this.checkOptions("GET", options), onReceiveProgress: onReceiveProgress, cancelToken: cancelToken});
    }
    getUri(T, uri, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return this.requestUri(T, uri, {options: this.checkOptions("GET", options), onReceiveProgress: onReceiveProgress, cancelToken: cancelToken});
    }
    post(T, path, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return this.request(T, path, {data: data, options: this.checkOptions("POST", options), queryParameters: queryParameters, cancelToken: cancelToken, onSendProgress: onSendProgress, onReceiveProgress: onReceiveProgress});
    }
    postUri(T, uri, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return this.requestUri(T, uri, {data: data, options: this.checkOptions("POST", options), cancelToken: cancelToken, onSendProgress: onSendProgress, onReceiveProgress: onReceiveProgress});
    }
    put(T, path, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return this.request(T, path, {data: data, queryParameters: queryParameters, options: this.checkOptions("PUT", options), cancelToken: cancelToken, onSendProgress: onSendProgress, onReceiveProgress: onReceiveProgress});
    }
    putUri(T, uri, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return this.requestUri(T, uri, {data: data, options: this.checkOptions("PUT", options), cancelToken: cancelToken, onSendProgress: onSendProgress, onReceiveProgress: onReceiveProgress});
    }
    head(T, path, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      return this.request(T, path, {data: data, queryParameters: queryParameters, options: this.checkOptions("HEAD", options), cancelToken: cancelToken});
    }
    headUri(T, uri, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      return this.requestUri(T, uri, {data: data, options: this.checkOptions("HEAD", options), cancelToken: cancelToken});
    }
    delete(T, path, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      return this.request(T, path, {data: data, queryParameters: queryParameters, options: this.checkOptions("DELETE", options), cancelToken: cancelToken});
    }
    deleteUri(T, uri, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      return this.requestUri(T, uri, {data: data, options: this.checkOptions("DELETE", options), cancelToken: cancelToken});
    }
    patch(T, path, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return this.request(T, path, {data: data, queryParameters: queryParameters, options: this.checkOptions("PATCH", options), cancelToken: cancelToken, onSendProgress: onSendProgress, onReceiveProgress: onReceiveProgress});
    }
    patchUri(T, uri, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return this.requestUri(T, uri, {data: data, options: this.checkOptions("PATCH", options), cancelToken: cancelToken, onSendProgress: onSendProgress, onReceiveProgress: onReceiveProgress});
    }
    resolve(T, response) {
      if (!async.Future.is(response)) {
        response = async.Future.value(response);
      }
      return async.Future$(response$.Response$(T))._check(dart.dgsend(response, [response$.Response$(T)], 'then', [dart.fn(data => this.assureResponse(T, data), dart.fnType(response$.Response$(T), [dart.dynamic]))], {onError: dart.fn(err => this.assureResponse(T, err), dart.fnType(response$.Response$(T), [dart.dynamic]))}));
    }
    reject(T, err) {
      if (!async.Future.is(err)) {
        err = async.Future.error(err);
      }
      return async.Future$(response$.Response$(T))._check(dart.dgsend(err, [response$.Response$(T)], 'then', [dart.fn(v => {
          dart.throw(this.assureDioError(v));
        }, dynamicToNull())], {onError: dart.fn(e => {
          dart.throw(this.assureDioError(e));
        }, dynamicToNull())}));
    }
    lock() {
      this.interceptors.requestLock.lock();
    }
    unlock() {
      this.interceptors.requestLock.unlock();
    }
    clear() {
      this.interceptors.requestLock.clear();
    }
    download(urlPath, savePath, opts) {
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let deleteOnError = opts && 'deleteOnError' in opts ? opts.deleteOnError : true;
      let lengthHeader = opts && 'lengthHeader' in opts ? opts.lengthHeader : "content-length";
      let data = opts && 'data' in opts ? opts.data : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return async.async(response$.Response, function* download() {
        dart.throw(new core.UnsupportedError.new("Unsupport download API in browser"));
      });
    }
    downloadUri(uri, savePath, opts) {
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let deleteOnError = opts && 'deleteOnError' in opts ? opts.deleteOnError : true;
      let lengthHeader = opts && 'lengthHeader' in opts ? opts.lengthHeader : "content-length";
      let data = opts && 'data' in opts ? opts.data : null;
      let options = opts && 'options' in opts ? opts.options : null;
      return this.download(dart.toString(uri), savePath, {onReceiveProgress: onReceiveProgress, lengthHeader: lengthHeader, deleteOnError: deleteOnError, cancelToken: cancelToken, data: data, options: options});
    }
    request(T, path, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return async.async(response$.Response$(T), (function* request() {
        return this[_request](T, path, {data: data, queryParameters: queryParameters, cancelToken: cancelToken, options: options, onSendProgress: onSendProgress, onReceiveProgress: onReceiveProgress});
      }).bind(this));
    }
    requestUri(T, uri, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return this.request(T, dart.toString(uri), {data: data, cancelToken: cancelToken, options: options, onSendProgress: onSendProgress, onReceiveProgress: onReceiveProgress});
    }
    [_request](T, path, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let options = opts && 'options' in opts ? opts.options : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      return async.async(response$.Response$(T), (function* _request() {
        let t0, t0$, t0$0, t0$1, t0$2;
        if (dart.test(this[_closed])) {
          dart.throw(new dio_error.DioError.new({error: "Dio can't establish new connection after closed."}));
        }
        if (options == null) options = new options$.Options.new();
        if (options$.RequestOptions.is(options)) {
          data = (t0 = data, t0 == null ? options.data : t0);
          queryParameters = (t0$ = queryParameters, t0$ == null ? options.queryParameters : t0$);
          cancelToken = (t0$0 = cancelToken, t0$0 == null ? options.cancelToken : t0$0);
          onSendProgress = (t0$1 = onSendProgress, t0$1 == null ? options.onSendProgress : t0$1);
          onReceiveProgress = (t0$2 = onReceiveProgress, t0$2 == null ? options.onReceiveProgress : t0$2);
        }
        let requestOptions = this.mergeOptions(options, path, data, queryParameters);
        requestOptions.onReceiveProgress = onReceiveProgress;
        requestOptions.onSendProgress = onSendProgress;
        requestOptions.cancelToken = cancelToken;
        if (!dart.wrapType(T)[$_equals](dart.wrapType(dart.dynamic)) && !(dart.equals(requestOptions.responseType, options$.ResponseType.bytes) || dart.equals(requestOptions.responseType, options$.ResponseType.stream))) {
          if (dart.wrapType(T)[$_equals](dart.wrapType(core.String))) {
            requestOptions.responseType = options$.ResponseType.plain;
          } else {
            requestOptions.responseType = options$.ResponseType.json;
          }
        }
        function _isErrorOrException(t) {
          return core.Exception.is(t) || core.Error.is(t);
        }
        dart.fn(_isErrorOrException, dynamicTobool());
        const _interceptorWrapper = (interceptor, request) => {
          return dart.fn(data => async.async(dart.dynamic, (function*() {
            let type = dart.test(request) ? options$.RequestOptions.is(data) : response$.Response.is(data);
            let lock = dart.test(request) ? this.interceptors.requestLock : this.interceptors.responseLock;
            if (dart.test(_isErrorOrException(data)) || type) {
              return this.listenCancelForAsyncTask(dart.dynamic, cancelToken, async.Future.new(dart.fn(() => this.checkIfNeedEnqueue(lock, dart.fn(() => {
                let t0;
                if (type) {
                  if (!dart.test(request)) dart.dput(data, 'request', (t0 = dart.dload(data, 'request'), t0 == null ? requestOptions : t0));
                  return dart.dsend(dart.dcall(interceptor, [data]), 'then', [dart.fn(e => {
                      let t0;
                      t0 = e;
                      return t0 == null ? data : t0;
                    }, dynamicTodynamic())]);
                } else {
                  dart.throw(this.assureDioError(data, requestOptions));
                }
              }, VoidTodynamic())), VoidToFutureOr())));
            } else {
              return this.assureResponse(dart.dynamic, data, requestOptions);
            }
          }).bind(this)), dynamicToFuture());
        };
        dart.fn(_interceptorWrapper, dynamicAndboolToFn());
        const _errorInterceptorWrapper = errInterceptor => {
          return dart.fn(err => async.async(dart.dynamic, (function*() {
            let t0;
            if (!response$.Response.is(err)) {
              let _e = (yield dart.dcall(errInterceptor, [this.assureDioError(err, requestOptions)]));
              if (!response$.Response.is(_e)) {
                dart.throw(this.assureDioError((t0 = _e, t0 == null ? err : t0), requestOptions));
              }
              err = _e;
            }
            return err;
          }).bind(this)), dynamicToFuture());
        };
        dart.fn(_errorInterceptorWrapper, dynamicToFn());
        let future = async.Future.value(requestOptions);
        this.interceptors[$forEach](dart.fn(interceptor => {
          future = future.then(dart.dynamic, _interceptorWrapper(dart.bind(interceptor, 'onRequest'), true));
        }, InterceptorToNull()));
        future = future.then(dart.dynamic, _interceptorWrapper(dart.bind(this, _dispatchRequest), true));
        this.interceptors[$forEach](dart.fn(interceptor => {
          future = future.then(dart.dynamic, _interceptorWrapper(dart.bind(interceptor, 'onResponse'), false));
        }, InterceptorToNull()));
        this.interceptors[$forEach](dart.fn(interceptor => {
          future = future.catchError(_errorInterceptorWrapper(dart.bind(interceptor, 'onError')));
        }, InterceptorToNull()));
        return future.then(response$.Response$(T), dart.fn(data => this.assureResponse(T, data), dart.fnType(response$.Response$(T), [dart.dynamic]))).catchError(dart.fn(err => {
          if (err == null || dart.test(_isErrorOrException(err))) {
            dart.throw(this.assureDioError(err, requestOptions));
          }
          return this.assureResponse(T, err, requestOptions);
        }, dart.fnType(response$.Response$(T), [dart.dynamic])));
      }).bind(this));
    }
    [_dispatchRequest](T, options) {
      return async.async(response$.Response$(T), (function* _dispatchRequest() {
        let t0, t0$, t0$0;
        let cancelToken = options.cancelToken;
        let responseBody = null;
        try {
          let stream = (yield this[_transformData](options));
          responseBody = (yield this.httpClientAdapter.fetch(options, stream, (t0 = cancelToken, t0 == null ? null : t0.whenCancel)));
          let headers = new headers$.Headers.fromMap((t0$ = responseBody.headers, t0$ == null ? new (IdentityMapOfString$ListOfString()).new() : t0$));
          let ret = new response$.Response.new({headers: headers, request: options, redirects: (t0$0 = responseBody.redirects, t0$0 == null ? JSArrayOfRedirectRecord().of([]) : t0$0), isRedirect: responseBody.isRedirect, statusCode: responseBody.statusCode, statusMessage: responseBody.statusMessage, extra: responseBody.extra});
          let statusOk = options.validateStatus(responseBody.statusCode);
          if (dart.test(statusOk) || dart.test(options.receiveDataWhenStatusError)) {
            let forceConvert = !(dart.wrapType(T)[$_equals](dart.wrapType(dart.dynamic)) || dart.wrapType(T)[$_equals](dart.wrapType(core.String))) && !(dart.equals(options.responseType, options$.ResponseType.bytes) || dart.equals(options.responseType, options$.ResponseType.stream));
            let contentType = null;
            if (forceConvert) {
              contentType = headers.value("content-type");
              headers.set("content-type", "application/json; charset=utf-8");
            }
            ret.data = (yield this.transformer.transformResponse(options, responseBody));
            if (forceConvert) {
              headers.set("content-type", contentType);
            }
          } else {
            yield responseBody.stream.listen(null).cancel();
          }
          this.checkCancelled(cancelToken);
          if (dart.test(statusOk)) {
            return async.FutureOr$(response$.Response$(T))._check(this.checkIfNeedEnqueue(this.interceptors.responseLock, dart.fn(() => ret, VoidToResponse())));
          } else {
            dart.throw(new dio_error.DioError.new({response: ret, error: "Http status error [" + dart.str(responseBody.statusCode) + "]", type: dio_error.DioErrorType.RESPONSE}));
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
          let err = this.assureDioError(e, options);
          dart.throw(err);
        }
      }).bind(this));
    }
    checkCancelled(cancelToken) {
      if (cancelToken != null && cancelToken.cancelError != null) {
        dart.throw(cancelToken.cancelError);
      }
    }
    listenCancelForAsyncTask(T, cancelToken, future) {
      return async.Future.any(T, (() => {
        let t1 = _interceptors.JSArray$(async.Future$(T)).of([]);
        if (cancelToken != null) t1[$add](cancelToken.whenCancel.then(T, dart.fn(e => dart.throw(cancelToken.cancelError), voidTobottom())));
        t1[$add](future);
        return t1;
      })());
    }
    [_transformData](options) {
      return async.async(StreamOfUint8List(), (function* _transformData() {
        let t4, t3, t2;
        let data = options.data;
        let bytes = null;
        let stream = null;
        if (data != null && dart.test(JSArrayOfString().of(["POST", "PUT", "PATCH", "DELETE"])[$contains](options.method))) {
          let length = null;
          if (async.Stream.is(data)) {
            if (!StreamOfList().is(data)) dart.assertFailed("Stream type must be `Stream<List>`, but " + dart.str(dart.runtimeType(data)) + " is found.", "org-dartlang-app:///packages/dio/src/dio.dart", 971, 16, "ert(data is Stream<L");
            stream = StreamOfListOfint()._check(data);
            options.headers[$keys][$any](dart.fn(key => {
              if (key[$toLowerCase]() === "content-length") {
                length = core.int.parse(dart.toString(options.headers[$_get](key)));
                return true;
              }
              return false;
            }, StringTobool()));
          } else if (form_data.FormData.is(data)) {
            if (form_data.FormData.is(data)) {
              options.headers[$_set]("content-type", "multipart/form-data; boundary=" + dart.str(data.boundary));
            }
            stream = data.finalize();
            length = data.length;
          } else {
            let _data = (yield this.transformer.transformRequest(options));
            if (options.requestEncoder != null) {
              bytes = options.requestEncoder(_data, options);
            } else {
              bytes = convert.utf8.encode(_data);
            }
            length = bytes[$length];
            let group = JSArrayOfListOfint().of([]);
            let groupCount = (dart.notNull(bytes[$length]) / 1024)[$ceil]();
            for (let i = 0; i < groupCount; i = i + 1) {
              let start = i * 1024;
              group[$add](bytes[$sublist](start, math.min(core.int, start + 1024, bytes[$length])));
            }
            stream = StreamOfListOfint().fromIterable(group);
          }
          t2 = options.headers;
          t3 = "content-type";
          t2[$_get](t3) == null ? (t4 = dart.toString(options.contentType), t2[$_set](t3, t4), t4) : null;
          if (length != null) {
            options.headers[$_set]("content-length", dart.toString(length));
          }
          let complete = 0;
          let byteStream = stream.transform(typed_data.Uint8List, new (_StreamHandlerTransformerOfListOfint$Uint8List()).new({handleData: dart.fn((data, sink) => {
              let t2;
              if (options.cancelToken != null && dart.test(options.cancelToken.isCancelled)) {
                t2 = sink;
                t2.addError(options.cancelToken.cancelError);
                t2.close();
                t2;
              } else {
                sink.add(_native_typed_data.NativeUint8List.fromList(data));
                if (length != null) {
                  complete = complete + dart.notNull(data[$length]);
                  if (options.onSendProgress != null) {
                    options.onSendProgress(complete, length);
                  }
                }
              }
            }, ListOfintAndEventSinkOfUint8ListToNull())}));
          if (dart.notNull(options.sendTimeout) > 0) {
            byteStream.timeout(new core.Duration.new({milliseconds: options.sendTimeout}), {onTimeout: dart.fn(sink => {
                sink.addError(new dio_error.DioError.new({request: options, error: "Sending timeout[" + dart.str(options.connectTimeout) + "ms]", type: dio_error.DioErrorType.SEND_TIMEOUT}));
                sink.close();
              }, EventSinkOfUint8ListToNull())});
          }
          return byteStream;
        } else {
          options.headers[$remove]("content-type");
        }
        return null;
      }).bind(this));
    }
    mergeOptions(opt, url, data, queryParameters) {
      let t2, t3, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13, t2$14, t2$15, t2$16, t2$17, t2$18, t2$19, t2$20, t2$21, t2$22, t2$23, t2$24, t2$25;
      let query = (t2$ = LinkedHashMapOfString$dynamic().from((t2 = this.options.queryParameters, t2 == null ? new _js_helper.LinkedMap.new() : t2)), t2$[$addAll]((t3 = queryParameters, t3 == null ? new (IdentityMapOfString$dynamic()).new() : t3)), t2$);
      let optBaseUrl = options$.RequestOptions.is(opt) ? opt.baseUrl : null;
      return new options$.RequestOptions.new({method: (t2$2 = (t2$1 = (t2$0 = opt.method, t2$0 == null ? this.options.method : t2$0), t2$1 == null ? null : t2$1[$toUpperCase]()), t2$2 == null ? "GET" : t2$2), headers: (t2$3 = LinkedHashMapOfString$dynamic().from(this.options.headers), t2$3[$addAll](opt.headers), t2$3), baseUrl: (t2$5 = (t2$4 = optBaseUrl, t2$4 == null ? this.options.baseUrl : t2$4), t2$5 == null ? "" : t2$5), path: url, data: data, connectTimeout: (t2$6 = this.options.connectTimeout, t2$6 == null ? 0 : t2$6), sendTimeout: (t2$8 = (t2$7 = opt.sendTimeout, t2$7 == null ? this.options.sendTimeout : t2$7), t2$8 == null ? 0 : t2$8), receiveTimeout: (t2$10 = (t2$9 = opt.receiveTimeout, t2$9 == null ? this.options.receiveTimeout : t2$9), t2$10 == null ? 0 : t2$10), responseType: (t2$12 = (t2$11 = opt.responseType, t2$11 == null ? this.options.responseType : t2$11), t2$12 == null ? options$.ResponseType.json : t2$12), extra: (t2$13 = LinkedHashMapOfString$dynamic().from(this.options.extra), t2$13[$addAll](opt.extra), t2$13), contentType: core.String._check((t2$15 = (t2$14 = opt.contentType, t2$14 == null ? this.options.contentType : t2$14), t2$15 == null ? "application/json; charset=utf-8" : t2$15)), validateStatus: (t2$17 = (t2$16 = opt.validateStatus, t2$16 == null ? this.options.validateStatus : t2$16), t2$17 == null ? dart.fn(status => dart.notNull(status) >= 200 && dart.notNull(status) < 300 || status === 304, intTobool()) : t2$17), receiveDataWhenStatusError: (t2$19 = (t2$18 = opt.receiveDataWhenStatusError, t2$18 == null ? this.options.receiveDataWhenStatusError : t2$18), t2$19 == null ? true : t2$19), followRedirects: (t2$21 = (t2$20 = opt.followRedirects, t2$20 == null ? this.options.followRedirects : t2$20), t2$21 == null ? true : t2$21), maxRedirects: (t2$23 = (t2$22 = opt.maxRedirects, t2$22 == null ? this.options.maxRedirects : t2$22), t2$23 == null ? 5 : t2$23), queryParameters: query, requestEncoder: (t2$24 = opt.requestEncoder, t2$24 == null ? this.options.requestEncoder : t2$24), responseDecoder: (t2$25 = opt.responseDecoder, t2$25 == null ? this.options.responseDecoder : t2$25)});
    }
    checkOptions(method, options) {
      if (options == null) {
        options = new options$.Options.new();
      }
      dart.dput(options, 'method', method);
      return options$.Options._check(options);
    }
    checkIfNeedEnqueue(lock, callback) {
      if (dart.test(lock.locked)) {
        return lock.enqueue(callback);
      } else {
        return callback();
      }
    }
    assureDioError(err, requestOptions) {
      let t2;
      if (requestOptions === void 0) requestOptions = null;
      let dioError = null;
      if (dio_error.DioError.is(err)) {
        dioError = err;
      } else {
        dioError = new dio_error.DioError.new({error: err});
      }
      dioError.request = (t2 = dioError.request, t2 == null ? requestOptions : t2);
      return dioError;
    }
    assureResponse(T, response, requestOptions) {
      let t2;
      if (requestOptions === void 0) requestOptions = null;
      if (response$.Response$(T).is(response)) {
        response.request = (t2 = response.request, t2 == null ? requestOptions : t2);
      } else if (!response$.Response.is(response)) {
        response = new (response$.Response$(T)).new({data: T._check(response), request: requestOptions});
      } else {
        let data = T._check(dart.dload(response, 'data'));
        response = new (response$.Response$(T)).new({data: data, headers: headers$.Headers._check(dart.dload(response, 'headers')), request: options$.RequestOptions._check(dart.dload(response, 'request')), statusCode: core.int._check(dart.dload(response, 'statusCode')), isRedirect: core.bool._check(dart.dload(response, 'isRedirect')), redirects: ListOfRedirectRecord()._check(dart.dload(response, 'redirects')), statusMessage: core.String._check(dart.dload(response, 'statusMessage'))});
      }
      return response$.Response$(T)._check(response);
    }
  };
  (dio.DioMixin.new = function() {
    this[options] = null;
    this[_interceptors$] = new interceptor.Interceptors.new();
    this[httpClientAdapter] = null;
    this[transformer$] = new transformer.DefaultTransformer.new();
    this[_closed] = false;
    ;
  }).prototype = dio.DioMixin.prototype;
  dart.addTypeTests(dio.DioMixin);
  const options = Symbol("DioMixin.options");
  const httpClientAdapter = Symbol("DioMixin.httpClientAdapter");
  const transformer$ = Symbol("DioMixin.transformer");
  dio.DioMixin[dart.implements] = () => [dio.Dio];
  dart.setMethodSignature(dio.DioMixin, () => ({
    __proto__: dart.getMethods(dio.DioMixin.__proto__),
    close: dart.fnType(dart.void, [], {force: core.bool}),
    get: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.String], {cancelToken: cancel_token.CancelToken, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options, queryParameters: core.Map$(core.String, dart.dynamic)}]),
    getUri: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.Uri], {cancelToken: cancel_token.CancelToken, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options}]),
    post: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.String], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options, queryParameters: core.Map$(core.String, dart.dynamic)}]),
    postUri: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.Uri], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options}]),
    put: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.String], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options, queryParameters: core.Map$(core.String, dart.dynamic)}]),
    putUri: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.Uri], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options}]),
    head: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.String], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, options: options$.Options, queryParameters: core.Map$(core.String, dart.dynamic)}]),
    headUri: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.Uri], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, options: options$.Options}]),
    delete: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.String], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, options: options$.Options, queryParameters: core.Map$(core.String, dart.dynamic)}]),
    deleteUri: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.Uri], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, options: options$.Options}]),
    patch: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.String], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options, queryParameters: core.Map$(core.String, dart.dynamic)}]),
    patchUri: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.Uri], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options}]),
    resolve: dart.gFnType(T => [async.Future$(response$.Response$(T)), [dart.dynamic]]),
    reject: dart.gFnType(T => [async.Future$(response$.Response$(T)), [dart.dynamic]]),
    lock: dart.fnType(dart.dynamic, []),
    unlock: dart.fnType(dart.dynamic, []),
    clear: dart.fnType(dart.dynamic, []),
    download: dart.fnType(async.Future$(response$.Response), [core.String, dart.dynamic], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, deleteOnError: core.bool, lengthHeader: core.String, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options, queryParameters: core.Map$(core.String, dart.dynamic)}),
    downloadUri: dart.fnType(async.Future$(response$.Response), [core.Uri, dart.dynamic], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, deleteOnError: core.bool, lengthHeader: core.String, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options}),
    request: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.String], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options, queryParameters: core.Map$(core.String, dart.dynamic)}]),
    requestUri: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.Uri], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options}]),
    [_request]: dart.gFnType(T => [async.Future$(response$.Response$(T)), [core.String], {cancelToken: cancel_token.CancelToken, data: dart.dynamic, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), options: options$.Options, queryParameters: core.Map$(core.String, dart.dynamic)}]),
    [_dispatchRequest]: dart.gFnType(T => [async.Future$(response$.Response$(T)), [options$.RequestOptions]]),
    checkCancelled: dart.fnType(dart.dynamic, [cancel_token.CancelToken]),
    listenCancelForAsyncTask: dart.gFnType(T => [async.Future$(T), [cancel_token.CancelToken, async.Future$(T)]]),
    [_transformData]: dart.fnType(async.Future$(async.Stream$(typed_data.Uint8List)), [options$.RequestOptions]),
    mergeOptions: dart.fnType(options$.RequestOptions, [options$.Options, core.String, dart.dynamic, core.Map$(core.String, dart.dynamic)]),
    checkOptions: dart.fnType(options$.Options, [dart.dynamic, dart.dynamic]),
    checkIfNeedEnqueue: dart.fnType(async.FutureOr, [interceptor.Lock, dart.fnType(dart.dynamic, [])]),
    assureDioError: dart.fnType(dio_error.DioError, [dart.dynamic], [options$.RequestOptions]),
    assureResponse: dart.gFnType(T => [response$.Response$(T), [dart.dynamic], [options$.RequestOptions]])
  }));
  dart.setGetterSignature(dio.DioMixin, () => ({
    __proto__: dart.getGetters(dio.DioMixin.__proto__),
    interceptors: interceptor.Interceptors
  }));
  dart.setLibraryUri(dio.DioMixin, "package:dio/src/dio.dart");
  dart.setFieldSignature(dio.DioMixin, () => ({
    __proto__: dart.getFields(dio.DioMixin.__proto__),
    options: dart.fieldType(options$.BaseOptions),
    [_interceptors$]: dart.fieldType(interceptor.Interceptors),
    httpClientAdapter: dart.fieldType(adapter.HttpClientAdapter),
    transformer: dart.fieldType(transformer.Transformer),
    [_closed]: dart.fieldType(core.bool)
  }));
  const Object_DioMixin$ = class Object_DioMixin extends core.Object {};
  (Object_DioMixin$.new = function() {
    dio.DioMixin.new.call(this);
  }).prototype = Object_DioMixin$.prototype;
  dart.applyMixin(Object_DioMixin$, dio.DioMixin);
  dio_for_browser.DioForBrowser = class DioForBrowser extends Object_DioMixin$ {};
  (dio_for_browser.DioForBrowser.new = function(options) {
    if (options === void 0) options = null;
    dio_for_browser.DioForBrowser.__proto__.new.call(this);
    if (options == null) {
      options = new options$.BaseOptions.new();
    }
    this.options = options;
    this.httpClientAdapter = new browser_adapter.BrowserHttpClientAdapter.new();
  }).prototype = dio_for_browser.DioForBrowser.prototype;
  dart.addTypeTests(dio_for_browser.DioForBrowser);
  dio_for_browser.DioForBrowser[dart.implements] = () => [dio.Dio];
  dart.setLibraryUri(dio_for_browser.DioForBrowser, "package:dio/src/entry/dio_for_browser.dart");
  dio_for_browser.createDio = function createDio(options) {
    if (options === void 0) options = null;
    return new dio_for_browser.DioForBrowser.new(options);
  };
  dio.Dio = class Dio extends core.Object {
    get options() {
      return this[options$0];
    }
    set options(value) {
      this[options$0] = value;
    }
    get httpClientAdapter() {
      return this[httpClientAdapter$];
    }
    set httpClientAdapter(value) {
      this[httpClientAdapter$] = value;
    }
    get transformer() {
      return this[transformer$0];
    }
    set transformer(value) {
      this[transformer$0] = value;
    }
    static new(options) {
      if (options === void 0) options = null;
      return dio_for_browser.createDio(options);
    }
  };
  (dio.Dio[dart.mixinNew] = function() {
    this[options$0] = null;
    this[httpClientAdapter$] = null;
    this[transformer$0] = null;
  }).prototype = dio.Dio.prototype;
  dart.addTypeTests(dio.Dio);
  const options$0 = Symbol("Dio.options");
  const httpClientAdapter$ = Symbol("Dio.httpClientAdapter");
  const transformer$0 = Symbol("Dio.transformer");
  dart.setLibraryUri(dio.Dio, "package:dio/src/dio.dart");
  dart.setFieldSignature(dio.Dio, () => ({
    __proto__: dart.getFields(dio.Dio.__proto__),
    options: dart.fieldType(options$.BaseOptions),
    httpClientAdapter: dart.fieldType(adapter.HttpClientAdapter),
    transformer: dart.fieldType(transformer.Transformer)
  }));
  const _boundary = dart.privateName(form_data, "_boundary");
  const _newlineRegExp = dart.privateName(form_data, "_newlineRegExp");
  const _isFinalized$ = dart.privateName(form_data, "_isFinalized");
  const _init = dart.privateName(form_data, "_init");
  const _browserEncode = dart.privateName(form_data, "_browserEncode");
  const _headerForField = dart.privateName(form_data, "_headerForField");
  const _headerForFile = dart.privateName(form_data, "_headerForFile");
  form_data.FormData = class FormData extends core.Object {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[files];
    }
    set files(value) {
      super.files = value;
    }
    get boundary() {
      return this[_boundary];
    }
    get isFinalized() {
      return this[_isFinalized$];
    }
    [_init]() {
      let random = math.Random.new();
      this[_boundary] = "--dio-boundary-" + dart.toString(random.nextInt(4294967296))[$padLeft](10, "0");
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](name)) + "\"";
      if (!dart.test(utils.isPlainAscii(value))) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](entry) {
      let file = entry.value;
      let header = "content-type: " + dart.str(file.contentType) + "\r\n" + "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](entry.key)) + "\"";
      if (file.filename != null) {
        header = header + "; filename=\"" + dart.str(this[_browserEncode](file.filename)) + "\"";
      }
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](this[_newlineRegExp], "%0D%0A")[$replaceAll]("\"", "%22");
    }
    get length() {
      let length = 0;
      this.fields[$forEach](dart.fn(entry => {
        length = length + ("--".length + 25 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForField](entry.key, entry.value))[$length]) + dart.notNull(convert.utf8.encode(entry.value)[$length]) + "\r\n".length);
      }, MapEntryOfString$StringToNull()));
      for (let file of this.files) {
        length = length + ("--".length + 25 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForFile](file))[$length]) + dart.notNull(file.value.length) + "\r\n".length);
      }
      return length + "--".length + 25 + "--\r\n".length;
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized$] = true;
      let controller = StreamControllerOfListOfint().new({sync: false});
      function writeAscii(string) {
        controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeAscii, StringTovoid());
      function writeUtf8(string) {
        return controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeUtf8, StringTovoid());
      function writeLine() {
        return controller.add(JSArrayOfint().of([13, 10]));
      }
      dart.fn(writeLine, VoidTovoid());
      this.fields[$forEach](dart.fn(entry => {
        writeAscii("--" + dart.str(this.boundary) + "\r\n");
        writeAscii(this[_headerForField](entry.key, entry.value));
        writeUtf8(entry.value);
        writeLine();
      }, MapEntryOfString$StringToNull()));
      async.Future.forEach(MapEntryOfString$MultipartFile(), this.files, dart.fn(file => {
        writeAscii("--" + dart.str(this.boundary) + "\r\n");
        writeAscii(this[_headerForFile](MapEntryOfString$MultipartFile()._check(file)));
        return utils.writeStreamToSink(async.Stream._check(dart.dsend(dart.dload(file, 'value'), 'finalize', [])), controller).then(dart.dynamic, dart.fn(_ => writeLine(), dynamicTovoid()));
      }, dynamicToFuture())).then(dart.dynamic, dart.fn(_ => {
        writeAscii("--" + dart.str(this.boundary) + "--\r\n");
        controller.close();
      }, dynamicToNull()));
      return controller.stream;
    }
    readAsBytes() {
      return this.finalize().reduce(dart.fn((a, b) => {
        let t2;
        t2 = JSArrayOfint().of([]);
        t2[$addAll](a);
        t2[$addAll](b);
        return t2;
      }, ListOfintAndListOfintToListOfint()));
    }
  };
  (form_data.FormData.new = function() {
    this[_boundary] = null;
    this[_newlineRegExp] = core.RegExp.new("\\r\\n|\\r|\\n");
    this[fields] = JSArrayOfMapEntryOfString$String().of([]);
    this[files] = JSArrayOfMapEntryOfString$MultipartFile().of([]);
    this[_isFinalized$] = false;
    this[_init]();
  }).prototype = form_data.FormData.prototype;
  (form_data.FormData.fromMap = function(map) {
    this[_boundary] = null;
    this[_newlineRegExp] = core.RegExp.new("\\r\\n|\\r|\\n");
    this[fields] = JSArrayOfMapEntryOfString$String().of([]);
    this[files] = JSArrayOfMapEntryOfString$MultipartFile().of([]);
    this[_isFinalized$] = false;
    this[_init]();
    utils.encodeMap(map, dart.fn((key, value) => {
      if (value == null) return null;
      if (multipart_file.MultipartFile.is(value)) {
        this.files[$add](new (MapEntryOfString$MultipartFile()).__(key, value));
      } else {
        this.fields[$add](new (MapEntryOfString$String()).__(key, dart.toString(value)));
      }
      return null;
    }, StringAnddynamicToNull()), {encode: false});
  }).prototype = form_data.FormData.prototype;
  dart.addTypeTests(form_data.FormData);
  const fields = Symbol("FormData.fields");
  const files = Symbol("FormData.files");
  dart.setMethodSignature(form_data.FormData, () => ({
    __proto__: dart.getMethods(form_data.FormData.__proto__),
    [_init]: dart.fnType(dart.dynamic, []),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [core.MapEntry$(core.String, multipart_file.MultipartFile)]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    finalize: dart.fnType(async.Stream$(core.List$(core.int)), []),
    readAsBytes: dart.fnType(async.Future$(core.List$(core.int)), [])
  }));
  dart.setGetterSignature(form_data.FormData, () => ({
    __proto__: dart.getGetters(form_data.FormData.__proto__),
    boundary: core.String,
    isFinalized: core.bool,
    length: core.int
  }));
  dart.setLibraryUri(form_data.FormData, "package:dio/src/form_data.dart");
  dart.setFieldSignature(form_data.FormData, () => ({
    __proto__: dart.getFields(form_data.FormData.__proto__),
    [_boundary]: dart.fieldType(core.String),
    [_newlineRegExp]: dart.finalFieldType(core.RegExp),
    fields: dart.finalFieldType(core.List$(core.MapEntry$(core.String, core.String))),
    files: dart.finalFieldType(core.List$(core.MapEntry$(core.String, multipart_file.MultipartFile))),
    [_isFinalized$]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(form_data.FormData, {
    /*form_data.FormData._BOUNDARY_PRE_TAG*/get _BOUNDARY_PRE_TAG() {
      return "--dio-boundary-";
    },
    /*form_data.FormData._BOUNDARY_LENGTH*/get _BOUNDARY_LENGTH() {
      return 25;
    }
  });
  dart.trackLibraries("packages/dio/src/dio", {
    "package:dio/src/interceptor.dart": interceptor,
    "package:dio/src/multipart_file_stub.dart": multipart_file_stub,
    "package:dio/src/multipart_file.dart": multipart_file,
    "package:dio/src/entry/dio_for_browser.dart": dio_for_browser,
    "package:dio/src/dio.dart": dio,
    "package:dio/src/form_data.dart": form_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interceptor.dart","multipart_file_stub.dart","multipart_file.dart","dio.dart","entry/dio_for_browser.dart","form_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBqB,4BAAS;IAAI;;AAQ9B,qBAAK;QACH,mBAAa;QACb,cAAQ,AAAW;;IAEvB;;AAIE,oBAAI;QACF,AAAW;QACX,cAAQ;;IAEZ;UAGmB;;AACjB,oBAAI;QACF,AAAW,+BAAc,GAAG;QAC5B,cAAQ;;IAEZ;YAOwB;AACtB,oBAAI;AAEF,cAAO,AAAM,gCAAK,QAAC,KAAM,AAAQ,QAAA;;AAEnC,YAAO;IACT;;;IA7CO;IACG;;EA6CZ;;;;;;;;;;;;;;;;;;;;cAiBkC;AAAhB;AAAkC,sBAAO;;;eAO9B;AAAV;AAA6B,uBAAQ;;;YAO9B;AAAV;AAAwB,kBAAG;;;;;;EAC3C;;;;;;;;;;;;;cAgBkC;AAAhB;AACd,YAAI,oBAAc;AAChB,gBAAO,kBAAW,OAAO;;MAE7B;;eAG4B;AAAV;AAChB,YAAI,qBAAe;AACjB,gBAAO,mBAAY,QAAQ;;MAE/B;;YAGwB;AAAV;AACZ,YAAI,kBAAY;AACd,gBAAO,gBAAS,GAAG;;MAEvB;;;;QA1B0B;QACG;QACF;IACV,mBAAE,SAAS;IACV,oBAAE,UAAU;IACf,iBAAE,OAAO;;;;;;;;;;;;;;;;IAsCpB;;;;;;;AAPoB;IAAY;;AAEX;IAAa;;AAEhB;IAAU;SAMhB;AACd,YAAO,AAAK,oBAAC,KAAK;IACpB;SAGsB;UAAO;;AAC3B,UAAI,AAAM,AAAO,wBAAG,KAAK;QACvB,AAAM,kBAAI,KAAK;;QAEf,AAAK,mBAAC,KAAK,EAAI,KAAK;;;IAExB;;;IA3BkB,cAAQ;IAErB,qBAAe;IACf,sBAAgB;IAChB,mBAAa;IASd,eAAS;;EAef;;;;;;;;;;;;;;;;;;;;;;;;;;;6ECvJoD;QACxC;QAAoB;AAC5B,sBAAM;EAAI;qFAEkC;QACpC;QAAoB;AAC5B,sBAAM;EAAI;;MATR,wBAAI;YAAG,+BACT;;;;;;ICaQ;;;;;;IAGG;;;;;;IAGG;;;;;;;AAMQ;IAAY;qBAwBxB;UACH;UACG;AAEN,mBAAgB,iCAAa,yBAAC,KAAK;AACvC,YAAO,sCACL,MAAM,EACN,AAAM,KAAD,sBACK,QAAQ,eACL,WAAW;IAE5B;sBASS;UACA;UACG;MAEV,cACI,AAAY,WAAD,IAAI,OAAO,6BAAU,QAAQ,WAAW,WAAW;AAC9D,qBAAW,yBAAmB,AAAY,AAAU,WAAX,mBAAY,YAAY;MACrE,cAAc,AAAY,WAAD,qBAAoB,yCAAC,WAAW,AAAS,QAAD;AAEjE,YAAqB,wCACnB,AAAS,QAAD,QAAQ,KAAK,cACX,QAAQ,eACL,WAAW;IAE5B;oBAWS;UACA;UACG;AAER,uDACE,QAAQ,aACE,QAAQ,eACL,WAAW;IACzB;wBAGI;UACA;UACG;AAER,2DACE,QAAQ,aACE,QAAQ,eACL,WAAW;IACzB;;AAGH,oBAAI;QACF,WAAM,wBAAW;;MAEnB,qBAAe;AACf,YAAO;IACT;;+CAtFoB,QACb;QACA;QACK;IAZP,qBAAe;IAUb;IACA;IAEY,gBAAE,MAAM;IACJ,qBAAE,AACf,WAD0B,IAAI,OAC5B,WAAW,GACX,6BAAU,eAAe;;EAAe;;;;;;;;;;;;;;;;;;;;;;;;;;;;IC8RxC;;;;;;IAUM;;;;;;IAEN;;;;;;;AAJqB;IAAa;;UAQ7B;MACf,gBAAU;MACV,AAAkB,qCAAa,KAAK;IACtC;WAIS;UACc;UACb;UACI;UACK;AAEjB,YAAO,iBACL,IAAI,oBACa,eAAe,WACvB,kBAAa,OAAO,OAAO,sBACjB,iBAAiB,eACvB,WAAW;IAE5B;cAIM;UACI;UACI;UACK;AAEjB,YAAO,oBACL,GAAG,YACM,kBAAa,OAAO,OAAO,sBACjB,iBAAiB,eACvB,WAAW;IAE5B;YAIS;UACP;UACqB;UACb;UACI;UACK;UACA;AAEjB,YAAO,iBACL,IAAI,SACE,IAAI,WACD,kBAAa,QAAQ,OAAO,oBACpB,eAAe,eACnB,WAAW,kBACR,cAAc,qBACX,iBAAiB;IAExC;eAIM;UACJ;UACQ;UACI;UACK;UACA;AAEjB,YAAO,oBACL,GAAG,SACG,IAAI,WACD,kBAAa,QAAQ,OAAO,gBACxB,WAAW,kBACR,cAAc,qBACX,iBAAiB;IAExC;WAIS;UACP;UACqB;UACb;UACI;UACK;UACA;AAEjB,YAAO,iBACL,IAAI,SACE,IAAI,mBACO,eAAe,WACvB,kBAAa,OAAO,OAAO,gBACvB,WAAW,kBACR,cAAc,qBACX,iBAAiB;IAExC;cAIM;UACJ;UACQ;UACI;UACK;UACA;AAEjB,YAAO,oBACL,GAAG,SACG,IAAI,WACD,kBAAa,OAAO,OAAO,gBACvB,WAAW,kBACR,cAAc,qBACX,iBAAiB;IAExC;YAIS;UACP;UACqB;UACb;UACI;AAEZ,YAAO,iBACL,IAAI,SACE,IAAI,mBACO,eAAe,WACvB,kBAAa,QAAQ,OAAO,gBACxB,WAAW;IAE5B;eAIM;UACJ;UACQ;UACI;AAEZ,YAAO,oBACL,GAAG,SACG,IAAI,WACD,kBAAa,QAAQ,OAAO,gBACxB,WAAW;IAE5B;cAIS;UACP;UACqB;UACb;UACI;AAEZ,YAAO,iBACL,IAAI,SACE,IAAI,mBACO,eAAe,WACvB,kBAAa,UAAU,OAAO,gBAC1B,WAAW;IAE5B;iBAIM;UACJ;UACQ;UACI;AAEZ,YAAO,oBACL,GAAG,SACG,IAAI,WACD,kBAAa,UAAU,OAAO,gBAC1B,WAAW;IAE5B;aAIS;UACP;UACqB;UACb;UACI;UACK;UACA;AAEjB,YAAO,iBACL,IAAI,SACE,IAAI,mBACO,eAAe,WACvB,kBAAa,SAAS,OAAO,gBACzB,WAAW,kBACR,cAAc,qBACX,iBAAiB;IAExC;gBAIM;UACJ;UACQ;UACI;UACK;UACA;AAEjB,YAAO,oBACL,GAAG,SACG,IAAI,WACD,kBAAa,SAAS,OAAO,gBACzB,WAAW,kBACR,cAAc,qBACX,iBAAiB;IAExC;eAG+B;AAC7B,WAAa,gBAAT,QAAQ;QACV,WAAkB,mBAAM,QAAQ;;AAElC,0DAAgB,YAAT,QAAQ,qCAAmB,QAAC,QAC1B,uBAAkB,IAAI,oEACnB,QAAC,OAEJ,uBAAkB,GAAG;IAEhC;cAG8B;AAC5B,WAAQ,gBAAJ,GAAG;QACL,MAAa,mBAAM,GAAG;;AAExB,0DAAW,YAAJ,GAAG,qCAAmB,QAAC;UAE5B,WAAM,oBAAe,CAAC;wCACZ,QAAC;UACX,WAAM,oBAAe,CAAC;;IAE1B;;MAQE,AAAa,AAAY;IAC3B;;MAME,AAAa,AAAY;IAC3B;;MAKE,AAAa,AAAY;IAC3B;aAyCS,SACP;UACiB;UACI;UACT;UACP;UACE;UACP;UACQ;AATe;QAWvB,WAAM,8BAAiB;MACzB;;gBAsCM,KACJ;UACiB;UACL;UACP;UACE;UACP;UACQ;AAER,YAAO,eACD,cAAJ,GAAG,GACH,QAAQ,sBACW,iBAAiB,gBACtB,YAAY,iBACX,aAAa,eACf,WAAW,QAClB,IAAI,WACD,OAAO;IAEpB;eASS;UACP;UACqB;UACT;UACJ;UACS;UACA;AAPW;AAS5B,cAAO,mBACL,IAAI,SACE,IAAI,mBACO,eAAe,eACnB,WAAW,WACf,OAAO,kBACA,cAAc,qBACX,iBAAiB;MAExC;;kBAQM;UACJ;UACY;UACJ;UACS;UACA;AAEjB,YAAO,iBACD,cAAJ,GAAG,UACG,IAAI,eACG,WAAW,WACf,OAAO,kBACA,cAAc,qBACX,iBAAiB;IAExC;kBAGS;UACP;UACqB;UACT;UACJ;UACS;UACA;AAPY;;AAS7B,sBAAI;UACF,WAAM,mCAAgB;;AAExB,YAAI,AAAQ,OAAD,IAAI,MAAM,UAAU;AAC/B,YAAY,2BAAR,OAAO;UACT,QAAY,KAAL,IAAI,QAAC,OAAG,AAAQ,OAAD;UACtB,mBAAkC,MAAhB,eAAe,SAAC,OAAG,AAAQ,OAAD;UAC5C,eAA0B,OAAZ,WAAW,UAAC,OAAG,AAAQ,OAAD;UACpC,kBAAgC,OAAf,cAAc,UAAC,OAAG,AAAQ,OAAD;UAC1C,qBAAsC,OAAlB,iBAAiB,UAAC,OAAG,AAAQ,OAAD;;AAEnC,6BACX,kBAAa,OAAO,EAAE,IAAI,EAAE,IAAI,EAAE,eAAe;QACrD,AAAe,cAAD,qBAAqB,iBAAiB;QACpD,AAAe,cAAD,kBAAkB,cAAc;QAC9C,AAAe,cAAD,eAAe,WAAW;AACxC,aAAI,2BAAK,kCACyB,YAA5B,AAAe,cAAD,eAA8B,gCACd,YAA5B,AAAe,cAAD,eAA8B;AAClD,cAAI,AAAE,2BAAG;YACP,AAAe,cAAD,gBAA6B;;YAE3C,AAAe,cAAD,gBAA6B;;;AAI/C,iBAAK,oBAAoB;AAAM,gBAAE,AAAa,mBAAf,CAAC,KAAmB,cAAF,CAAC;;;AAIlD,qCAAoB,aAAkB;AACpC,gBAAO,SAAC;AACD,iCAAO,OAAO,IAAS,2BAAL,IAAI,IAA4B,sBAAL,IAAI;AACjD,iCACD,OAAO,IAAG,AAAa,gCAAc,AAAa;AACtD,0BAAI,AAAmB,mBAAA,CAAC,IAAI,MAAK,IAAI;AACnC,oBAAO,6CACL,WAAW,EACX,iBAAO,cACE,wBAAmB,IAAI,EAAE;;AAC9B,oBAAI,IAAI;AACN,iCAAK,OAAO,GAAO,UAAL,IAAI,cAAwB,KAAR,WAAL,IAAI,oBAAS,OAAG,cAAc;AAC3D,wBAAyB,YAAP,WAAX,WAAW,GAAC,IAAI,aAAO,QAAC;;AAAM,4BAAC;mCAAC,OAAG,IAAI;;;kBAE9C,WAAM,oBAAe,IAAI,EAAE,cAAc;;;;AAMjD,oBAAO,mCAAe,IAAI,EAAE,cAAc;;UAE7C;;;AAKH,yCAAyB;AACvB,gBAAO,SAAC;;AACN,iBAAQ,sBAAJ,GAAG;AACD,wBAAK,MAAoB,WAAd,cAAc,GAAC,oBAAe,GAAG,EAAE,cAAc;AAChE,mBAAO,sBAAH,EAAE;gBACJ,WAAM,qBAAkB,KAAH,EAAE,QAAC,OAAG,GAAG,QAAE,cAAc;;cAEhD,MAAM,EAAE;;AAGV,kBAAO,IAAG;UACX;;;AAOI,qBAAgB,mBAAM,cAAc;QAG3C,AAAa,4BAAQ,QAAa;UAChC,SAAS,AAAO,MAAD,oBAAM,AAAmB,mBAAA,CAAa,UAAZ,WAAW,gBAAY;;QAIlE,SAAS,AAAO,MAAD,oBAAM,AAAmB,mBAAA,WAAC,yBAAkB;QAG3D,AAAa,4BAAQ,QAAa;UAChC,SAAS,AAAO,MAAD,oBAAM,AAAmB,mBAAA,CAAa,UAAZ,WAAW,iBAAa;;QAInE,AAAa,4BAAQ,QAAa;UAChC,SAAS,AAAO,MAAD,YAAY,AAAwB,wBAAA,CAAa,UAAZ,WAAW;;AAIjE,cAAO,AAAO,AAEX,OAFU,8BAAmB,QAAC,QACxB,uBAAkB,IAAI,oEACjB,QAAC;AACb,cAAI,AAAI,GAAD,IAAI,kBAAQ,AAAmB,mBAAA,CAAC,GAAG;YACxC,WAAM,oBAAe,GAAG,EAAE,cAAc;;AAE1C,gBAAO,wBAAkB,GAAG,EAAE,cAAc;;MAEhD;;0BAGuD;AAAhB;;AACzB,0BAAc,AAAQ,OAAD;AACpB;;AAEP,wBAAS,MAAM,qBAAe,OAAO;UACzC,gBAAe,MAAM,AAAkB,6BACrC,OAAO,EACP,MAAM,GACO,KAAb,WAAW,sBAAE;AAEX,wBAAkB,8BAA6B,MAArB,AAAa,YAAD,iBAAS,OAAG;AAC7C,oBAAM,qCACJ,OAAO,WACP,OAAO,cACkB,OAAvB,AAAa,YAAD,oBAAW,OAAG,sDACzB,AAAa,YAAD,yBACZ,AAAa,YAAD,4BACT,AAAa,YAAD,uBACpB,AAAa,YAAD;AAEhB,yBAAW,AAAQ,OAAD,gBAAgB,AAAa,YAAD;AACnD,wBAAI,QAAQ,eAAI,AAAQ,OAAD;AAChB,+BAA8C,EAA7B,AAAE,2BAAG,gCAAW,AAAE,2BAAG,kCAChB,YAArB,AAAQ,OAAD,eAA8B,gCACd,YAArB,AAAQ,OAAD,eAA8B;AACtC;AACP,gBAAI,YAAY;cACd,cAAc,AAAQ,OAAD;cACrB,AAAQ,OAAD;;YAET,AAAI,GAAD,SAAQ,MAAM,AAAY,mCAAkB,OAAO,EAAE,YAAY;AACpE,gBAAI,YAAY;cACd,AAAQ,OAAD,qBAAgC,WAAW;;;YAGpD,MAAM,AAAa,AAAO,AAAa,YAArB,eAAe;;UAEnC,oBAAe,WAAW;AAC1B,wBAAI,QAAQ;AACV,kEAAO,wBAAmB,AAAa,gCAAc,cAAM,GAAG;;YAE9D,WAAM,sCACM,GAAG,SACN,AAAgD,iCAA1B,AAAa,YAAD,eAAY,WAClC;;;cAGhB;AACE,oBAAM,oBAAe,CAAC,EAAE,OAAO;UACxC,WAAM,GAAG;;MAEb;;mBAG2B;AACzB,UAAI,WAAW,IAAI,QAAQ,AAAY,WAAD,gBAAgB;QACpD,WAAM,AAAY,WAAD;;IAErB;gCAGgB,aAAuB;AACrC,YAAc;;AACZ,YAAI,WAAW,IAAI,eACjB,AAAY,AAAW,WAAZ,oBAAiB,QAAC,KAAM,WAAM,AAAY,WAAD;iBACtD,MAAM;;;IAEV;qBAEwD;AAAhB;;AAClC,mBAAO,AAAQ,OAAD;AACR;AACQ;AAClB,YAAI,IAAI,IAAI,kBACR,AAAmC,sBAAlC,QAAQ,OAAO,SAAS,sBAAmB,AAAQ,OAAD;AAEjD;AACJ,cAAS,gBAAL,IAAI;iBACM,kBAAL,IAAI,qBACP,AAAuE,sDAAvB,iBAAL,IAAI,KAAa;qBAChE,2BAAS,IAAI;YACb,AAAQ,AAAQ,AAAK,OAAd,sBAAkB,QAAQ;AAC/B,kBAAI,AAAI,AAAc,GAAf;gBACL,SAAa,eAA2B,cAArB,AAAQ,AAAO,OAAR,gBAAS,GAAG;AACtC,sBAAO;;AAET,oBAAO;;gBAEJ,KAAS,sBAAL,IAAI;AACb,gBAAS,sBAAL,IAAI;cACN,AAAQ,AAAO,OAAR,gCACH,AAAgD,4CAAf,AAAK,IAAD;;YAE3C,SAAS,AAAK,IAAD;YACb,SAAS,AAAK,IAAD;;AAGN,yBAAQ,MAAM,AAAY,kCAAiB,OAAO;AACzD,gBAAI,AAAQ,OAAD,mBAAmB;cAC5B,QAAQ,AAAQ,OAAD,gBAAgB,KAAK,EAAE,OAAO;;cAG7C,QAAQ,AAAK,oBAAO,KAAK;;YAG3B,SAAS,AAAM,KAAD;AAEV,wBAAQ;AAER,6BAAmC,CAAR,aAAb,AAAM,KAAD;AACvB,qBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,UAAU,EAAI,IAAF,AAAE,CAAC,GAAH;AAC1B,0BAAQ,AAAE,CAAD;cACb,AAAM,KAAD,OAAK,AAAM,KAAD,WAAS,KAAK,EAAE,mBAAS,AAAM,KAAD,SAAS,AAAM,KAAD;;YAE7D,SAAgB,iCAAa,KAAK;;eAGpC,AAAQ,OAAD;;UAAQ,AAA4B,iBAAA,aACnB,cAApB,AAAQ,OAAD,eADI,yBAA4B;AAE3C,cAAI,MAAM,IAAI;YACZ,AAAQ,AAAO,OAAR,kCAA+C,cAAP,MAAM;;AAEnD,yBAAW;AACG,2BACd,AAAO,MAAD,iCAA6B,wEACzB,SAAC,MAAM;;AACjB,kBAAI,AAAQ,OAAD,gBAAgB,kBAAQ,AAAQ,AAAY,OAAb;qBACxC,IAAI;gBACA,YAAS,AAAQ,AAAY,OAAb;gBAChB;;;gBAEJ,AAAK,IAAD,KAAe,4CAAS,IAAI;AAChC,oBAAI,MAAM,IAAI;kBACZ,WAAA,AAAS,QAAD,gBAAI,AAAK,IAAD;AAChB,sBAAI,AAAQ,OAAD,mBAAmB;oBAC5B,AAAQ,OAAD,gBAAgB,QAAQ,EAAE,MAAM;;;;;AAMjD,cAAwB,aAApB,AAAQ,OAAD,gBAAe;YACxB,AAAW,UAAD,SAAS,qCAAuB,AAAQ,OAAD,4BAClC,QAAC;gBACd,AAAK,IAAD,UAAU,qCACH,OAAO,SACT,AAA8C,8BAA3B,AAAQ,OAAD,mBAAgB,aAC9B;gBAErB,AAAK,IAAD;;;AAGR,gBAAO,WAAU;;UAEjB,AAAQ,AAAQ,OAAT;;AAET,cAAO;MACT;;iBAGY,KAAY,KAAK,MAA2B;;AAClD,yBAAQ,sCAAmD,KAAxB,AAAQ,oCAAgB,OAAG,uCAC9D,cAAuB,KAAhB,eAAe,QAAC,OAAG;AACxB,uBAAkB,2BAAJ,GAAG,IAAsB,AAAI,GAAD,WAAW;AAC3D,YAAO,2CACiD,QAAd,QAApB,OAAX,AAAI,GAAD,iBAAQ,OAAG,AAAQ,mDAAS,+BAAc,OAAG,gCAC3C,qCAAK,AAAQ,uBAAW,cAAO,AAAI,GAAD,4BACT,QAAnB,OAAX,UAAU,UAAC,OAAG,AAAQ,sCAAQ,OAAG,kBACpC,GAAG,QACH,IAAI,mBAC6B,OAAvB,AAAQ,qCAAe,OAAG,yBACU,QAAvB,OAAhB,AAAI,GAAD,sBAAa,OAAG,AAAQ,0CAAY,OAAG,4BACM,SAA1B,OAAnB,AAAI,GAAD,yBAAgB,OAAG,AAAQ,8CAAe,OAAG,2BAEnB,SAAxB,QAAjB,AAAI,GAAD,wBAAc,OAAG,AAAQ,6CAAa,OAAgB,qDACjD,qCAAK,AAAQ,qBAAS,eAAO,AAAI,GAAD,kDAED,SAAvB,QAAhB,AAAI,GAAD,uBAAa,OAAG,AAAQ,4CAAY,qEAEhB,SADQ,QAAnB,AAAI,GAAD,0BAAgB,OAC/B,AAAQ,+CAAe,OACvB,QAAK,UACW,AAAuB,aAA9B,MAAM,KAAI,OAAc,aAAP,MAAM,IAAG,OAAO,AAAO,MAAD,KAAI,yDAGjB,SADoB,QAA/B,AAAI,GAAD,sCAA4B,OACvD,AAAQ,2DAA2B,OACnC,iCAC4D,SAA3B,QAApB,AAAI,GAAD,2BAAiB,OAAG,AAAQ,gDAAgB,OAAG,8BACZ,SAAxB,QAAjB,AAAI,GAAD,wBAAc,OAAG,AAAQ,6CAAa,OAAG,6BACzC,KAAK,mBACa,QAAnB,AAAI,GAAD,0BAAgB,OAAG,AAAQ,wDACT,QAApB,AAAI,GAAD,2BAAiB,OAAG,AAAQ;IAEpD;iBAEqB,QAAQ;AAC3B,UAAI,AAAQ,OAAD,IAAI;QACb,UAAU;;MAEJ,UAAR,OAAO,YAAU,MAAM;AACvB,qCAAO,OAAO;IAChB;uBAEiC,MAAM;AACrC,oBAAI,AAAK,IAAD;AACN,cAAO,AAAK,KAAD,SAAS,QAAQ;;AAE5B,cAAO,AAAQ,SAAA;;IAEnB;mBAEwB,KAAqB;;;AAClC;AACT,UAAQ,sBAAJ,GAAG;QACL,WAAW,GAAG;;QAEd,WAAW,mCAAgB,GAAG;;MAEhC,AAAS,QAAD,YAA4B,KAAjB,AAAS,QAAD,gBAAS,OAAG,cAAc;AACrD,YAAO,SAAQ;IACjB;sBAE8B,UAA0B;;;AACtD,UAAa,0BAAT,QAAQ;QACV,AAAS,QAAD,YAA4B,KAAjB,AAAS,QAAD,gBAAS,OAAG,cAAc;YAChD,MAAa,sBAAT,QAAQ;QACjB,WAAW,iDAAkB,QAAQ,YAAW,cAAc;;AAE5D,4BAAgB,WAAT,QAAQ;QACjB,WAAW,wCACH,IAAI,mCACQ,WAAT,QAAQ,uDACC,WAAT,QAAQ,2CACI,WAAT,QAAQ,+CACC,WAAT,QAAQ,2DACA,WAAT,QAAQ,mDACK,WAAT,QAAQ;;AAG3B,2CAAO,QAAQ;IACjB;;;IA9xBY;IAMC,uBAAgB;IAIX;IAEN,qBAAc;IAErB,gBAAU;;EAixBjB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gDCnmC6B;;AAA3B;AACE,QAAI,AAAQ,OAAD,IAAI;MACb,UAAU;;IAEP,eAAU,OAAO;IACjB,yBAAkB;EACzB;;;;iDAXyB;;AAAW,iDAAc,OAAO;EAAC;;ID4C9C;;;;;;IAIM;;;;;;IAIN;;;;;;eAXa;;AAAa,uCAAU,OAAO;IAAC;;;IAG5C;IAIM;IAIN;;;;;;;;;;;;;;;;;;;;;IElCyB;;;;;;IAG/B;;;;;;;AARiB;IAAS;;AAWR;IAAY;;AA2B3B,mBAAS;MAChB,kBAA8B,oBACC,AAAW,cAAtC,AAAO,MAAD,SAAS,uBAA+B,IAAI;IACxD;sBAI8B,MAAa;AACrC,mBACA,AAAgE,qDAAvB,qBAAe,IAAI,KAAE;AAClE,qBAAK,mBAAa,KAAK;QACrB,SAAW,MAAM,YACb,gDACA;;AAEN,YAAS,AAAe,OAAT;IACjB;qBAIsD;AAChD,iBAAO,AAAM,KAAD;AACZ,mBAAS,4BAAiB,AAAK,IAAD,gBAAa,SAC3C,qDAAyC,qBAAe,AAAM,KAAD,SAAM;AAEvE,UAAI,AAAK,IAAD,aAAa;QACnB,SAAW,AAAoD,MAA9C,8BAAc,qBAAe,AAAK,IAAD,cAAW;;AAE/D,YAAS,AAAe,OAAT;IACjB;qBAG6B;AAM3B,YAAO,AAAM,AAAqC,MAAtC,cAAY,sBAAgB,uBAAqB,MAAK;IACpE;;AAKM,mBAAS;MACb,AAAO,sBAAQ,QAAC;QACd,SAAA,AAAO,MAAD,IAAI,AAAK,AAAO,AACD,AACH,AAC8C,AAC5B,mBAFhC,AAAO,6BACP,AAAK,AAAgD,oBAAzC,sBAAgB,AAAM,KAAD,MAAM,AAAM,KAAD,kCAC5C,AAAK,AAAoB,oBAAb,AAAM,KAAD,oBACjB,AAAO;;AAGb,eAAS,OAAQ;QACf,SAAA,AAAO,MAAD,IAAI,AAAK,AAAO,AACD,AACH,AAC2B,AACvB,mBAFlB,AAAO,6BACP,AAAK,AAA6B,oBAAtB,qBAAe,IAAI,4BAC/B,AAAK,AAAM,IAAP,iBACJ,AAAO;;AAGb,YAAO,AAAO,AAAc,AAAmB,OAAlC,GAAG,AAAK,mBAA4B,AAAS;IAC5D;;AAGE,oBAAI;QACF,WAAM,wBAAW;;MAEnB,sBAAe;AACX,uBAAa,yCAAkC;AACnD,eAAK,WAAkB;QACrB,AAAW,UAAD,KAAK,AAAK,oBAAO,MAAM;;;AAGnC,yBAAiB;AAAW,cAAA,AAAW,WAAD,KAAK,AAAK,oBAAO,MAAM;;;AAC7D;AAAe,cAAA,AAAW,WAAD,KAAK,mBAAC,IAAI;;;MAEnC,AAAO,sBAAQ,QAAC;QACd,AAAU,UAAA,CAAC,AAAiB,gBAAb,iBAAQ;QACvB,AAAU,UAAA,CAAC,sBAAgB,AAAM,KAAD,MAAM,AAAM,KAAD;QAC3C,AAAS,SAAA,CAAC,AAAM,KAAD;QACf,AAAS,SAAA;;MAGJ,AAKJ,uDALY,YAAO,QAAC;QACrB,AAAU,UAAA,CAAC,AAAiB,gBAAb,iBAAQ;QACvB,AAAU,UAAA,CAAC,6DAAe,IAAI;AAC9B,cAAO,AACF,6CAD+B,WAAN,WAAL,IAAI,8BAAmB,UAAU,qBAChD,QAAC,KAAM,AAAS,SAAA;gDACpB,QAAC;QACP,AAAU,UAAA,CAAC,AAAmB,gBAAf,iBAAQ;QACvB,AAAW,UAAD;;AAEZ,YAAO,AAAW,WAAD;IACnB;;AAIE,YAAO,AAAW,wBAAO,SAAC,GAAG;;AAAM;QAAI,YAAO,CAAC;QAAG,YAAO,CAAC;;;IAC5D;;;IA7IO;IAID,uBAAiB,gBAAO;IAGO,eAAS;IAGxC,cAAQ;IAIT,sBAAe;IAGlB;EACF;yCAGsC;IArB/B;IAID,uBAAiB,gBAAO;IAGO,eAAS;IAGxC,cAAQ;IAIT,sBAAe;IAQlB;IACA,gBACE,GAAG,EACH,SAAC,KAAK;AACJ,UAAI,AAAM,KAAD,IAAI,MAAM,MAAO;AAC1B,UAAU,gCAAN,KAAK;QACP,AAAM,iBAAI,0CAAS,GAAG,EAAE,KAAK;;QAE7B,AAAO,kBAAI,mCAAS,GAAG,EAAQ,cAAN,KAAK;;AAEhC,YAAO;2CAED;EAEZ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA1CoB,oCAAiB;;;MACxB,mCAAgB","file":"dio.ddc.js"}');
  // Exports:
  return {
    src__interceptor: interceptor,
    src__multipart_file_stub: multipart_file_stub,
    src__multipart_file: multipart_file,
    src__entry__dio_for_browser: dio_for_browser,
    src__dio: dio,
    src__form_data: form_data
  };
});

//# sourceMappingURL=dio.ddc.js.map
