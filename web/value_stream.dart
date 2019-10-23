import 'dart:async';

class ValueBLoC<T> {
  T _value;
  StreamController<T> _controller;

  ValueBLoC(T initData) {
    _value = initData;
    _controller = StreamController<T>.broadcast();
  }

  Stream<T> get stream => _controller.stream;

  T get value => _value;

  void setData(T data) {
    _value = data;
    _controller.sink.add(data);
  }

  void dispose() {
    _controller.close();
  }
}