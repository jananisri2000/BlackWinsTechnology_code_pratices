/*input: bitand(7,12), bitor(7,12), bitxor(7,12)
output: 4, 15, 11 */
function ex2(){
    function bitand(a,b){
        return a&b;
    }
    function bitor(a,b){
        return a|b;
    }
    function bitxor(a,b){
        return a^b;
    }
    return{
        bitand:bitand(7,12),
        bitor:bitor(7,12),
        bitxor:bitxor(7,12)
    };
}
let result=ex2();
console.log(result.bitand);
console.log(result.bitor);
console.log(result.bitxor);

