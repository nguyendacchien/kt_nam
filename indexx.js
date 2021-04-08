let N = parseInt(prompt("nhập năm"));
if (N%4==0){
    if (N%100==0){
        if (N%400==0){
            alert("là năm nhuận");
        }else {
            alert("không là năm nhuận");
        }
    }else {alert("là năm nhuận");
    }
}else {
    alert("không là năm nhuận");
}