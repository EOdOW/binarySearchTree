var BinarySearchTree = function(){
	this.root = null;
	this.i = 0;
};

BinarySearchTree.prototype.addNode = function(name, key) {
	var node = new Node(name, key);
	var parent;
	var focusNode;
	var child = "";

	if (this.root == null) {
		this.root = node;
		return;
	}

	focusNode = this.root;
	
	while (true) {
		parent = focusNode;

		if (node.get("key") <= focusNode.get("key")) {
			child = "leftChild";
		} else {
			child = "rightChild";
		}

		focusNode = parent.get(child);
		
		if (focusNode == null) {
			parent.set(child, node);
			if(child == "leftChild"){
				parent.children.unshift(node);
			} else {
				parent.children.push(node);
			}
			
			break;
		} else {
			focusNode = parent.get(child);
			parent = focusNode;
		}
	}
};

BinarySearchTree.prototype.find = function(key) {
	if (this.root == null) {
		console.log("Empty Tree");
		return;
	}
	var notFound = true;
	var focusNode = this.root;
	var child;
	var parent;
	var start = +new Date();
	var end;
	var print;
	var i = 0;
	var nodesPath = [];
	
	while (notFound && focusNode != null) {
		i++;
		parent = focusNode;

		if (key == focusNode.get("key")){
			notFound = false;
		} else if (key < focusNode.get("key")) {
			child = "leftChild";
		} else {
			child = "rightChild";
		}
		
		if (notFound) {
			focusNode = parent.get(child);
			focusNode && nodesPath.push(focusNode.get("name"));
		}
	}
	
	end = +new Date() - start;

	if (focusNode == null) {
		print = "Not Found";
	} else {
		print = "Found: " + focusNode.get("name");
	}
	console.log(print + " Took: " + end + " ms and " + i + " iterations");

	return nodesPath;
};

BinarySearchTree.prototype.populate = function(number) {
	number = number || 10;
	for (var i = 0; i < number; i++) {
		this.addNode(i, Math.floor((Math.random() * 100) + 1));
	}
};