import React from 'react';
import { Button, Image, Linking, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [id, setId] = React.useState('');
  const [apps, setApps] = React.useState([]);
  const [ids, setIds] = React.useState([]);
  const [firstTime, setFirstTime] = React.useState(true);

  function addApp() {
    setId(id.replace(/\D/g, ''));

    var repeted;

    function showResult(data) {
      if (!repeted) apps.push(data);
      setApps(apps);
      storage.save({key: 'apps', data: apps});
      setId('');
    }

    fetch("https://economia.awesomeapi.com.br/all/ARS-BRL")
      .then(response => response.json())
      .then(success => {
        var cotacion = success.ARS.ask;
        
        repeted = ids.includes(id);
        var indexR = null;

        if (repeted) {
          for (var i = 0; i < ids.length; i++) {
            console.log(i);
            if (ids[i] == id) {
              indexR = i;
              alert('Jogo já cadastrado, os valores serão atualizados!')
              break;
            }
          }
        }

        ids.push(id);
        setIds(ids);

        var data = repeted ? apps[indexR] : {};

          fetch("https://store.steampowered.com/api/appdetails?cc=ar&appids=" + id)
            .then(response => response.json())
            .then(success => {

              if(success[id].success == false) {
                alert("Esse id não é de nenhum jogo! Por enquanto o app apenas suporta jogos base");
                setId('');
                return;
              }

              if(!success[id].data.price_overview) {
                alert("Esse jogo é gratuito!");
                setId('');
                return;
              }

              data.name = success[id].data.name;
              data.disc = success[id].data.price_overview.discount_percent + "%";

              data.precoAR = success[id].data.price_overview.final_formatted;
              data.precoSanAR = (data.precoAR).match(/[0-9].*/g)[0];
              
              fetch("https://store.steampowered.com/api/appdetails?cc=br&appids=" + id)
                .then(response => response.json())
                .then(success => {
                  data.precoBR = success[id].data.price_overview.final_formatted;
                  data.image = `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`;
                  data.link = `https://store.steampowered.com/app/${id}`;

                  data.precoConvSan = (parseFloat((data.precoSanAR).replace('.', '').replace(',', '.')) * cotacion).toFixed(2);
                  data.precoConv = "R$ " + data.precoConvSan;
    
                  showResult(data);
                })
            })
      })
  }

/*   storage.remove({key: 'apps'})
  //APENAS EM CASO DE DEBUG PARA APAGAR OS ITENS SALVOS */

  if (firstTime) {
    storage.load({
      key: 'apps',
    })
    .then(ret => {
      setApps(ret);
    }).catch(err => console.log("Falhou em pegar apps localStorage"))

    setFirstTime(false);
    alert("Obrigado por utilizar o Hermanoemos! Adicione os jogos inserindo seu id na caixinha superior (Pode escontrar o Id do jogo no site da Steam, no final do link). Para atualizar o preço do jogo, reinsira o id dele. Em atualizações futuras isso será feito automaticamente. Para abrir a página do jogo, toque sobre ele normalmente.");
  }

  return (
    <SafeAreaView style={{padding: 20, flex: 1}}>
      <StatusBar hidden={false} backgroundColor={"white"} barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setId(text)} onSubmitEditing={e => addApp()} keyboardType={'numeric'} value={id} placeholder={"Insira o ID do jogo aqui"} />
        <Button onPress={e => addApp()} title="Adicionar" color="#841584" accessibilityLabel="Salvar Id" />

        <ScrollView style={{marginTop: 32}}>
          {apps.map((item, key) => (
            <TouchableOpacity key={key} onPress={()=> Linking.openURL(item.link)}>
              <View style={{alignItems: 'center', marginBottom: 6}}>
                <Image style={{width: "100%", height: 150}} source={{ uri: item.image}} />
                <Text style={{fontSize: 20, top: -26, paddingHorizontal: 8, borderRadius: 5, backgroundColor: "rgba(192,192,192,0.8)"}}>{item.name}</Text>
                <View style={{width: '100%', flexDirection: 'row', flex: 4, justifyContent: 'space-around', top: -24}}>
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Image style={{width: 15, height: 15, marginRight: 5}} source={require('./assets/discount.png')} />
                    <Text>{item.disc}</Text>
                  </View>
                  
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Image style={{width: 15, height: 15, marginRight: 5}} source={require('./assets/argentina.png')} />
                    <Text>{item.precoAR}</Text>
                  </View>
                  
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Image style={{width: 15, height: 15, marginRight: 5}} source={require('./assets/brazil.png')} />
                    <Text>{item.precoBR}</Text>
                  </View>
                  
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Image style={{width: 15, height: 15, marginRight: 5}} source={require('./assets/argenzil.png')} />
                    <Text style={{fontWeight: 'bold'}}>{item.precoConv}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

const storage = new Storage({
  size: 1000,

  storageBackend: AsyncStorage,

  defaultExpires: null,

  enableCache: false,

  sync: {
    // we'll talk about the details later.
  }
});
