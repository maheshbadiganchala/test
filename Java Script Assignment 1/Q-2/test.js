function sum(){
    var n= document.getElementById("n").value;
    var sum=0;
    for(i=1;i<=n;i++){
        if(i%3===0 || i%5===0)
            sum+=i;
    }
    alert("The sum is "+sum);
}