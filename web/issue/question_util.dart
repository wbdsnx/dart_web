import 'dart:html';
import 'dart:convert';

import '../global.dart';
import '../http_util.dart';
import '../model/issue_list_data.dart';

import '../config.dart';
import '../data.dart';

var keyMap = {
  'degree': '年级',
  'difficulty': '难度',
  'courseType': '科目类型',
//  'numberType': '标号类型',
  'subjectType': '题目类型'
};

class QuestionUtil {
  //表格框架
  Element get frame_table => querySelector('#frame_table');

  //获取题目数据
  Future getIssueListData(String paramster) async {
    HttpResult httpResult = await HttpUtil().getAsync('api/city/$paramster');
    if (httpResult.success) {
      if (httpResult.data != null) {
        IssueData().issueResponseData = IssueListItem.fromJson(httpResult.data);
      }
    }
  }
//  题目
  Element get title {
    return TableRowElement()
      ..id = 'title'
      ..append(TableCellElement()
        ..style.width = '30px'
        ..append(Text('题目:')))
      ..append(TableCellElement()
        ..style.width = '200px'
        ..append(InputElement()
          ..id = 'title_text'
          ..value =
              Global().isUpdate ? '${itemData.questionDetail.describe}' : ''))
      ..append(TableCellElement()..style.width = '30px')
      ..append(TableCellElement()
        ..style.display = 'flex'
        ..style.alignItems = 'center'
        ..append(DivElement()
          ..id = "title_images"
          ..append(FileUploadInputElement()
            ..id = 'title_file'
            ..accept = 'image/*'
            ..multiple = true
            ..style.display = 'none'
            ..onChange.listen((e) {
              showSelectedImages(
                  querySelector('#title_file'), querySelector('#title_images'));
            })))
        ..append(ImageElement(
            src: '../images/image_select.png',
            width: Config.IMAGE_WIDTH,
            height: Config.IMAGE_HEIGHT)
          ..style.verticalAlign = 'middle'
          ..onClick.listen((e) {
            querySelector('#title_file').click();
          }))
        ..append(Text('        最多选取 ${Config.IMAGE_MAX_SELECT_AMOUNT} 张图片'))
        ..style.fontSize = '8px'
        ..style.fontWeight = '100');
  }

  //基础选项内容
  int itemIndex = 0;

  IssueListItem get itemData =>
      Global().isUpdate ? IssueData().issueResponseData : null;

  Element get item {
    int index = itemIndex;
    return TableRowElement()
      ..id = 'item_$index'
      ..append(TableCellElement()
        ..style.width = '50px'
        ..append(Text('选项${index + 1}:')))
      ..append(TableCellElement()
        ..style.width = '200px'
        ..append(InputElement()
          ..id = 'item_${index}_text'
          ..value = Global().isUpdate
              ? '${itemData.answerList[index].describe}'
              : ''))
      ..append(TableCellElement()
        ..style.width = '30px'
        ..append(CheckboxInputElement()
          ..id = 'item_${index}_check'
          ..checked = Global().isUpdate
              ? itemData.trueAnswerList.contains(index)
              : false))
      ..append(TableCellElement()
        ..append(DivElement()
          ..style.display = 'inline-block'
          ..id = 'images_item_${index}')
        ..append(FileUploadInputElement()
          ..id = 'item_${index}_file'
          ..accept = 'image/*'
          ..multiple = true
          ..style.display = 'none'
          ..onChange.listen((e) => showSelectedImages(
              querySelector('#item_${index}_file'),
              querySelector('#images_item_${index}'))))
        ..append(ImageElement(
            src: '../images/image_select.png',
            width: Config.IMAGE_WIDTH,
            height: Config.IMAGE_HEIGHT)
          ..style.verticalAlign = 'middle'
          ..onClick.listen((e) {
            querySelector('#item_${index}_file').click();
          }))
        ..append(Text('        最多选取 ${Config.IMAGE_MAX_SELECT_AMOUNT} 张图片'))
        ..style.fontSize = '8px'
        ..style.fontWeight = '100');
  }

