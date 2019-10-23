import 'dart:html';
import '../config.dart';
import '../data.dart';
import 'dart:convert';
import '../global.dart';
import '../http_util.dart';
import '../model/issue_list_data.dart';

var keyMap = {
  'degree': '年级',
  'difficulty': '难度',
  'courseType': '科目类型',
  'numberType': '标号类型',
  'subjectType': '题目类型'
};

class ListUtil {
  IssueListData issueListData;

  //读取json文件
  static Future<Map> readJsonFile(String path) async {
    return json.decode(await HttpRequest.getString(path));
  }

  //创建选择下拉框
  static void generateDropDownBox(Element anchor, String path) async {
    Map jsonTarget = await readJsonFile(path);
    jsonTarget.forEach((key, value) {
      anchor.append(SpanElement()..innerText = '${keyMap[key]}:  ')
        ..append(SelectElement()..id = '$key');
      querySelector('#$key').append(OptionElement(data: '不限', value: '不限'));
      value.forEach((item) {
        querySelector('#$key')
            .append(OptionElement(data: '$item', value: '${item}'));
      });
    });
    (querySelector('#difficulty') as SelectElement).value =
        Global().difficulty == '' ? '不限' : Global().difficulty;
    (querySelector('#courseType') as SelectElement).value =
        Global().courseType == '' ? '不限' : Global().courseType;
    (querySelector('#subjectType') as SelectElement).value =
        Global().subjectType == '' ? '不限' : Global().subjectType;
  }

  //获取题目列表数据
  Future getIssueListData(String paramster) async {
    HttpResult httpResult = await HttpUtil().getAsync('api/city/?${paramster}');
    if (httpResult.success) {
      if (httpResult.data != null) {
        issueListData = IssueListData.fromJson(httpResult.data);
      }
    }
  }

  static Element get content => querySelector('#content');

  //文件上传
  void uploadFile() {
    (querySelector('#file_submit') as ButtonElement).onClick.listen((e) {
      FileUploadInputElement fileUploadInputElement =
          querySelector('#file_select') as FileUploadInputElement;
      if (fileUploadInputElement.files.length != 0) {
        FileReader fileReader = FileReader();
        fileReader.readAsDataUrl(fileUploadInputElement.files[0]);
        fileReader.onLoadEnd.listen((e) async{
          querySelector('.loading_div').style.display='';
          (querySelector('#upload_img') as ImageElement).src='../images/uploading.gif';
          await HttpUtil().postAsync('uploadExcelByBase64',data: {'excelBase64':(fileReader.result as String).split('sheet;base64,')[1]});
        });
      }
    });
  }

  static ButtonElement get batchOperatorButton =>
      querySelector('#batch_operator_button') as ButtonElement;

  static ButtonElement get batchDeleteButton =>
      querySelector('#batch_delete_button') as ButtonElement;

  //批量操作
  void batchOperator() {
    batchDeleteButton.style.display = 'none';
    ElementList selectShownList = querySelectorAll('.selectShown');
    selectShownList.style.display = 'none';
    batchOperatorButton.onClick.listen((e) {
      selectShownList.style.display =
          selectShownList.style.display == '' ? 'none' : '';
      batchDeleteButton.style.display =
          batchDeleteButton.style.display == '' ? 'none' : '';
      batchOperatorButton.innerText =
          batchOperatorButton.innerText == '完成' ? '批量操作' : '完成';
      CheckboxInputElement selectAll =
          querySelector('#selectAll') as CheckboxInputElement;
      selectAll.checked = false;
      ElementList selectedList = querySelectorAll('.selected');
      for (CheckboxInputElement checkbox in selectedList) {
        checkbox.checked = false;
      }
      selectAll.onChange.listen((e) {
        for (CheckboxInputElement checkbox in selectedList) {
          checkbox.checked = selectAll.checked == true;
        }
      });
      //批量删除操作
      batchDeleteButton.onClick.listen((e) async{
        for (CheckboxInputElement checkbox in selectedList) {
          int id = int.tryParse(checkbox.id.split('select_')[1]);
          if (checkbox.checked) {
            if (!IssueData().deleteList.contains(id)) {
              IssueData().deleteList.add(id);
            }
          } else {
            IssueData().deleteList.remove(id);
          }
        }
        if (IssueData().deleteList.length != 0) {
          await HttpUtil().postAsync('api/city/deleteBatch',data: {'deleteIdList':IssueData().deleteList}).then((result){
            window.location.reload();
          });
        }else{
          window.alert('至少选择一条信息');
        }
      });
    });
  }

  //生成列表
  Future generateIssueList(String paramster) async {
    await getIssueListData(paramster);
    content.innerHtml = '';
    if (issueListData != null && (issueListData.total ?? 0) != 0) {
      for (int i = 0; i < issueListData.total ?? 0; i++) {
        IssueListItem item = issueListData.issueListItem[i];
        content.innerHtml += ('''
      <tr>
      <td class="selectShown"><input type="checkbox" class="selected" id="select_${item.id}"></td>
      <td>${item.id}</td>
      <td >${generateQuestionDetail(item.questionDetail, i)}</td>
      <td id="items_${i}"> <ol type="1">${generateAnswerDetail(item.answerList, i)}</ol></td>
      <td>${generateTrueAnswers(item.trueAnswerList)}</td>
      <td>${item.difficulty}</td>
      <td>${item.courseType}</td>
      <td>${item.subjectType}</td>
      <td>${item.answerList.length}</td>
      <td>${item.createTime}</td>
      <td id="operation_${i}_buttons_box"><button id="edit_item_${i}">编辑</button><button id="del_item_${i}">删除</button></td>
      </tr>
      ''');
      }
      adddelItemListener(content);
      addEditItemListener(content);
      showQuestionImages();
    }
    setPageDetail();
  }

