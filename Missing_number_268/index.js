const nums = [0, 2]
var missingNumber = function (nums) {
	isCheckMissingNumber = []
	const sortNums = nums.sort()
	let counter = 0
	const n = sortNums.length
	let number
	for (let i = 0; i < sortNums.length + 1; ) {
		isCheckMissingNumber.push(i++)
	}

	const isCheck = (isCheckMissingNumber, sortNums) => {
		for (let i = 0; i < sortNums.length + 1; i++) {
			counter = 0
			sortNums.forEach(element => {
				if (isCheckMissingNumber[i] !== element) {
					counter++
					if (counter == n) {
						number = isCheckMissingNumber[i]
					}
				}
			})
		}
	}

	isCheck(isCheckMissingNumber, sortNums)
	return number
}

console.log(missingNumber(nums))
