import 'model/issue_list_data.dart';

class IssueData {

  Map issuePushData = {
    'id':null,
    'difficulty':'难度一',
    'courseType':'语文',
    'subjectType':'选择题',
    'questionDetail':{},
    'answerList':[],
    'trueAnswerList':[]
  };

  List<int> deleteList=[];

  IssueListItem issueResponseData;
  static final IssueData _singleton = IssueData._internal();

  factory IssueData() => _singleton;

  IssueData._internal();

}
