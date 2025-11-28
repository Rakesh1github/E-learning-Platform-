export const categories = [
    { id: "arrays", title: "Arrays", icon: "📊", desc: "Basics to Advanced Array problems" },
    { id: "strings", title: "Strings", icon: "📝", desc: "String manipulation and algorithms" },
    { id: "linked-list", title: "Linked List", icon: "🔗", desc: "Singly, Doubly & Circular Lists" },
    { id: "stack", title: "Stack", icon: "📚", desc: "LIFO operations and applications" },
    { id: "queue", title: "Queue", icon: "🚶", desc: "FIFO operations and applications" },
    { id: "recursion", title: "Recursion", icon: "🔄", desc: "Solving problems recursively" },
    { id: "sorting-searching", title: "Sorting & Searching", icon: "🔍", desc: "Binary Search, Merge Sort, etc." },
    { id: "trees", title: "Trees", icon: "🌳", desc: "Binary Trees, BST, AVL, etc." },
    { id: "graphs", title: "Graphs", icon: "🕸️", desc: "BFS, DFS, Shortest Path" },
    { id: "dp", title: "Dynamic Programming", icon: "💡", desc: "Optimization using subproblems" },
];

export const problems = [
    // Arrays
    {
        id: "two-sum",
        title: "Two Sum",
        category: "arrays",
        difficulty: "Easy",
        tags: ["Array", "Hash Table"],
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
        examples: [
            { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
            { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
        ],
        constraints: [
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "-10^9 <= target <= 10^9",
            "Only one valid answer exists."
        ],
        solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}`
    },
    {
        id: "kadanes-algorithm",
        title: "Kadane's Algorithm",
        category: "arrays",
        difficulty: "Medium",
        tags: ["Array", "DP"],
        description: "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
        examples: [
            { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
        ],
        constraints: [
            "1 <= nums.length <= 10^5",
            "-10^4 <= nums[i] <= 10^4"
        ],
        solution: `function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`
    },
    {
        id: "find-missing-number",
        title: "Find Missing Number",
        category: "arrays",
        difficulty: "Easy",
        tags: ["Array", "Math"],
        description: "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.",
        examples: [
            { input: "nums = [3,0,1]", output: "2" },
        ],
        constraints: [
            "n == nums.length",
            "1 <= n <= 10^4",
            "0 <= nums[i] <= n"
        ],
        solution: `function missingNumber(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}`
    },
    // Strings
    {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        category: "strings",
        difficulty: "Easy",
        tags: ["String", "Two Pointers"],
        description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
        examples: [
            { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
        ],
        constraints: [
            "1 <= s.length <= 2 * 10^5",
        ],
        solution: `function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}`
    }
];
