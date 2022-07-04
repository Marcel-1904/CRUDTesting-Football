const { default: axios } = require("axios");
const { response } = require("express");

exports.create = async (req, res) => {

    playerSalary = [];

    salaries = [];

    playersStartingDate = [];

    total = 0;

    allInfoArray = [];

    clubsArray = [];
    clubTotal = 0;
    clubTotalPlayed = [];
    clubsTotalArray = [];
    clubCount = [];


    for(var i = 0; i < req.body.length; i++){

        playerSalary.push(req.body[i].name);
        playerSalary.push(req.body[i].salary);

        salaries.push(req.body[i].salary);

        playersStartingDate.push(req.body[i].name);
        playersStartingDate.push(req.body[i].startingDate);

        allInfoArray.push(req.body[i].name);
        allInfoArray.push(req.body[i].age);
        allInfoArray.push(req.body[i].position);
        allInfoArray.push(req.body[i].startingDate);
        allInfoArray.push(req.body[i].salary);

        var allInfo = req.body[i].name + " is " + req.body[i].age + " years old and plays the " + req.body[i].position
        + " position. He started playing football on " +  req.body[i].startingDate + " and earns a salary of $" +  req.body[i].salary + " per year.\n"  
    

        console.log(allInfo);

        for(let j = 0; j < req.body[i].clubs.length; j++){

            clubsTotalArray.push(req.body[i].clubs[j]["club"]);

            var index = clubsTotalArray.indexOf(req.body[i].clubs[j]["club"]);

            if(isNaN(clubCount[index])){
                clubCount[index] = 1;
            }else{
                clubCount[index]++;
            }

        }

    }

    for(let i = 0; i < salaries.length; i++){
        total += salaries[i];
    }

    for(let i = 0; i < clubsTotalArray.length; i++){
        if(!clubsArray.includes(clubsTotalArray[i])){
            clubsArray.push(clubsTotalArray[i]);
        }

    }

    
    

    console.log(playerSalary);

    console.log("The total amount of all players salaries is: $" + total);

    console.log(playersStartingDate);

    console.log(clubsTotalArray);

    console.log(clubCount);

    console.log(clubsArray);

    //console.log(clubTotalPlayed);

    // axios.get('http://localhost:8081/football/1').then(response => {
    //     console.log(response.data);
    // })


    res.status(200).send({message:i})
}