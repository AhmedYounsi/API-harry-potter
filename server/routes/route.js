var express = require("express");
var router = express.Router();
const path = require("path");
const fs = require("fs");

var CHARACTERS_JSON = path.join(__dirname, "../data/characters.json");
var HOUSES = path.join(__dirname, "../data/Houses/Houses.json");
var SPELLS = path.join(__dirname, "../data/Spells.json");

// GET ALL CHARACTERS
router.get("/characters", (req, res) => {
  fs.readFile(CHARACTERS_JSON, "utf8", (err, data) => {
    if (data) res.send(data);
    if (err) res.send(err);
  });
});

//   GET SINGLE CHARACTERS
router.get("/characters/:name", function (req, res) {
  const param2 = req.params.name.toLowerCase();

  fs.readFile(CHARACTERS_JSON, function (err, data) {
    json = JSON.parse(data);
    perso = [];
    for (character of json) {
      if (character.name.toLowerCase() == param2) {
        perso.push(character);
      }
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (perso.length == 0) {
      res.status(404);
    }
    res.json(perso);
  });
});

// GET STUDENT
router.get("/characters/students", function (req, res) {
  fs.readFile(CHARACTERS_JSON, function (err, data) {
    if (err) return;
    json = JSON.parse(data);
    students_array = [];
    for (character of json) {
      if (character.hogwartsStudent == true) {
        students_array.push(character);
      }
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(students_array);
  });
});

//  GET /HOUSE/NAME
router.get("/Houses/:house", function (req, res) {
  fs.readFile(HOUSES, function (err, data) {
    json = JSON.parse(data);
    house_array = [];
    for (house of json) {
      if (house.Name.toLowerCase() == req.params.house.toLowerCase()) {
        house_array.push(house);
      }
    }
    if (house_array.length == 0) res.status(404);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(house_array);
  });
});

//  GET /HOUSE
router.get("/Houses", function (req, res) {
  fs.readFile(HOUSES, function (err, data) {
    json = JSON.parse(data);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(json);
  });
});

//  GET /SPELLS
router.get("/Spells", function (req, res) {

  fs.readFile(SPELLS, function (err, data) {
    json = JSON.parse(data);
    res.setHeader("Access-Control-Allow-Origin", "*");

  if(req.query.field){
 
try {
  var arr = JSON.parse(req.query.field);
} catch (error) {
  console.log(error)
res.status(404)
  return
}
   
    // console.log(arr)
    const filter = ""
    arr.forEach(field => {
   console.log(`${field} : element.${field}`)
    });
  //      const output = json.map((element)=>({name:element.name,}))
  //  console.log(output) 
  }
    res.json(json);
  });
});

//  GET /SPELLS/NAME
router.get("/Spells/:spell", function (req, res) {
  fs.readFile(SPELLS, function (err, data) {
    json = JSON.parse(data);
    house_array = [];
    for (house of json) {
      if (house.name.toLowerCase() == req.params.spell.toLowerCase()) {
        house_array.push(house);
      }
    }
    if (house_array.length == 0) res.status(404);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(house_array);
  });
});

module.exports = router;
