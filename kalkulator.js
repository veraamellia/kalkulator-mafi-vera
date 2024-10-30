$(function () {
  let input1;
  let input2;
  let operasiSelected = null;

  $(".tombol-angka").click(function () {
    let angka = $(this).text();

    // cek jika sudah ada selected operasi
    if (operasiSelected == null) {
      // operasi masih kosong --> isi input1
      let angkaSebelumnya = $("#input1").text();
      if (angkaSebelumnya == "...") angkaSebelumnya = "";
      input1 = angkaSebelumnya + angka;
      $("#input1").text(input1);
    } else {
      // sudah ada operasi selected
      let angkaSebelumnya = $("#input2").text();
      if (angkaSebelumnya == "...") angkaSebelumnya = "";
      input2 = angkaSebelumnya + angka;
      $("#input2").text(input2);
    }
  });

  $(".tombol-operasi").click(function () {
    let operasiSebelumnya = $("#operasi-selected").text();
    let newOperasi = $(this).text();

    if (operasiSelected == null) {
      // operasi baru
      $("#operasi-selected").text(newOperasi);
      operasiSelected = newOperasi;
    } else {
      // input1 diisi dengan hasil
      $("#input1").text($("#hasil").text());

      // input2 dikosongkan
      $("#input2").text("...");

      // replace operasi
      $("#operasi-selected").text(newOperasi);
      operasiSelected = newOperasi;
    }
  });
  $(".tombol-faktorial").click(function () {
    operasiSelected = "!";
    $("#operasi-selected").text("!");
  });

  function factorial(n) {
    if (n < 0) return "Tidak didefinisikan";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  $("#btn-hitung").click(function () {
    input1 = parseFloat($("#input1").text());
    input2 = parseFloat($("#input2").text());
    let hasil;

    if (operasiSelected == "+") {
      hasil = input1 + input2;
    } else if (operasiSelected == "-") {
      hasil = input1 - input2;
    } else if (operasiSelected == "x") {
      hasil = input1 * input2;
    } else if (operasiSelected == "/") {
      hasil = input1 / input2;
    } else if (operasiSelected == "^") {
      hasil = input1 ** input2;
    } else if (operasiSelected == "%") {
      hasil = input1 % input2;
    } else if (operasiSelected == "!") {
      // Operasi faktorial
      hasil = `Faktorial dari ${input1} = ${factorial(
        input1
      )}, Faktorial dari ${input2} = ${factorial(input2)}`;
      //input negatif positif
      function checkNumber() {
        const input = document.getElementById('numberInput').value;
        const result = document.getElementById('result');
    
        const number = parseFloat(input);
    
        if (isNaN(number)) {
            result.textContent = "Silakan masukkan angka yang valid.";
        } else if (number > 0) {
            result.textContent = `Angka ${number} adalah Positif.`;
        } else if (number < 0) {
            result.textContent = `Angka ${number} adalah Negatif.`;
        } else {
            result.textContent = `Angka ${number} adalah Nol.`;
        }
    }
    } else {
      alert('Belum ada handle untuk operasi ${operasiSelected}');
    }
    $("#hasil").text(hasil);
  });

  // Tombol Clear
  $(".tombol-clear").click(function () {
    input1 = null;
    input2 = null;
    operasiSelected = null;
    $("#input1").text("...");
    $("#input2").text("...");
    $("#operasi-selected").text("...");
    $("#hasil").text("......");
  });
});