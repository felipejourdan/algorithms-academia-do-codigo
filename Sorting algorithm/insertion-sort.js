let numbers = [-10, 10, 32, 95, 100, -55, 44, 10, 33, -564]

function insertionSort(n){
	for (let i = 1; i < n.length; i++){ 
		let unsortedElement = n[i] //32
		let sortedIndex = i -1//1

		while (sortedIndex >= 0 && n[sortedIndex] > unsortedElement){
			n[sortedIndex + 1] = n[sortedIndex]
			sortedIndex = sortedIndex - 1
		}
		n[sortedIndex+1] = unsortedElement
	}
	return n
}

