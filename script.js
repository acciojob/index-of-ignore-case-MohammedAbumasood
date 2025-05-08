function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1 === ""){
		return 0;
	}
	if(s2 === ""){
		return -1;
	}

	const lowerStr = s1.toLowerCase();
	const lowerSubStr = s2.toLowerCase();

	return lowerStr.indexOf(lowerSubStr);
}

//Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:"); 
alert(indexOfIgnoreCase(s1, s2));
