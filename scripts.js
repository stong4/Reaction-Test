        function getRandomColor() {
            // split creates an array
            var letters = '0123456789ABCDEF'.split(''); //letters used in HTML color code
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
            /*
            Math.floor(Math.random() * 16) generates a  
            whole number between 0 and 16 
            letters[number from 0-16] is the chosen character from array
            */
            color += letters[Math.floor(Math.random() * 16)]; //concatenate into color code
            }
            return color;
        }
        
        function circleSquare() {
            //randomize between square and circle
            var y = Math.floor(Math.random() * 2); // between 0 and 1
            if (y == 0) {
                return "100px";
            } else {
                return "0px";
            }
        }
        
        function randomHeight() {
            // randomize position by randomizing top and left? pixels
            // to do that, Math.random to make a range (0-1000px maybe?)
            var height = Math.floor(Math.random() * 600);
            return height + "px";
        }
        
         function randomWidth() {
            var width = Math.floor(Math.random() * 800);
            return width + "px";
        }
    
        var clickedTime;
        var createdTime;
        var rxnTime;
      
        function makeBox() { // make box show up at x seconds
            
            var x = 3000 * Math.random();
            
            setTimeout(function() {
            document.getElementById("box").style.borderRadius=circleSquare();
            document.getElementById("box").style.left=randomWidth();
            document.getElementById("box").style.top=randomHeight();
            document.getElementById("box").style.backgroundColor=getRandomColor();
            document.getElementById("box").style.display="block";
            createdTime = Date.now(); //store time when box showed up in createdTime
            }, x); 
        }
        
     
        
        document.getElementById("box").onclick=function() {
            clickedTime = Date.now(); //when click happened
          
            rxnTime = (clickedTime-createdTime)/1000; //convert to seconds
          
            document.getElementById("time").innerHTML = rxnTime + " seconds";
            
            this.style.display="none"; // make box disappear when clicked
            makeBox(); //after clicking, repeat makeBox function
        }
        
        makeBox(); //declare function makeBox