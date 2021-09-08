const kelulusan = () =>{
    var a = document.getElementById("nilaiA").value;
    var b = document.getElementById("nilaiB").value;
    var c =  1 * a + 1 * b ;
    hasil =     c >=50 ? "Pinter": 
                c <50 ? "Tolol":
    console.log(hasil); 
        console.log(c);
        alert(hasil);
}