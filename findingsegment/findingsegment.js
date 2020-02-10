
<!DOCTYPE html>
<html>
<head>
<title>Replacing Segment</title>
</head>

<body>
<script>

var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien aaaaaa World War II"
var textChar = text.length

for (var i = 0; i < textChar; i++) {
	if (text.slice(i, i + 12) === "World War II") {
		text = text.slice(0, i) + "the second World War" + text.slice(i + 12);

	}
}
alert(text);

var test = "It is startling to think that, even in the darkest depths of World War II, J. R. R. bbbbbbbb World War II";
var firstChar = test.indexOf("World War II");
if (firstChar !== -1) {
	test = test.slice(0, firstChar) + "the second World War" + test.slice(firstChar + 12);
	alert(test);
}

var test = "It is startling to think that, even in the darkest depths of World War II, J. R. R. cccccccc World War II";
var test = test.replace(/World War II/g, "the second World War");
alert(test);
	
</script>

</body>
</html>