<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>


	<div>
		<h3>Upload profile photo</h3>
		
		<form id="singleUploadForm" name="singleUploadForm">
			<label for="firstName">First name:</label>
			<input type="text" id="firstName" name="firstName" value="${student.firstName}" required /> <br>
			
			<label for="lastName">Last name:</label>
			<input type="text" id="lastName" name="lastName" value="${student.lastName}" required /> <br>
			
			<label for="age">age:</label>
			<input type="text" id="age" name="age" required value="${student.age}" /> <br>
			
			<img src="${student.imagePath}">
			
		</form>
	
		<div>
			<div id="singleFileUploadError"></div>
			<div id="singleFileUploadSuccess"></div>
		</div>
	</div>
	


	<script src="/js/file_manager.js"></script>



</body>
</html>