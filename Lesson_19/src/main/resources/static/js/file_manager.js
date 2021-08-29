var singleUploadForm = document.querySelector('#singleUploadForm');
var singleFileUploadInput = document.querySelector('#singleFileUploadInput');
var singleFileUploadError = document.querySelector('#singleFileUploadError');
var singleFileUploadSuccess = document.querySelector('#singleFileUploadSuccess');

var profileUrl;

function saveStudent(firstName, lastName, age, imagePath) {
	var formData = new FormData();
	formData.append("firstName", firstName);
	formData.append("lastName", lastName);
	formData.append("age", age);
	formData.append("imagePath", imagePath);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/saveStudent");
	xhr.send(formData);
	xhr.onload = function() {
		console.log(xhr.response)
		console.log("Hello")
		document.location.href = (xhr.responseText);
	}
	//xhr.close();
}

function uploadSingleFile(file) {
	var firstName = document.querySelector('#firstName').value;
	var lastName = document.querySelector('#lastName').value;
	var age = document.querySelector('#age').value;
	
	var formData = new FormData();
	formData.append("file", file);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/uploadFile");
	
	xhr.onload = function() {
		console.log(xhr.responseText);
		var response = JSON.parse(xhr.responseText);
		
		if (xhr.status == 200) {
			singleFileUploadError.style.display = "none";
			singleFileUploadSuccess.innerHTML = "<p>File Uploaded Successfully.</p><p>DownloadUrl : <a href='"
				+ response.fileDownloadUri
				+ "' target='_blank'>"
				+ response.fileDownloadUri + "</a></p>";
			singleFileUploadSuccess.style.display = "block";
			
			saveStudent(firstName, lastName, age, response.fileDownloadUri);
	
		} else {
			singleFileUploadSuccess.style.display = "none";
			singleFileUploadError.innerHTML = (response && response.message) 
				|| "Some error occured";
		}	
		
	}
	
	xhr.send(formData);
} 



/*function uploadSingleFileToDB(file) {
	var formData = new FormData();
	formData.append("file", file);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/uploadFileDB");
	
	xhr.onload = function() {
		console.log(xhr.responseText);
		var response = JSON.parse(xhr.responseText);
		
		if (xhr.status == 200) {
			singleFileUploadError.style.display = "none";
			singleFileUploadSuccess.innerHTML = "<p>File Uploaded Successfully.</p><p>DownloadUrl : <a href='"
				+ response.fileDownloadUri
				+ "' target='_blank'>"
				+ response.fileDownloadUri + "</a></p>";
			singleFileUploadSuccess.style.display = "block";
			

		} else {
			singleFileUploadSuccess.style.display = "none";
			singleFileUploadError.innerHTML = (response && response.message) 
				|| "Some error occured";
		}	
		
	}
	
	xhr.send(formData);
} */


singleUploadForm.addEventListener('submit', function(event) {
	var files = singleFileUploadInput.files;

	if (files.length === 0) {
		singleFileUploadError.innerHTML = "Please select a file";
		singleFileUploadError.style.display = "block";
	}

	uploadSingleFile(files[0]);
	
	event.preventDefault();
	
}, true);
