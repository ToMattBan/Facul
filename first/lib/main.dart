import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  return runApp(MaterialApp(home: PaginaInicial()));
}

class PaginaInicial extends StatefulWidget {
  State<StatefulWidget> createState() {
    return Home();
  }
}

class Home extends State<PaginaInicial> {
  var road;
  var city;
  var district;

  Future getTempo() async {
    http.Response response = await http.get(
        'https://viacep.com.br/ws/59066842/json/');
    var resultado = jsonDecode(response.body);

    setState(() {
      this.road = resultado['logradouro'];
      this.city = resultado['localidade'];
      this.district = resultado['bairro'];
    });
  }

  void initState() {
    super.initState();
    this.getTempo();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Lorde Senhor Supremo"),
        centerTitle: true, 
        backgroundColor: Colors.orange,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Container(
            color: Colors.lightGreen,
            child: Text(
              'Eu saúdo vocês da ' + road, 
              style: TextStyle(fontSize: 30),
            ),
          ),
          Container(
            color: Colors.red,
            child: Text(
              'Moradores de ' + district,
              style: TextStyle(fontSize: 30),
            ),
          ),
          Container(
            color: Colors.blueGrey,
            child: Text(
              'Da Grande Cidade de ' + city, 
              style: TextStyle(fontSize: 30),
            ),
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.blue,
        child: Text('Butão')
      ),
    );
  }
}