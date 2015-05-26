var Node = function(name, key){
	this.name = name;
	this.key = key;
	this.rightChild = null;
	this.leftChild = null;
	this.children = [];
};

Node.prototype.get = function(key) {
	return this[key];
};

Node.prototype.set = function(key, value) {
	this[key] = value;
};