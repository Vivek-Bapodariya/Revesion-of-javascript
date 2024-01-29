const accountId = 144553
let accountEmail = "vivek@google.com" 
var accountPassword = "12345"
accountCity = "Surat"
let accountState;

//accountId = 2 //not allowed

accountEmail = "vb@vb.com"
accountPassword = 21212121
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])