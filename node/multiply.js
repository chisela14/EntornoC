const fs = require('node:fs');
const prompt = require('prompt');

//hay que instalar prompt -> npm install prompt
prompt.start();
prompt.get(['number', 'fileName'], function (err, result) {
    if (err) {
        console.log(err);
      }
      createTable(result.number, result.fileName);
})

function createTable(number, fileName){
    let salida = "";
    for(let i=0; i<=10; i++){
        salida += `${number} x ${i} = ${number*i} \n`;
    }
    
    fs.writeFile(fileName, salida, (err)=>{
    if(err) throw err;
    console.log("El fichero se ha creado correctamente");
    });
};
