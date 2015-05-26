document.addEventListener("DOMContentLoaded", function() { 
	//generate model
	var bstModel = new BinarySearchTree();
	bstModel.populate(50);

	//render view
	var bstView = new BinarySearchTreeView();
	bstView.render(bstModel);
});

