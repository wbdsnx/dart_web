import 'dart:html';

import 'question_util.dart';
import '../global.dart';
void main() async {
  String search=window.location.search;
  Element selectors = querySelector('#selectors');
//  Global().questionType=(querySelector('#题目类型') as SelectElement).value;
  if(search.trim()!=''){
    Global().isUpdate=true;
    Global().isReEdited=true;
    Global().searchId=search.split('?id=')[1];
    await QuestionUtil().getIssueListData('${Global().searchId}').whenComplete(()async{
      await QuestionUtil().generateDropDownBox(selectors, '../subject.json');
      QuestionUtil().preset();
      QuestionUtil().showImages(querySelector('#frame_table'));
      QuestionUtil().uploadData();
    });
  }else{
    QuestionUtil().preset();
    await QuestionUtil().generateDropDownBox(selectors, '../subject.json');
    QuestionUtil().uploadData();
  }
}
