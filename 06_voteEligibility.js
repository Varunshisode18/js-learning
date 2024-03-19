function voteEligible(age){

    if(age == undefined || age <= 0 || age >=130 || age == null){
        console.log(`Invalid Data`);
    }
    else{
        if(age >= 18){
            console.log(`${age} is your age you are able to voting`);
        }
        else{
            console.log(`${age} is your age you are not able to voting`);
        }
    }

}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);

