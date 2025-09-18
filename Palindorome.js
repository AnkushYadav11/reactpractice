let num = 727;
let rev = 0;
let no = num;
while(num!=0){
    let rem = num%10;
    rev = (rev * 10) + rem;
    num /=10;
}

console.log(rev);

if(no == rev){
    console.log("palindorm"+ rev);
}
else{
    console.log("Not palindorm...");
    
}