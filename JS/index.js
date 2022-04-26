$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
   // Viết code vào
   $("#btn2").click(function() {
       $("#myModal").modal();
   });

    function KiemTraTen() {
       var i = 1;
       let mauKT = / ([A-Z] {1} [a-z]+) ((\s{1} [A-Z]{1}[a-z]+){1,})$/;
       if ($("Name").val() == "") {
           $("#tbName").html("không để trống");
           return false;
       }
       if (!mauKT.test($("#Name").val())) {
           $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
           return true;           
       }
       $("#tbName").html("*");
       return true;
   }
   $("Name").blur(KiemTraTen);

   function KiemTraSoAo() {
       var mauKT = /^\d*$/;
       if ($("#Ao").val() == "") {
           $("#tbAo").html("Không để trống");
           return false;
           
       }
       if (!mauKT.test($("#Ao").val())) {
           $("#tbAo").html("Dùng số từ 1 đến 100");
           return true;
           
       } else{
           var soAo = $("#Ao").val();
           if (soAo < 1 || soAo > 100) {
               $("#tbAo").html("từ 1 đến 100");
               
           } else {
               $("#tbName").htmml("*");
               return true;
           }
       }
       
   }
   $("#Ao").blur(KiemTraSoAo);

   function KiemTraDiaCHi() {
       var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
       if ($("#DC").val() == "") {
           $("#tbDc").html("Không để trống");
           return false;
           
       }
       if (!mauKT.test($("#DC").val())) {
           $("#tbDC").html("Mỗi ký tự đầu viết hoa không sử dụng số");
           return true;
           
       }
       $("#tbDC").htmml("*");
       return true;
       
   }
   $("#DC").blur(KiemTraDiaChi);

   function KiemTraNTT() {

    if ($("#NTT").val() == "") {
        $("#tbNTT").html("Không để trống");
        return false;
    
    }
    var today = new Date();
    var ntt = new Date($("#NTT").val());
    today = today.setDate(today.getDate() + 7);
    if(today > ntt){
        $("#tbNTT").html("Phải sau ngày hiênj tại 7 ngày");
        return false;
    }      
    $("#NTT").blur(KiemTraNTT);

    function KiemtraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("không để trống");
            return false;
            
        }
        if(!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("*");
            return true;
        }
        $("#SDT").blur(KiemtraSDT);

        $("#Save").click(function () {
           if (KiemTraTen() == true && KiemTraSoAo() == true && KiemtraSDT() == true && KiemTraNTT() == true && KiemTraDiaCHi() == true) {
                row = "<tr>";
                row += "<th>" + (i++) + "</th>";
                row += "<th>" + $("#Name").val() + "</th>";
                row += "<th>" + $("#Ao").val() + "</th>";
                row += "<th>" + $("#DC").val() + "</th>";
                row += "<th>" + $("#NTT").val() + "</th>";
                row += "<th>" + $("#SDT").val() + "</th>";
                row += "<th>" + $("#ADD").val() + "</th>";
                $("#danhSach").append(row);
                $("#myModal"),modal("hide");
           }
        })
        
    }
   }

})