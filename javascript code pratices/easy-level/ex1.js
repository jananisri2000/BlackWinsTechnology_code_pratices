/*input: 4
output: 10
solution: 1+2+3+4=10 */

function ex1(){
    let sum=0,n=4;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(ex1());