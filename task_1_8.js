/*- -Задание со звездочкой. Пишем функцию решения квадратного уравнения через дискриминант:
		ax² + bx + c = 0 (общий вид уравнения)
		D = b2 – 4ac
		D > 0
		x1 = (-b + √D ) / 2a
		x2 = (-b – √D ) / 2a
		D = 0
		x = -b / 2a
		D < 0 - прекращаем решать уравнение;*/

const a = Number(prompt('a:','0'));
const b = Number(prompt('b:','0'));
const c = Number(prompt('c:','0'));

function quadraticEq(a, b, c) {

    const d = b * b - 4 * a * c;

    if (d > 0) {
        const x1 = ((b/-1 - Math.sqrt(d)) / 2 * a);
        const x2 = ((b/-1 + Math.sqrt(d)) /2*a );
        return console.log(x1,x2);
    } else if (d === 0) {
        const x = (b/-1/2*a);
    } else {
        return console.log('stop')
    }

}

quadraticEq(a,b,c);