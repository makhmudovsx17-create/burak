// MITASK - M

function getSquareNumbers(numbers: number[]): { number: number; square: number }[] {
    return numbers.map((number) => {
        return { number: number, square: number * number };
    });
}

console.log(getSquareNumbers([1, 2, 3]));

// MITASK - L

// function majorityElement(arr: number[]): number {
//     const counts: Record<number, number> = {};
//     let maxCount = 0;
//     let result = arr[0];

//     for (const num of arr) {
//         counts[num] = (counts[num] || 0) + 1;

//         if (counts[num] > maxCount) {
//             maxCount = counts[num];
//             result = num;
//         }
//     }

//     return result;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));