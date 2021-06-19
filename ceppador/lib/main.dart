import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(MaterialApp(
  title: "Biribinha",
  home: PaginaInicial(),
));

class PaginaInicial extends StatefulWidget {
  State<StatefulWidget> createState() {
    return _HomeState();
  }
}

class _HomeState extends State<PaginaInicial> {
  var city;
  var district;
  var uf;
  var temp;
  var deion;
  var currently;
  var humidity;
  var windSpeed;

  Future getWeather(cep) async {

    http.Response consulta = await http.get (
      "https://viacep.com.br/ws/" + cep + "/json/"
    );
    var endereco = jsonDecode(consulta.body);

    setState(() {
      this.city = endereco["localidade"];
      this.district = endereco["bairro"];
      this.uf = endereco["uf"];
    });

    http.Response response = await http.get(
      "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&Brazil&appid=e8962427977895dc7b82576019a60ef1"
    );
    var results = jsonDecode(response.body);

    setState(() {
      this.temp = results['main']['temp'];
      this.deion = results['weather'][0]['deion'];
      this.currently = results['weather'][0]['main'];
      this.humidity = results['main']['humidity'];
      this.windSpeed = results['wind']['speed'];
    });
  }

  void initState() {
    super.initState();

    _controller.addListener(() {
      final text = _controller.text.toLowerCase();
      _controller.value = _controller.value.copyWith(
        text: text,
        selection: TextSelection(baseOffset: text.length, extentOffset: text.length),
        composing: TextRange.empty,
      );
    });
  }

  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  final _formKey = GlobalKey<FormState>();
  final _controller = TextEditingController();

  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(children: <Widget>[
        Container(
          height: MediaQuery.of(context).size.height / 4,
          width: MediaQuery.of(context).size.width,
          color: Colors.orange,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(city == null || district == null || uf == null ? "" : "O tempo agora em",
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 14.0,
                  fontWeight: FontWeight.w400
                ),
              ),
              Padding(
                padding: EdgeInsets.symmetric(vertical: 10.0),
                child: Text( city == null || district == null || uf == null ? "Carregando" : city + ' / ' + district + ' / ' + uf,
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 20.0,
                    fontWeight: FontWeight.w600
                  ),
                ),
              ),
              Text(city == null || district == null || uf == null ? "" : "É, exatamente:",
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 14.0,
                  fontWeight: FontWeight.w400
                ),
              ),
            ]
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(20.0),
            child: ListView(
              children: <Widget>[
                Form (
                  key: _formKey,
                  child: TextFormField(
                    textAlign: TextAlign.center,
                    decoration: const InputDecoration(
                      hintText: 'Digite seu CEP',
                    ),
                    controller: _controller,
                    keyboardType: TextInputType.number,
                    inputFormatters: <TextInputFormatter>[
                      FilteringTextInputFormatter.allow(RegExp(r'[0-9]')),
                    ],
                    validator: (value) {
                      if (value.isEmpty) {
                        return 'Por favor insira um CEP';
                      }
                      if (value.length != 8) {
                        return 'Por favor digite um CEP válido';
                      }
                      return null;
                    },
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState.validate()) {
                      getWeather(_controller.text);
                    }
                  },
                  child: Text('Consultar'),
                ),
                ListTile(
                  leading: FaIcon(FontAwesomeIcons.thermometerHalf),
                  title: Text("Temperatura"),
                  trailing: Text( temp != null ? temp.toString() + "\u00B0F" : "Loading"),
                ),
                ListTile(
                  leading: FaIcon(FontAwesomeIcons.cloud),
                  title: Text("Clima"),
                  trailing: Text(currently != null ? currently.toString() : "Loading"),
                ),
                ListTile(
                  leading: FaIcon(FontAwesomeIcons.sun),
                  title: Text("Umidade"),
                  trailing: Text(humidity != null ? humidity.toString() : "Loading"),
                ),
                ListTile(
                  leading: FaIcon(FontAwesomeIcons.wind),
                  title: Text("Velocidade do Vento"),
                  trailing: Text( windSpeed != null ? windSpeed.toString() : "Loading"),
                )
              ],
            )
          )
        )
      ])
    );
  }
}