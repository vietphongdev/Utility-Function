
/**
 * Dùng vòng lặp
 */
const flatten = (input = [], output = []) => {
    input.forEach(item => {
      if(!Array.isArray(item)){
        output.push(item)
      } else {
        flatten(item, output)
      }
    });
    return output
}