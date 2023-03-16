// 3. Design a method to check how many numbers are divisible by 4,3and 5 in the array. 

let y = [100,80,120,300,15,480,24,7];
let result = 0;

for (i=0;i<y.length;i++) {
    if (y[i] % 60 == 0) {
        result++;
    }
}
document.write(result);