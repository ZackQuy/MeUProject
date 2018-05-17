
export const random = () => {
    
    var arr = math_o().toString()+math().toString()+math().toString()+math_o().toString();
    function math(){
        var a = Math.floor(Math.random()*10);
        return a;
    }
    function math_o(){
        var a = Math.floor(Math.random()*10);
        if(a%2==0 && a+1 !== 10)
        {return a;}
        else if(a+1 === 10)
        {
         return 0;
        }
        else {return a+1;}
    }
    return arr;
  };

  let index = {
    random
  };
  
  export default index;