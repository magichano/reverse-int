module.exports = function reverse (n) {

    
    var result='';

    if (n>0) {
        n=n.toString();
    }
    else{
        n=-n;
        n=n.toString();
    };

  for (i=n.length-1; i>=0; i=i-1){
    result=result + n[i];
   // console.log(n[i]);
    console.log(result);
  }

  return Number(result); 
}

//reverse(-425);
