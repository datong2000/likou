// --------------------------------------------------------------- 合并两个有序数组
// var merge = function (nums1, m, nums2, n) {
//     if (n == 0) return nums1;

//     if (m == 0) {
//         for (let k = 0; k < n; k++) {
//             nums1[k] = nums2[k];
//         }
//         return nums1;
//     }

//     let num = (m + n), i, j, f, c, temp;

//     for (i = 0, j = 0; i < num; i++) {
//         if (i >= m && nums1[i] === 0) {
//             nums1[i] = nums2[j];
//             j++;
//         }
//     }

//     for (c = 0; c < num; c++) {
//         for (f = 0; f < num; f++) {
//             if (nums1[f] > nums1[f + 1]) {
//                 temp = nums1[f + 1];
//                 nums1[f + 1] = nums1[f];
//                 nums1[f] = temp;
//             }
//         }
//     }

//     return nums1;
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));
// console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
// console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));


// --------------------------------------------------------------- 生成每种字符都是奇数个的字符串
// var generateTheString = function (n) {
//     if (n % 2 !== 0) return 'a'.repeat(n);
//     else return 'a'.repeat(n - 1) + 'b';
// };

// console.log(generateTheString(6))


// --------------------------------------------------------------- 非递增顺序的最小子序列
// var minSubsequence = function (nums) {
//     let sum = 0;
//     let max = 0;
//     let value = 0;
//     let newArr = [];
//     let flag = true;

//     if (nums.length == 1) return nums;

//     for (let k = nums.length - 1; k > -1; k--) {
//         sum += nums[k];
//         if (nums[k] != nums[k - 1]) flag = false;
//     }

//     if (flag) return nums;

//     for (let i = 0; i < nums.length; i++) {
//         if (i < nums.length - 1)
//             for (let j = 0; j < nums.length; j++) {
//                 if (nums[j] > nums[j + 1]) {
//                     value = nums[j + 1];
//                     nums[j + 1] = nums[j];
//                     nums[j] = value;
//                 }
//             }
//     }

//     while (max <= sum) {
//         newArr.push(nums.pop());
//         max += newArr[newArr.length - 1];
//         sum -= newArr[newArr.length - 1];
//     }

//     return newArr;
// };

// console.log(minSubsequence([6]));
// console.log(minSubsequence([6, 7]));
// console.log(minSubsequence([8, 8]));
// console.log(minSubsequence([4, 3, 10, 9, 8]));
// console.log(minSubsequence([4, 4, 7, 6, 7]));
// console.log(minSubsequence([7, 4, 2, 8, 1, 7, 7, 10]));


// --------------------------------------------------------------- 搜索插入位置
// var searchInsert = function (nums, target) {
//     let flag = true;
//     let zero = true;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) { flag = false; return i; }
//         if (nums[i] < target && nums[i + 1] > target) return (i + 1);
//         if (nums[i] < target) zero = false;
//     }
//     if (zero) return 0;
//     if (flag) return nums.length;
// };

// console.log(searchInsert([1, 3, 5, 6], 0));


// --------------------------------------------------------------- 有序队列
// var orderlyQueue = function (s, k) {
//     if (!k) return s
//     if (k === 1) {
//         let r = s
//         const len = s.length
//         for (let i = 0; i < len - 1; i++) {
//             s = s.slice(1) + s[0]
//             let l = 0
//             while (s[l] === r[l] && l < len) l++
//             if (l === len) continue
//             if (s[l].localeCompare(r[l]) < 0) {
//                 r = s
//             }
//         }
//         return r
//     } else {
//         return s.split('').sort((a, b) => a.localeCompare(b)).join('')
//     }
// };

// console.log(orderlyQueue("adacab", 1));
// console.log(orderlyQueue("baaca", 3));


// --------------------------------------------------------------- 移除元素
// var removeElement = function (nums, val) {
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//     return k;
// };

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));


// --------------------------------------------------------------- 行星碰撞
// var asteroidCollision = function (asteroids) {
//     let cur, next;
//     for (let i = 0; i < asteroids.length; i++) {
//         cur = asteroids[i], next = asteroids[i + 1];
//         if (next == undefined) break;
//         if (Math.sign(cur) !== -1) {
//             if (Math.sign(cur) != Math.sign(next)) {
//                 if (Math.abs(cur) > Math.abs(next)) asteroids.splice(i + 1, 1);
//                 if (Math.abs(cur) < Math.abs(next)) asteroids.splice(i, 1);
//                 if (Math.abs(cur) == Math.abs(next)) asteroids.splice(i, 2);
//                 i = i - 2 < -1 ? -1 : i - 2;
//             }
//         }
//     }
//     return asteroids;
// };

// console.log(asteroidCollision([-2, -1, 1, 2]));
// console.log(asteroidCollision([-8, 8]));
// console.log(asteroidCollision([8, -8]));
// console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([-5, -8, 30, -21, 10, 2, -5, -8, -10, 15]));


// --------------------------------------------------------------- 最长公共前缀
// var longestCommonPrefix = function (strs) {
//     let first = strs[0];
//     let str = '';
//     let lockStr = true;
//     for (let i = 0; i < first.length; i++) {
//         lockStr = strs.every(item => (item.startsWith(str + first[i])))
//         if (!lockStr) break;
//         str += first[i];
//     }
//     return str;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));


// --------------------------------------------------------------- 两数之和
// var twoSum = function (nums, target) {
//     let arr = null;
//     for (let j = 0; j < nums.length; j++) {
//         if (arr != null) return arr;
//         for (let i = j + 1; i < nums.length; i++) {
//             if ((nums[j] + nums[i] === target)) {
//                 arr = [j, i];
//                 break;
//             }
//         }
//     }
// };

// console.log(twoSum([2, 7, 11, 15], 9));


// --------------------------------------------------------------- 回文数
// var isPalindrome = function (x) {
//     let num = x.toString().split('').reverse();
//     return x === parseInt(num.join('')) ? true : false;
// };

// console.log(isPalindrome(121));


// --------------------------------------------------------------- 奇数单元格的数目
// var oddCells = function (m, n, indices) {
//     let Cells = new Array(m);
//     for (let i = 0; i < m; i++) Cells[i] = new Array(n).fill(0);
//     indices.forEach(location => {
//         Cells[location[0]].forEach((lat, latIdx) => (Cells[location[0]][latIdx]++));
//         Cells.forEach((lng) => (lng[location[1]]++));
//     })
//     let count = 0;
//     Cells.flat(Infinity).forEach(v => {
//         v % 2 === 0 ? count : count += 1;
//     })
//     return count;
// };

// console.log(oddCells(2, 3, [[0, 1], [1, 1]]));