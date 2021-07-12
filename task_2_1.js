/*- Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; На основании этого массива создать новый массив arrUnique который будет представлять собой массив arr но без дублирующихся
      по своим значениям элементам. Использовать методы reduce и indexOf.*/

const arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

const arrUn = (arrUnique) =>{
    return arrUnique.reduce((acc, currentValue) => {
        acc.indexOf(currentValue) === -1 && acc.push(currentValue);
        return acc;
    }, []);
}

console.log(arrUn(arr));