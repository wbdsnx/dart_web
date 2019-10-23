import 'model/issue_list_data.dart';

class Global {
  bool isUpdate = false;
  bool isReEdited = false;

  String searchId;

  int pageSize=30;
  int currentPage=1;

  String difficulty='不限';
  String courseType='不限';
  String subjectType='不限';

  static final Global _singleton = Global._internal();

  factory Global() {
    return _singleton;
  }

  Global._internal();
}
