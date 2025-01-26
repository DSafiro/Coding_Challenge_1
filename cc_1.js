// Task 1: Employee Information
let employeeName = "Billy Bob" // Employee's Name
const employeeID = 8675309 // Employee's ID
var isActive = true // Employee Activity

console.log("Employee Name:", employeeName, "|", "Type:", typeof employeeName)
console.log("EmployeeID:", employeeID, "|", "Type:", typeof employeeID)
console.log("Is Active:", isActive, "|", "Type:", typeof isActive)

// Task 2: Product Details
let productName = "Grilled Cheese Sandwich" // Product Name
const productPrice = 15.99 // Product Price (In Dollars)
var isAvailable = true // Product Availability

console.log("Product Name:", productName, "|", "Type:", typeof productName)
console.log("Product Price:", productPrice, "|", "Type:", typeof productPrice)
console.log("Is Available:", isAvailable, "|", "Type:", typeof isAvailable)

// Task 3: Financial Transactions
let accountBalance = 12000 // Initial account balance in dollars
    console.log("Initial Account Balance", accountBalance)

accountBalance += 6000 // Balance after a deposit of $6000
    console.log("Account Balance After Deposit:", accountBalance)

accountBalance -= 9500 // Balanace after withdrawl of $9500
    console.log("Account Balance After Withdrawl:", accountBalance)

accountBalance *= 1.0075 // Balance after an accured interest rate of 7.5%
    console.log("Account Balance After Accrued Interest:", accountBalance.toFixed(2))

accountBalance /= 1.125 // Balance after a depreciation rate of 12.5%
    console.log("Account Balance After Depreciation:", accountBalance.toFixed(2))

// Task 4: Customer Messaging
let customerName = "Jamie Jackson" // Customer Name
welcomeMessage = "Welcome, " + customerName + "! Glad to have you here!" // Welcome Message
console.log(welcomeMessage)