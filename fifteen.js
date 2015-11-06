"use strict";
var emptyX = 0;    
var emptyY = 0;
var count = 0;
$(document).ready(function(){
    draw();
    $("#shufflebutton").click(function(){
        var times = Math.floor( Math.random() * 30 );
        if(times < 3){
            times = Math.floor( Math.random() * 30 );
        }
        for(var i = 0; i < times; i++){
            var random = getRandom();
            var id = random + 1;
            $("#p" + id).trigger("click"); 
        }
    });
    
}); 

function youWin(){
    var countWin = 0;
    $("#puzzlearea div").each(function(index, value){
        var left = parseInt( $("#p" + (index + 1)).css("left") );
        var top = parseInt( $("#p" + (index + 1)).css("top") );
        if(emptyX !== 300 && emptyY !== 300){
            return false;
        }else{
            switch(index){
           case 0:
               if(left === 0 && top ===0){
                   countWin++;
                   break;
               }
           case 1:
               if(left === 100 && top ===0){
                   countWin++;
                   break;
               }
           case 2:
               if(left === 200 && top ===0){
                   countWin++;
                   break;
               }
           case 3:
               if(left === 300 && top ===0){
                   countWin++;
                   break;
               }
           case 4:
               if(left === 0 && top ===100){
                   countWin++;
                   break;
               }
           case 5:
               if(left === 100 && top === 100){
                   countWin++;
                   break;
               }
           case 6:
               if(left === 200 && top ===100){
                   countWin++;
                   break;
               }
           case 7:
               if(left === 300 && top ===100){
                   countWin++;
                   break;
               }
           case 8:
               if(left === 0 && top ===200){
                   countWin++;
                   break;
               }
           case 9:
               if(left === 100 && top ===200){
                   countWin++;
                   break;
               }
           case 10:
               if(left === 200 && top ===200){
                   countWin++;
                   break;
               }
           case 11:
               if(left === 300 && top ===200){
                   countWin++;
                   break;
               }
           case 12:
               if(left === 0 && top ===300){
                   countWin++;
                   break;
               }
           case 13:
               if(left === 100 && top ===300){
                   countWin++;
                   break;
               }
           case 14:
               if(left === 200 && top ===300){
                   countWin++;
                   break;
               }
        }
        }
        
    });
    
    if(countWin === 15){
        return true;
    }else{
        return false;
    }
}

function getRandom(){
    var array = new Array();
        var count = 0;
        $("#puzzlearea div").each(function(index, value){
            var x = parseInt( $("#p" + (index + 1) ).css("left") );
            var y = parseInt( $("#p" + (index + 1) ).css("top")  );
            if(x === emptyX - 100 && y === emptyY ){
                array[count] = index;
                count++;
            }
            if(x === emptyX + 100 && y === emptyY){
                array[count] = index;
                count++;
            }
            if( x === emptyX && y === emptyY + 100){
                array[count] = index;
                count++;
            }
            if(x === emptyX && y === emptyY -100){
                array[count] = index;
                count++;
            } 
        });
       var ran = Math.floor( Math.random() * array.length );
       return array[ran];
}

function draw() {
       $("#puzzlearea div").each(function(index, value){
           
           var x = ((index % 4) * 100) ;
           var y = (Math.floor(index / 4) * 100) ;
           $(this).addClass("puzzlepiece");
           $(this).css({"left" : x + 'px' , 
                        "top" : y + 'px' , 
                        "background-image" :"url('background.jpg')",
                        "background-position": -x+'px '+(-y)+'px'
           });
       });
       emptyX = 300;
       emptyY = 300;
       getColor(); 
};

function changePosition(){
    count++;
    clearAll();
    var left = parseInt( $(this).css("left") );
    var top = parseInt( $(this).css("top") );
    
    var temp = left;
    left = emptyX;
    emptyX = temp;
    
    var temp1 = top;
    top = emptyY;
    emptyY = temp1;
    //change position
    $(this).css({"left":left + 'px',"top":top + 'px'});

    if(youWin() && count !== 1){
        alert("You Win!");
    }else{
        getColor();
    }
}

function getColor(){ 
    $("#puzzlearea div").each(function(index, value){
        var x = parseInt( $("#p" + (index + 1)).css("left") );
        var y = parseInt( $("#p" + (index + 1)).css("top") );

        if( (x === emptyX - 100 && y === emptyY )){
            $("#p" + (index + 1)).addClass("movablepiece");
            $("#p" + (index + 1)).bind('click', changePosition);
            
        }
        if(x === emptyX + 100 && y === emptyY){
            $("#p" + (index + 1)).addClass("movablepiece");
            $("#p" + (index + 1)).bind('click', changePosition);
           
        }
        if(x === emptyX && y === emptyY - 100){
            $("#p" + (index + 1)).addClass("movablepiece");
            $("#p" + (index + 1)).bind('click', changePosition);
            
        }
        if(x === emptyX && y === emptyY + 100){
            $("#p" + (index + 1)).addClass("movablepiece");
            $("#p" + (index + 1)).bind('click', changePosition);
            
        }
    });
}

function clearAll(){

    $("#puzzlearea div").each(function(index, value){
        var x = parseInt( $("#p" + (index + 1)).css("left") );
        var y = parseInt( $("#p" + (index + 1)).css("top") );
        
        if( (x === emptyX - 100 && y === emptyY )){
            $("#p" + (index + 1)).removeClass("movablepiece");
            $("#p" + (index + 1)).unbind('click', changePosition);
          
        }
        if(x === emptyX + 100 && y === emptyY){
            $("#p" + (index + 1)).removeClass("movablepiece");
            $("#p" + (index + 1)).unbind('click', changePosition);
            
        }
        if(x === emptyX && y === emptyY - 100){
            $("#p" + (index + 1 )).removeClass("movablepiece");
            $("#p" + (index + 1 )).unbind('click', changePosition);
           
        }
        if(x === emptyX && y === emptyY + 100){
            $("#p" + (index + 1 )).removeClass("movablepiece");
            $("#p" + (index + 1 )).unbind('click', changePosition);
       
        }
    });
}




