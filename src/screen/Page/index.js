/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import React, { Component,Fragment,navigation } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View,Textarea} from "native-base";
import {TouchableOpacity,Image,TextInput} from 'react-native';
import { LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
const dataArray = [
  { title: "Apa Itu Hipertensi?", content: "Hipertensi atau tekanan darah tinggi adalah suatu keadaan dimana tekanan darah sistolik ≥140 mmHg dan atau tekanan darah diastolik ≥90 mmHg.( Kemenkes RI, 2020)" , image:require("./img/tiga.png") },
  { title: "Klasifikasi Hipertensi?", content: "Hipertensi Essensialatau hipertensi primer yang tidak diketahui penyebabnya (90%). \n\nHipertensi SekunderPenyebabnya dapat ditentukan (10%), antara lain kelainan pembuluh darah ginjal, gangguan kelenjar tiroid (hipertiroid), penyakit kelenjar adrenal (hiperaldosteronisme) dll. \n\nUntuk menegakkan diagnosis hipertensi dilakukan pengukuran darah minimal 2 kali dengan jarak 1 minggu.", image:require("./img/lima.png") },
  { title: "Apa Saja Gejala Hipertensi?", content: "1.Sakit Kepala\n2.Gelisah\n3.Jantung Berdebar-debar\n4.Pusing\n5.Penglihatan Kabur\n6.Rasa Sakit di Dada\n7.Mudah Lelah", image:require("./img/delapan.png") },
  { title: "Apa Saja Faktor Resiko Hipertensi?", content: "Faktor Risiko yang tidak dapat diubah\nFaktor Risiko yang melekat pada penderita Hipertensi dan tidak dapat diubah,antara lain :\n1.Umur\n2.Genetik\n3.Jenis Kelamin\n\nFaktor Risiko yang dapat diubah\nFaktor Risiko yang diakibatkan perilaku tidak sehat dari penderita hipertensi antara lain :\n1.Merokok\n2.Diet Rendah Serat\n3.Dislipidemia\n4.Konsumsi Garam Berlebih\n5.Kurang Aktifitas Fisik\n6.Stress\n7.Berat Badan Berlebih/Kegemukan\n8.Konsumsi Alkohol", image:require("./img/dua.png")  },
    { title: "Apa Saja Komplikasi Hipertensi?", content: "Penyakit Jantung\nStroke\nPenyakit Ginjal\nRetinopati (kerusakan retina)\nPenyakit pembuluh darah tepi\nGangguan saraf", image:require("./img/satu.png") },
    { title: "Bagaimana Cara Mencegah Hipertensi?", content: "C :Cek Kesehatan Secara Rutin\nE :Enyahkan Asap Rokok\nR :Rajin Aktivitas Fisik\nD :Diet Seimbang\nI :Istirahat Cukup\nK :Kelola Stres", image:require("./img/enam.png") },
      { title: "Apa Saja Makanan Yang Harus Dihindari?", content: "1.Garam\nBisa dibilang, garam atau natrium adalah penjahat utama untuk penyakit darah tinggi dan jantung. Konsumsi garam berlebih mengganggu keseimbangan natrium dan kalium di dalam tubuh. Akibatnya, ginjal sulit bekerja dengan normal, sehingga terjadi penumpukan cairan yang diikuti dengan naiknya tekanan darah.Garam memang sulit dihindari. Makanan tanpa dibumbui garam pun pasti terasa hambar. Namun, jika kamu telah memiliki riwayat hipertensi, sebaiknya kurangi asupan garam atau menghindarinya sama sekali.\n\n2.Daging Olahan\nDaging olahan seperti kornet, sosis, ham dan lain-lain terbilang praktis untuk dimasak kalau kamu sedang tidak punya waktu lebih. Namun, daging olahan seperti ini  sering dibumbui dan diawetkan dengan garam. Satu porsi daging seberat 2 ons bisa mengandung 500 mg natrium atau lebih. Jumlah ini tentunya cukup untuk membuat hipertensi kambuh.\n\n3.Acar\nGaram adalah bahan utama untuk mengawetkan makanan apa pun. Garam menghentikan makanan dari pembusukan, sehingga dapat disimpan dalam waktu yang lebih lama. Timun adalah sayuran sehat yang lezat untuk dijadikan lalapan. Namun, sayuran ini menjadi tidak sehat ketika dijadikan acar karena harus direndam dalam larutan garam dalam waktu yang lama.\nSemakin lama direndam dalam larutan garam, maka semakin banyak pula natrium yang diserap. Satu buah acar timun bisa mengandung sebanyak 390 mg. Jadi, pikirkan kembali saat kamu ingin menambahkan acar timun saat makan nasi goreng, mie ayam atau martabak. \n\n4.Makanan Kalengan\nSama seperti daging olahan, makanan kalengan memang mudah dikonsumsi. Namun, makanan kalengan rata-rata juga mengandung garam yang tinggi. Contoh, satu sup kalengan bisa mengandung 900 miligram natrium. Sangat tinggi, bukan? Ada baiknya, hindari jenis makanan yang satu ini kalau kamu memiliki riwayat hipertensi. \n\n5.Saus Botol\nSetiap orang pasti menyediakan saus botolan di rumah. Selain praktis, rasanya pun lezat untuk ditambahkan ke dalam makanan. Sayangnya, kebanyakan saus botolan mengandung jumlah natrium yang cukup tinggi.\nMelansir dari Healthline, 1/2 cangkir saus marinara klasik mengandung 400 miligram garam dan secangkir saus tomat mengandung lebih dari 600 miligram garam. Kandungan garamnya cukup tinggi, sehingga sebaiknya kamu membuat sambal di rumah menggunakan cabai dan tomat segar atau cari saus botolan yang rendah sodium.\n\n6.Gula\nGula lebih sering dikaitkan dengan penyakit diabetes dan obesitas. Tapi ternyata asupan gula yang tinggi juga terkait dengan penyakit darah tinggi. Gula, terutama minuman yang dimaniskan dengan gula, berkontribusi dalam meningkatkan berat badan dan obesitas. Nah, tekanan darah tinggi lebih sering terjadi pada orang yang kelebihan berat badan atau obesitas.\n\n7.Makanan Berlemak Tinggi\nSeseorang yang punya riwayat tekanan darah tinggi harus mengurangi lemak jenuh dan menghindari lemak trans. Lemak trans sering ditemukan di dalam daging berlemak dan produk susu. Namun, penyumbang lemak trans terbesar adalah makanan cepat saji. \nMengkonsumsi terlalu banyak lemak jenuh dan lemak trans meningkatkan kolesterol LDL (kolesterol jahat) dalam darah. Kadar LDL yang tinggi membuat tekanan darah tinggi  memburuk dan akhirnya menyebabkan pengembangan penyakit jantung koroner.\n\n8.Alkohol\nMinum terlalu banyak alkohol dapat meningkatkan tekanan darah. Menurut Mayo Clinic, minum lebih dari tiga gelas sehari menyebabkan lonjakan tekanan darah sementara. Sedangkan, rutin meminum alkohol menyebabkan masalah tekanan darah dalam jangka panjang. Selain itu, alkohol juga mencegah obat tekanan darah apa pun tidak bekerja efektif. ", image:require("./img/empat.png") },
        { title: "Apa Saja Tanaman Herbal Yang Mampu Mengatasi Hipertensi?", content: "1.Daun Basil\nSalah satu tanaman yang bisa dimanfaatkan untuk menurunkan tekanan darah adalah daun basil atau daun kemangi (Ocimum basilicum). Daun kemangi memiliki kandungan eugenol yang disebut bisa menurunkan tekanan darah. Selain itu, kandungan senyawa dalam daun kemangi juga disebut bisa membantu mengendurkan pembuluh darah, sehingga tekanan darah bisa menurun atau kembali normal.\n\n2.Seledri\nSelain daun kemangi, kamu juga bisa memanfaatkan seledri untuk menurunkan tekanan darah. Ada penelitian pada hewan percobaan (tikus) yang menemukan bahwa ekstrak seledri ternyata bisa membantu menurunkan tekanan darah. Selain itu, mengonsumsi seledri juga disebut bisa membantu memelihara kesehatan pembuluh darah. \n\n3.Bawang Putih\nPengidap hipertensi juga disarankan untuk mengonsumsi bawang putih. Sebab, jenis tanaman yang satu ini bisa membantu menurunkan tekanan darah tinggi serta menjaga kesehatan pembuluh darah. Mengonsumsi bawang putih disebut bisa menurunkan tekanan darah sistolik dan diastolik.\n\n4.Kayu Manis\nTekanan darah melonjak? Cobalah mengonsumsi kayu manis. Kayu manis disebut bisa membantu menjaga kesehatan organ jantung, termasuk tekanan darah. Hingga kini belum diketahui apa kaitan antara kayu manis dengan hipertensi, tetapi mengonsumsi makanan ini disebut bisa membantu mengendurkan pembuluh darah dan menurunkan tekanan darah. \n\n5.Jahe \nPengidap hipertensi juga bisa menurunkan tekanan darah dengan mengonsumsi jahe. Tanaman ini sudah lama digunakan untuk membantu menjaga kesehatan organ jantung, termasuk kadar kolesterol dan tekanan darah. \n\n6.Kapulaga \nKapulaga juga baik untuk pengidap hipertensi. Ada studi yang menyebut bahwa rutin mengonsumsi kapulaga bisa membantu menurunkan tekanan darah.\n\nPola makan yang tidak sehat sering menjadi penyebab utama penyakit hipertensi. Kalau kamu punya riwayat penyakit hipertensi, hindari beberapa makanan tertentu yang memicu tekanan darah tinggi. Melansir dari Healthline, berikut ini makanan yang memicu kambuhnya hipertensi.", image:require("./img/tujuh.png") },
];

export default class Page extends Component {
  constructor() {
    super();
    this.onPress = this.onPress.bind(this);
    this.state = {
        isi: ''
    };
    AsyncStorage.getItem('isi', (error, result) => {
      if (result) {
          this.setState({
              isi: result
          });
      }
  });
}
onPress(txt) {
  this.setState({
    isi: txt
  }, () => {
    AsyncStorage.setItem('isi', this.state.isi);
  });
}
  _renderHeader(item, expanded) {
    return (
      <View style={{
          marginBottom:10,
          borderRadius:2,
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#39a9cb" }}>
      <Text style={{ fontWeight: "600",color:'white',fontSize:20,fontFamily:"Righteous-Regular" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} />
          : <Icon style={{ fontSize: 18 }} />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Fragment>
        <View style={{
          borderBottomLeftRadius:3,
          borderBottomRightRadius: 3,
          marginTop:-10,
          marginBottom:10,
          backgroundColor: "#ffeda3",
          fontSize:20
        }}>
          <View style={{ width: '100%',height: 450}}>
          <Image style={{width:'100%',height:'100%',borderRadius:3,resizeMode: 'stretch'}} source={item.image}/>
          </View>
      <Text style={{marginTop:20,fontSize:20,padding: 20,fontFamily:"Righteous-Regular",color:"#232323"}}>
        {item.content}
      </Text>
      </View>
      </Fragment>
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <View style={{backgroundColor:"#2940d3",height:60,justifyContent:'center'}}>
            <Text style={{alignSelf:'center',fontSize:34,color:'white',fontFamily:"Righteous-Regular"}}>Si HeRI</Text>
        </View><Content padder style={{ backgroundColor: "white" }}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={[0]}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          >
          </Accordion>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Text style={{fontSize:25,fontWeight:'bold',fontFamily:"Righteous-Regular",}}>Catatan</Text>
          </View>  
            <Textarea 
            value={this.state.isi}
            onChangeText={(isi) => this.onPress(isi)}
              style={{
                borderRadius: 5,
                width: "100%",
                borderColor: 'gray',
                borderWidth: 1,
                marginTop: 20,
                fontSize:25,
                fontFamily:"Righteous-Regular"
              }}
              rowSpan={10}
              bordered
              placeholder="Tambahkan Catatan ..."
            />
        </Content>
      </Container>
    );
  }
}