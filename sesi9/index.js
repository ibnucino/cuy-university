class Hewan {
  warna
  keahlian
  constructor(nama) {
    this.nama = nama
  }
  set newColor(color) {
    this.warna = color
  }
  set newSkill(skill) {
    this.keahlian = skill
  }
  get detail() {
    return `Hi saya ${this.nama}, saya berwarna ${this.warna}, dan keahlian saya ${this.keahlian}`
  }
}

const kucing = new Hewan('Joojo')
kucing.newColor = "red"
kucing.newSkill = "menggonggong"

console.log(kucing.detail)