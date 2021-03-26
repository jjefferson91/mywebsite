let x;
let y;

let rating;

x = 7;
y = 11;

console.log(x+" "+y);
 
function ratePage() {
    rating = prompt("Rate my website 1 - 5");
    while (rating < 1 || rating > 5) {
        if (rating < 1) {
            alert("Rating invalid");
        }
        else if (rating > 5) {
            alert("Thanks but too high");
        }
        rating = prompt("Rate my website 1 - 5"); 
    }  
    document.write("<p>"+rating+"</p>"); 
}
