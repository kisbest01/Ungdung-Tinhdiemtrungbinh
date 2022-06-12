// hàm sau khi trang tải xong
$(document).ready(function() { 
	let i = 0;
	//hàm khi nhấn nút nhập
	$("#bNhap").click(function() {
		if($("#iName").val() == "" || $("#iToan").val() == "" || $("#iLy").val() == "" || $("#iHoa").val() == "") {
			 alert("Bạn chưa nhập hết thông tin!");
		} else {
			i = i + 1;
			$("#tBangdiem").append(function() {
				return "<tr>" + 
				"<td>" + i + "</td>" +
				"<td>" + $("#iName").val() + "</td>" +
				"<td>" + $("#iToan").val() + "</td>" +
				"<td>" + $("#iLy").val() + "</td>" +
				"<td>" + $("#iHoa").val() + "</td>" +
				"<td>" + "?" + "</td>" +
				"</tr>";
			});
			$("#iName").val("");
			$("#iToan").val("");
			$("#iLy").val("");
			$("#iHoa").val("");
		}
	});
	//hàm khi nhấn nút điểm trung bình
	$("#bDiemtb").click(function() {
		$("tr").each(function(i) {
			if(i != 0) {
				let toan = Number($(this).children().eq(2).text());
				let ly = Number($(this).children().eq(3).text());
				let hoa = Number($(this).children().eq(4).text());
				let tb = (toan + ly + hoa) / 3;
				$(this).children().eq(5).text(tb.toFixed(1));
			}
		});
	});
	//hàm khi nhấn nút xác định học sinh giỏi
	$("#bHsg").click(function() {
		$("tr").each(function(i) {
			if(i != 0) {
				let tb = $(this).children().eq(5).text();
				if(tb >= 8.0) {
					$(this).css("color", "red");
					$("#bHsg").css("background-color", "red");
				}
			}
		});
	});
	//hàm khi nhấn 2 lần nút xác định học sinh giỏi
	$("#bHsg").dblclick(function() {
		$("tr").each(function(i) {
			if(i != 0) {
				if($(this).css("color") == "rgb(255, 0, 0)") {
					$(this).css("color", "black");
					$("#bHsg").css("background-color", "blue");
				}
			}
		});
	});
	//hàm khi nhấn nút xác định học sinh thi lại
	$("#bHstl").click(function() {
		$("tr").each(function(i) {
			if(i != 0) {
				let tb = $(this).children().eq(5).text();
				if(tb < 5.0) {
					$(this).css("color", "green");
					$("#bHstl").css("background-color", "green");
				}
			}
		});
	});
	//hàm khi nhấn 2 lần nút xác định học sinh thi lại
	$("#bHstl").dblclick(function() {
		$("tr").each(function(i) {
			if(i != 0) {
				if($(this).css("color") == "rgb(0, 128, 0)") {
					$(this).css("color", "black");
					$("#bHstl").css("background-color", "blue");
				}
			}
		});
	});
	//hàm khi nhấn nút xóa
	$("#bXoa").click(function() {
		$($("tr").get().reverse()).each(function(i) {
			if(i != $("tr").length - 1) {
				$(this).remove();
				return false;
			}
		});
	});
});