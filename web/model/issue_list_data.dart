import 'package:json_annotation/json_annotation.dart';

part 'issue_list_data.g.dart';


@JsonSerializable()
class IssueListData extends Object {

  @JsonKey(name: 'allTotal')
  int allTotal;

  @JsonKey(name: 'total')
  int total;

  @JsonKey(name: 'totalPage')
  int totalPage;

  @JsonKey(name: 'pageSize')
  int pageSize;

  @JsonKey(name: 'list')
  List<IssueListItem> issueListItem;

  @JsonKey(name: 'currentPage')
  int currentPage;

  IssueListData(this.allTotal,this.total,this.totalPage,this.pageSize,this.issueListItem,this.currentPage,);

  factory IssueListData.fromJson(Map<String, dynamic> srcJson) => _$IssueListDataFromJson(srcJson);

  Map<String, dynamic> toJson() => _$IssueListDataToJson(this);

}


@JsonSerializable()
class IssueListItem extends Object {

  @JsonKey(name: 'id')
  int id;

  @JsonKey(name: 'questionDetail')
  QuestionDetail questionDetail;

  @JsonKey(name: 'degree')
  String degree;

  @JsonKey(name: 'difficulty')
  String difficulty;

  @JsonKey(name: 'courseType')
  String courseType;

  @JsonKey(name: 'numberType')
  String numberType;

  @JsonKey(name: 'subjectType')
  String subjectType;

  @JsonKey(name: 'forceChoice')
  bool forceChoice;

  @JsonKey(name: 'answerList')
  List<AnswerList> answerList;

  @JsonKey(name: 'trueAnswerList')
  List<int> trueAnswerList;

  @JsonKey(name: 'createTime')
  String createTime;

  IssueListItem(this.id,this.questionDetail,this.degree,this.difficulty,this.courseType,this.numberType,this.subjectType,this.forceChoice,this.answerList,this.trueAnswerList,this.createTime,);

  factory IssueListItem.fromJson(Map<String, dynamic> srcJson) => _$IssueListItemFromJson(srcJson);

  Map<String, dynamic> toJson() => _$IssueListItemToJson(this);

}


@JsonSerializable()
class QuestionDetail extends Object {

  @JsonKey(name: 'describe')
  String describe;

  @JsonKey(name: 'picList')
  List<String> picList;

  QuestionDetail(this.describe,this.picList,);

  factory QuestionDetail.fromJson(Map<String, dynamic> srcJson) => _$QuestionDetailFromJson(srcJson);

  Map<String, dynamic> toJson() => _$QuestionDetailToJson(this);

}


@JsonSerializable()
class AnswerList extends Object {

  @JsonKey(name: 'answerId')
  String answerId;

  @JsonKey(name: 'rightAnswer')
  bool rightAnswer;

  @JsonKey(name: 'picList')
  List<String> picList;

  @JsonKey(name: 'describe')
  String describe;

  AnswerList(this.answerId,this.rightAnswer,this.picList,this.describe,);

  factory AnswerList.fromJson(Map<String, dynamic> srcJson) => _$AnswerListFromJson(srcJson);

  Map<String, dynamic> toJson() => _$AnswerListToJson(this);

}


