try{
    var y = 123
      if(isNaN(+y)) {
      throw new Error("Y is not a number")
    }
    console.log(y)
  } catch(e){
    console.log("error: ", e)
  } finally {
    console.log("Finally: Always Execute")
  }