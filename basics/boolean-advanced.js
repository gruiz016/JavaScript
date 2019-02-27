let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Account is locked!')
} 
else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}   

/*CHALLENGE AREA*/

let temp = 121

if (temp <= 32) {
    console.log('It is freezing')
}
else if (temp >= 120) {
    console.log('It is hot outside')
} else {
    console.log('Got for it, its is nice outside')
}