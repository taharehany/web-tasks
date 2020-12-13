let customers = [ ]
let accountNumber = 254452666214

//create our elements
let container = document.getElementById('container')
let myDiv = document.createElement('div')
myDiv.setAttribute('class', 'customers')
container.appendChild(myDiv)

let getCustomerData = () => {
    customer = {
        customerName: prompt('enter your name'),
        cusomerBalance: prompt('enter your balance'),
        customerAccount: accountNumber += 1
    }
    customers.push(customer)
}
getCustomerData()
getCustomerData()

customers.forEach( (customer, index) => {
    let ourCustomerName = document.createElement('p')
    let ourCustomerBalance = document.createElement('p')
    let ourCustomerAcc = document.createElement('p')
    myDiv.appendChild(ourCustomerName)
    myDiv.appendChild(ourCustomerBalance)
    myDiv.appendChild(ourCustomerAcc)

    ourCustomerName.textContent = `the customer (${index + 1}) name is: ${customer.customerName}`

    ourCustomerBalance.textContent = `and the customer (${index + 1}) balance is: ${customer.cusomerBalance}`

    ourCustomerAcc.textContent = `and the customer (${index + 1}) Account is: ${customer.customerAccount}`
}) 

