const base_url = 'https://localhost:7231/api/Users';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const requestOptions = {
  agent: new (require('https')).Agent({ rejectUnauthorized: false }), // Import 'https' module for Node.js
};

const UserServices = {
  async userRegister(user) {
    try {
      const formData = new FormData();
      formData.append('UserName', user.UserName);
      formData.append('Account', user.Account);
      formData.append('Password', user.Password);

      const response = await fetch(`${base_url}/Register`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
        ...requestOptions,
      });

      const responseData = await response.json();

      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error(error);
    }
  },
  async isUserNameExist(username) {
    try {
      const response = await fetch(`${base_url}/isUserNameRepeat?userName=${username}`, {
        method: 'GET',
        headers: headers,
        ...requestOptions,
      });

      const responseData = await response.json();

      console.log(responseData);
      return responseData.isUserNameRepeat;
    } catch (error) {
      console.error(error);
    }
  },
};

const user = {
  Account: 'loginModel.value.account',
  UserName: 'loginModel.value.username',
  Password: 'loginModel.value.password',
};

await UserServices.userRegister(user);

export default UserServices;
