



        var a=2, b=1, c=-1;
        var insideSqrt = (Math.pow(b, 2) - 4 * a * c);
        var x1, x2;

        x1 = (- b + Math.sqrt(insideSqrt))/ 2 * a;
        x2 = (- b - Math.sqrt(insideSqrt))/ 2 * a;


        function solveQuad(a, b, c){
            var insideSqrt = (Math.pow(b, 2) - 4 * a * c);
            var x1, x2;
            x1 = (- b + Math.sqrt(insideSqrt))/ 2 * a;            
            x2 = (- b - Math.sqrt(insideSqrt))/ 2 * a;
            return "The X1 = " + Math.floor(x1) + " X2 = " + Math.floor(x2);
        }

        // solveQuad(2, 1, -1);

        var cars = ["Venza", "camry", "Honda", "Range"];


        cars.forEach(function (e){
            console.log(e);
        });
  

        cars.forEach(loopArray);

        function loopArray(e){
            console.log(e);
        }

        function deleteArray(arrayIndex){
            delete arrayIndex;
        }

        deleteArray(ball[1]);

        function myDetails(fullname, age){
            console.log("My name is "+ fullname +" and my age is "+ age);
        }
        // solveQf(2, -1, 5);
      myDetails("Young Elefiku", 23);
      myDetails("Emmanuel", 33);
      myDetails("Uche", 35);
      myDetails("Ken", 31);

        // sumForMe();