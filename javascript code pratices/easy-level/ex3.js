/*input: 5,2
output:20
=5<<2
=5*2^2
=5*4
=>20 */
function ex3(a,b){
    let sqr=Math.pow(2,b);
   let result=a*sqr;
    return result;
}
console.log(ex3(5,2));//20
console.log(ex3(10,3));//80