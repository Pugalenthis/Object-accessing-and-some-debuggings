let arr = [{
    Memory_summary : [{
            Maximum_capacity : "2048BYTES",
                    Maximum_memory_module_size : "4096BYTES",
                            Memory : 4,
                                    Error_connection : "NONE",
                                            Dram_frequency : "199.0MHZ",
                                                    Memory_timings : "3-3-3-8(CL-RCD-RP-RAS)" }]
                                                    },{
    Manufacturer : "HYUNDAI ELECTRONICS",
        Part_number : "HYMD264 646D8J-D43",
            Serial_number : "FFFF7240",
                Capacity : "512MBYTES",
                    Memory_type : "DDR (PC3200)",
                        Speed : "200MHZ",
                            Supported_frequencies : "133MHZ,166MHZ,200MHZ",
                                Memory_timings : "2-2-2-6-0 at 133MHZ,at 2",
                                    Memory_Timings : "3-3-3-8-0 at 200MHZ,at 2",
                                        Data_width : "64BITS",
                                            Manufacturing_daye : "2005,WEEK 39",
                                                Epp_spd_support : "NO",
                                                    Xmd_spd_support : "NO"
                                                    }];
console.log(arr[0])
console.log(arr[1])
console.log(arr[0].Memory_summary[0].Memory)




1) var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = " ";
 
for (var i =0; i < numsArr.length; i++) {
 new_string +=numsArr[i] 
}
console.log(new_string);

Output: 1234567891011


2) var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string =[]
 
for (var i = 0; i < numsArr.length; i++) {
  new_string.push(numsArr[i]) }
  console.log(new_string.join(","))

Output: 1,2,3,4,5,6,7,8,9,10,11



3).  var new_string ="";
 
for (var i = 11; i > 0; i-- ) {
 new_string += [i] +" "
}
console.log(new_string.trim());

Output: 11 10 9 8 7 6 5 4 3 2 1


4)      var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=numsArr.length; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]



5).  var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!= 0 )
  {
   numsArr[i] = "even"
    }
    }
    console.log(numsArr);

Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]



6). var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0
for (var i = 0; i <numsArr.length; i++) {
sum += numsArr[i]
}
console.log(sum)

Output: 66



7)  var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <numsArr.length; i++) 
 if(numsArr[i]%2 ===0) {
  sum += numsArr[i]
  }
  console.log(sum);

Output: 30
