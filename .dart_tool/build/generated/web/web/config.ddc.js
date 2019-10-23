define(['dart_sdk', 'packages/dio/src/dio', 'packages/dio/src/adapter'], function(dart_sdk, packages__dio__src__dio, packages__dio__src__adapter) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interceptor = packages__dio__src__dio.src__interceptor;
  const dio = packages__dio__src__dio.src__dio;
  const options = packages__dio__src__adapter.src__options;
  const response = packages__dio__src__adapter.src__response;
  const dio_error = packages__dio__src__adapter.src__dio_error;
  const http_util = Object.create(dart.library);
  const config = Object.create(dart.library);
  const data = Object.create(dart.library);
  const issue_list_data = Object.create(dart.library);
  const global = Object.create(dart.library);
  const $location = dartx.location;
  const $add = dartx.add;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let RequestOptionsToNull = () => (RequestOptionsToNull = dart.constFn(dart.fnType(core.Null, [options.RequestOptions])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ResponseToNull = () => (ResponseToNull = dart.constFn(dart.fnType(core.Null, [response.Response])))();
  let DioErrorToNull = () => (DioErrorToNull = dart.constFn(dart.fnType(core.Null, [dio_error.DioError])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let dynamicToIssueListItem = () => (dynamicToIssueListItem = dart.constFn(dart.fnType(issue_list_data.IssueListItem, [dart.dynamic])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicToAnswerList = () => (dynamicToAnswerList = dart.constFn(dart.fnType(issue_list_data.AnswerList, [dart.dynamic])))();
  let dynamicToint = () => (dynamicToint = dart.constFn(dart.fnType(core.int, [dart.dynamic])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  const CT = Object.create(null);
  http_util.HttpResult = class HttpResult extends core.Object {
    get success() {
      return this[success$];
    }
    set success(value) {
      this[success$] = value;
    }
    get code() {
      return this[code$];
    }
    set code(value) {
      this[code$] = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      this[data$] = value;
    }
    get errMsg() {
      return this[errMsg$];
    }
    set errMsg(value) {
      this[errMsg$] = value;
    }
  };
  (http_util.HttpResult.new = function(success, code, data, errMsg) {
    this[success$] = success;
    this[code$] = code;
    this[data$] = data;
    this[errMsg$] = errMsg;
    ;
  }).prototype = http_util.HttpResult.prototype;
  dart.addTypeTests(http_util.HttpResult);
  const success$ = Symbol("HttpResult.success");
  const code$ = Symbol("HttpResult.code");
  const data$ = Symbol("HttpResult.data");
  const errMsg$ = Symbol("HttpResult.errMsg");
  dart.setLibraryUri(http_util.HttpResult, "org-dartlang-app:///web/http_util.dart");
  dart.setFieldSignature(http_util.HttpResult, () => ({
    __proto__: dart.getFields(http_util.HttpResult.__proto__),
    success: dart.fieldType(core.bool),
    code: dart.fieldType(core.int),
    data: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    errMsg: dart.fieldType(core.String)
  }));
  const _getResult = dart.privateName(http_util, "_getResult");
  http_util.HttpUtil = class HttpUtil extends core.Object {
    postAsync(url, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      return async.async(dart.dynamic, function* postAsync() {
        return (yield http_util.HttpUtil.dio.post(dart.dynamic, core.Uri.encodeFull(url), {data: convert.json.encode(data)})).data;
      });
    }
    getAsync(url) {
      return async.async(dart.dynamic, (function* getAsync() {
        return this[_getResult](yield http_util.HttpUtil.dio.get(dart.dynamic, core.Uri.encodeFull(url)));
      }).bind(this));
    }
    delAsync(url) {
      return async.async(dart.dynamic, (function* delAsync() {
        return this[_getResult](yield http_util.HttpUtil.dio.delete(dart.dynamic, core.Uri.encodeFull(url)));
      }).bind(this));
    }
    putAsync(url, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      return async.async(dart.dynamic, function* putAsync() {
        return (yield http_util.HttpUtil.dio.put(dart.dynamic, core.Uri.encodeFull(url), {data: convert.json.encode(data)})).data;
      });
    }
    [_getResult](response) {
      let data = null;
      if (!core.Map.is(response.data)) {
        data = core.Map._check(convert.json.decode(core.String._check(response.data)));
      } else {
        data = core.Map._check(response.data);
      }
      let code = core.int._check(data[$_get]("code"));
      if (code === 200) {
        return new http_util.HttpResult.new(true, code, MapOfString$dynamic()._check(core.Map.is(data[$_get]("data")) ? data[$_get]("data") : null), null);
      } else
        return new http_util.HttpResult.new(false, code, null, core.String._check(data[$_get]("msg")));
    }
  };
  (http_util.HttpUtil.new = function() {
    http_util.HttpUtil.dio.interceptors[$add](new interceptor.InterceptorsWrapper.new({onRequest: dart.fn(request => null, RequestOptionsToNull()), onResponse: dart.fn(response => {
        if (response.request.path === "uploadExcelByBase64" && response.statusCode === 200) {
          html.ImageElement.as(html.querySelector("#upload_img")).src = "../images/upload_success.png";
          async.Future.delayed(new core.Duration.new({seconds: 1}), dart.fn(() => {
            html.window[$location].reload();
          }, VoidToNull()));
        }
      }, ResponseToNull()), onError: dart.fn(error => {
        if (error.request.path === "uploadExcelByBase64") {
          html.ImageElement.as(html.querySelector("#upload_img")).src = "../images/upload_failure.png";
          async.Future.delayed(new core.Duration.new({seconds: 1}), dart.fn(() => {
            html.window[$location].reload();
          }, VoidToNull()));
        }
      }, DioErrorToNull())}));
  }).prototype = http_util.HttpUtil.prototype;
  dart.addTypeTests(http_util.HttpUtil);
  dart.setMethodSignature(http_util.HttpUtil, () => ({
    __proto__: dart.getMethods(http_util.HttpUtil.__proto__),
    postAsync: dart.fnType(async.Future, [core.String], {data: dart.dynamic}),
    getAsync: dart.fnType(async.Future, [core.String]),
    delAsync: dart.fnType(async.Future, [core.String]),
    putAsync: dart.fnType(async.Future, [core.String], {data: dart.dynamic}),
    [_getResult]: dart.fnType(http_util.HttpResult, [response.Response])
  }));
  dart.setLibraryUri(http_util.HttpUtil, "org-dartlang-app:///web/http_util.dart");
  dart.defineLazy(http_util.HttpUtil, {
    /*http_util.HttpUtil.dio*/get dio() {
      return dio.Dio.new(new options.BaseOptions.new({baseUrl: true ? "http://192.168.35.207/exam/" : "http://120.25.254.159/exam/", contentType: "application/json"}));
    },
    set dio(_) {}
  });
  config.Config = class Config extends core.Object {};
  (config.Config.new = function() {
    ;
  }).prototype = config.Config.prototype;
  dart.addTypeTests(config.Config);
  dart.setLibraryUri(config.Config, "org-dartlang-app:///web/config.dart");
  dart.defineLazy(config.Config, {
    /*config.Config.IMAGE_WIDTH*/get IMAGE_WIDTH() {
      return 30;
    },
    /*config.Config.IMAGE_HEIGHT*/get IMAGE_HEIGHT() {
      return 30;
    },
    /*config.Config.INPUT_MAX_LENGTH*/get INPUT_MAX_LENGTH() {
      return 30;
    },
    /*config.Config.IMAGE_MAX_SELECT_AMOUNT*/get IMAGE_MAX_SELECT_AMOUNT() {
      return 4;
    },
    /*config.Config.OPTIONS_MIN_COUNT*/get OPTIONS_MIN_COUNT() {
      return 2;
    },
    /*config.Config.OPTIONS_MAX_COUNT*/get OPTIONS_MAX_COUNT() {
      return 8;
    },
    /*config.Config.QUESTION_TYPE*/get QUESTION_TYPE() {
      return 0;
    },
    /*config.Config.LOAD_CONFIG*/get LOAD_CONFIG() {
      return 0;
    },
    /*config.Config.isLocal*/get isLocal() {
      return true;
    },
    /*config.Config.LOCAL_JSON_FILE_PATH*/get LOCAL_JSON_FILE_PATH() {
      return "subject.json";
    },
    /*config.Config.REMOTE_JSON_FILE_PATH*/get REMOTE_JSON_FILE_PATH() {
      return "";
    }
  });
  data.IssueData = class IssueData extends core.Object {
    get issuePushData() {
      return this[issuePushData];
    }
    set issuePushData(value) {
      this[issuePushData] = value;
    }
    get deleteList() {
      return this[deleteList];
    }
    set deleteList(value) {
      this[deleteList] = value;
    }
    get issueResponseData() {
      return this[issueResponseData];
    }
    set issueResponseData(value) {
      this[issueResponseData] = value;
    }
    static new() {
      return data.IssueData._singleton;
    }
  };
  (data.IssueData._internal = function() {
    this[issuePushData] = new _js_helper.LinkedMap.from(["id", null, "difficulty", "难度一", "courseType", "语文", "subjectType", "选择题", "questionDetail", new _js_helper.LinkedMap.new(), "answerList", [], "trueAnswerList", []]);
    this[deleteList] = JSArrayOfint().of([]);
    this[issueResponseData] = null;
    ;
  }).prototype = data.IssueData.prototype;
  dart.addTypeTests(data.IssueData);
  const issuePushData = Symbol("IssueData.issuePushData");
  const deleteList = Symbol("IssueData.deleteList");
  const issueResponseData = Symbol("IssueData.issueResponseData");
  dart.setLibraryUri(data.IssueData, "org-dartlang-app:///web/data.dart");
  dart.setFieldSignature(data.IssueData, () => ({
    __proto__: dart.getFields(data.IssueData.__proto__),
    issuePushData: dart.fieldType(core.Map),
    deleteList: dart.fieldType(core.List$(core.int)),
    issueResponseData: dart.fieldType(issue_list_data.IssueListItem)
  }));
  dart.defineLazy(data.IssueData, {
    /*data.IssueData._singleton*/get _singleton() {
      return new data.IssueData._internal();
    }
  });
  issue_list_data.IssueListData = class IssueListData extends core.Object {
    get allTotal() {
      return this[allTotal$];
    }
    set allTotal(value) {
      this[allTotal$] = value;
    }
    get total() {
      return this[total$];
    }
    set total(value) {
      this[total$] = value;
    }
    get totalPage() {
      return this[totalPage$];
    }
    set totalPage(value) {
      this[totalPage$] = value;
    }
    get pageSize() {
      return this[pageSize$];
    }
    set pageSize(value) {
      this[pageSize$] = value;
    }
    get issueListItem() {
      return this[issueListItem$];
    }
    set issueListItem(value) {
      this[issueListItem$] = value;
    }
    get currentPage() {
      return this[currentPage$];
    }
    set currentPage(value) {
      this[currentPage$] = value;
    }
    static fromJson(srcJson) {
      return issue_list_data._$IssueListDataFromJson(srcJson);
    }
    toJson() {
      return issue_list_data._$IssueListDataToJson(this);
    }
  };
  (issue_list_data.IssueListData.new = function(allTotal, total, totalPage, pageSize, issueListItem, currentPage) {
    this[allTotal$] = allTotal;
    this[total$] = total;
    this[totalPage$] = totalPage;
    this[pageSize$] = pageSize;
    this[issueListItem$] = issueListItem;
    this[currentPage$] = currentPage;
    ;
  }).prototype = issue_list_data.IssueListData.prototype;
  dart.addTypeTests(issue_list_data.IssueListData);
  const allTotal$ = Symbol("IssueListData.allTotal");
  const total$ = Symbol("IssueListData.total");
  const totalPage$ = Symbol("IssueListData.totalPage");
  const pageSize$ = Symbol("IssueListData.pageSize");
  const issueListItem$ = Symbol("IssueListData.issueListItem");
  const currentPage$ = Symbol("IssueListData.currentPage");
  dart.setMethodSignature(issue_list_data.IssueListData, () => ({
    __proto__: dart.getMethods(issue_list_data.IssueListData.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(issue_list_data.IssueListData, "org-dartlang-app:///web/model/issue_list_data.dart");
  dart.setFieldSignature(issue_list_data.IssueListData, () => ({
    __proto__: dart.getFields(issue_list_data.IssueListData.__proto__),
    allTotal: dart.fieldType(core.int),
    total: dart.fieldType(core.int),
    totalPage: dart.fieldType(core.int),
    pageSize: dart.fieldType(core.int),
    issueListItem: dart.fieldType(core.List$(issue_list_data.IssueListItem)),
    currentPage: dart.fieldType(core.int)
  }));
  issue_list_data.IssueListItem = class IssueListItem extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get questionDetail() {
      return this[questionDetail$];
    }
    set questionDetail(value) {
      this[questionDetail$] = value;
    }
    get degree() {
      return this[degree$];
    }
    set degree(value) {
      this[degree$] = value;
    }
    get difficulty() {
      return this[difficulty$];
    }
    set difficulty(value) {
      this[difficulty$] = value;
    }
    get courseType() {
      return this[courseType$];
    }
    set courseType(value) {
      this[courseType$] = value;
    }
    get numberType() {
      return this[numberType$];
    }
    set numberType(value) {
      this[numberType$] = value;
    }
    get subjectType() {
      return this[subjectType$];
    }
    set subjectType(value) {
      this[subjectType$] = value;
    }
    get forceChoice() {
      return this[forceChoice$];
    }
    set forceChoice(value) {
      this[forceChoice$] = value;
    }
    get answerList() {
      return this[answerList$];
    }
    set answerList(value) {
      this[answerList$] = value;
    }
    get trueAnswerList() {
      return this[trueAnswerList$];
    }
    set trueAnswerList(value) {
      this[trueAnswerList$] = value;
    }
    get createTime() {
      return this[createTime$];
    }
    set createTime(value) {
      this[createTime$] = value;
    }
    static fromJson(srcJson) {
      return issue_list_data._$IssueListItemFromJson(srcJson);
    }
    toJson() {
      return issue_list_data._$IssueListItemToJson(this);
    }
  };
  (issue_list_data.IssueListItem.new = function(id, questionDetail, degree, difficulty, courseType, numberType, subjectType, forceChoice, answerList, trueAnswerList, createTime) {
    this[id$] = id;
    this[questionDetail$] = questionDetail;
    this[degree$] = degree;
    this[difficulty$] = difficulty;
    this[courseType$] = courseType;
    this[numberType$] = numberType;
    this[subjectType$] = subjectType;
    this[forceChoice$] = forceChoice;
    this[answerList$] = answerList;
    this[trueAnswerList$] = trueAnswerList;
    this[createTime$] = createTime;
    ;
  }).prototype = issue_list_data.IssueListItem.prototype;
  dart.addTypeTests(issue_list_data.IssueListItem);
  const id$ = Symbol("IssueListItem.id");
  const questionDetail$ = Symbol("IssueListItem.questionDetail");
  const degree$ = Symbol("IssueListItem.degree");
  const difficulty$ = Symbol("IssueListItem.difficulty");
  const courseType$ = Symbol("IssueListItem.courseType");
  const numberType$ = Symbol("IssueListItem.numberType");
  const subjectType$ = Symbol("IssueListItem.subjectType");
  const forceChoice$ = Symbol("IssueListItem.forceChoice");
  const answerList$ = Symbol("IssueListItem.answerList");
  const trueAnswerList$ = Symbol("IssueListItem.trueAnswerList");
  const createTime$ = Symbol("IssueListItem.createTime");
  dart.setMethodSignature(issue_list_data.IssueListItem, () => ({
    __proto__: dart.getMethods(issue_list_data.IssueListItem.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(issue_list_data.IssueListItem, "org-dartlang-app:///web/model/issue_list_data.dart");
  dart.setFieldSignature(issue_list_data.IssueListItem, () => ({
    __proto__: dart.getFields(issue_list_data.IssueListItem.__proto__),
    id: dart.fieldType(core.int),
    questionDetail: dart.fieldType(issue_list_data.QuestionDetail),
    degree: dart.fieldType(core.String),
    difficulty: dart.fieldType(core.String),
    courseType: dart.fieldType(core.String),
    numberType: dart.fieldType(core.String),
    subjectType: dart.fieldType(core.String),
    forceChoice: dart.fieldType(core.bool),
    answerList: dart.fieldType(core.List$(issue_list_data.AnswerList)),
    trueAnswerList: dart.fieldType(core.List$(core.int)),
    createTime: dart.fieldType(core.String)
  }));
  issue_list_data.QuestionDetail = class QuestionDetail extends core.Object {
    get describe() {
      return this[describe$];
    }
    set describe(value) {
      this[describe$] = value;
    }
    get picList() {
      return this[picList$];
    }
    set picList(value) {
      this[picList$] = value;
    }
    static fromJson(srcJson) {
      return issue_list_data._$QuestionDetailFromJson(srcJson);
    }
    toJson() {
      return issue_list_data._$QuestionDetailToJson(this);
    }
  };
  (issue_list_data.QuestionDetail.new = function(describe, picList) {
    this[describe$] = describe;
    this[picList$] = picList;
    ;
  }).prototype = issue_list_data.QuestionDetail.prototype;
  dart.addTypeTests(issue_list_data.QuestionDetail);
  const describe$ = Symbol("QuestionDetail.describe");
  const picList$ = Symbol("QuestionDetail.picList");
  dart.setMethodSignature(issue_list_data.QuestionDetail, () => ({
    __proto__: dart.getMethods(issue_list_data.QuestionDetail.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(issue_list_data.QuestionDetail, "org-dartlang-app:///web/model/issue_list_data.dart");
  dart.setFieldSignature(issue_list_data.QuestionDetail, () => ({
    __proto__: dart.getFields(issue_list_data.QuestionDetail.__proto__),
    describe: dart.fieldType(core.String),
    picList: dart.fieldType(core.List$(core.String))
  }));
  issue_list_data.AnswerList = class AnswerList extends core.Object {
    get answerId() {
      return this[answerId$];
    }
    set answerId(value) {
      this[answerId$] = value;
    }
    get rightAnswer() {
      return this[rightAnswer$];
    }
    set rightAnswer(value) {
      this[rightAnswer$] = value;
    }
    get picList() {
      return this[picList$0];
    }
    set picList(value) {
      this[picList$0] = value;
    }
    get describe() {
      return this[describe$0];
    }
    set describe(value) {
      this[describe$0] = value;
    }
    static fromJson(srcJson) {
      return issue_list_data._$AnswerListFromJson(srcJson);
    }
    toJson() {
      return issue_list_data._$AnswerListToJson(this);
    }
  };
  (issue_list_data.AnswerList.new = function(answerId, rightAnswer, picList, describe) {
    this[answerId$] = answerId;
    this[rightAnswer$] = rightAnswer;
    this[picList$0] = picList;
    this[describe$0] = describe;
    ;
  }).prototype = issue_list_data.AnswerList.prototype;
  dart.addTypeTests(issue_list_data.AnswerList);
  const answerId$ = Symbol("AnswerList.answerId");
  const rightAnswer$ = Symbol("AnswerList.rightAnswer");
  const picList$0 = Symbol("AnswerList.picList");
  const describe$0 = Symbol("AnswerList.describe");
  dart.setMethodSignature(issue_list_data.AnswerList, () => ({
    __proto__: dart.getMethods(issue_list_data.AnswerList.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(issue_list_data.AnswerList, "org-dartlang-app:///web/model/issue_list_data.dart");
  dart.setFieldSignature(issue_list_data.AnswerList, () => ({
    __proto__: dart.getFields(issue_list_data.AnswerList.__proto__),
    answerId: dart.fieldType(core.String),
    rightAnswer: dart.fieldType(core.bool),
    picList: dart.fieldType(core.List$(core.String)),
    describe: dart.fieldType(core.String)
  }));
  issue_list_data._$IssueListDataFromJson = function _$IssueListDataFromJson(json) {
    let t0, t0$;
    return new issue_list_data.IssueListData.new(core.int.as(json[$_get]("allTotal")), core.int.as(json[$_get]("total")), core.int.as(json[$_get]("totalPage")), core.int.as(json[$_get]("pageSize")), (t0$ = (t0 = core.List.as(json[$_get]("list")), t0 == null ? null : t0[$map](issue_list_data.IssueListItem, dart.fn(e => e == null ? null : issue_list_data.IssueListItem.fromJson(MapOfString$dynamic().as(e)), dynamicToIssueListItem()))), t0$ == null ? null : t0$[$toList]()), core.int.as(json[$_get]("currentPage")));
  };
  issue_list_data._$IssueListDataToJson = function _$IssueListDataToJson(instance) {
    return new (IdentityMapOfString$dynamic()).from(["allTotal", instance.allTotal, "total", instance.total, "totalPage", instance.totalPage, "pageSize", instance.pageSize, "list", instance.issueListItem, "currentPage", instance.currentPage]);
  };
  issue_list_data._$IssueListItemFromJson = function _$IssueListItemFromJson(json) {
    let t0, t0$, t0$0, t0$1;
    return new issue_list_data.IssueListItem.new(core.int.as(json[$_get]("id")), json[$_get]("questionDetail") == null ? null : issue_list_data.QuestionDetail.fromJson(MapOfString$dynamic().as(json[$_get]("questionDetail"))), core.String.as(json[$_get]("degree")), core.String.as(json[$_get]("difficulty")), core.String.as(json[$_get]("courseType")), core.String.as(json[$_get]("numberType")), core.String.as(json[$_get]("subjectType")), core.bool.as(json[$_get]("forceChoice")), (t0$ = (t0 = core.List.as(json[$_get]("answerList")), t0 == null ? null : t0[$map](issue_list_data.AnswerList, dart.fn(e => e == null ? null : issue_list_data.AnswerList.fromJson(MapOfString$dynamic().as(e)), dynamicToAnswerList()))), t0$ == null ? null : t0$[$toList]()), (t0$1 = (t0$0 = core.List.as(json[$_get]("trueAnswerList")), t0$0 == null ? null : t0$0[$map](core.int, dart.fn(e => core.int.as(e), dynamicToint()))), t0$1 == null ? null : t0$1[$toList]()), core.String.as(json[$_get]("createTime")));
  };
  issue_list_data._$IssueListItemToJson = function _$IssueListItemToJson(instance) {
    return new (IdentityMapOfString$dynamic()).from(["id", instance.id, "questionDetail", instance.questionDetail, "degree", instance.degree, "difficulty", instance.difficulty, "courseType", instance.courseType, "numberType", instance.numberType, "subjectType", instance.subjectType, "forceChoice", instance.forceChoice, "answerList", instance.answerList, "trueAnswerList", instance.trueAnswerList, "createTime", instance.createTime]);
  };
  issue_list_data._$QuestionDetailFromJson = function _$QuestionDetailFromJson(json) {
    let t0, t0$;
    return new issue_list_data.QuestionDetail.new(core.String.as(json[$_get]("describe")), (t0$ = (t0 = core.List.as(json[$_get]("picList")), t0 == null ? null : t0[$map](core.String, dart.fn(e => core.String.as(e), dynamicToString()))), t0$ == null ? null : t0$[$toList]()));
  };
  issue_list_data._$QuestionDetailToJson = function _$QuestionDetailToJson(instance) {
    return new (IdentityMapOfString$dynamic()).from(["describe", instance.describe, "picList", instance.picList]);
  };
  issue_list_data._$AnswerListFromJson = function _$AnswerListFromJson(json) {
    let t0, t0$;
    return new issue_list_data.AnswerList.new(core.String.as(json[$_get]("answerId")), core.bool.as(json[$_get]("rightAnswer")), (t0$ = (t0 = core.List.as(json[$_get]("picList")), t0 == null ? null : t0[$map](core.String, dart.fn(e => core.String.as(e), dynamicToString()))), t0$ == null ? null : t0$[$toList]()), core.String.as(json[$_get]("describe")));
  };
  issue_list_data._$AnswerListToJson = function _$AnswerListToJson(instance) {
    return new (IdentityMapOfString$dynamic()).from(["answerId", instance.answerId, "rightAnswer", instance.rightAnswer, "picList", instance.picList, "describe", instance.describe]);
  };
  global.Global = class Global extends core.Object {
    get isUpdate() {
      return this[isUpdate];
    }
    set isUpdate(value) {
      this[isUpdate] = value;
    }
    get isReEdited() {
      return this[isReEdited];
    }
    set isReEdited(value) {
      this[isReEdited] = value;
    }
    get searchId() {
      return this[searchId];
    }
    set searchId(value) {
      this[searchId] = value;
    }
    get pageSize() {
      return this[pageSize];
    }
    set pageSize(value) {
      this[pageSize] = value;
    }
    get currentPage() {
      return this[currentPage];
    }
    set currentPage(value) {
      this[currentPage] = value;
    }
    get difficulty() {
      return this[difficulty];
    }
    set difficulty(value) {
      this[difficulty] = value;
    }
    get courseType() {
      return this[courseType];
    }
    set courseType(value) {
      this[courseType] = value;
    }
    get subjectType() {
      return this[subjectType];
    }
    set subjectType(value) {
      this[subjectType] = value;
    }
    static new() {
      return global.Global._singleton;
    }
  };
  (global.Global._internal = function() {
    this[isUpdate] = false;
    this[isReEdited] = false;
    this[searchId] = null;
    this[pageSize] = 30;
    this[currentPage] = 1;
    this[difficulty] = "不限";
    this[courseType] = "不限";
    this[subjectType] = "不限";
    ;
  }).prototype = global.Global.prototype;
  dart.addTypeTests(global.Global);
  const isUpdate = Symbol("Global.isUpdate");
  const isReEdited = Symbol("Global.isReEdited");
  const searchId = Symbol("Global.searchId");
  const pageSize = Symbol("Global.pageSize");
  const currentPage = Symbol("Global.currentPage");
  const difficulty = Symbol("Global.difficulty");
  const courseType = Symbol("Global.courseType");
  const subjectType = Symbol("Global.subjectType");
  dart.setLibraryUri(global.Global, "org-dartlang-app:///web/global.dart");
  dart.setFieldSignature(global.Global, () => ({
    __proto__: dart.getFields(global.Global.__proto__),
    isUpdate: dart.fieldType(core.bool),
    isReEdited: dart.fieldType(core.bool),
    searchId: dart.fieldType(core.String),
    pageSize: dart.fieldType(core.int),
    currentPage: dart.fieldType(core.int),
    difficulty: dart.fieldType(core.String),
    courseType: dart.fieldType(core.String),
    subjectType: dart.fieldType(core.String)
  }));
  dart.defineLazy(global.Global, {
    /*global.Global._singleton*/get _singleton() {
      return new global.Global._internal();
    }
  });
  dart.trackLibraries("web/config", {
    "org-dartlang-app:///web/http_util.dart": http_util,
    "org-dartlang-app:///web/config.dart": config,
    "org-dartlang-app:///web/data.dart": data,
    "org-dartlang-app:///web/model/issue_list_data.dart": issue_list_data,
    "org-dartlang-app:///web/global.dart": global
  }, {
    "org-dartlang-app:///web/model/issue_list_data.dart": ["issue_list_data.g.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["http_util.dart","config.dart","data.dart","model/issue_list_data.dart","model/issue_list_data.g.dart","global.dart"],"names":[],"mappings":"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","file":"config.ddc.js"}');
  // Exports:
  return {
    web__http_util: http_util,
    web__config: config,
    web__data: data,
    web__model__issue_list_data: issue_list_data,
    web__global: global
  };
});

//# sourceMappingURL=config.ddc.js.map
