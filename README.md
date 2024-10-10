## 📊 Hash Table

A **Hash Table** (also known as a **hash map**) is a data structure that efficiently stores **key-value pairs**. It uses a **hashing function** to map keys to specific indices in an array, allowing for fast data retrieval. 

### ✨ Key Concepts:
- 🔑 **Hashing Function**: Converts a key into an index where its corresponding value is stored in the array.
- 📦 **Buckets**: These are the slots in the array that store data. Multiple keys can map to the same bucket, causing collisions.
- ⚔️ **Collisions**: When two keys hash to the same bucket, methods like **chaining** (using linked lists) or **open addressing** (probing) help resolve the conflict.

### ⏳ Time Complexity:
- ⚡ **Average case**: O(1) for insertion, deletion, and lookup.
- 🐢 **Worst case**: O(n) when too many collisions degrade performance, but this can be minimized with a good hashing function.

### 🛠️ Use Cases:
- 🔍 Fast lookups (e.g., implementing dictionaries).
- ⚡ Caching data for quick access.
- 📂 Indexing databases for efficient searches.
