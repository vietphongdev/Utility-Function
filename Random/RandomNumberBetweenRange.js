Cho hai số ngẫu nhiên min và max, biết rằng max > min

Tạo số ngẫu nhiên n thỏa mãn: min <= n < max
Ta luôn có:  0 <= Math.Random() < 1;

⇒ 0 <= Math.Random * (max-min) < max - min;
⇒ min <= Math.Random * (max-min) + min < max;

Vậy số n cần tìm chính bằng:  Math.Random * (max-min) + min

Tạo số ngẫu nhiên n thỏa mãn: min <= n <= max
Ta luôn có:  0 <= Math.Random() < 1;

⇒ 0 <= Math.Random * (max - min + 1) < max - min + 1;
⇒ min <= Math.Random * (max - min + 1) + min < (max - min + 1) + min;
⇒ min <= Math.Random * (max - min + 1) + min < max + 1;
⇒ min <= Math.Random * (max - min + 1) + min <= max;

Vậy số n cần tìm chính bằng:  Math.Random * (max - min +1) + min


min <= x <= max

=> min <= x < max + 1

=> 0 <= x - min <= max - min + 1

=> 0 <= (x - min)/(max - min + 1) < 1

=> Math.random() = (x - min)/(max - min + 1)

=> x = Math.random() * (max - min + 1) + min