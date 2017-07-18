export default function() {
  this.namespace = '/api';

  this.get('/contents', function(schema, request) {
    return contents
  });
  //  this.get('/contents/:id', function(data) {
  //   return contents
  // });
} 

const contents = {
          data: [{
        type: "contents",  
        id: "1",
        attributes:{
          title: "Fofo",
          body: "sup world"
        }      
      }, {
        type: "contents",
        id: "about-us",
          attributes:{
          title: "About Us",
          body: "sup worl"    
          }  
      }
      ]
    };