//Q1
function max(...number) {
    let size = number.length;
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < size; i++) {
        if (number[i] > max)
            max = number[i];
    }
    return max;
};
//Q2
function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

var object1 = {};
object1['op'] = "+";
object1['n1'] = 2;
object1['n2'] = 10;


function object2(_op, _n1, _n2) {
    this.op = _op;
    this.n1 = _n1;
    this.n2 = _n2;
}

Object2 = new object2("-", 2, 4);

//Q3
function avg(data) {
    // your code here
    let sum = 0;
    for (let i = 0; i < data.size; i++) {
        sum += data.products[i].price;
    }
    return sum / data.size;
}
avg({
        size: 3,
        products: [{
            name: "Product 1",
            price: 100
        }, {
            name: "Product 2",
            price: 700
        }, {
            name: "Product 3",
            price: 250
        }]
    })
    //Q4-Q1
function change_welcome() {
    document.getElementById("h1").innerHTML = "HODL";
    document.getElementById("h4").innerHTML = "TO THE MOON!!!!!";
};

//Q4-Q2
function show_menu() {
    document.getElementById("sidebar").style.width = "250px";
}

function hide_menu() {
    document.getElementById("sidebar").style.width = "0";
}

//Q4-Q3
function show_more() {
    document.getElementById("hide_content").style.display = "block"
}
//Q5
function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let sub = target - num;
        if (map[sub] >= 0) {
            return [map[sub], i];
        } else {
            map[num] = i;
        }
    }
}