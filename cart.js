///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

function callback(total, food) {
    return total + food.price
}

const summedPrice = cart.reduce(callback, 0)

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

let cartTotal = 100
let couponValue = 5.00
let tax = 0.06

function calcFinalPrice(cartTotal, couponValue, tax) {
    let taxAmount = cartTotal * tax
    let finalprice = cartTotal + taxAmount - couponValue
    return finalprice
}

let finalPrice = calcFinalPrice(cartTotal, couponValue, tax)
console.log(finalPrice)


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for a customer object as well as an example object. 
    Plan out a customer object for the cart page. Think about the information that a restaurant would need about its customers.
    In the TEXT ANSWER area below, describe the properties that your customer object will have and why you chose those properties.
    Explain what data types each property should be and why you chose those data types. Your object should have at least 4 properties. 
*/

/*

Name - so we can identify them.
Date of birth - so we know their age (and narrow down what we market to them) and can spam them with "Happy Birthday" emails and promotions.
Gender - so we can narrow down what we market to them further.
How long they've been a customer - so we can spam them with "Thanks for being our customer ___ years" emails and promotions, and can calculate bout how much they spend with us per year (see next).
Total amount they've spent so far - so we can calculate how much they spend with us per year, and rank customers by profitability.
Primary product type they purchase - so we can narrow down what we market to them further.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer1 = {
    nameLastFirstMI: "Smith, Darrell J",
    dateOfBirthYYYYMMDD: "1971-05-05",
    gender: "male",
    startDateYYYYMMDD: "2022-01-08",
    totalSpent: 2403,
    primaryProductType: "Sports & Outdoors"
}
console.log(customer1)