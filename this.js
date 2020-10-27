var fun1 = function(){
    return this;
}
fun1();

var obj1 = {
    x: 'x',
    fun2: function(){
        return this;
    }
}

obj1.fun2();