function findRow(n) {
  let row = 1; // begin from row 1
  let i = 1; // begin from first person
  let order = 0;
  while (i <= n) {
    order += 1; // put the first person into order 1
    if (order > row) {
      order = 1;
      row += 1;
    };
    i += 1;
  }
  return { row, order };
}
