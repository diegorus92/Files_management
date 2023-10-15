/**IMPORTANT:
 * Its nescesary execute this code with nodejs to work
 */

var myCharacters = {
    character:[
        {name:"Naruto", age:15, show:"Naruto"},
        {name:"Goku", age:25, show:"Dragon Ball"},
        {name:"Ash", age:16, show:"Pokemón"},
        {name:"Veggeta", age:20, show:"Dragon Ball"},
        {name:"Seiya", age:20, show:"Zodiac Knights"}
    ]
};

function createFile(data){
    const fs = require('fs');
    let jsonData = JSON.stringify(data);

    fs.open("./assets/data/characters.json", "w", (err) =>{
        if (err) throw err;
        
        fs.writeFile("./assets/data/characters.json", jsonData, (err)=>{
            if (err) throw err;
            console.log("File save!");
        })
    });
}

function readFile(path){
    const fs = require("fs");
    
    fs.open(path, "r", (err)=>{
        if (err) throw err;

        fs.readFile(path, "utf8", (err, result) => {
            if (err) throw err;

            //to retrieve data from json file as string
            console.log("File read as string = "+result+"\n");

            //to retrieve data from json file as object
            console.log("File read as JSON = "+JSON.parse(result));
            
            //Iterating json data retrieved 
            let objectResult = JSON.parse(result);
            for(let character of objectResult.character){
                console.log("Name = "+character.name+"// Age = "+character.age+"// Show = "+character.show);
            }
        })
    })
}

createFile(myCharacters);
readFile("./assets/data/characters.json");
