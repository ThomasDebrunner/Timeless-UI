export default (n, callback) => 
  Array.from({length: n}, () => 0).map((_, index) => callback(index))