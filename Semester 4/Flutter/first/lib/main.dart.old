import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'El Grandioso Countador e Parificador',
      theme: ThemeData(
          primarySwatch: Colors.blue,
          scaffoldBackgroundColor: Colors.black,
          visualDensity: VisualDensity.adaptivePlatformDensity,
          textTheme: TextTheme(
              bodyText2: TextStyle(color: Colors.white, height: 1.5))),
      home: MyHomePage(title: 'El Grandioso Countador e Parificador'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  var _counter = 0;
  var _color = Colors.white;
  var _pi = "0 não é par nem ímpar";

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
    _attValues();
  }

  void _decreaseCounter() {
    setState(() {
      _counter--;
    });
    _attValues();
  }

  void _restartCounter() {
    setState(() {
      _counter = 0;
    });
    _attValues();
  }

  void _attValues() {
    void _parImpar() {
      _pi = _counter == 0
          ? "0 não é par nem ímpar"
          : _counter % 2 == 0
              ? "PAR"
              : "ÍMPAR";
    }

    _parImpar();

    if (_counter == 2) _pi = "PRIMO";

    for (var i = 2; i < _counter; i++) {
      if (_counter % i == 0) {
        _parImpar();
        break;
      } else {
        _pi = _counter == 0 ? "0 não é par nem ímpar" : "PRIMO";
      }
    }

    _color = _counter == 0
        ? Colors.white
        : _pi == "PAR"
            ? Colors.blue
            : _pi == "PRIMO"
                ? Colors.purple
                : Colors.red;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Nusha, sabe quantas vezes tu clicou no botão lá? Olha ae:',
                textAlign: TextAlign.center,
                style: TextStyle(height: 1.5),
              ),
              Text(
                '$_counter',
                style: TextStyle(fontSize: 38),
              ),
              SizedBox(
                height: 15,
              ),
              Text(
                _counter == 0 ? '$_pi' : 'Rapash, teu número é:',
                textAlign: TextAlign.center,
                style: TextStyle(color: _color, height: 1.5),
              ),
              Text(
                _counter == 0 ? '' : '$_pi',
                style: TextStyle(color: _color, fontSize: 34),
              ),
            ],
          ),
        ),
        floatingActionButton: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            FloatingActionButton(
              onPressed: _decreaseCounter,
              tooltip: 'Descontar',
              child: Icon(Icons.remove),
            ),
            FloatingActionButton(
              onPressed: _restartCounter,
              tooltip: 'Reiniciar',
              child: Icon(Icons.refresh),
            ),
            FloatingActionButton(
              onPressed: _incrementCounter,
              tooltip: 'Aumentar',
              child: Icon(Icons.add),
            ),
          ],
        ));
  }
}