  //获取增加选项按钮
  ButtonInputElement get addOptionButton =>
      querySelector('#addOptionButton') as ButtonInputElement;

  //获取删除选项按钮
  ButtonInputElement get removeOptionButton =>
      querySelector('#removeOptionbutton') as ButtonInputElement;

  //获取当前选项的数目
  int get itemsCount => querySelector('#frame_table').children.length - 1;

  //获取当前按钮
  List<Element> get buttons => querySelector('#operation_buttons').children;

  void preset() async {
    setTitle();
    addOptionButton.onClick.listen((e) => addOption());
    removeOptionButton.onClick.listen((e) => removeOption());
    presetItems();
    showOperationButtons();
  }
  //设置题目title
  void setTitle() {
    frame_table.append(title);
  }

  int labelStart = 65;

  //按钮变化显示
  void showOperationButtons() {
    if (itemsCount >= (Config.OPTIONS_MAX_COUNT)) {
      addOptionButton.setAttribute('disabled', 'disabled');
      removeOptionButton..removeAttribute('disabled');
    } else if (itemsCount <= (Config.OPTIONS_MIN_COUNT)) {
      addOptionButton..removeAttribute('disabled');
      removeOptionButton.setAttribute('disabled', 'disabled');
    } else {
      addOptionButton.removeAttribute('disabled');
      removeOptionButton.removeAttribute('disabled');
    }
  }

  // 预设选项
  void presetItems() {
    int length = Config.OPTIONS_MIN_COUNT;
    if (Global().isUpdate) {
      length = IssueData().issueResponseData.answerList.length;
    }
    for (int i = 0; i < length; i++) {
      itemIndex = i;
      frame_table.append(item);
    }
  }

  //增加选项
  void addOption() {
    itemIndex++;
    Global().isUpdate = false;
    frame_table.append(item);
    showOperationButtons();
  }

  //删除选项
  void removeOption() {
    querySelector('#item_${itemIndex}').remove();
    itemIndex--;
    Global().isUpdate = false;
    showOperationButtons();
  }

  //读取json文件
  static Future<Map> readJsonFile(String path) async {
    return json.decode(await HttpRequest.getString(path));
  }

  //获取已加载图片的数量
  int getSelectedImageCount(Element anchor) {
    int count = 0;
    for (int i = 0; i < anchor.children.length; i++) {
      Element element = anchor.children[i];
      if (element.tagName == 'IMG') count++;
    }
    return count;
  }

  //显示图片
  void showImages(Element anchor) {
    if (Global().isUpdate) {
      for (Element element in anchor.children) {
        if (element.id == 'title_images') {
          for (int i = 0;
              i < (itemData.questionDetail.picList ?? []).length;
              i++) {
            String pic = itemData.questionDetail.picList[i];
            element.append(ImageElement(
                src: pic,
                width: Config.IMAGE_WIDTH,
                height: Config.IMAGE_HEIGHT)
              ..onClick.listen((e) {
                (e.target as ImageElement).remove();
              })
              ..style.verticalAlign = 'middle');
          }
        } else if (element.id.contains('images_item_')) {
          int ind = int.tryParse(element.id.split('images_item_')[1]);
          for (int i = 0;
              i < (itemData.answerList[ind].picList ?? []).length;
              i++) {
            String pic = itemData.answerList[ind].picList[i];
            element.append(ImageElement(
                src: pic,
                width: Config.IMAGE_WIDTH,
                height: Config.IMAGE_HEIGHT)
              ..onClick.listen((e) {
                (e.target as ImageElement).remove();
              })
              ..style.verticalAlign = 'middle');
          }
        }
        showImages(element);
      }
    }
  }

