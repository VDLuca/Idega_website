 var firebaseConfig = {
    apiKey: "AIzaSyAa16Pfh0A4x2-El4BPV-GEPOnDProJrQk",
    authDomain: "idega-wines.firebaseapp.com",
    databaseURL: "https://idega-wines.firebaseio.com",
    projectId: "idega-wines",
    storageBucket: "idega-wines.appspot.com",
    messagingSenderId: "631779209680",
    appId: "1:631779209680:web:06d991d8b08160bf37c9d5",
    measurementId: "G-6E6VS4HQGZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function Dados(){
nameID = document.getElementById("name").value
emailID = document.getElementById("email").value
cpfID = document.getElementById("cpf").value
phoneID = document.getElementById("phone").value
addressID = document.getElementById("address").value
numberID = document.getElementById("number").value
complementID = document.getElementById("complement").value
referenceID = document.getElementById("reference").value
districtID = document.getElementById("district").value
cityID = document.getElementById("city").value
stateID = document.getElementById("state").value
zipcodeID = document.getElementById("zipcode").value
Inserir();
}
	
function Inserir(){
firebase.database().ref("Register/"+ cpfID).set({
"01-Nome": nameID,
"03-Email": emailID,
"04-CPF": cpfID,
"05-Telefone": phoneID,
"07-Endereço": addressID,
"08-Número": numberID,
"09-Complemento": complementID,
"10-Referência": referenceID,
"11-Bairro": districtID,
"12-Cidade": cityID,
"13-Estado": stateID,
"14-CEP": zipcodeID,
 });
}