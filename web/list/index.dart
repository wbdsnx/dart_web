
import 'dart:html';
import '../global.dart';
import 'list_util.dart';
void main() async {
  String search = Uri.decodeComponent(window.location.search); //获取url中"?"符后的字串
  if(search==''){
    await ListUtil().generateIssueList('pageSize=${Global().pageSize}&currentPage=1');
  }else{
    Global().pageSize=intTryParse(getetRequest(search)['pageSize'])??30;
    Global().currentPage=intTryParse(getetRequest(search)['currentPage'])??1;
    Global().difficulty=getetRequest(search)['difficulty']??'不限';
    Global().courseType=getetRequest(search)['courseType']??'不限';
    Global().subjectType=getetRequest(search)['subjectType']??'不限';
    Global().searchId=getetRequest(search)['id']??'';
    await ListUtil().generateIssueList(search.split('?')[1]);
  }
  Element selectors = querySelector('#selectors');
  await ListUtil.generateDropDownBox(selectors, '../subject.json');
  querySelector('.loading_div').style.display='none';
  ListUtil().search();
  ListUtil().addIssue();
  ListUtil().uploadFile();
  ListUtil().batchOperator();
}

int intTryParse(String source) => int.tryParse(source??'');
//获取参数
Map getetRequest(String search) {
  Map requestMap={};
  if (search.indexOf("?") != -1) {
    String str = search.split('?')[1];
    if(str.contains('&')){
      List<String> strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
        requestMap.putIfAbsent(strs[i].split('=')[0], ()=>strs[i].split('=')[1]);
      }
    }else{
      requestMap.putIfAbsent(str.split('=')[0], ()=>str.split('=')[1]);
    }
  }
  return requestMap;
}