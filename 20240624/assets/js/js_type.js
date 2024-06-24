let firstName = 'Lai';
let lastName = 'Jacob';
let fullName = lastName + ' ' + firstName;
//let fullName = 'lastName' + ' ' + firstName;錯誤
console.log(fullName);

let t1 = "I'm \"Jacob\"";
console.log(t1); //I'm "Jacob"
//"\"為跳脫字元，將有特殊涵意轉為一般文字

//數字
let n1 = 1;
let n2 = 1.25;
let n3 = n1 + n2;

console.log(n1, n2, n3);

//文字與數字
let sn = 'a12';
let mix = sn + n1;
console.log(mix);

//字串數字 轉 數字型態
let sn2 = 'a12';
let snToNum = parseInt(sn2, 10);
console.log(snToNum, typeof snToNum)

let snToNumFast = +sn;
console.log(snToNumFast, typeof snToNumFast);

//數字 轉 文字
n1 = 100;

console.log(n1, typeof n1);

let sn1 = n1.toString();//數字轉文字:toString()
console.log(sn1, typeof sn1);

//陣列
let students = [100, 60, 38, 88];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

///插入最後
students.push(70);
console.log(students);

///插入第一個
students.unshift(66);
console.log(students);

///轉為文字
console.log(students.join(','));

///尋找
let findIndex = students.indexOf(1000);
console.log(findIndex);//沒找到會回傳"-1"

///刪除
// if (findIndex >= 0) {
//     students.splice(findIndex, 1);
// }
students.splice(findIndex, 1);

//物件
let student = {
    name: 'David',
    age: 18,
    score: 100
};

let appedu_students = [];
appedu_students.push({
    name: 'David',
    city: '台中',
    gender: '男'
});

appedu_students.push({
    name: 'Helen',
    city: '高雄',
    gender: '女'
});

console.log(appedu_students)
console.table(appedu_students)

//函數
/**
 * calc student score avg.
 * @param {object} student 
 */
const calcAVG = (student, offset) => {
    offset = offset || 0;
    let total = student.s1 + student.s2
    let avg = total / 2;
    return avg + offset;
};

appedu_students.push({
    name: 'David',
    city: '台中',
    gender: '男',
    s1: 100,
    s2: 80
});

appedu_students.push({
    name: 'Helen',
    city: '高雄',
    gender: '女',
    s1: 70,
    s2: 99
});

console.log(appedu_students)
console.table(appedu_students)

appedu_students[0].avg = calcAVG(appedu_students[0])
appedu_students[1].avg = calcAVG(appedu_students[1], 5)
console.table(appedu_students);