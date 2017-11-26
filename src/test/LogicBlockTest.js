const mar3 = require("../mar3");
const {Clay,ProgrammableClay,Conduit,LogicBlock} = mar3;
const readline = require('readline');
class AddBlock extends LogicBlock{
    definePorts(){
        return ["A","B"];
    }
    logic(){
        this.C = this.A + this.B;
    }
}
class MultBlock extends LogicBlock{
    definePorts(){
        return ["MA","MB"];
    }
    logic(){
        console.log(this.MA,"*",this.MB,"=", this.MA*this.MB );
        this.C = this.MA * this.MB;
    }
}

class LogBlock extends LogicBlock{
    definePorts(){
        return ["TEXT"];
    }
    logic(props){
        console.log(`Logger (${props.Name}) says:`,this.TEXT);
    }
}

var Add = new AddBlock();
var Mult = new MultBlock();
var Logger = new LogBlock({Name:"Final"});
var Log2 = new LogBlock({Name:"At MB"});

const a = Conduit.link(Add,"A");
const b = Conduit.link(Add,"B");
Conduit.link(Add,"C","MA",Mult);

const multlink = Conduit.link(Mult,"MB");

Conduit.link(Mult,"C","TEXT",Logger);



a.signal = 2;
b.signal = 3;

multlink.signal = 8;

multlink.signal = 9;


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   rl.question('Press q to quit \n', (answer) => {
//     // TODO: Log the answer in a database
//     if(answer == 'q')
//     rl.close();
//     else
//     multlink.signal =parseFloat(answer);
    
//   });