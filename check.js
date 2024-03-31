function oddposition(line){

    for(let i=0 ; i<line.length;i++){
    const element = line.charAt(i);

    if(i %2 !=0 && element != " "){
        console.log(element);
    }


    }

    }
oddposition("Hard Work always pays Off");
oddposition("Soon i will be UI It Champ ")