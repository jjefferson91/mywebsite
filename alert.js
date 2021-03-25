<script type="text/javascript">
stars = [0,0,2,3,5]

var sum = stars.reduce(add, 0);
function add(a, b) {
    return a + b;
}
var text='';

 for (i = 0; i < stars.length; i++) { 
  text += "The percentege of the star "+(i+1)+ " is :"+ (stars[i]/sum)*100 + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>