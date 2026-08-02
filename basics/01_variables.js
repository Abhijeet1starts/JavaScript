const accountId = 247838
let accountEmail = "example@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2    // not allowed

accountEmail = "newEmail.com"
accountPassword = "newPassword"
accountCity = "Delhi"

console.log(accountId);

// Don't use var because of scoping issues

console.table([accountId, accountEmail, accountPassword, accountCity]);

let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);