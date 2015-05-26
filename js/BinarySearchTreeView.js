var BinarySearchTreeView = function(){};

BinarySearchTreeView.prototype.render = function(bstModel) {
	var svg = d3.select("svg");
	var tree = d3.layout.tree().size([800, 500]);
	var nodes = tree.nodes(bstModel.root);
	var links = tree.links(nodes);

	var node = svg.selectAll("g.node")
		.data(nodes);	

	var nodeEnter = node.enter().append("svg:g")
		.attr("class", "node")
		.attr("id", function(d) {return "node_"+ d.get("name")})
		.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
		.on("click", function() {
			d3.selectAll("circle").classed("highlighted", false);
			d3.select(this).select("circle").classed("highlighted", true);
		});

	nodeEnter.append("svg:circle")
		.attr("r", 9);
	
	nodeEnter.append("text")
		.text(function(d) {
			return d.get("key");
		})
		.attr("font-size", 10)
		.attr("y", 3)
		.attr("text-anchor", "middle")

	var link = svg.selectAll("path.link")
		.data(links);

	link.enter().insert("svg:path", "g")
		.attr("class", "link")
		.attr("d", d3.svg.diagonal());
};