var $ = require('jquery');
var formTemplate = require('../templates/form.html');
require('../css/styles.css');
require('font-awesome-webpack')


$.get('http://json-data.herokuapp.com/forms', function(data){
	render(data);
});
 

function render(formData) {
	var templateData = {};
		templateData.data = formData;

	var newTempData = formData.map(function(value){
		if (value.type === 'select') {
			value.select = true;
			return value;
		} else if (value.type === 'textarea') {
			value.textarea = true;
			return value;
		} else {
			return value;
		}
	});

	newTempData = {data:newTempData};

$("#container").html(formTemplate(newTempData));

}





































// $(document).ready(function() {
// 	$.ajax({
// 		type: 'get',
// 		url: //http:.. ;
// 	}),
// 	.done(function(data) {
// 		console.log(data);
// 	})

//		*****		Shortcut		******
	// $.get('http:', function(data) {
	// 	console.log(data);
	// })
// })