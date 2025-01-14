// changing form names
/*global console*/
document.addEventListener('DOMContentLoaded', function () {
	var formFields = document.querySelectorAll('input[name^="form_fields["]');
		formFields.forEach(function(field) {
			console.log(field.name);
			var originalName = field.name.match(/\[([^\]]+)\]/)[1]; // Extracts the field name
			field.name = originalName; // Sets the plain name attribute
			console.log(originalName);
		});
});


// changing form names v2
document.addEventListener('DOMContentLoaded', function () {
    const formFields = document.querySelectorAll('input[name^="form_fields["]');
    formFields.forEach(function (field) {
        const originalName = field.name.match(/\[([^\]]+)\]/)[1]; // Extracts the field name
        field.setAttribute('data-original-name', field.name); // Store the original name in a custom attribute
        field.setAttribute('name', originalName); // Add a new plain name attribute for Salesforce
    });

    // Restore original names on submit to keep Elementor working
    const form = document.querySelector('form'); // Adjust selector for your form
    form.addEventListener('submit', function () {
        formFields.forEach(function (field) {
            const originalName = field.getAttribute('data-original-name');
            field.setAttribute('name', originalName); // Restore original name attribute before submission
        });
    });
});
