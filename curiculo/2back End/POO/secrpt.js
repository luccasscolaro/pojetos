var nome1 = 'paula';
var nome2 = 'juliana';
var nome3 = 'alana';

var idade1 = 25
var idade2 = 30
var idade3 = 35

function falar(nome, idade) {
alert('ola sou'+nome+'e tenho'+idade+'anos');

}
falar(nome1,idade1)
falar(nome2,idade2)
falar(nome3,idade3)
//com orientaçao a obejetos//
class pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {

    }
} var pessoa1 = new pessoa('arthur', 22);
var pessoa2 = new pessoa('maria', 23);
pessoa1.falar();
pessoa2.falar();

//hereça e polimorfismo//

class animal{
    constructor(nome){
        this.nome = nome;

    }
    fazerBarulho(){
        alert( ' fazenho barulho genérico')

    }
}

class cachorro extends animal{
    constructor(nome, raca){
         super(nome);
         this.raca = raca;
    }
    fazerBarulho(){
        alert('cachorro latindo!')
    }
}
class gato extends animal{
    constructor(nome,cor){
         super(nome);
         this._cor= cor;
    }
    fazerBarulho(){
        alert('gato miando!');
    }
}
 
var  obejetoCachorro = new cachorro ( 'fred', 'schnauzer');
alert (obejetoCachorro. nome);
alert (obejetoCachorro. raca);
obejetoCachorro.fazerBarulho();


var  obejetoGato = new gato ( 'sininho', 'cinza');
alert (obejetoGato. nome);
alert (obejetoGato. cor);
obejetoGato.fazerBarulho();



class contaBacaria{
    constructor(saldo){
        this._saldo;
    }
}