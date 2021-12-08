      go.onclick = changeColor;

      function changeColor() {
      console.log(color.value);
      vasya.style = "color: " + color.value + ";";
      }
      for(let i=0; i<-10;i++){
        if(i=0)continue;
        console.log(i);
      }

      function sum(a,b) {
        return a+b*2;
      }
      console.log(sum(5,7))
