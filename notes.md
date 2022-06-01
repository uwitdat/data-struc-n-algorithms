
<h1> BIG O NOTATION </h1>

All content in this repo makes reference to this Udemy course =>>
[Data Stuctures and algorithms couse](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/)

 1. O(n) --> linear Time: n is relative to number of inputs. EX: a loop through 5 items is O(5). TIME COMPLEXITY === FAIR

2. O(1) --> Constant Time: regardless of the amount of elements/inputs, the number of operations will always remain the same. TIME COMPLEXITY === EXCELLENT

3. O(n^2) --> Quadratic Time: the order of operations increases via multiplation relative to the amount in elements. More input will equal greater exponential increase of order of operations TIME COMPLEXITY === HORRIBLE

<h2> CALCULATING BIG O RULES </h2>

 1. WORST CASE: assume you don't know where your item is in the input. Assuming the item is at the very end

 2. REMOVE CONTANTS: when calculating big O, the constants are not important is there is an n present.

 3. DIFFERENT TERMS FOR INPUTS: If there is more than one input, we add each input as a linear time variable to O
    
    EX, function(a, b){a.forEach(), b.forEach()} === O(a + b)

 4. DROP NON DOMINANT TERMS: If a function measures O(n) and O(n^2). 

     O(n^2) is dominant due to it's time complexity increase at scale, so we drop O(n) from the measuement.