console.log("Hellow World");

//ini yang seolah olah multy trade
// Bisa kerja rodi
// Dipake dalam muat data banyak
setTimeout(() => {
  console.log("Hellow For A Sec");
}, 3000); //dikerjakan oleh broser engine

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "green";
      setTimeout(() => {
        document.body.style.backgroundColor = "blue";
        console.log(`putaran ke ${i}`);
      }, i * 3000 + 2000); // biru
    }, i * 3000 + 1000); // hijau
  }, i * 3000); // merah
}
