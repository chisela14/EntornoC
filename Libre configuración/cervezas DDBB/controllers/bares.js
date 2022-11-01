let bares = [
    {
        "id": 1,
        "nombre": "bar paco",
        "direccion": "diamantino 1"
    },
    {
        "id": 2,
        "nombre": "bar manolo",
        "direccion": "josé de vega 5"
    }
]
function getBares(req, res){
    res.json(bares);  
}

function crearBar(req, res){
    bares.push(req.body);
    bares[bares.length-1].id = bares[bares.length-2].id + 1;
    res.json(bares[bares.length-1])  
}

function borrarBar(req, res){
    let id = req.params.id
    bares.splice(id-1, 1);
    for(let i=id; i<=bares.length;i++){
        bares[i-1].id = parseInt(i);
    }
    res.json(bares) 
}

module.exports = {getBares, crearBar, borrarBar};
