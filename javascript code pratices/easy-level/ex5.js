/*input:(5,10)--g,(25,25)--neither,(50,20)--f
output:
If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.
 */

function ex5(f,g){
    if(f>g){
        return 'f';
    }
    else if(f<g){
        return 'g';
    }
    else{
        return 'neither';
    }
}
console.log(ex5(5,10));
console.log(ex5(25,25));
console.log(ex5(50,10));