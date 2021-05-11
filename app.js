const http = new easyHTTP;

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
//   console.log(response);
// });

//get single post
// http.get('https://jsonplaceholder.typicode.com/posts/5', function(error, response){
//   console.log(response);
// });

//create data

const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

//creat post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, response){
//   console.log(response);
// });

//update post

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, response){
//   console.log(response);
// })

//delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
  console.log(response);
});
