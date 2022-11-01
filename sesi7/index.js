const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = '127.0.0.1'
const port = 3002

// request adalah = data masuk dari luar
// response adalah = data keluar dari sistem

const server = http.createServer(function (request, response) {
  const nama = "ibnu cino";
  let uang = 500000;
  let jajan = 150000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);

  fs.appendFile('sisauang.txt', sisa, () => {
    console.log('data uang berhasil disimpan...');
  })

  const sisaRAM = os.freemem();
  const jumlahCPU = os.cpus();

  function checkCPU() {
    let myCPU = [];
    jumlahCPU.map((cpu, i) => {
      myCPU.push(cpu.model)
    })
    return myCPU[0]
  }

  const hasil = `<h1>Halo nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}.</h1><br/>Sisa RAM PC saya: ${sisaRAM}</br>Merk cpu yang saya pake ${checkCPU()}`;

  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, '', function () {
  console.log(`server menyala di ${host}:${port}`);
});