  //显示图片
  void showQuestionImages() {
    for (int i = 0; i < issueListData.issueListItem.length; i++) {
      Element questionImages = querySelector('#question_${i}_images');
      List<String> pics =
          issueListData.issueListItem[i].questionDetail.picList ?? [];
      for (int j = 0; j < pics.length; j++) {
        questionImages.append(ImageElement(
            src: pics[j],
            width: Config.IMAGE_WIDTH,
            height: Config.IMAGE_HEIGHT));
      }
    }
    for (int i = 0; i < issueListData.issueListItem.length; i++) {
      for (int j = 0;
          j < issueListData.issueListItem[i].answerList.length;
          j++) {
        List<String> pics =
            issueListData.issueListItem[i].answerList[j].picList ?? [];
        Element answerImage = querySelector('#item_${i}_answer_${j}_images');
        for (int k = 0; k < pics.length; k++) {
          answerImage.append(ImageElement(
              src: pics[k],
              width: Config.IMAGE_WIDTH,
              height: Config.IMAGE_HEIGHT));
        }
      }
    }
  }

  //添加删除监听
  void adddelItemListener(Element anchor) {
    for (Element element in anchor.children) {
      if (element.tagName == 'BUTTON' && element.id.contains('del')) {
        element.onClick.listen((e) async {
          int itenIndex = int.tryParse(element.id.split('del_item_')[1]);
          await HttpUtil()
              .delAsync('api/city/${issueListData.issueListItem[itenIndex].id}')
              .whenComplete(() {
            window.location.reload();
          });
        });
      }
      adddelItemListener(element);
    }
  }

  //添加编辑监听
  void addEditItemListener(Element anchor) {
    for (Element element in anchor.children) {
      if (element.tagName == 'BUTTON' && element.id.contains('edit')) {
        element.onClick.listen((e) {
          int itenIndex = int.tryParse(element.id.split('edit_item_')[1]);
          Global().searchId =
              issueListData.issueListItem[itenIndex].id.toString();
          window.location.href = '../issue/?id=${Global().searchId}';
        });
      }
      addEditItemListener(element);
    }
  }

  String generateQuestionDetail(QuestionDetail questionDetail, int index) {
    String questionDetailHtml = '''
          <span>${questionDetail.describe}</span>
        <div  id="question_${index}_images"></div>
    ''';
    return questionDetailHtml;
  }

  static void showImages(Element anchor, List<String> picList) {
    for (int i = 0; i < (picList ?? []).length; i++) {
      anchor.append(ImageElement(
          src: picList[i],
          width: Config.IMAGE_WIDTH,
          height: Config.IMAGE_HEIGHT));
    }
  }

  String generateAnswerDetail(List<AnswerList> answer, int itemIndex) {
    String answerDetailHtml = '';
    for (int i = 0; i < answer.length; i++) {
      answerDetailHtml += '''
    <li>
          <span>${answer[i].describe}</span>
          <div id="item_${itemIndex}_answer_${i}_images"></div>
    </li>
      ''';
    }
    return answerDetailHtml;
  }

  String generateTrueAnswers(List trueAnswerList) {
    List trueAnswers = [];
    trueAnswerList.forEach((item) {
      trueAnswers.add(item + 1);
    });
    return '''
    ${trueAnswers.toString()}
    ''';
  }

  void search() {
    (querySelector('#search_button') as ButtonElement)
        .onClick
        .listen((e) async {
      String search_input =
          (querySelector('#search_input') as TextInputElement).value;
      Global().currentPage = 1;
      if (search_input.trim() == '') {
        Global().difficulty =
            (querySelector('#difficulty') as SelectElement).value;
        Global().courseType =
            (querySelector('#courseType') as SelectElement).value;
        Global().subjectType =
            (querySelector('#subjectType') as SelectElement).value;
        window.location.search = searchParameter;
      } else {
        Global().difficulty = '不限';
        Global().courseType = '不限';
        Global().subjectType = '不限';
        window.location.search = 'id=${search_input}';
      }
    });
  }

  void addIssue() {
    (querySelector('#add_issue_button') as ButtonElement).onClick.listen((e) {
      window.location.href = '../issue/';
    });
  }

  String get searchParameter =>
      'pageSize=${Global().pageSize}&currentPage=${Global().currentPage}&difficulty=${Global().difficulty == '不限' ? '' : Global().difficulty}&courseType=${Global().courseType == '不限' ? '' : Global().courseType}&subjectType=${Global().subjectType == '不限' ? '' : Global().subjectType}';

  //设置页面信息
  void setPageDetail() {
    querySelector('#page_describe').innerHtml = '''
    <span>共${issueListData.allTotal}条，当前第 ${issueListData.currentPage} 页,共 ${issueListData.totalPage} 页</span>
    ''';
    querySelector('#jump_page_select').innerHtml = '';
    for (int i = 1; i <= issueListData.totalPage; i++) {
      (querySelector('#jump_page_select') as SelectElement).append(
          OptionElement(data: '${i}', value: '${i}')
            ..selected = i == Global().currentPage);
    }
    //设置每页信息数量
    (querySelector('#page_size') as SelectElement)
      ..value = '${Global().pageSize}'
      ..onChange.listen((e) {
        Global().currentPage = 1;
        Global().pageSize = int.tryParse((e.target as SelectElement).value);
        window.location.search = searchParameter;
      });
    (querySelector('#jump_page_select') as SelectElement)
      ..onChange.listen((e) {
        Global().currentPage = int.tryParse((e.target as SelectElement).value);
        window.location.search = searchParameter;
      });
  }
}
