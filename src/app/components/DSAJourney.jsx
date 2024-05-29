"use client";
import React, { useRef } from "react";
import JourneyCard from "./DSAJourneyCard";
import { motion, useInView } from "framer-motion";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

const projectsData = [
  {
    id: 1,
    title: "Problem 1 Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target",
    learnings: "javascript has a new Map() class which has attributes .has() which returns a boolean of whether the map keys has that value o r not and .set() which takes 2 parameters as input, a key and a value and sets them. We can also use for in loops in javascript with the syntax: for (const index in nums) {}",
    methodology: "I made a hash map, firstly, I iterate through each number and check if target - that index exists in map, if it does, then that pair (current and value of pairTarget) is returned, and I set the map after this with nums[index] and index.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 2,
    title: "Problem 9 Palindrome Number",
    description: "Given an integer x, return true if x is a palindrome and false otherwise.",
    learnings: "0 is a palindrome, -ve numbers and non zero leading zero numbers are not palindromes. Math.floor() function exists, can return true or false with temp===reverse statements. x.toString() is a function that converts number to string. X2.length is a string function which returns length of string. Use let in a for loop instead of const since the variable is changing",
    methodology: "Declare 2 variables, temp and reverse. Modulus temp by 10 to get last digit, multiply reversed with 10 and add that digit to get the reversed of a number and keep doing it while temp > reversed (to only reverse half number) and return if temp and number are equal (for even digits) and temp == reversed/ 10 ( for odd digits)",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 3,
    title: "Problem 13 Roman to Integer",
    description: "Given a roman numeral, convert it to an integer.",
    learnings: "a map can be defined as a constant for multiple constant numbers like: const map = {'I' : 1, 'V' : 5 } etc. also there are st r.indexof(substr) function which returns index of the substr or -1 if not found and str.replace(substr1, substr2) which replaces substr1 with substr2 in str (this is not in -place, this returns a new string which is to be re-assigned)",
    methodology: "Firstly, I tried incorporating numbers like IV etc into the hash map as well and then checking their index, removing them f irst and adding their value and then running simple for loop on remaining singular indexes. A better way to do this with respect to this problem is to get 2 numbers, the current and next and if current is less than next, that means we are in a IV situation, we can add total += next - curr and increment I to skip the next character",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 4,
    title: "Problem 14 Longest Common Prefix",
    description: " Write a function to find the longest common prefix string amongst an array of strings.",
    learnings: "to sort an array, the function is array.sort(function(a,b) { return a.length - b.length; }); (note: this one was for string arrays). Also, need to develop edge cases thinking as well, in this case, edge cases were a single string, empty string, multiple empty strings, same string multiple times for that, separate if conditions and sorting was needed before main algorithm",
    methodology: "it was simple, for all elements, if their first characters are same (kept check through a boolean variable) then proceed to n ext character, exit this while if smallest substring length reached or if boolean returns false on any single mismatch.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 5,
    title: "Problem 20 Valid Parentheses",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    learnings: "we can return true or false with conditions like return a==2 returns true if a is first prime number etc. the method to mak e const map = { ')' : '(' } is an object, and to access its values, we can use Object.values(map) and it returns an array of all the values (not keys). And then, we can use the arr.includes() f unction to check if the array has the thing specified. Similarly, map.hasOwnProperty() function is used to check if the map keys have the specified value. Also, we can use stacks ( as an arrays) with declring it as const stack = [] and then use stack.push() or stack.pop() methods respectively. Also, its length is found using stack.length.",
    methodology: "Basically just make an empty stack and a hash map of closing : opening bracket pairs. Then iterate through each character of s, a character is included in the values (opening bracket) then push it to stack. Or if it is a closing bracket, then if stack has nothing (checked by !stack.length) or that character is not equal to stack.pop then return false. And at the end, return stack.length === 0 to check if anything isnt left in the stack.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 6,
    title: "Problem 21 Merge Two Sorted Lists",
    description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    learnings: "So, in Javascript, to make a ListNode, use the function: function ListNode(val, next) { this.val = (val===undefined ? 0 : val) this.next = (next===undefined ? null : next) } And the ListNode can be defined as: let dummy = new ListNode(); also, to append remaining list1 or list2 to the end of sorted list, instead of checking which is null, just do: remlist = list1 || list2. And obviously other things are the same old as: Curr.next = list1 or Curr.val = list1.val. Also, if you want to switch values of 2 variables (lists in this case), do: [list1, list2] = [list2, list1]",
    methodology: "There were 2 methodologies. First one is the normie one where you make a dummy list, check which list1 or list2 has smaller v alue, assign dummy.next = list1 accordingly then increment the selected list (list1 = list1.next) in the if condition and dummy (dummy = dummy.next) outside if conditions in while loop to progress and use the list1 || list2 line to append the remaining list. Another fun method is the recursion method. Base case is if either of list is null (!list1 || !lis t2) then use ternary operator to return list1 or list2 accordingly. Now this method only returns list1, so we have to ensure list1 is the smallest one, for that, we place a check if list1 great er, then switch list1 and list2 and list1,next = recursive call with list1,next and list2. and finally, the head of the list is at list1 (since the recursive calls are what built the list, so list1 is returned).",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 7,
    title: "Problem 26 Remove Duplicates from Sorted Array",
    description: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.",
    learnings: "If you revise your code multiple times, it will get efficient. Look for any variables that contribute nothing and can be remo ved. Previous concepts of stack, push, includes were used.",
    methodology: "Make a unique array, run a for loop against nums, keep a k variable initialized to 0, if unique does not include nums[i] then push it to unique, assign nums[k] to unique[k] and increment k. then simply return k.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 8,
    title: "Problem 27 Remove Element",
    description: "Given an integer array nums and an integer val, remove all occurrences of val in nums in -place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.",
    learnings: "If you want to store something at an index and then increment index, you can use pre/post increment operators like: arr[count ++] = nums[i] etc.",
    methodology: "Same as problem 7, run a for loop for each element and keep a counter, if element not value, assign it to the counter place i n nums and increment counter",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 9,
    title: "Problem 28 Find the Index of the First Occurrence in a String",
    description: "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
    learnings: "Str.substring(start,end) method takes arguments of starting and ending positions in the string.",
    methodology: "Loop through the haystack, at every index, separate substring of size needle (I, i+needle.length) and compare it with needle if it matches, return i. outside the for loop, return -1",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 10,
    title: "Problem 35 Search Insert Position",
    description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the ind ex where it would be if it were inserted in order.",
    learnings: "There is also an iterative approach to using binary search. Make left and right pointers and run a while loop until left < ri ght. Then proceed as usual.",
    methodology: "Made 2 pointers for left and right, calculated mid in loop, if target > nums[mid] then left = mid + 1 else right = mid and th en finally return left. Outside of the while loop",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 11,
    title: "Problem 58 Length of last word",
    description: "Given a string s consisting of words and spaces, return the length of the last word in the string",
    learnings: "To reverse a string, use a composition of the following builtin functions: str.split(\"\").reverse().join(\"\"); it is to be not ed that reverse() works only on arrays. Also, to remove whitespaces, use str.trim() function.",
    methodology: "Reverse the string, trim it and run a while loop until \" \" is seen, keep concatenating last word and return its length. Optim izations: why keep record of word at all? Just keep incrementing counter and return it",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 12,
    title: "Problem 66 Plus One",
    description: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. T he digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.",
    learnings: "For exponent, javascript takes it as ** operator. Although BigInt is a thing in javascript, it can only be used with initiali zation. Problems like this one can have integers not within the range of a normal variable, so write efficient code accordingly. Arr.Unshift(num) is a function that adds a number at the sta rting of an array in javascript.",
    methodology: "I first decided to construct back the original number in the array by multiplying it with 10 power its position using a for l oop, adding 1 to it and then breaking it down by taking modulus and divison by 10. this approach failed as larger numbers (arrays) were introduced, so now the improved approach is t o use recursion to start calling from the right most (length-1) index of array and add 1 to it if it is less than 9, and return the array (base case). If it is greater than 9, then assi gn 0 to the current position, (place a check here if we are at left most index (index 0) and use the unshift function to add 1 at the start of the array, this means number was 99…9 and ret urn array) and recursively call function at the curr-1 index.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 13,
    title: "Problem 67 Add Binary",
    description: "Given two binary strings a and b, return their sum as a binary string.",
    learnings: "\'0b{a}\' can be used to convert a binary string to a BigInt number, then you can add them using BigInt function and finally, t oString(2) converts the final answer to a binary string. This was a simple easy approach, but originally, this is to be done in the way said below. Also, if you want to add something to l eft or right of string, just use a + str or str + a accordingly.",
    methodology: "We can start by aligning the two binary numbers by adding leading zeros to the shorter string so that both strings have equal lengths. Then we can add the digits from right to left (using a for loop that goes from length-1 to 0. at each iteration, manually cover all cases for eich bit being either 0 or 1. since we have 3 variables (a,b,carry) t his will result in 8 if conditions) and keep track of any carry generated. Finally, we add the carry to the leftmost position if any. ",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 14,
    title: "Problem 69 Sqrt(x)",
    description: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non -negative as well.",
    learnings: "Okay so…. Theres a way to find sqrt, from the number, keep subtracting consecutively increasing odd numbers and the integer p art of square root is the number of times the number was subtractable without going in -ve. ",
    methodology: "Exactly, that, I made 3 variables: subtractable (boolean), num (for consecutively increasing odd numbers) and count (to count the number of times it was subtractable) then I used a while loop with subtractable variable and within it, checked if x is less than 0 after updated and switched the boolean value . Else, incremented count by 1.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 15,
    title: "Problem 70 Climbing stairs",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many dis tinct ways can you climb to the top?",
    learnings: "Okay so for this question, without even looking at the code solution, I began developing intuition. We can only make 2 moves. Climbing 1 stair or climbing 2 stairs. Think of it like this. If we have 2 stairs, we can make 2 moves. If we make step=1, then remaining stairs are 1 and that can be covered in 1 steps. If we make 2 steps, then the remaining stairs are 0 and that can be covered in 0 steps. So basically, for stairs =1, there is 1 way and for stairs =2, there are 2 ways. If stairs ar e 3, then if we climb 1 step, the remaining is 2 (=2) and if we climbg 2 steps, the remaining is 1 (=1) so in total, we have 2+1 =3 ways. To solidify this, if num stairs is 4, then 1 step r emaining stairs are 3 (=3) and if we take 2 steps, the remaining stairs are 2 (=2) so total = 3+2 =5. This is called dynamic programming, and this resembles the fibonacci sequence. One more thing, this question also involved memoization and for that, we can just use a simple Array defined by: const dp = new Array(n+1).fill(0);, dp[0]=1; dp[1]=1; and so on.",
    methodology: "Used memoization, in a for loop from 2 to n, the ith index value of array is i-1 (1 step) + i-2 (2 steps), then simply return nth index",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 16,
    title: "Problem 83 Remove Duplicates from Sorted List",
    description: "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked lis t sorted as well.",
    learnings: "In the while traversal loop, insteal of checking if curr.next != null, you can simply put condition while (curr && curr.next) also, in js, curr.next.next is a valid thing.",
    methodology: "Pretty much the same as traversal tbh, make a new variable starting at head to traverse, while it and its next node is not nu ll, keep traversing (you traverse by curr = curr.next in the while loop) and just place a check for this question if curr.value is the same as curr.next.value then curr.next = curr.next. next (skip the middle repeated value node and move on to the next one)",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 17,
    title: "Problem 88 Merge Sorted Array",
    description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. (in-place for nums1, size will be m+n)",
    learnings: "If you want to shift numbers to the right, start from the very end (length-1) and put i=i-1 indexes and so on (for in place adjustments). For this question, there were some edge cases that I realized while dry running and thus, from now on, it is better to have a rough register to sketch my solutions first.",
    methodology: "Used 2 pointers and a while loop, while both pointers were less than their boundries (m and n), if nums1 was less than just i ncrement itr1 as it has to stay in place, else, run a for loop to shift all numbers in nums1 1 digit to the right and then assign itr1 index to nums2[itr2] and increment all pointers (itr1 ,itr2 and m (to accommodate increased size)) lastly, if any left in nums2 (itr2<n) then add them to the ending of nums1. Using javascript, a more optimized solution would have been to append nums2 to end of nums1 and use the builtin sort function.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 18,
    title: "Problem 94 Binary tree InOrder Traversal",
    description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    learnings: "We cant think such things, its better to remember them. InOrder traversal is left,val,right. Preorder traversal is val,left,r ight and postorder traversal is left,right,val.",
    methodology: "These are done using recursive functions where argument is root, if root is null, then return empty list else for inorder, el se, recursive call on left node, append value, recursive call on right node and then return result.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 19,
    title: "Problem 100 Same Tree",
    description: "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
    learnings: "Was different, first of all, if the if condition executes just one line, then simply don’t use {} brackets and write the line infront of condition. And to return on multiple conditions, write && in return statement",
    methodology: "First check if both null then true, if either of them null (OR) then return false, else, return val1==val2 && recursive call on left and recursive call on right.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 20,
    title: "Problem 101 Symmetric Tree",
    description: "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    learnings: "Take a notebook and a pen and start sketching possible test cases and edge cases that come to your mind. Develop a rough algo rithm and then start debugging it according to those test cases. To declare an arrow function, do const FuncName = (arg1, arg2) => { //funct body} ",
    methodology: "It was easier to make another function isSame, which took input left and right nodes to compare, it checked if exactly one of the nodes is null or if their values don’t match, then return false, If both are null, return true, but if both their values are same, then return isSame(left.left,right.right) && isSame(left.right,right.left). Here, we need to take care of which parent node's which child node we are passing as arguments, as they are supposed to be mirror nodes. Now in the main function , just check for edge case if root is null then return true, else, call isSame function on left and right nodes",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 21,
    title: "Problem 104 Maximum Depth of Binary Tree",
    description: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the lon gest path from the root node down to the farthest leaf node",
    learnings: "The doing it all on paper first approach worked here, I was able to foresee possible execution steps and correct them before submitting. Now, this uses an approach to calculate height of tree (discussed in methodology) the key learning here is that approach can be shortened to: return Math.max(maxDepth(root. left), maxDepth(root.right)) + 1. and returning 0 if null root found. Another thing, null in javascript is represented by all lowercase null.",
    methodology: "Useful algorithm to find the height of a tree recursively, uses 2 arguments, node and height if both left and right null, the n return height. If left exists only then return recursive call to node.left, h+1. similar if only right exists, call with right node. But if both exists, then call both of them using a Math.m ax function or a ternary operator (to return the larger of the 2 values)",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 22,
    title: "Problem 108 Convert Sorted Array to Binary Search Tree",
    description: "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
    learnings: "So the main takeaway so far regarding trees is that they have mainly recursion-based solutions, and that sometimes, drawing helps understand the problem better. also, the way to make a new root is: const root = new TreeNode(nums[mid]);",
    methodology: "this problem required me to take a list, make its mid element the root node, then from the remaining 2 lists, make their mid node the root node and so on. we can see that this pattern was both recursive and divide and conquer in nature, so, i made a helper function which if start > end then return null (an approach of divide and conquer. then find mid, make a new root with the mid indexed number, then assign its left tree as helperfunc(nums, start, mid-1) and right tree as helperfunc(nums,mid+1,end)",
  },
  {
    id: 22,
    title: "Problem 110 Balanced Binary Tree",
    description: "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.",
    learnings: "Okay so theress a way to find height of a tree with just the node, dfs(node) {if !node return 0; let left = dfs(node.left); let right = dfs(node.right); return Math.max(left,right) + 1} this +1 at the end is the real game. also, there is a Math.abs() function for absolute",
    methodology: "the best methodology was an edge case if root is null then return true, else run modified dfs witth if Math.abs(left-right) >1 then return false else if function terminates then return true (use a boolean variable for this)",
  },
  {
    id: 24,
    title: "Problem 111 Minimum Depth of Binary Tree",
    description: "Given a binary tree, find its minimum depth.The minimum depth is the number of nodes along the shortest path from the root no de down to the nearest leaf node. Note: A leaf is a node with no children",
    learnings: "Not as such, same as Problem 104.",
    methodology: "Same as problem 104, just reverse the condition at the end. (instead of return maximum depth, return minimum depth)",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 25,
    title: "Problem 112 Path Sum",
    description: "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.",
    learnings: "Okay so im seeing a bit of a trend here. When a TargetSum esque question is given, think of trying to attempt it by subtracting the current number from it. in this case, i did the same, explained in methodology; also, another thing i noticed. when working with trees and want to test something on both left and right nodes, the return statement can be used with a logical operator to return true if any of the left or right nodes return true.",
    methodology: "base case if root is null then return false, if targetsum - root.val is 0 and root is a leaf node (left right are null) then return true. otherwise, return a recursive function call with left and right nodes and targetsum - root.val (logical OR)",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 26,
    title: "118. Pascal's Triangle",
    description: "Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:",
    learnings: "Basically, dynamic programming is you establish base characters then build on top of them using the previous answers (starting from base) In this solution, when i call previous = generate(numRows-1), it generates the triangle upto numRows-1.",
    methodology: "firstly, handle simple cases like numRows= 1 or 2, then generate previous row by recursively calling this function with numRows-1, then for each row, make a new array, push 1 at start and end and then iterate through the previous row and push the sum of i (starting from 1) and i-1 elements of previous row to the new row. then push this new row to the result array and return it.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 27,
    title: "119. Pascal's Triangle II",
    description: "Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.",
    learnings: "Some problems can also be attempted mathematically. This problem was solved using Binomial Expansion formula = sum(nCr * x^r) where r is the row index and n is the row number (i in our case). Also, the formula for nCr is n!/(r! * (n-r)!) and nCr-1 = nCr * (n-r+1)/r",
    methodology: "declare initial result to be [1] for i=1 <= rowIndex, i++ let currentElem = result[i-1] * (rowIndex-i+1)/i and push this element to the result array and return it",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 28,
    title: "121. Best Time to Buy and Sell Stock",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    learnings: "From now onwards, i will be keeping track of useful algorithms. for example, in this question, the kadane's algorithm is used, also called the sliding window technique. This is usually used to reduce time complecity from O(n^2) to O(n) In this approsch, we maintain 2 pointers In an example where we have to find smallest subarray which sums to a target, the right pointer increments till sum of array >= target (now, further elements are not important to us) and then the left pointer increments till sum of array < target.  This way, it only takes one pass through the array.",
    methodology: "we take lowestSell (of when can i least buy it) and highest profit of onwards it. since we have to sell after buying it, only one pass of the array is needed. we use a for loop, in it, if prices are less than lowestSell, then assign prices[i] to LowestSell (moving the left pointer since we found a better optimal now). and for each iteration, use Math.max to assign highestproft prices[i]- lowestSell or itself (moving right pointer). eventually return highestProfit",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 29,
    title: "125. Valid Palindrome",
    description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
    learnings: "first of all, the toLowerCase() function is used to convert a string to lowercase. Also, the replace() function is used to replace a substring with another substring. Also, the regular expression [^a-z0-9] is used to remove all non-alphanumeric characters. its syntax is s.replace(/[^a-zA-Z0-9]/g, '') ",
    methodology: "using the two pointers approach, use  while loop if left < right and matched. then in it, use an if condition to check if left right indexes match, if they do, bring them closer, else, turn matched to false and return false. outside while. return true",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 30,
    title: "136. Single Number",
    description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
    learnings: "Bit manipulation suddenly became important. bitwise operation XOR is used in this case using the ^ carat simble, XOR of a number with itself is 0.",
    methodology: "initialize a variable to 0, then iterate through the array and XOR the number with the variable (same numbers bits will cancel out and return 0). at the end, only the non-same number will remain as bits, return that variable",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 31,
    title: "141. Linked List Cycle",
    description: "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.",
    learnings: "let visited = new Set(); can be made which as .has and .add methods to act as a hash map. this was how i solved it, but interestingly, there is an algorithm called tortoise and hare algorithm used to exactly detect cycles. toroise moves by 1 node and hare moves by 2 nodes. If there is a cycle, the slow and fast keep looping until eventually, they meet if they meet, there is a cycle. if hare reaches the end, then there is no cycle. To find entry point of cycle, once they meet, step them one by one until they meet again. that is the entry point of cycle.",
    methodology: "i simply did it using hashmap, to cater to edge cases, if head or next is null, then return false. else, in a while loop, keep searching if head exists. if it does, return true, else add head to visited and then outside while loop, return false",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 32,
    title: "144. Binary Tree Preorder Traversal",
    description: "Given the root of a binary tree, return the preorder traversal of its nodes' values.",
    learnings: "its better to make the function within the asked for function, as it can then use an array globally and fill it with pre order traversal. order is obviosly root, left, right",
    methodology: "cater to edge cases if root is null, return empty. if left and right null, return root, then make a function dfs, base case is if node is null then return; otherwise, target.push(node.val) dfs(node.left) dfs(node.right) and return target",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 33,
    title: "145. Binary Tree Postorder Traversal",
    description: "Given the root of a binary tree, return the postorder traversal of its nodes' values.",
    learnings: "nothing much, same as 144, just order of execution is different.",
    methodology: "nothing much, same as 144, just order of execution is different. dfs(root.left) dfs(root.right) target.push(root.val) in the dfs function",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 34,
    title: "160. Intersection of Two Linked Lists",
    description: "Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.",
    learnings: "One of the better approaches would have been to concatenate both strings like A+B and B+A and then traverse them until these 2 lists dont match the same node. (while condition) and return one of the lists. if it intersected, while condition terminates and returning returns the intersecting node. else, it returns null if reaches the end",
    methodology: "I however used a list to firstly push all entries of linkedlist A and then used another while to traverse list B and check if the node exists in list. if it does, return it else, go to next node and return null outside of while",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 35,
    title: "168. Excel Sheet Column Title",
    description: "Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.",
    learnings: "The main trick here was to realize that you need to convert number from base 10 to base 26. utilizing some of the binary conversions logic :P, the learnings are that string.fromCharCode(64+ character) converts number to its ascii character",
    methodology: "make a string result, while columnNumber > 26, extract last alphabet (by taking modulus with 26) and convert it to char and append it to result. then update columNumber with (columnNumber - last) /26 then finally, reverse your result array using split, reverse, join",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 36,
    title: "169. Majority Element",
    description: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
    learnings: "Using a hashmap will roughly take O(n) space. but if we want to take O(1) space, then we can use Election algorithm: we keep a count variable and a candidate variable. if count is 0, then assign candidate to current element. if current element is candidate, then increment count, else decrement count. at the end, the candidate will be the majority element.",
    methodology: "I, however, implemented it using Hashmap. i made a hashmap using hash keyword, then iterated through the array, if element exists in hashmap, increment its value, else, add it to hashmap, and keep track of majority element using highest approach. at the end, simply return majority element",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 37,
    title: "171. Excel Sheet Column Number",
    description: "Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.",
    learnings: "this question simply tested converting alphabets to base 26 numbers string.charCodeAt(0) - 64 converts a character to its ascii number. also, the Math.pow(26, power) function can be used to calculate 26^power",
    methodology: "i used .split('').reverse() to get the characters in order and then ran a for loop over the array to get character codes and multiply them with 26^ their index at for loop",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 38,
    title: "190. Reverse Bits",
    description: "Reverse bits of a given 32 bits unsigned integer.",
    learnings: "Okay so this was a bit manipulation question. the main thing to remember is that the bitwise operators are: & (and), | (or), ^ (xor), ~ (not) and << (left shift) and >> (right shift). Also, the way to get the last bit of a number is to do n & 1. and to get the first bit, do n >> 31. Also, to set the last bit of a number to 1, do n | 1 and to set the first bit to 1, do n | 1 << 31",
    methodology: "With those learnings, i made an ans variable and ran a for loop from 0 to 31 then i used ans <<= 1 to push ans bits 1 to the left to make space for upcoming bit then i added and extracted right most bit of n using ans |= n&1 and i discarded rightmost bit of n using n>>=1. finally, ans >>>0 to return answer as a number.",
    image: "/images/Journey/lc_js.jpg",
  },
  {
    id: 39,
    title: "191. Number of 1 Bits",
    description: "Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).",
    learnings: "nothing much, this was just a number to binary conversion on thing is optimization, i didnt even need to convert to binary, just place check on each conversion.",
    methodology: "make a variable retval=0, while n>0 if n%2 == 1? retval +=1 : 0 (used ternary operator) n=Math.floor(n/2) and return retval",
    image: "/images/Journey/lc_js.jpg",
  },
];

const DSAJourney = ({ setSelectedProject }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="Journey">
      <div className="flex items-center justify-between">
      <button
        onClick={() => setSelectedProject(0)}
        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
      >
        <ArrowLongLeftIcon className="h-5 w-5" />
      </button>
      <h2 className="text-center text-4xl font-bold text-white mt-12 mb-8 md:mb-12 mx-auto">
        DSA
      </h2>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <JourneyCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              learnings={project.learnings}
              methodology={project.methodology}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default DSAJourney;
