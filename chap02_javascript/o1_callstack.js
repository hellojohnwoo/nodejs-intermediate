function run() {
  console.log('After 3 sec, Excute')
}

console.log('start');
setTimeout(run, 3000);
console.log('end');


// [* Call Stack]                                      [* Back Ground]
//    [console.log('end');] - (4)                          TimeRanges(run, 3000) - (3) (6)out be practicable at the same time in Back Ground
//    [setTimeout(run, 3000);] - (3)
//    [console.log('start');] - (2)
//    [anonymous] - (0) (5)out
//    [run] - (7)
//                              <* Event Loop>


//                                                    [* Task Queue]
//                                                         [run] - (6) (7)move



// [* Memory]                                          [* Console]
//    [run] - (1)                                          start - (2)
//                                                         end - (4) 