  //显示在选择的图片
  void showSelectedImages(FileUploadInputElement anchor, DivElement target) {
    for (var file in anchor.files) {
      FileReader reader = FileReader();
      reader.readAsDataUrl(file);
      reader.onLoadEnd.listen((onData) async {
        var result = reader.result;
        await HttpUtil().postAsync('uploadImageByBase64',
            data: {'imgBase64': result}).then((value) {
          if (getSelectedImageCount(target) < Config.IMAGE_MAX_SELECT_AMOUNT) {
            //显示图片
            target.append(ImageElement(
                src: value['data'],
                width: Config.IMAGE_WIDTH,
                height: Config.IMAGE_HEIGHT)
              ..onClick.listen((e) {
                (e.target as ImageElement).remove();
              })
              ..style.verticalAlign = 'middle');
          }
        });
      });
    }
  }

  //创建选择下拉框
  void generateDropDownBox(Element anchor, String path) async {
    Map target = await readJsonFile(path);
    target.forEach((key, value) {
      anchor.append(SpanElement()..innerText = '${keyMap[key]}:  ')
        ..append(SelectElement()..id = '$key');
      value.forEach((item) {
        querySelector('#$key')
            .append(OptionElement(data: '$item', value: '${item}'));
      });
    });
    if (Global().isReEdited) {
      (querySelector('#difficulty') as SelectElement).value =itemData.difficulty;
      (querySelector('#courseType') as SelectElement).value =itemData.courseType;
      (querySelector('#subjectType') as SelectElement).value = itemData.subjectType;
    }
  }

  //获取输入数据
  void getData(Element anchor) {
    //获取下拉框数据
    IssueData().issuePushData.update('difficulty',
        (v) => (querySelector('#difficulty') as SelectElement).value);
    IssueData().issuePushData.update('courseType',
        (v) => (querySelector('#courseType') as SelectElement).value);
    IssueData().issuePushData.update('subjectType',
        (v) => (querySelector('#subjectType') as SelectElement).value);
    //获取标题图片数据
    List<String> titlePics = List();
    for (Element element in querySelector('#title_images').children) {
      if (element.tagName == 'IMG') {
        titlePics.add((element as ImageElement).src);
      }
    }
    //更新题目数据
    IssueData().issuePushData.update(
        'questionDetail',
        (v) => {
              'describe':
                  (querySelector('#title_text') as TextInputElement).value,
              'picList': titlePics
            });
    //获取选项数据
    List answers = [];
    //获取正确选项数据
    List trueAnswers = [];
    for (int i = 0; i < itemsCount; i++) {
      List<String> itemPics = List();
      Element elementX = querySelector('#images_item_${i}');
      print(elementX.toString() + '${i}');
      for (int j = 0; j < (elementX.children ?? []).length; j++) {
        Element element = elementX.children[j];
        if (element.tagName == 'IMG') {
          itemPics.add((element as ImageElement).src);
        }
      }
      answers.add({
        'describe':
            returnValue(querySelector('#item_${i}_text') as InputElement),
        'picList': itemPics
      });
      if ((querySelector('#item_${i}_check') as CheckboxInputElement).checked) {
        trueAnswers.add(i);
      }
    }
    IssueData().issuePushData.update('answerList', (v) => answers);
    IssueData()
        .issuePushData
        .update('trueAnswerList', (v) => trueAnswers..sort());
  }

  //数据提交
  void uploadData() {
    querySelector('#save').onClick.listen((e) async {
      //获取数据
      getData(frame_table);
      print(IssueData().issuePushData);
      if ((IssueData().issuePushData['trueAnswerList'] as List).length == 0) {
        window.alert('请勾选正确选项');
        return;
      }
      if (Global().isReEdited) {
        IssueData().issuePushData.update('id', (v) => Global().searchId);
        await HttpUtil()
            .putAsync('api/city/', data: IssueData().issuePushData)
            .whenComplete(() {
          window.location.href = '../list/';
        });
      } else {
        await HttpUtil()
            .postAsync('api/city/', data: IssueData().issuePushData)
            .whenComplete(() {
          window.location.href = '../list/';
        });
      }
    });
  }

  dynamic returnValue(InputElement target) {
    switch (target.type) {
      case 'text':
        return (target as TextInputElement).value;
      case 'file':
        return (target as FileUploadInputElement).files;
      case 'checkbox':
        return (target as CheckboxInputElement).checked;
    }
  }
}
