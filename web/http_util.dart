import 'dart:convert';
import 'package:dio/dio.dart';
import 'dart:async';
import 'config.dart';
import 'dart:html';

class HttpResult {
  bool success;
  int code;
  Map<String, dynamic> data;
  String errMsg;

  HttpResult(this.success, this.code, this.data, this.errMsg);
}

class HttpUtil {
  static Dio dio = new Dio(BaseOptions(
      baseUrl: Config.isLocal
          ? 'http://192.168.35.207/exam/'
          : 'http://120.25.254.159/exam/',
      contentType: 'application/json'));

  HttpUtil() {
    dio.interceptors.add(InterceptorsWrapper(
        onRequest: (RequestOptions request) => null,
        onResponse: (Response response) {
          if (response.request.path == 'uploadExcelByBase64' &&
              response.statusCode == 200) {
            (querySelector('#upload_img') as ImageElement).src='../images/upload_success.png';
            Future.delayed(Duration(seconds: 1), () {
              window.location.reload();
            });
          }
        },
        onError: (DioError error) {
          if (error.request.path == 'uploadExcelByBase64') {
            (querySelector('#upload_img') as ImageElement).src='../images/upload_failure.png';
            Future.delayed(Duration(seconds: 1), () {
              window.location.reload();
            });
          }
        }));
  }

//  Options get _options => Options(contentType: 'application/json');

  Future<dynamic> postAsync(String url, {dynamic data}) async {
    return (await dio.post(Uri.encodeFull(url), data: json.encode(data))).data;
  }

  Future<dynamic> getAsync(String url) async {
    return _getResult(await dio.get(Uri.encodeFull(url)));
  }

  Future<dynamic> delAsync(String url) async {
    return _getResult(await dio.delete(Uri.encodeFull(url)));
  }

  Future<dynamic> putAsync(String url, {dynamic data}) async {
    return (await dio.put(Uri.encodeFull(url), data: json.encode(data))).data;
  }

  HttpResult _getResult(Response response) {
    Map data;
    if (!(response.data is Map)) {
      data = json.decode(response.data);
    } else {
      data = response.data;
    }
    int code = data['code'];
    if (code == 200) {
      return HttpResult(
          true, code, (data['data'] is Map) ? data['data'] : null, null);
    } else
      return HttpResult(false, code, null, data['msg']);
  }
}
