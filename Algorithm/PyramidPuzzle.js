/**
 * Có một số người tập chung xếp hàng để chơi trò chơi. Họ đứng xếp theo quy luật kim tự tháp. 
 * Tức là theo thứ tự từ trên xuống dưới thì:
+ Hàng 1 có 1 người
+ Hàng 2 có 2 người
+ Hàng 3 có 3 người

Và để dễ dàng ta sẽ đánh số cho mỗi người theo thứ tự từ trên xuống dưới, từ trái qua phải, bắt đầu từ 1, 2 , 3 vv…
Hỏi rằng người có số thứ tự 2022 sẽ nằm ở hàng số mấy và vị trí thứ mấy trong hàng đó.

 */

const findRow = (order) => {

let row = 0;
let amountOfROw = 0;
    
for(let i = 1; i <= order; i++){
    amountOfRow += 1;
    if(amountOfRow > row){
    row += 1;
    amountOfRow = 1;
    }
};  
return row;   
}

const result = findRow(2022);
console.log(result);
    
    