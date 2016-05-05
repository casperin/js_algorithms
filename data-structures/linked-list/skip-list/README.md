# [Skip List](https://en.wikipedia.org/wiki/Skip_list)

|        | Average  | Worst      |
|--------|----------|------------|
| Space  | O(n)     | O(n log n) |
| Search | O(log n) | O(n)       |
| Insert | O(log n) | O(n)       |
| Delete | O(log n) | O(n)       |

In computer science, a skip list is a data structure that allows fast search
within an ordered sequence of elements. Fast search is made possible by
maintaining a linked hierarchy of subsequences, each skipping over fewer
elements. Searching starts in the sparsest subsequence until two consecutive
elements have been found, one smaller and one larger than or equal to the
element searched for. Via the linked hierarchy, these two elements link to
elements of the next sparsest subsequence, where searching is continued until
finally we are searching in the full sequence. The elements that are skipped
over may be chosen probabilistically or deterministically, with the former
being more common.

## Usages

* MemSQL uses skiplists as its prime indexing structure for its database
  technology.
* Cyrus IMAP server offers a "skiplist" backend DB implementation (source file)
* Lucene uses skip lists to search delta-encoded posting lists in logarithmic
  time.
* QMap (up to Qt 4) template class of Qt that provides a dictionary.
* Redis, an ANSI-C open-source persistent key/value store for Posix systems,
  uses skip lists in its implementation of ordered sets.
* nessDB, a very fast key-value embedded Database Storage Engine (Using
  log-structured-merge (LSM) trees), uses skip lists for its memtable.
* skipdb is an open-source database format using ordered key/value pairs.
* ConcurrentSkipListSet and ConcurrentSkipListMap in the Java 1.6 API.
* leveldb, a fast key-value storage library written at Google that provides an
  ordered mapping from string keys to string values

