const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 * 
 * 
 * class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
 */


class BinarySearchTree {

    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add(data) {
        const newNode = new Node(data);
        // if tree is empty
        if (this.rootNode === null) {
            this.rootNode = newNode;

            // find place to insert
        } else {
            insertNode(this.rootNode, newNode);
        }

        //recursive insert function
        function insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        }
    }

    find(data) {
        return searchNode(this.rootNode, data);

        function searchNode(node, data) {
            if (node === null) {
                return null;
            } else if (data === node.data) {
                return node;
            } else if (data < node.data) {
                return searchNode(node.left, data);
            } else {
                return searchNode(node.right, data);
            }
        }
    }

    has(data) {
        return this.find(data) !== null;
    }

    remove(data) {
        this.rootNode = removeNode(this.rootNode, data);

        function removeNode(node, key) {
            // if tree is empty
            if (node === null) {
                return null;

            } else if (key < node.data) {
                node.left = removeNode(node.left, key);
                return node;
            } else if (key > node.data) {
                node.right = removeNode(node.right, key);
                return node;
            } else {
                // equal - should remove this item
                if (node.left === null && node.right === null) {
                    // put null instead of item
                    node = null;
                    return node;
                }

                if (node.left === null) {
                    // set right child instead of item
                    node = node.right;
                    return node;
                } else if (node.right === null) {
                    // set left child instead of item
                    node = node.left;
                    return node;
                }

                // both children exists for this item
                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }
                node.data = minFromRight.data;

                node.right = removeNode(node.right, minFromRight.data);
                return node;
            }
        }
    }

    min() {
        let rootNode = this.rootNode;
        if (rootNode === null) {
            return null;
        }
        while (rootNode.left !== null) {
            rootNode = rootNode.left;
        }
        return rootNode.data;
    }

    max() {
        let rootNode = this.rootNode;
        if (rootNode === null) {
            return null;
        }
        while (rootNode.right !== null) {
            rootNode = rootNode.right;
        }
        return rootNode.data;
    }

}

module.exports = {
    BinarySearchTree
};