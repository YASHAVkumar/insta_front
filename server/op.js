var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://instagram39.p.rapidapi.com/getUserId',
  params: {username: 'yashav_kumar'},
  headers: {
    'x-rapidapi-key': 'f46eafa939msh618b23be3b22809p19a2c4jsn70434335f285',
    'x-rapidapi-host': 'instagram39.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});