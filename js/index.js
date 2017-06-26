var userName = prompt('Enter your name')
var a = Number(prompt('Enter "a" a ≠ 0'));
var b = Number(prompt('Enter "b"'));
var c = Number(prompt('Enter "c"'));

document.write('<br>')
document.write('Hi, ' + userName + ' !');
document.write('<br>')
document.write('Heare is your Equation');
document.write('<br>')
document.write('<br>')
document.write('a = '+a+';')
document.write('<br>')
document.write('b = '+b+';')
document.write('<br>')
document.write('c = '+c+';')
document.write('<br>')
document.write('<br>')
document.write(a + 'x<sup>2</sup> + ' + b + 'x + ' + c + ' = 0');
document.write('<br>')
document.write('<br>')

var D = b * b - 4 * a * c;

var result = quadraticEquation(a, b, c);

document.write('D = b<sup>2</sup> - 4ac = ' + D);
document.write('<br>')
document.write('<br>')
document.write(result);



function quadraticEquation(a, b, c) {

    if (a === 0) {
        var result;
        result = 'No solution, please enter <b>a ≠ 0<b> ';
        return result;
    }
    else if (D < 0) {

        result = 'Equation has no real roots becouse of: <b>D < 0</b>';
        return result;
    }

    else if (D > 0) {
        var x1 = ((-b + Math.sqrt(D)) / 2 * a);
        var x2 = ((-b - Math.sqrt(D)) / 2 * a);
        result = 'x1 = ' + Math.round(x1) + '<br> x2 = ' + Math.round(x2);
        return result;
    }

    else if (D === 0) {
        var x1, x2 = (-b / 2 * a);
        result = 'x1,2 = ' + x1, x2;
        return result;
    }

};
