function countPsumN(input) {

    // If input is empty, return an empty array
    if (input == null || input.length == 0){
        return [];
    }
    else{

        // Initialize sum and counter
        let negativeSum = 0;
        let positiveCount = 0;

        // Add every negative number to sum, and count every positive number
        input.forEach(number => {
            if (number < 0){
                negativeSum += number
            }
            else if (number > 0){
                positiveCount += 1;
            }
        });

        // Return the result
        return [positiveCount, negativeSum];

    }
}