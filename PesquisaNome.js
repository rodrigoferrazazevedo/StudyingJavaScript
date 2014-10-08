/*jshint multistr:true */
var text = "bla bla bla Ro bla bla teste 123 trente Rodrigo b \ blo blu blek blink";
var myName = "Rodrigo";
var hits = [];

for(var i=0;i<text.length;i++){
    if(text[i] === myName[0]){
        for(var j=i;j<(i+myName.length);j++){
                hits.push(text[i]);
        };        
    };
};

if(hits.length === 0){
    console.log("Seu nome nao foi encontrado!");    
}else{
    console.log(hits);
};