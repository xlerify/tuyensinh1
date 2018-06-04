
***
<link rel="stylesheet" href="./css/bootstrap.css">
<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/bootstrap-theme.min.css">
<link rel="stylesheet" href="./css/body.css">
<link rel="stylesheet" href="./css/openmodal.css">
<link rel="stylesheet" href="./css/font-awesome.css">
<link rel="stylesheet" href="./css/font-awesome.min.css">

<script type="text/javascript" src="./jq/jquery-3.2.0.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
***

- Đặt tên class, id, name như sau. Thống nhất sẽ dễ kiểm soát hoặc hỏi sẽ nhanh.

Mình sẽ đặt theo thứ tự như sau:
	VD: <input id="" class="" name="">
+ Tất cả đều viết thường
+ Với id ta sẽ đặt tên có liên quan kèm theo số phía sau bắt đầu từ 1...
+ Với class ta đặt tên có bắt đầu bằng tên thẻ + tùy chức năng, 
	ví dụ <button class="buttonsearch"></button> nếu đây là nút search
+ Với name ta đặt sao cho hợp lý nhất, đúng ngữ nghĩa ngữ cảnh nhất, để khi getParameter sẽ dễ hiểu, dễ nhận biết hơn
+ Sẽ có một file css tên là main.css, nó sẽ nằm mọi thứ có thể có chung ở tất cả các trang
+ Các file css riêng của từng trang ta sẽ đặt tên là style+tentrang.css, VD: stylesearch.css
+ StyleGuide sẽ bao gồm, font size, font family, color font và các tùy chỉnh của các thẻ, sẽ là 1 file riêng styleg.css
+ Trình bày code sao cho hợp lý, đẹp mắt và logic có thể. 
+ Nên cách 1 line cho mỗi đoạn code dễ kiểm soát và nhìn thoải mái mắt, tìm dễ hơn, ví dụ:
	       <select class="form-control">
                            <option value="volvo">----Thành phố----</option>
                            <option value="volvo">Cần thơ</option>
                            <option value="volvo">Tây Nguyên</option>
                        </select>
	***[cách 1 dòng]***
	        <select class="form-control">
                          <option value="volvo">----Loại hình----</option>
                          <option value="volvo">Công lập</option>
                          <option value="saab">Dân lập</option>
                        </select>
+ Chúng ta trình bày cấu trúc 1 file html như sau 
(có gì đưa vào Eclipse hay Notepad++ để sắp xếp lại code cho có thục vào lùi ra, này tự viết trên notepad windows):

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<link rel="stylesheet" href="./css/bootstrap.css">
<link rel="stylesheet" href="./css/bootstrap.min.css">
<link rel="stylesheet" href="./css/bootstrap-theme.min.css">
<link rel="stylesheet" href="./css/body.css">
<link rel="stylesheet" href="./css/openmodal.css">
<link rel="stylesheet" href="./css/font-awesome.css">
<link rel="stylesheet" href="./css/font-awesome.min.css">

<script type="text/javascript" src="./jq/jquery-3.2.0.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
<div class="header">...</div>
<div class="content">...</div>
<div class="footer">...</div>
</div>
</body>
</html>
