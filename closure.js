var calculate = function(val){
    var testVal = 123;
    var cal = function(){
        return testVal + val
    }
    return cal;
}
var add10 = new calculate(10)
console.dir(add10)