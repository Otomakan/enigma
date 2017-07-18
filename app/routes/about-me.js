import Ember from 'ember';
const idme= 'about-me'
  
export default Ember.Route.extend({
	model(){
		return this.store.query('content', {filter: {data:{id: "1"}}})
			.then((result)=>{
				console.log(result)
				return result[0]
			}
			)
		// .then((contentsarray)=>{
		// 	console.log(contentsarray)
		// 	return contentsarray.get('1')
		// })
			// .then((res)=>{
			// 	let final =  {data:{
			// 					type:"contents",
			// 				   	id: '1',							    
			// 				    attributes: res.content[1]['__data']
			// 				}
			// 			}
			// 	console.log(final)
			// 	return final
			// })
		// console.log(response)
		// return response
	}
});
