const User = {
    _email: 'v@vivek.com',
    _password: 'vtb',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
         this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);