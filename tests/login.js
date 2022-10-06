const fetch = require('node-fetch');

const login = async () => {
    const tokenResponse = await fetch('https://dev.stedi.me/login',{
        method: 'POST',
        body:JSON.stringify({
          userName: "and17013@byui.edu",
          password:"DevOps945!"
        })

})
};

export {login};