function list(){
	$.ajax({
		type : "post",
		url : "/department/list",
		success : function(response) {
			$("#departmentsTable").bootstrapTable('load',response);
		}
	});
}