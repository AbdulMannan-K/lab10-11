 function multiple(x,y,z){
    let sum=0;
    for(let i=0; i < z ; i++){
        if(i%x===0 || i%y===0){
            sum+=i;
        }
    }
    return sum;
}

module.exports = multiple;