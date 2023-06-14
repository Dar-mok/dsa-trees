"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let sum = 0;

    function _sum(node) {
      sum += node.val;
      if (node.children.length > 0) {
        for (const child of node.children) {
          _sum(child);
        }
      }
    }
    _sum(this);
    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let count = 0;

    //helper function
    function _count(node) {
      if (node.val % 2 === 0) count++;
      if (node.children.length > 0) {
        node.children.forEach((node) => _count(node));
      }
    }
    //if val is even, increment counter
    //if current node has children, loop over them and call helper

    //initial helper call
    _count(this);
    return count;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound) {
    //start a count of nodes greater, initialize to 0
    let count = 0;

    //declare a helper function
    function _count(node, lowerBound) {
      if (node.val > lowerBound) count++;
      if (node.children.length > 0) {
        node.children.forEach((child) => _count(child, lowerBound));
      }
    }
    //if (node.val > lowerBound)
    //increment outside count variable

    //if current node has children, loop over and call

    //helper on each one of them

    //make the initial call to helper
    _count(this, lowerBound);
    return count;
    //return the count
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (!this.root) return 0;
    return this.root.sumValues();
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (!this.root) return 0;
    return this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root) return 0;
    return this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
