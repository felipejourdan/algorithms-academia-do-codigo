function amazonTask(str){
    let newStr = ""

    for (let i = 0; i < str.length; i++){
        let j = 1
        
        while (str[i] === str[i + j]){     
            j++
		}
		
		newStr = newStr + (j) + str[i]		
        i = (i + j) -1
    }
    return newStr
}

