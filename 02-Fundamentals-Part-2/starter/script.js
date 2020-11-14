/********
 * this keyword
 */
console.log(this); 
console.log(calcAge(1995));

function calcAge(year){
    var age = 2020 - year;
    console.log(this);
    return age;   

}

var minhas = {
    name : 'Minhas',
    birthYear : 1995,
    calculateAge : function() {
        this.age = 2020 - this.birthYear;
        innerFuntion();
        function innerFuntion() {
            console.log(this+'  inner function  ');
        }
    }
}
minhas.calculateAge()
console.log(minhas.age) 

var mike = {
    name : 'Mike',
    birthYear : 1984
}

mike.calculateAge = minhas.calculateAge;
//function is treated as a variable
mike.calculateAge();
console.log(mike.age);