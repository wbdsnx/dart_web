// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'issue_list_data.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

IssueListData _$IssueListDataFromJson(Map<String, dynamic> json) {
  return IssueListData(
      json['allTotal'] as int,
      json['total'] as int,
      json['totalPage'] as int,
      json['pageSize'] as int,
      (json['list'] as List)
          ?.map((e) => e == null
              ? null
              : IssueListItem.fromJson(e as Map<String, dynamic>))
          ?.toList(),
      json['currentPage'] as int);
}

Map<String, dynamic> _$IssueListDataToJson(IssueListData instance) =>
    <String, dynamic>{
      'allTotal': instance.allTotal,
      'total': instance.total,
      'totalPage': instance.totalPage,
      'pageSize': instance.pageSize,
      'list': instance.issueListItem,
      'currentPage': instance.currentPage
    };

IssueListItem _$IssueListItemFromJson(Map<String, dynamic> json) {
  return IssueListItem(
      json['id'] as int,
      json['questionDetail'] == null
          ? null
          : QuestionDetail.fromJson(
              json['questionDetail'] as Map<String, dynamic>),
      json['degree'] as String,
      json['difficulty'] as String,
      json['courseType'] as String,
      json['numberType'] as String,
      json['subjectType'] as String,
      json['forceChoice'] as bool,
      (json['answerList'] as List)
          ?.map((e) =>
              e == null ? null : AnswerList.fromJson(e as Map<String, dynamic>))
          ?.toList(),
      (json['trueAnswerList'] as List)?.map((e) => e as int)?.toList(),
      json['createTime'] as String);
}

Map<String, dynamic> _$IssueListItemToJson(IssueListItem instance) =>
    <String, dynamic>{
      'id': instance.id,
      'questionDetail': instance.questionDetail,
      'degree': instance.degree,
      'difficulty': instance.difficulty,
      'courseType': instance.courseType,
      'numberType': instance.numberType,
      'subjectType': instance.subjectType,
      'forceChoice': instance.forceChoice,
      'answerList': instance.answerList,
      'trueAnswerList': instance.trueAnswerList,
      'createTime': instance.createTime
    };

QuestionDetail _$QuestionDetailFromJson(Map<String, dynamic> json) {
  return QuestionDetail(json['describe'] as String,
      (json['picList'] as List)?.map((e) => e as String)?.toList());
}

Map<String, dynamic> _$QuestionDetailToJson(QuestionDetail instance) =>
    <String, dynamic>{
      'describe': instance.describe,
      'picList': instance.picList
    };

AnswerList _$AnswerListFromJson(Map<String, dynamic> json) {
  return AnswerList(
      json['answerId'] as String,
      json['rightAnswer'] as bool,
      (json['picList'] as List)?.map((e) => e as String)?.toList(),
      json['describe'] as String);
}

Map<String, dynamic> _$AnswerListToJson(AnswerList instance) =>
    <String, dynamic>{
      'answerId': instance.answerId,
      'rightAnswer': instance.rightAnswer,
      'picList': instance.picList,
      'describe': instance.describe
    };
