let numbers = [-564, -55, -10, 10, 10, 32, 33, 44, 95, 100]

function selectionSort (n) {
    for (let i = 0; i < n.length; i++){
		let lowest = i

		for (let j = i + 1; j < n.length; j++) {
			if (n[j] < n[i])
				lowest = j;
		}

		if (lowest !== i)
			[n[lowest], n[i]] = [n[i], n[lowest]]
	}
	return n
}

