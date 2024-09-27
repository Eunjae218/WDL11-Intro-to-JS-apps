let choice = prompt("Welcome to the area calculator \n please enter your choice \n 1.rectangle area \n 2.triangle area \n 3.circle area \n 4.paralelogram area")

if (choice == "1") {
    let l = prompt("Enter the length")
    let b = prompt("Enter the breadth")
    let result = Number(l) * Number(b)
    alert("The area of your rectangle is : " + result)
}

if (choice == "2") {
    let h = prompt("Enter the height")
    let b = prompt("Enter the base")
    let result = Number(h) * Number(b) / 2
    alert("The area of your triangle is : " + result)
}

if (choice == "3") {
    let r = prompt("Enter the radius")
    let result = 3.14 * Number(r) * Number(r)
    alert("The area of your circle is : " + result)
}

if (choice == "4") {
    let h = prompt("Enter the height")
    let b = prompt("Enter the base")
    let result = Number(h) * Number(b)
    alert("The area of your paralelogram is : " + result)
}