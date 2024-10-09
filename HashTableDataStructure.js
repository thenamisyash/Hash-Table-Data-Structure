// ******************************************** Hash Table **************************************
// "A hash table is a data structure that uses a hashing function to map keys to values, 
// allowing for efficient insertion, retrieval, and deletion operations, often in constant time, O(1). 
// The hashing function converts keys into a hash code, which determines where the key-value pair is stored in the table. 
// Hash tables are commonly used in caching, memoization, and for fast lookups in various applications. 
// However, handling collisions (when two keys generate the same hash) can increase the time complexity."

class HashTable {
  constructor(size) {
    // Initialize the hash table with a given size
    this.data = new Array(size);
    this.size = size;
  }

  // Hash function: converts a key into a hash value to determine its index in the data array
  hash(key) {
    let hash = 0;
    const stringKey = typeof key === "string" ? key : key.toString();
    for (let i = 0; i < stringKey.length; i++) {
      // Create a simple hash calculation using character codes and index position
      hash = (hash + key.charCodeAt(i) * i) / this.data.length;
    }
    return Math.floor(hash);
  }

  // Set function: adds a key-value pair to the hash table
  set(key, value) {
    let address = this.hash(key);
    // Handle collisions using a bucket (array) at each index
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // Get function: retrieves a value by key from the hash table
  get(key) {
    let address = this.hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      // Search through the bucket to find the correct key-value pair
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }

  // Remove function: deletes a key-value pair from the hash table
  remove(key) {
    let address = this.hash(key);
    const bucket = this.data[address];

    if (bucket) {
      // Search and remove the key-value pair if found
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}


// ********************************************** Check for Duplicate Values ***********************************************
// This function checks if an array contains duplicate values
function hasDuplicates(arrays) {
  let map = new Map();

  for (let i = 0; i < arrays.length; i++) {
    // If the value is already in the map, return true (indicating a duplicate)
    if (!map.has(arrays[i])) {
      map.set(arrays[i], true);
    } else {
      return true;
    }
  }
  // If no duplicates, return the map
  return map;
}

// ********************************************* Hash Generator function with Fixed length 50 *********************************************
// This function generates a hash for a given key using function-based programming and a fixed length
function hashGenerator(key) {
  let hash = 0;
  let keySize = 50; // Fixed length for hash table size
  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i) * i) / keySize;
  }
  return Math.floor(hash);
}

// ********************************************* Find First Non-Repeating Character **********************************************
// This function finds the first non-repeating character in a given string
function firstNonRepeatingChar(string) {
  let map = new Map();

  // Count occurrences of each character in the string
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Find the first character with only one occurrence
  for (let i = 0; i < string.length; i++) {
    if (map.get(string[i] === 1)) {
      return string[i];
    }
  }

  // Alternate method using string indices
  for (let i = 0; i < string.length; i++) {
    if (string.lastIndexOf(string[i]) === string.indexOf(string[i])) {
      console.log(string[i]);
    }
  }
  return null;
}
// console.log(firstNonRepeatingChar("aabccbd"));

// *********************************************** Group Anagrams Question **************************************************************
// This function groups anagrams from a given array of words
const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(words) {
  let map = new Map();

  for (let item of words) {
    // Sort each word's characters to use as a key
    let sorted = item.split("").sort().join("");
    // If the sorted word is not in the map, add it, otherwise append it to the existing group
    if (!map.has(sorted)) {
      map.set(sorted, [item]);
    } else {
      map.get(sorted).push(item);
    }
  }
  // Return an array of grouped anagrams
  return Array.from(map.values());
}

// ********************************************** Hash Function Used **********************************************
function hash(key) {
  let hash = 0;
  const stringKey = typeof key === "string" ? key : key.toString();
  for (let i = 0; i < stringKey.length; i++) {
    // Generate hash using character codes and index
    hash = (hash + stringKey.charCodeAt(i) * i) / 50;
  }
  return Math.floor(hash);
}

// ****************************************************** Hash Set class *******************************************************
// This class implements a simple Hash Set using objects for storage
class Set {
  constructor() {
    this.data = {};  // Object to store set values
    this.size = 0;   // Track the size of the set
  }

  // Check if the set contains a specific value
  has(value) {
    return Object.prototype.hasOwnProperty.call(this.data, value);
  }

  // Add a value to the set if it's not already present
  add(value) {
    if (!this.has(value)) {
      this.data[value] = value;
      this.size++;
      return this.data;
    }
    return false;
  }

  // Delete a value from the set if present
  delete(value) {
    if (this.has(value)) {
      delete this.data[value];
      this.size--;
      return "Successfully Deleted";
    }
    return "Not Available";
  }

  // Clear all elements in the set
  clear() {
    this.data = {};
    this.size = 0;
    return "Clear!!";
  }

  // Return all values in the set as an array
  values() {
    return Object.values(this.data);
  }

  // Get the size of the set
  getSize() {
    return this.size;
  }
}
