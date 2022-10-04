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

//Joaquín - Promesas
const fs = require('node:fs');
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });



async function  creaTabla(){
    const number = await rl.question('Introduzca un número: ');
    const file = await rl.question('Introduzca el nombre del fichero: ');
    
    console.log(number);
    rl.close();
        let table = '';
        for (let index = 1; index < 11; index++) {
            table += `${number} x ${index} = ${number * index}\n`;
            // console.log( `${number} x ${index} = ${number * index}`)
        
        }
    
            fs.writeFile(file, table, (err) => {
                if (err) throw err;
                console.log(`Fichero ${file} creado correctamente.`);
            })
}

creaTabla();
// let tablita;
// rl.question('Introduzca el número: ')
// .then( number => {
    
//     return table;})
// .then(table =>{
//     tablita=table;
//     return rl.question('Introduzca el nombre del fichero')
// })
// .then( file => {

//         rl.close();
// })

    



// rl.question('Introduzca el número del que quiere la tabla: ', (number) => {


    // let file = `tabla${number}.txt`
    // rl.question('Introduzca el nombre del fichero: ', (file) => {

//         rl.close();
//     })
// });

