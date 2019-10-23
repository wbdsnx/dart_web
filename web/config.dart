class Config {
  //图片宽度
  static const int IMAGE_WIDTH = 30;

  //图片高度
  static const int IMAGE_HEIGHT = 30;

  //输入框最大长度
  static const int INPUT_MAX_LENGTH = 30;

  //图片最大选取量
  static const int IMAGE_MAX_SELECT_AMOUNT = 4;

  //选项最小数目
  static const int OPTIONS_MIN_COUNT = 2;

  //选项最大数目
  static const int OPTIONS_MAX_COUNT = 8;

  //题目类型 0：选择题，1：操作题
  static const int QUESTION_TYPE = 0;

  //加载JSON文件途径 0：本地，1：服务器
  static const int LOAD_CONFIG = 0;

  //是否是本地
  static const bool isLocal=true;

  //本地JSON文件地址
  static const String LOCAL_JSON_FILE_PATH = 'subject.json';

  //服务器JSON文件地址
  static const String REMOTE_JSON_FILE_PATH = '';
}
