define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const json_value = Object.create(dart.library);
  const json_serializable = Object.create(dart.library);
  const json_key = Object.create(dart.library);
  const allowed_keys_helpers = Object.create(dart.library);
  const checked_helpers = Object.create(dart.library);
  const json_literal = Object.create(dart.library);
  const wrapper_helpers = Object.create(dart.library);
  const json_converter = Object.create(dart.library);
  const json_annotation = Object.create(dart.library);
  const $_get = dartx._get;
  const $values = dartx.values;
  const $join = dartx.join;
  const $entries = dartx.entries;
  const $singleWhere = dartx.singleWhere;
  const $isNotEmpty = dartx.isNotEmpty;
  const $keys = dartx.keys;
  const $cast = dartx.cast;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $message = dartx.message;
  const $toString = dartx.toString;
  const $add = dartx.add;
  const $name = dartx.name;
  const $first = dartx.first;
  const $length = dartx.length;
  const $_set = dartx._set;
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let ObjectToFieldRename = () => (ObjectToFieldRename = dart.constFn(dart.fnType(json_serializable.FieldRename, [core.Object])))();
  let VoidToJsonSerializable = () => (VoidToJsonSerializable = dart.constFn(dart.fnType(json_serializable.JsonSerializable, [])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidTobottom = () => (VoidTobottom = dart.constFn(dart.fnType(dart.bottom, [])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let MapEntryTobool = () => (MapEntryTobool = dart.constFn(dart.fnType(core.bool, [core.MapEntry])))();
  let MapEntryToString = () => (MapEntryToString = dart.constFn(dart.fnType(core.String, [core.MapEntry])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: json_serializable.FieldRename.prototype,
        [_name$]: "FieldRename.none",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: json_serializable.FieldRename.prototype,
        [_name$]: "FieldRename.kebab",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: json_serializable.FieldRename.prototype,
        [_name$]: "FieldRename.snake",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: json_serializable.FieldRename.prototype,
        [_name$]: "FieldRename.pascal",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], json_serializable.FieldRename);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: json_serializable.JsonSerializable.prototype,
        useWrappers: false,
        nullable: true,
        includeIfNull: true,
        generateToJsonFunction: true,
        fieldRename: C0 || CT.C0,
        explicitToJson: false,
        encodeEmptyCollection: true,
        disallowUnrecognizedKeys: false,
        createToJson: true,
        createFactory: true,
        checked: false,
        anyMap: false
      });
    },
    get C6() {
      return C6 = dart.constList(["any_map", "checked", "create_factory", "create_to_json", "disallow_unrecognized_keys", "encode_empty_collection", "explicit_to_json", "field_rename", "generate_to_json_function", "include_if_null", "nullable", "use_wrappers"], core.String);
    },
    get C7() {
      return C7 = dart.constMap(core.String, core.String, ["anyMap", "any_map", "createFactory", "create_factory", "createToJson", "create_to_json", "disallowUnrecognizedKeys", "disallow_unrecognized_keys", "encodeEmptyCollection", "encode_empty_collection", "explicitToJson", "explicit_to_json", "fieldRename", "field_rename", "generateToJsonFunction", "generate_to_json_function", "includeIfNull", "include_if_null", "useWrappers", "use_wrappers"]);
    },
    get C8() {
      return C8 = dart.constMap(json_serializable.FieldRename, dart.dynamic, [C0 || CT.C0, "none", C1 || CT.C1, "kebab", C2 || CT.C2, "snake", C3 || CT.C3, "pascal"]);
    },
    get C9() {
      return C9 = dart.constMap(core.String, core.String, []);
    }
  });
  json_value.JsonValue = class JsonValue extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
  };
  (json_value.JsonValue.new = function(value) {
    this[value$] = value;
    ;
  }).prototype = json_value.JsonValue.prototype;
  dart.addTypeTests(json_value.JsonValue);
  const value$ = Symbol("JsonValue.value");
  dart.setLibraryUri(json_value.JsonValue, "package:json_annotation/src/json_value.dart");
  dart.setFieldSignature(json_value.JsonValue, () => ({
    __proto__: dart.getFields(json_value.JsonValue.__proto__),
    value: dart.finalFieldType(dart.dynamic)
  }));
  const _name$ = dart.privateName(json_serializable, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  json_serializable.FieldRename = class FieldRename extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (json_serializable.FieldRename.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = json_serializable.FieldRename.prototype;
  dart.addTypeTests(json_serializable.FieldRename);
  dart.setLibraryUri(json_serializable.FieldRename, "package:json_annotation/src/json_serializable.dart");
  dart.setFieldSignature(json_serializable.FieldRename, () => ({
    __proto__: dart.getFields(json_serializable.FieldRename.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(json_serializable.FieldRename, ['toString']);
  json_serializable.FieldRename.none = C0 || CT.C0;
  json_serializable.FieldRename.kebab = C1 || CT.C1;
  json_serializable.FieldRename.snake = C2 || CT.C2;
  json_serializable.FieldRename.pascal = C3 || CT.C3;
  json_serializable.FieldRename.values = C4 || CT.C4;
  let C5;
  json_serializable.JsonSerializable = class JsonSerializable extends core.Object {
    get anyMap() {
      return this[anyMap$];
    }
    set anyMap(value) {
      super.anyMap = value;
    }
    get checked() {
      return this[checked$];
    }
    set checked(value) {
      super.checked = value;
    }
    get createFactory() {
      return this[createFactory$];
    }
    set createFactory(value) {
      super.createFactory = value;
    }
    get createToJson() {
      return this[createToJson$];
    }
    set createToJson(value) {
      super.createToJson = value;
    }
    get disallowUnrecognizedKeys() {
      return this[disallowUnrecognizedKeys$];
    }
    set disallowUnrecognizedKeys(value) {
      super.disallowUnrecognizedKeys = value;
    }
    get encodeEmptyCollection() {
      return this[encodeEmptyCollection$];
    }
    set encodeEmptyCollection(value) {
      super.encodeEmptyCollection = value;
    }
    get explicitToJson() {
      return this[explicitToJson$];
    }
    set explicitToJson(value) {
      super.explicitToJson = value;
    }
    get fieldRename() {
      return this[fieldRename$];
    }
    set fieldRename(value) {
      super.fieldRename = value;
    }
    get generateToJsonFunction() {
      return this[generateToJsonFunction$];
    }
    set generateToJsonFunction(value) {
      super.generateToJsonFunction = value;
    }
    get includeIfNull() {
      return this[includeIfNull$];
    }
    set includeIfNull(value) {
      super.includeIfNull = value;
    }
    get nullable() {
      return this[nullable$];
    }
    set nullable(value) {
      super.nullable = value;
    }
    get useWrappers() {
      return this[useWrappers$];
    }
    set useWrappers(value) {
      super.useWrappers = value;
    }
    static fromJson(json) {
      return json_serializable._$JsonSerializableFromJson(json);
    }
    withDefaults() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      return new json_serializable.JsonSerializable.new({anyMap: (t0 = this.anyMap, t0 == null ? json_serializable.JsonSerializable.defaults.anyMap : t0), checked: (t0$ = this.checked, t0$ == null ? json_serializable.JsonSerializable.defaults.checked : t0$), createFactory: (t0$0 = this.createFactory, t0$0 == null ? json_serializable.JsonSerializable.defaults.createFactory : t0$0), createToJson: (t0$1 = this.createToJson, t0$1 == null ? json_serializable.JsonSerializable.defaults.createToJson : t0$1), disallowUnrecognizedKeys: (t0$2 = this.disallowUnrecognizedKeys, t0$2 == null ? json_serializable.JsonSerializable.defaults.disallowUnrecognizedKeys : t0$2), encodeEmptyCollection: (t0$3 = this.encodeEmptyCollection, t0$3 == null ? json_serializable.JsonSerializable.defaults.encodeEmptyCollection : t0$3), explicitToJson: (t0$4 = this.explicitToJson, t0$4 == null ? json_serializable.JsonSerializable.defaults.explicitToJson : t0$4), fieldRename: (t0$5 = this.fieldRename, t0$5 == null ? json_serializable.JsonSerializable.defaults.fieldRename : t0$5), generateToJsonFunction: (t0$6 = this.generateToJsonFunction, t0$6 == null ? json_serializable.JsonSerializable.defaults.generateToJsonFunction : t0$6), includeIfNull: (t0$7 = this.includeIfNull, t0$7 == null ? json_serializable.JsonSerializable.defaults.includeIfNull : t0$7), nullable: (t0$8 = this.nullable, t0$8 == null ? json_serializable.JsonSerializable.defaults.nullable : t0$8), useWrappers: (t0$9 = this.useWrappers, t0$9 == null ? json_serializable.JsonSerializable.defaults.useWrappers : t0$9)});
    }
    toJson() {
      return json_serializable._$JsonSerializableToJson(this);
    }
  };
  (json_serializable.JsonSerializable.new = function(opts) {
    let anyMap = opts && 'anyMap' in opts ? opts.anyMap : null;
    let checked = opts && 'checked' in opts ? opts.checked : null;
    let createFactory = opts && 'createFactory' in opts ? opts.createFactory : null;
    let createToJson = opts && 'createToJson' in opts ? opts.createToJson : null;
    let disallowUnrecognizedKeys = opts && 'disallowUnrecognizedKeys' in opts ? opts.disallowUnrecognizedKeys : null;
    let encodeEmptyCollection = opts && 'encodeEmptyCollection' in opts ? opts.encodeEmptyCollection : null;
    let explicitToJson = opts && 'explicitToJson' in opts ? opts.explicitToJson : null;
    let fieldRename = opts && 'fieldRename' in opts ? opts.fieldRename : null;
    let generateToJsonFunction = opts && 'generateToJsonFunction' in opts ? opts.generateToJsonFunction : null;
    let includeIfNull = opts && 'includeIfNull' in opts ? opts.includeIfNull : null;
    let nullable = opts && 'nullable' in opts ? opts.nullable : null;
    let useWrappers = opts && 'useWrappers' in opts ? opts.useWrappers : null;
    this[anyMap$] = anyMap;
    this[checked$] = checked;
    this[createFactory$] = createFactory;
    this[createToJson$] = createToJson;
    this[disallowUnrecognizedKeys$] = disallowUnrecognizedKeys;
    this[encodeEmptyCollection$] = encodeEmptyCollection;
    this[explicitToJson$] = explicitToJson;
    this[fieldRename$] = fieldRename;
    this[generateToJsonFunction$] = generateToJsonFunction;
    this[includeIfNull$] = includeIfNull;
    this[nullable$] = nullable;
    this[useWrappers$] = useWrappers;
    ;
  }).prototype = json_serializable.JsonSerializable.prototype;
  dart.addTypeTests(json_serializable.JsonSerializable);
  const anyMap$ = Symbol("JsonSerializable.anyMap");
  const checked$ = Symbol("JsonSerializable.checked");
  const createFactory$ = Symbol("JsonSerializable.createFactory");
  const createToJson$ = Symbol("JsonSerializable.createToJson");
  const disallowUnrecognizedKeys$ = Symbol("JsonSerializable.disallowUnrecognizedKeys");
  const encodeEmptyCollection$ = Symbol("JsonSerializable.encodeEmptyCollection");
  const explicitToJson$ = Symbol("JsonSerializable.explicitToJson");
  const fieldRename$ = Symbol("JsonSerializable.fieldRename");
  const generateToJsonFunction$ = Symbol("JsonSerializable.generateToJsonFunction");
  const includeIfNull$ = Symbol("JsonSerializable.includeIfNull");
  const nullable$ = Symbol("JsonSerializable.nullable");
  const useWrappers$ = Symbol("JsonSerializable.useWrappers");
  dart.setMethodSignature(json_serializable.JsonSerializable, () => ({
    __proto__: dart.getMethods(json_serializable.JsonSerializable.__proto__),
    withDefaults: dart.fnType(json_serializable.JsonSerializable, []),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(json_serializable.JsonSerializable, "package:json_annotation/src/json_serializable.dart");
  dart.setFieldSignature(json_serializable.JsonSerializable, () => ({
    __proto__: dart.getFields(json_serializable.JsonSerializable.__proto__),
    anyMap: dart.finalFieldType(core.bool),
    checked: dart.finalFieldType(core.bool),
    createFactory: dart.finalFieldType(core.bool),
    createToJson: dart.finalFieldType(core.bool),
    disallowUnrecognizedKeys: dart.finalFieldType(core.bool),
    encodeEmptyCollection: dart.finalFieldType(core.bool),
    explicitToJson: dart.finalFieldType(core.bool),
    fieldRename: dart.finalFieldType(json_serializable.FieldRename),
    generateToJsonFunction: dart.finalFieldType(core.bool),
    includeIfNull: dart.finalFieldType(core.bool),
    nullable: dart.finalFieldType(core.bool),
    useWrappers: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(json_serializable.JsonSerializable, {
    /*json_serializable.JsonSerializable.defaults*/get defaults() {
      return C5 || CT.C5;
    }
  });
  let C6;
  let C7;
  json_serializable._$JsonSerializableFromJson = function _$JsonSerializableFromJson(json) {
    return checked_helpers.$checkedNew(json_serializable.JsonSerializable, "JsonSerializable", json, dart.fn(() => {
      allowed_keys_helpers.$checkKeys(json, {allowedKeys: C6 || CT.C6});
      let val = new json_serializable.JsonSerializable.new({anyMap: checked_helpers.$checkedConvert(core.bool, json, "any_map", dart.fn(v => core.bool.as(v), ObjectTobool())), checked: checked_helpers.$checkedConvert(core.bool, json, "checked", dart.fn(v => core.bool.as(v), ObjectTobool())), createFactory: checked_helpers.$checkedConvert(core.bool, json, "create_factory", dart.fn(v => core.bool.as(v), ObjectTobool())), createToJson: checked_helpers.$checkedConvert(core.bool, json, "create_to_json", dart.fn(v => core.bool.as(v), ObjectTobool())), disallowUnrecognizedKeys: checked_helpers.$checkedConvert(core.bool, json, "disallow_unrecognized_keys", dart.fn(v => core.bool.as(v), ObjectTobool())), encodeEmptyCollection: checked_helpers.$checkedConvert(core.bool, json, "encode_empty_collection", dart.fn(v => core.bool.as(v), ObjectTobool())), explicitToJson: checked_helpers.$checkedConvert(core.bool, json, "explicit_to_json", dart.fn(v => core.bool.as(v), ObjectTobool())), fieldRename: checked_helpers.$checkedConvert(json_serializable.FieldRename, json, "field_rename", dart.fn(v => json_serializable._$enumDecodeNullable(json_serializable.FieldRename, json_serializable._$FieldRenameEnumMap, v), ObjectToFieldRename())), generateToJsonFunction: checked_helpers.$checkedConvert(core.bool, json, "generate_to_json_function", dart.fn(v => core.bool.as(v), ObjectTobool())), includeIfNull: checked_helpers.$checkedConvert(core.bool, json, "include_if_null", dart.fn(v => core.bool.as(v), ObjectTobool())), nullable: checked_helpers.$checkedConvert(core.bool, json, "nullable", dart.fn(v => core.bool.as(v), ObjectTobool())), useWrappers: checked_helpers.$checkedConvert(core.bool, json, "use_wrappers", dart.fn(v => core.bool.as(v), ObjectTobool()))});
      return val;
    }, VoidToJsonSerializable()), {fieldKeyMap: C7 || CT.C7});
  };
  json_serializable._$JsonSerializableToJson = function _$JsonSerializableToJson(instance) {
    return new (IdentityMapOfString$dynamic()).from(["any_map", instance.anyMap, "checked", instance.checked, "create_factory", instance.createFactory, "create_to_json", instance.createToJson, "disallow_unrecognized_keys", instance.disallowUnrecognizedKeys, "encode_empty_collection", instance.encodeEmptyCollection, "explicit_to_json", instance.explicitToJson, "field_rename", json_serializable._$FieldRenameEnumMap[$_get](instance.fieldRename), "generate_to_json_function", instance.generateToJsonFunction, "include_if_null", instance.includeIfNull, "nullable", instance.nullable, "use_wrappers", instance.useWrappers]);
  };
  json_serializable._$enumDecode = function _$enumDecode(T, enumValues, source) {
    if (source == null) {
      dart.throw(new core.ArgumentError.new("A value must be provided. Supported values: " + dart.str(enumValues[$values][$join](", "))));
    }
    return enumValues[$entries][$singleWhere](dart.fn(e => dart.equals(e.value, source), dart.fnType(core.bool, [core.MapEntry$(T, dart.dynamic)])), {orElse: dart.fn(() => dart.throw(new core.ArgumentError.new("`" + dart.str(source) + "` is not one of the supported values: " + dart.str(enumValues[$values][$join](", ")))), VoidTobottom())}).key;
  };
  json_serializable._$enumDecodeNullable = function _$enumDecodeNullable(T, enumValues, source) {
    if (source == null) {
      return null;
    }
    return json_serializable._$enumDecode(T, enumValues, source);
  };
  let C8;
  dart.defineLazy(json_serializable, {
    /*json_serializable._$FieldRenameEnumMap*/get _$FieldRenameEnumMap() {
      return C8 || CT.C8;
    }
  });
  json_key.JsonKey = class JsonKey extends core.Object {
    get defaultValue() {
      return this[defaultValue$];
    }
    set defaultValue(value) {
      super.defaultValue = value;
    }
    get disallowNullValue() {
      return this[disallowNullValue$];
    }
    set disallowNullValue(value) {
      super.disallowNullValue = value;
    }
    get encodeEmptyCollection() {
      return this[encodeEmptyCollection$0];
    }
    set encodeEmptyCollection(value) {
      super.encodeEmptyCollection = value;
    }
    get fromJson() {
      return this[fromJson$];
    }
    set fromJson(value) {
      super.fromJson = value;
    }
    get ignore() {
      return this[ignore$];
    }
    set ignore(value) {
      super.ignore = value;
    }
    get includeIfNull() {
      return this[includeIfNull$0];
    }
    set includeIfNull(value) {
      super.includeIfNull = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get nullable() {
      return this[nullable$0];
    }
    set nullable(value) {
      super.nullable = value;
    }
    get required() {
      return this[required$];
    }
    set required(value) {
      super.required = value;
    }
    get toJson() {
      return this[toJson$];
    }
    set toJson(value) {
      super.toJson = value;
    }
  };
  (json_key.JsonKey.new = function(opts) {
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let disallowNullValue = opts && 'disallowNullValue' in opts ? opts.disallowNullValue : null;
    let encodeEmptyCollection = opts && 'encodeEmptyCollection' in opts ? opts.encodeEmptyCollection : null;
    let fromJson = opts && 'fromJson' in opts ? opts.fromJson : null;
    let ignore = opts && 'ignore' in opts ? opts.ignore : null;
    let includeIfNull = opts && 'includeIfNull' in opts ? opts.includeIfNull : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let nullable = opts && 'nullable' in opts ? opts.nullable : null;
    let required = opts && 'required' in opts ? opts.required : null;
    let toJson = opts && 'toJson' in opts ? opts.toJson : null;
    this[defaultValue$] = defaultValue;
    this[disallowNullValue$] = disallowNullValue;
    this[encodeEmptyCollection$0] = encodeEmptyCollection;
    this[fromJson$] = fromJson;
    this[ignore$] = ignore;
    this[includeIfNull$0] = includeIfNull;
    this[name$] = name;
    this[nullable$0] = nullable;
    this[required$] = required;
    this[toJson$] = toJson;
    ;
  }).prototype = json_key.JsonKey.prototype;
  dart.addTypeTests(json_key.JsonKey);
  const defaultValue$ = Symbol("JsonKey.defaultValue");
  const disallowNullValue$ = Symbol("JsonKey.disallowNullValue");
  const encodeEmptyCollection$0 = Symbol("JsonKey.encodeEmptyCollection");
  const fromJson$ = Symbol("JsonKey.fromJson");
  const ignore$ = Symbol("JsonKey.ignore");
  const includeIfNull$0 = Symbol("JsonKey.includeIfNull");
  const name$ = Symbol("JsonKey.name");
  const nullable$0 = Symbol("JsonKey.nullable");
  const required$ = Symbol("JsonKey.required");
  const toJson$ = Symbol("JsonKey.toJson");
  dart.setLibraryUri(json_key.JsonKey, "package:json_annotation/src/json_key.dart");
  dart.setFieldSignature(json_key.JsonKey, () => ({
    __proto__: dart.getFields(json_key.JsonKey.__proto__),
    defaultValue: dart.finalFieldType(core.Object),
    disallowNullValue: dart.finalFieldType(core.bool),
    encodeEmptyCollection: dart.finalFieldType(core.bool),
    fromJson: dart.finalFieldType(core.Function),
    ignore: dart.finalFieldType(core.bool),
    includeIfNull: dart.finalFieldType(core.bool),
    name: dart.finalFieldType(core.String),
    nullable: dart.finalFieldType(core.bool),
    required: dart.finalFieldType(core.bool),
    toJson: dart.finalFieldType(core.Function)
  }));
  allowed_keys_helpers.BadKeyException = class BadKeyException extends core.Object {
    get map() {
      return this[map$];
    }
    set map(value) {
      super.map = value;
    }
  };
  (allowed_keys_helpers.BadKeyException.__ = function(map) {
    this[map$] = map;
    ;
  }).prototype = allowed_keys_helpers.BadKeyException.prototype;
  dart.addTypeTests(allowed_keys_helpers.BadKeyException);
  const map$ = Symbol("BadKeyException.map");
  allowed_keys_helpers.BadKeyException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(allowed_keys_helpers.BadKeyException, "package:json_annotation/src/allowed_keys_helpers.dart");
  dart.setFieldSignature(allowed_keys_helpers.BadKeyException, () => ({
    __proto__: dart.getFields(allowed_keys_helpers.BadKeyException.__proto__),
    map: dart.finalFieldType(core.Map)
  }));
  allowed_keys_helpers.UnrecognizedKeysException = class UnrecognizedKeysException extends allowed_keys_helpers.BadKeyException {
    get allowedKeys() {
      return this[allowedKeys$];
    }
    set allowedKeys(value) {
      super.allowedKeys = value;
    }
    get unrecognizedKeys() {
      return this[unrecognizedKeys$];
    }
    set unrecognizedKeys(value) {
      super.unrecognizedKeys = value;
    }
    get message() {
      return "Unrecognized keys: [" + dart.str(this.unrecognizedKeys[$join](", ")) + "]; supported keys: " + "[" + dart.str(this.allowedKeys[$join](", ")) + "]";
    }
  };
  (allowed_keys_helpers.UnrecognizedKeysException.new = function(unrecognizedKeys, map, allowedKeys) {
    this[unrecognizedKeys$] = unrecognizedKeys;
    this[allowedKeys$] = allowedKeys;
    allowed_keys_helpers.UnrecognizedKeysException.__proto__.__.call(this, map);
    ;
  }).prototype = allowed_keys_helpers.UnrecognizedKeysException.prototype;
  dart.addTypeTests(allowed_keys_helpers.UnrecognizedKeysException);
  const allowedKeys$ = Symbol("UnrecognizedKeysException.allowedKeys");
  const unrecognizedKeys$ = Symbol("UnrecognizedKeysException.unrecognizedKeys");
  dart.setGetterSignature(allowed_keys_helpers.UnrecognizedKeysException, () => ({
    __proto__: dart.getGetters(allowed_keys_helpers.UnrecognizedKeysException.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(allowed_keys_helpers.UnrecognizedKeysException, "package:json_annotation/src/allowed_keys_helpers.dart");
  dart.setFieldSignature(allowed_keys_helpers.UnrecognizedKeysException, () => ({
    __proto__: dart.getFields(allowed_keys_helpers.UnrecognizedKeysException.__proto__),
    allowedKeys: dart.finalFieldType(core.List$(core.String)),
    unrecognizedKeys: dart.finalFieldType(core.List$(core.String))
  }));
  allowed_keys_helpers.MissingRequiredKeysException = class MissingRequiredKeysException extends allowed_keys_helpers.BadKeyException {
    get missingKeys() {
      return this[missingKeys$];
    }
    set missingKeys(value) {
      super.missingKeys = value;
    }
    get message() {
      return "Required keys are missing: " + dart.str(this.missingKeys[$join](", ")) + ".";
    }
  };
  (allowed_keys_helpers.MissingRequiredKeysException.new = function(missingKeys, map) {
    this[missingKeys$] = missingKeys;
    if (!dart.test(missingKeys[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/json_annotation/src/allowed_keys_helpers.dart", 82, 16, "missingKeys.isNotEmpty");
    allowed_keys_helpers.MissingRequiredKeysException.__proto__.__.call(this, map);
    ;
  }).prototype = allowed_keys_helpers.MissingRequiredKeysException.prototype;
  dart.addTypeTests(allowed_keys_helpers.MissingRequiredKeysException);
  const missingKeys$ = Symbol("MissingRequiredKeysException.missingKeys");
  dart.setGetterSignature(allowed_keys_helpers.MissingRequiredKeysException, () => ({
    __proto__: dart.getGetters(allowed_keys_helpers.MissingRequiredKeysException.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(allowed_keys_helpers.MissingRequiredKeysException, "package:json_annotation/src/allowed_keys_helpers.dart");
  dart.setFieldSignature(allowed_keys_helpers.MissingRequiredKeysException, () => ({
    __proto__: dart.getFields(allowed_keys_helpers.MissingRequiredKeysException.__proto__),
    missingKeys: dart.finalFieldType(core.List$(core.String))
  }));
  allowed_keys_helpers.DisallowedNullValueException = class DisallowedNullValueException extends allowed_keys_helpers.BadKeyException {
    get keysWithNullValues() {
      return this[keysWithNullValues$];
    }
    set keysWithNullValues(value) {
      super.keysWithNullValues = value;
    }
    get message() {
      return "These keys had `null` values, " + "which is not allowed: " + dart.str(this.keysWithNullValues);
    }
  };
  (allowed_keys_helpers.DisallowedNullValueException.new = function(keysWithNullValues, map) {
    this[keysWithNullValues$] = keysWithNullValues;
    allowed_keys_helpers.DisallowedNullValueException.__proto__.__.call(this, map);
    ;
  }).prototype = allowed_keys_helpers.DisallowedNullValueException.prototype;
  dart.addTypeTests(allowed_keys_helpers.DisallowedNullValueException);
  const keysWithNullValues$ = Symbol("DisallowedNullValueException.keysWithNullValues");
  dart.setGetterSignature(allowed_keys_helpers.DisallowedNullValueException, () => ({
    __proto__: dart.getGetters(allowed_keys_helpers.DisallowedNullValueException.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(allowed_keys_helpers.DisallowedNullValueException, "package:json_annotation/src/allowed_keys_helpers.dart");
  dart.setFieldSignature(allowed_keys_helpers.DisallowedNullValueException, () => ({
    __proto__: dart.getFields(allowed_keys_helpers.DisallowedNullValueException.__proto__),
    keysWithNullValues: dart.finalFieldType(core.List$(core.String))
  }));
  allowed_keys_helpers.$checkKeys = function $checkKeys(map, opts) {
    let allowedKeys = opts && 'allowedKeys' in opts ? opts.allowedKeys : null;
    let requiredKeys = opts && 'requiredKeys' in opts ? opts.requiredKeys : null;
    let disallowNullValues = opts && 'disallowNullValues' in opts ? opts.disallowNullValues : null;
    if (map != null && allowedKeys != null) {
      let invalidKeys = map[$keys][$cast](core.String)[$where](dart.fn(k => !dart.test(allowedKeys[$contains](k)), StringTobool()))[$toList]();
      if (dart.test(invalidKeys[$isNotEmpty])) {
        dart.throw(new allowed_keys_helpers.UnrecognizedKeysException.new(invalidKeys, map, allowedKeys));
      }
    }
    if (requiredKeys != null) {
      let missingKeys = requiredKeys[$where](dart.fn(k => !dart.test(map[$keys][$contains](k)), StringTobool()))[$toList]();
      if (dart.test(missingKeys[$isNotEmpty])) {
        dart.throw(new allowed_keys_helpers.MissingRequiredKeysException.new(missingKeys, map));
      }
    }
    if (map != null && disallowNullValues != null) {
      let nullValuedKeys = map[$entries][$where](dart.fn(entry => dart.test(disallowNullValues[$contains](entry.key)) && entry.value == null, MapEntryTobool()))[$map](core.String, dart.fn(entry => core.String.as(entry.key), MapEntryToString()))[$toList]();
      if (dart.test(nullValuedKeys[$isNotEmpty])) {
        dart.throw(new allowed_keys_helpers.DisallowedNullValueException.new(nullValuedKeys, map));
      }
    }
  };
  const _className = dart.privateName(checked_helpers, "_className");
  checked_helpers.CheckedFromJsonException = class CheckedFromJsonException extends core.Object {
    get innerError() {
      return this[innerError$];
    }
    set innerError(value) {
      super.innerError = value;
    }
    get innerStack() {
      return this[innerStack$];
    }
    set innerStack(value) {
      super.innerStack = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get map() {
      return this[map$0];
    }
    set map(value) {
      super.map = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get badKey() {
      return this[badKey$];
    }
    set badKey(value) {
      super.badKey = value;
    }
    get className() {
      return this[_className];
    }
    static _getMessage(error) {
      let t0;
      if (core.ArgumentError.is(error)) {
        t0 = error[$message];
        return t0 == null ? null : dart.toString(t0);
      } else if (allowed_keys_helpers.BadKeyException.is(error)) {
        return error.message;
      } else if (core.FormatException.is(error)) {
        let message = error.message;
        if (error.offset != null) {
          message = dart.str(message) + " at offset " + dart.str(error.offset) + ".";
        }
        return message;
      }
      return null;
    }
    toString() {
      let lines = JSArrayOfString().of(["CheckedFromJsonException"]);
      if (this[_className] != null) {
        lines[$add]("Could not create `" + dart.str(this[_className]) + "`.");
      }
      if (this.key != null) {
        lines[$add]("There is a problem with \"" + dart.str(this.key) + "\".");
      }
      if (this.message != null) {
        lines[$add](this.message);
      } else if (this.innerError != null) {
        lines[$add](dart.toString(this.innerError));
      }
      return lines[$join]("\n");
    }
  };
  (checked_helpers.CheckedFromJsonException.new = function(map, key, className, message, opts) {
    let t0;
    let badKey = opts && 'badKey' in opts ? opts.badKey : false;
    this[map$0] = map;
    this[key$] = key;
    this[message$] = message;
    this[_className] = className;
    this[badKey$] = (t0 = badKey, t0 == null ? false : t0);
    this[innerError$] = null;
    this[innerStack$] = null;
    ;
  }).prototype = checked_helpers.CheckedFromJsonException.prototype;
  (checked_helpers.CheckedFromJsonException.__ = function(innerError, innerStack, map, key, opts) {
    let className = opts && 'className' in opts ? opts.className : null;
    this[innerError$] = innerError;
    this[innerStack$] = innerStack;
    this[map$0] = map;
    this[key$] = key;
    this[_className] = className;
    this[badKey$] = allowed_keys_helpers.BadKeyException.is(innerError);
    this[message$] = checked_helpers.CheckedFromJsonException._getMessage(innerError);
    ;
  }).prototype = checked_helpers.CheckedFromJsonException.prototype;
  dart.addTypeTests(checked_helpers.CheckedFromJsonException);
  const innerError$ = Symbol("CheckedFromJsonException.innerError");
  const innerStack$ = Symbol("CheckedFromJsonException.innerStack");
  const key$ = Symbol("CheckedFromJsonException.key");
  const map$0 = Symbol("CheckedFromJsonException.map");
  const message$ = Symbol("CheckedFromJsonException.message");
  const badKey$ = Symbol("CheckedFromJsonException.badKey");
  checked_helpers.CheckedFromJsonException[dart.implements] = () => [core.Exception];
  dart.setGetterSignature(checked_helpers.CheckedFromJsonException, () => ({
    __proto__: dart.getGetters(checked_helpers.CheckedFromJsonException.__proto__),
    className: core.String
  }));
  dart.setLibraryUri(checked_helpers.CheckedFromJsonException, "package:json_annotation/src/checked_helpers.dart");
  dart.setFieldSignature(checked_helpers.CheckedFromJsonException, () => ({
    __proto__: dart.getFields(checked_helpers.CheckedFromJsonException.__proto__),
    innerError: dart.finalFieldType(core.Object),
    innerStack: dart.finalFieldType(core.StackTrace),
    key: dart.finalFieldType(core.String),
    map: dart.finalFieldType(core.Map),
    message: dart.finalFieldType(core.String),
    [_className]: dart.fieldType(core.String),
    badKey: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(checked_helpers.CheckedFromJsonException, ['toString']);
  let C9;
  checked_helpers.$checkedNew = function $checkedNew(T, className, map, constructor, opts) {
    let t3;
    let fieldKeyMap = opts && 'fieldKeyMap' in opts ? opts.fieldKeyMap : null;
    fieldKeyMap == null ? fieldKeyMap = C9 || CT.C9 : null;
    try {
      return constructor();
    } catch (e$) {
      let ex = dart.getThrown(e$);
      let st = dart.stackTrace(e$);
      if (checked_helpers.CheckedFromJsonException.is(ex)) {
        let e = ex;
        if (e.map == map && e[_className] == null) {
          e[_className] = className;
        }
        dart.rethrow(e$);
      } else {
        let error = ex;
        let stack = st;
        let key = null;
        if (core.ArgumentError.is(error)) {
          key = (t3 = fieldKeyMap[$_get](error[$name]), t3 == null ? error[$name] : t3);
        } else if (allowed_keys_helpers.MissingRequiredKeysException.is(error)) {
          key = error.missingKeys[$first];
        } else if (allowed_keys_helpers.DisallowedNullValueException.is(error)) {
          key = error.keysWithNullValues[$first];
        }
        dart.throw(new checked_helpers.CheckedFromJsonException.__(error, stack, map, key, {className: className}));
      }
    }
  };
  checked_helpers.$checkedConvert = function $checkedConvert(T, map, key, castFunc) {
    try {
      return castFunc(map[$_get](key));
    } catch (e) {
      let ex = dart.getThrown(e);
      let st = dart.stackTrace(e);
      if (checked_helpers.CheckedFromJsonException.is(ex)) {
        dart.rethrow(e);
      } else {
        let error = ex;
        let stack = st;
        dart.throw(new checked_helpers.CheckedFromJsonException.__(error, stack, map, key));
      }
    }
  };
  json_literal.JsonLiteral = class JsonLiteral extends core.Object {
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    get asConst() {
      return this[asConst$];
    }
    set asConst(value) {
      super.asConst = value;
    }
  };
  (json_literal.JsonLiteral.new = function(path, opts) {
    let t6;
    let asConst = opts && 'asConst' in opts ? opts.asConst : false;
    this[path$] = path;
    this[asConst$] = (t6 = asConst, t6 == null ? false : t6);
    ;
  }).prototype = json_literal.JsonLiteral.prototype;
  dart.addTypeTests(json_literal.JsonLiteral);
  const path$ = Symbol("JsonLiteral.path");
  const asConst$ = Symbol("JsonLiteral.asConst");
  dart.setLibraryUri(json_literal.JsonLiteral, "package:json_annotation/src/json_literal.dart");
  dart.setFieldSignature(json_literal.JsonLiteral, () => ({
    __proto__: dart.getFields(json_literal.JsonLiteral.__proto__),
    path: dart.finalFieldType(core.String),
    asConst: dart.finalFieldType(core.bool)
  }));
  wrapper_helpers.$JsonMapWrapper = class $JsonMapWrapper extends collection.UnmodifiableMapBase$(core.String, dart.dynamic) {};
  (wrapper_helpers.$JsonMapWrapper.new = function() {
    ;
  }).prototype = wrapper_helpers.$JsonMapWrapper.prototype;
  dart.addTypeTests(wrapper_helpers.$JsonMapWrapper);
  dart.setLibraryUri(wrapper_helpers.$JsonMapWrapper, "package:json_annotation/src/wrapper_helpers.dart");
  const _source$ = dart.privateName(wrapper_helpers, "_source");
  const _converter$ = dart.privateName(wrapper_helpers, "_converter");
  const _is__MappingList_default = Symbol('_is__MappingList_default');
  wrapper_helpers._MappingList$ = dart.generic(S => {
    class _MappingList extends collection.ListBase {
      _get(index) {
        return this[_converter$](this[_source$][$_get](index));
      }
      _set(index, value$) {
        let value = value$;
        dart.throw(new core.UnsupportedError.new(""));
        return value$;
      }
      get length() {
        return this[_source$][$length];
      }
      set length(value) {
        return dart.throw(new core.UnsupportedError.new(""));
      }
    }
    (_MappingList.new = function(_source, _converter) {
      this[_source$] = _source;
      this[_converter$] = _converter;
      ;
    }).prototype = _MappingList.prototype;
    dart.addTypeTests(_MappingList);
    _MappingList.prototype[_is__MappingList_default] = true;
    dart.setMethodSignature(_MappingList, () => ({
      __proto__: dart.getMethods(_MappingList.__proto__),
      _get: dart.fnType(dart.dynamic, [core.int]),
      [$_get]: dart.fnType(dart.dynamic, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object])
    }));
    dart.setGetterSignature(_MappingList, () => ({
      __proto__: dart.getGetters(_MappingList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(_MappingList, () => ({
      __proto__: dart.getSetters(_MappingList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_MappingList, "package:json_annotation/src/wrapper_helpers.dart");
    dart.setFieldSignature(_MappingList, () => ({
      __proto__: dart.getFields(_MappingList.__proto__),
      [_source$]: dart.finalFieldType(core.List$(S)),
      [_converter$]: dart.finalFieldType(dart.fnType(dart.dynamic, [S]))
    }));
    dart.defineExtensionMethods(_MappingList, ['_get', '_set']);
    dart.defineExtensionAccessors(_MappingList, ['length']);
    return _MappingList;
  });
  wrapper_helpers._MappingList = wrapper_helpers._MappingList$();
  dart.addTypeTests(wrapper_helpers._MappingList, _is__MappingList_default);
  const _is__MappingMap_default = Symbol('_is__MappingMap_default');
  wrapper_helpers._MappingMap$ = dart.generic((K, V) => {
    let KToString = () => (KToString = dart.constFn(dart.fnType(core.String, [K])))();
    class _MappingMap extends collection.UnmodifiableMapBase$(core.String, dart.dynamic) {
      get keys() {
        return this[_source$][$keys][$map](core.String, dart.fn(k => core.String.as(k), KToString()));
      }
      _get(key) {
        return this[_converter$](this[_source$][$_get](key));
      }
    }
    (_MappingMap.new = function(_source, _converter) {
      this[_source$] = _source;
      this[_converter$] = _converter;
      ;
    }).prototype = _MappingMap.prototype;
    dart.addTypeTests(_MappingMap);
    _MappingMap.prototype[_is__MappingMap_default] = true;
    dart.setMethodSignature(_MappingMap, () => ({
      __proto__: dart.getMethods(_MappingMap.__proto__),
      _get: dart.fnType(dart.dynamic, [core.Object]),
      [$_get]: dart.fnType(dart.dynamic, [core.Object])
    }));
    dart.setGetterSignature(_MappingMap, () => ({
      __proto__: dart.getGetters(_MappingMap.__proto__),
      keys: core.Iterable$(core.String),
      [$keys]: core.Iterable$(core.String)
    }));
    dart.setLibraryUri(_MappingMap, "package:json_annotation/src/wrapper_helpers.dart");
    dart.setFieldSignature(_MappingMap, () => ({
      __proto__: dart.getFields(_MappingMap.__proto__),
      [_source$]: dart.finalFieldType(core.Map$(K, V)),
      [_converter$]: dart.finalFieldType(dart.fnType(dart.dynamic, [V]))
    }));
    dart.defineExtensionMethods(_MappingMap, ['_get']);
    dart.defineExtensionAccessors(_MappingMap, ['keys']);
    return _MappingMap;
  });
  wrapper_helpers._MappingMap = wrapper_helpers._MappingMap$();
  dart.addTypeTests(wrapper_helpers._MappingMap, _is__MappingMap_default);
  wrapper_helpers.$wrapMap = function $wrapMap(K, V, source, converter) {
    return new (wrapper_helpers._MappingMap$(K, V)).new(source, converter);
  };
  wrapper_helpers.$wrapMapHandleNull = function $wrapMapHandleNull(K, V, source, converter) {
    return source == null ? null : new (wrapper_helpers._MappingMap$(K, V)).new(source, converter);
  };
  wrapper_helpers.$wrapList = function $wrapList(T, source, converter) {
    return new (wrapper_helpers._MappingList$(T)).new(source, converter);
  };
  wrapper_helpers.$wrapListHandleNull = function $wrapListHandleNull(T, source, converter) {
    return source == null ? null : new (wrapper_helpers._MappingList$(T)).new(source, converter);
  };
  const _is_JsonConverter_default = Symbol('_is_JsonConverter_default');
  json_converter.JsonConverter$ = dart.generic((T, S) => {
    class JsonConverter extends core.Object {}
    (JsonConverter.new = function() {
      ;
    }).prototype = JsonConverter.prototype;
    dart.addTypeTests(JsonConverter);
    JsonConverter.prototype[_is_JsonConverter_default] = true;
    dart.setLibraryUri(JsonConverter, "package:json_annotation/src/json_converter.dart");
    return JsonConverter;
  });
  json_converter.JsonConverter = json_converter.JsonConverter$();
  dart.addTypeTests(json_converter.JsonConverter, _is_JsonConverter_default);
  dart.trackLibraries("packages/json_annotation/json_annotation", {
    "package:json_annotation/src/json_value.dart": json_value,
    "package:json_annotation/src/json_serializable.dart": json_serializable,
    "package:json_annotation/src/json_key.dart": json_key,
    "package:json_annotation/src/allowed_keys_helpers.dart": allowed_keys_helpers,
    "package:json_annotation/src/checked_helpers.dart": checked_helpers,
    "package:json_annotation/src/json_literal.dart": json_literal,
    "package:json_annotation/src/wrapper_helpers.dart": wrapper_helpers,
    "package:json_annotation/src/json_converter.dart": json_converter,
    "package:json_annotation/json_annotation.dart": json_annotation
  }, {
    "package:json_annotation/src/json_serializable.dart": ["json_serializable.g.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/json_value.dart","src/json_serializable.dart","src/json_serializable.g.dart","src/json_key.dart","src/allowed_keys_helpers.dart","src/checked_helpers.dart","src/json_literal.dart","src/wrapper_helpers.dart","src/json_converter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASgB;;;;;;;;IAEO;;EAAM;;;;;;;;;;;;;;;;;ICY7B;;uDAZK;;;;EAYL;;;;;;;;;;;;;;;;IAiBa;;;;;;IAOA;;;;;;IAeA;;;;;;IA4BA;;;;;;IAOA;;;;;;IAeA;;;;;;IAoBA;;;;;;IAYO;;;;;;IA0BP;;;;;;IAUA;;;;;;IAUA;;;;;;IAOA;;;;;;oBAkB4C;AACnD,0DAA2B,IAAI;IAAC;;;AAwBD,kEAChB,KAAP,mBAAO,OAAG,AAAS,oEACV,MAAR,qBAAQ,OAAG,AAAS,4EACA,OAAd,4BAAc,OAAG,AAAS,kFACd,OAAb,2BAAa,OAAG,AAAS,6FAEV,OAAzB,uCAAyB,OAAG,AAAS,sGAEf,OAAtB,oCAAsB,OAAG,AAAS,4FACP,OAAf,6BAAe,OAAG,AAAS,kFAClB,OAAZ,0BAAY,OAAG,AAAS,0FAEV,OAAvB,qCAAuB,OAAG,AAAS,4FACV,OAAd,4BAAc,OAAG,AAAS,8EACtB,OAAT,uBAAS,OAAG,AAAS,4EACN,OAAZ,0BAAY,OAAG,AAAS;IAAY;;AAEpB,wDAAyB;IAAK;;;QAxDxD;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAXA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAOW,2CAAQ;;;;;;qFCpN0C;AAC/D,UAAO,iEAAY,oBAAoB,IAAI,EAAE;MAC3C,gCAAW,IAAI;AAcT,gBAAM,oDACA,2CAAgB,IAAI,EAAE,WAAW,QAAC,KAAQ,aAAF,CAAC,8BACxC,2CAAgB,IAAI,EAAE,WAAW,QAAC,KAAQ,aAAF,CAAC,oCAE9C,2CAAgB,IAAI,EAAE,kBAAkB,QAAC,KAAQ,aAAF,CAAC,mCACtC,2CAAgB,IAAI,EAAE,kBAAkB,QAAC,KAAQ,aAAF,CAAC,+CACpC,2CACtB,IAAI,EAAE,8BAA8B,QAAC,KAAQ,aAAF,CAAC,4CAE5C,2CAAgB,IAAI,EAAE,2BAA2B,QAAC,KAAQ,aAAF,CAAC,qCAEzD,2CAAgB,IAAI,EAAE,oBAAoB,QAAC,KAAQ,aAAF,CAAC,kCACzC,+DAAgB,IAAI,EAAE,gBAC/B,QAAC,KAAM,sEAAqB,wCAAsB,CAAC,oDAC/B,2CACpB,IAAI,EAAE,6BAA6B,QAAC,KAAQ,aAAF,CAAC,oCAE3C,2CAAgB,IAAI,EAAE,mBAAmB,QAAC,KAAQ,aAAF,CAAC,+BAC3C,2CAAgB,IAAI,EAAE,YAAY,QAAC,KAAQ,aAAF,CAAC,kCACvC,2CAAgB,IAAI,EAAE,gBAAgB,QAAC,KAAQ,aAAF,CAAC;AAC/D,YAAO,IAAG;;EAad;iFAE+D;AAC3D,UAAiB,2CACf,WAAW,AAAS,QAAD,SACnB,WAAW,AAAS,QAAD,UACnB,kBAAkB,AAAS,QAAD,gBAC1B,kBAAkB,AAAS,QAAD,eAC1B,8BAA8B,AAAS,QAAD,2BACtC,2BAA2B,AAAS,QAAD,wBACnC,oBAAoB,AAAS,QAAD,iBAC5B,gBAAgB,AAAoB,8CAAC,AAAS,QAAD,eAC7C,6BAA6B,AAAS,QAAD,yBACrC,mBAAmB,AAAS,QAAD,gBAC3B,YAAY,AAAS,QAAD,WACpB,gBAAgB,AAAS,QAAD;EACzB;4DAE6B,YAAoB;AACpD,QAAI,AAAO,MAAD,IAAI;MACZ,WAAM,2BAAc,0DACb,AAAW,AAAO,UAAR,iBAAa;;AAEhC,UAAO,AAAW,AACb,AAIA,WALY,yBACA,QAAC,KAAc,YAAR,AAAE,CAAD,QAAU,MAAM,wEACzB,cAAM,WAAM,2BAChB,eAAG,MAAM,wDACN,AAAW,AAAO,UAAR,iBAAa;EAExC;4EAE0C,YAAoB;AAC5D,QAAI,AAAO,MAAD,IAAI;AACZ,YAAO;;AAET,UAAO,mCAAgB,UAAU,EAAE,MAAM;EAC3C;;;MAEM,sCAAoB;;;;;ICpFX;;;;;;IAaF;;;;;;IAqBA;;;;;;IAWI;;;;;;IAMJ;;;;;;IAiBA;;;;;;IAME;;;;;;IAaF;;;;;;IAUA;;;;;;IAUI;;;;;;;;QAMR;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IATA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;;;;ICvFQ;;;;;;;;IAHa;;EAAI;;;;;;;;;;IAaR;;;;;;IAGA;;;;;;;AAIf,+CAAuB,AAAiB,6BAAK,SAAM,wBACnD,eAAI,AAAY,wBAAK,SAAM;IAAE;;iEAEF,kBAAsB,KAAU;IAAhC;IAAgC;AACnD,2EAAE,GAAG;;EAAC;;;;;;;;;;;;;;;IAOC;;;;;;;AAGG,YAAA,AAAuD,0CAAzB,AAAY,wBAAK,SAAM;IAAE;;oEAE3C,aAAiB;IAAjB;mBACrB,AAAY,WAAD;AACZ,8EAAE,GAAG;;EAAC;;;;;;;;;;;;;IAMC;;;;;;;AAKG,gDAClB,oCAAwB;IAAmB;;oEAJb,oBAAwB;IAAxB;AAAqC,8EAAE,GAAG;;EAAC;;;;;;;;;;;;wDAjF3D;QACF;QACD;QACA;AACf,QAAI,GAAG,IAAI,QAAQ,WAAW,IAAI;AAC1B,wBACF,AAAI,AAAK,AAAe,AAAuC,GAA5D,oCAA2B,QAAC,KAAM,WAAC,AAAY,WAAD,YAAU,CAAC;AAChE,oBAAI,AAAY,WAAD;QACb,WAAM,uDAA0B,WAAW,EAAE,GAAG,EAAE,WAAW;;;AAIjE,QAAI,YAAY,IAAI;AACZ,wBACF,AAAa,AAAoC,YAArC,SAAO,QAAC,KAAM,WAAC,AAAI,AAAK,GAAN,mBAAe,CAAC;AAClD,oBAAI,AAAY,WAAD;QACb,WAAM,0DAA6B,WAAW,EAAE,GAAG;;;AAIvD,QAAI,GAAG,IAAI,QAAQ,kBAAkB,IAAI;AACjC,2BAAiB,AAAI,AACtB,AAEA,AACA,GAJqB,mBACf,QAAC,SACmC,UAAvC,AAAmB,kBAAD,YAAU,AAAM,KAAD,UAAS,AAAM,AAAM,KAAP,UAAU,4CACxD,QAAC,SAAoB,eAAV,AAAM,KAAD;AAGzB,oBAAI,AAAe,cAAD;QAChB,WAAM,0DAA6B,cAAc,EAAE,GAAG;;;EAG5D;;;ICee;;;;;;IAMI;;;;;;IAKJ;;;;;;IAIH;;;;;;IAKG;;;;;;IAQF;;;;;;;AALa;IAAU;uBA6BD;;AAC/B,UAAU,sBAAN,KAAK;AACP,aAAO,AAAM,KAAD;mCAAU;YACjB,KAAU,wCAAN,KAAK;AACd,cAAO,AAAM,MAAD;YACP,KAAU,wBAAN,KAAK;AACV,sBAAU,AAAM,KAAD;AACnB,YAAI,AAAM,KAAD,WAAW;UAClB,UAA+C,SAAnC,OAAO,6BAAa,AAAM,KAAD,WAAQ;;AAE/C,cAAO,QAAO;;AAEhB,YAAO;IACT;;AAIQ,kBAAgB,sBAAC;AAEvB,UAAI,oBAAc;QAChB,AAAM,KAAD,OAAK,AAAiC,gCAAb,oBAAU;;AAE1C,UAAI,YAAO;QACT,AAAM,KAAD,OAAK,AAAiC,wCAAN,YAAG;;AAE1C,UAAI,gBAAW;QACb,AAAM,KAAD,OAAK;YACL,KAAI,mBAAc;QACvB,AAAM,KAAD,OAAgB,cAAX;;AAEZ,YAAO,AAAM,MAAD,QAAM;IACpB;;2DAnDO,KACA,KACE,WACF;;QACA;IAJA;IACA;IAEA;IAEU,mBAAE,SAAS;IACf,iBAAS,KAAP,MAAM,QAAC,OAAG;IACR,oBAAE;IACF,oBAAE;;EAAI;0DAGhB,YACA,YACA,KACA;QACE;IAJF;IACA;IACA;IACA;IAEU,mBAAE,SAAS;IACf,gBAAa,wCAAX,UAAU;IACX,iBAAE,qDAAY,UAAU;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;wDA/FjB,WAAe,KAAO;;QACrB;IACvB,AAAY,WAAD,IAAC,OAAZ,4BAAY;;AAGV,YAAO,AAAW,YAAA;;;;AAClB;YAAmC;AACnC,YAAI,AAAU,AAAE,CAAD,QAAM,GAAG,IAAK,AAAE,AAAW,CAAZ,gBAAe;UAC3C,AAAE,CAAD,eAAc,SAAS;;QAE1B;;YACO;YAAO;AACP;AACP,YAAU,sBAAN,KAAK;UACP,OAA8B,KAAxB,AAAW,WAAA,QAAC,AAAM,KAAD,gBAAO,OAAG,AAAM,KAAD;cACjC,KAAU,qDAAN,KAAK;UACd,MAAM,AAAM,AAAY,KAAb;cACN,KAAU,qDAAN,KAAK;UACd,MAAM,AAAM,AAAmB,KAApB;;QAEb,WAA+B,gDAAE,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,GAAG,cACxC,SAAS;;;EAE5B;gEAMyB,KAAY,KAAO;;AAExC,YAAO,AAAQ,SAAA,CAAC,AAAG,GAAA,QAAC,GAAG;;;;AACvB;QACA;;YACO;YAAO;QACd,WAA+B,gDAAE,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,GAAG;;;EAE3D;;IC3Be;;;;;;IAGF;;;;;;;2CAGY;;QAAY;IAAZ;IACT,kBAAU,KAAR,OAAO,QAAC,OAAG;;EAAK;;;;;;;;;;;;;ECjB2C;;;;;;;;WA0CnD;AAAU,iCAAW,AAAO,sBAAC,KAAK;MAAE;WAG3C;YAAe;AAAU,mBAAM,8BAAiB;;MAAG;;AAGlD,cAAA,AAAQ;MAAM;iBAGjB;AAAU,0BAAM,8BAAiB;MAAG;;iCAZjC,SAAc;MAAd;MAAc;;IAAW;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsBd,cAAA,AAAQ,AAAK,0CAAI,QAAC,KAAQ,eAAF,CAAC;MAAW;WAGtC;AAAQ,iCAAW,AAAO,sBAAC,GAAG;MAAE;;gCAN1C,SAAc;MAAd;MAAc;;IAAW;;;;;;;;;;;;;;;;;;;;;;;;;qDAnD1B,QAAgB;AAC9B,wDAAY,MAAM,EAAE,SAAS;EAAC;yEAOhB,QAAgB;AAC9B,UAAA,AAAO,OAAD,IAAI,OAAO,OAAO,6CAAY,MAAM,EAAE,SAAS;EAAC;oDAMvB,QAAgB;AAC/C,sDAAa,MAAM,EAAE,SAAS;EAAC;wEAOnB,QAAgB;AAC5B,UAAA,AAAO,OAAD,IAAI,OAAO,OAAO,2CAAa,MAAM,EAAE,SAAS;EAAC;;;;;;IC5B3D","file":"json_annotation.ddc.js"}');
  // Exports:
  return {
    src__json_value: json_value,
    src__json_serializable: json_serializable,
    src__json_key: json_key,
    src__allowed_keys_helpers: allowed_keys_helpers,
    src__checked_helpers: checked_helpers,
    src__json_literal: json_literal,
    src__wrapper_helpers: wrapper_helpers,
    src__json_converter: json_converter,
    json_annotation: json_annotation
  };
});

//# sourceMappingURL=json_annotation.ddc.js.map
