var first_number=3;
var second_number=5;
document.querySelector('.first_number').textContent=first_number;
document.querySelector('.second_number').textContent=second_number;

var i=0;
var total_numbers=0;
// For loop
for (let i = 0; i<(second_number-first_number); i++) {
    total_numbers++;
    document.querySelector('.final_result').textContent=total_numbers
    
}

