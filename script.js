function createObject(){
   
        return {
            name:"bala",
            height:180,
            aboutYourself:function(){
                return ("I am  "+ this.name +". I am "+ this.height +"cm height")
            }
        }
    }



var a =  createObject();
console.log(a.aboutYourself());