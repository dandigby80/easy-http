const http = new easyHTTP;

// get post
http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
  console.log(response);
});