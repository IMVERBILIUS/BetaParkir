    var luas;
    var keliling;
    var alas;
    var tinggi;
    var sisiMiring;

    function hitung() {
        alas = parseFloat(document.getElementById("ipt_alas").value);
        tinggi = parseFloat(document.getElementById("ipt_tinggi").value);
        luas = (alas * tinggi) / 2;
        sisiMiring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));
        keliling = alas + sisiMiring + sisiMiring;
        document.getElementById('opt_luas').value = luas;
        document.getElementById('opt_keliling').value = keliling;
    }