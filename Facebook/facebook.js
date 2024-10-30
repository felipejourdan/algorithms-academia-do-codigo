function facebookTask(arr) {
	if (arr.length % 2 != 0)
		return false
	
	let middle = Math.floor(arr.length / 2 - 1)
	for (let i = 0; i <= middle; i++){
		let oppositeChar = (arr.length -1) - i
		if(arr[i] === "{" && arr[oppositeChar] != "}")
			return false
		else if (arr[i] === "[" && arr[oppositeChar] != "]")
			return false
		else if (arr[i] === "(" && arr[oppositeChar] != ")")
			return false			
	}
	return true
}

