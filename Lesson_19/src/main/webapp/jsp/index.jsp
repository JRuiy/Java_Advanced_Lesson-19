<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Spring Boot File Upload / Download Rest API Example</title>
</head>
<body>


	<div>
		<h3>Upload profile photo</h3>
		
		<form id="singleUploadForm" name="singleUploadForm">
			<label for="firstName">First name:</label>
			<input type="text" id="firstName" name="firstName" required /> <br>
			
			<label for="lastName">Last name:</label>
			<input type="text" id="lastName" name="lastName" required /> <br>
			
			<label for="age">age:</label>
			<input type="text" id="age" name="age" required /> <br>
			
			<input type="file" id="singleFileUploadInput" name="file" required />
			<button type="submit">Submit</button>
		</form>
	
		<div>
			<div id="singleFileUploadError"></div>
			<div id="singleFileUploadSuccess"></div>
		</div>
	</div>

	<script src="/js/file_manager.js"></script>
	
</body>
</html>