function sayohat__vaqti() {
  var distance = parseFloat(document.getElementById("distanceInput").value);
  var elText__1 = document.querySelector('.text__1');
  var elText__2 = document.querySelector('.text__2');
  var elText__3 = document.querySelector('.text__3');
  var elText__4 = document.querySelector('.text__4');
  var v_piyoda = 4;    // km/soat
  var v_velesaped = 20;   // km/soat
  var v_mashina = 100;   // km/soat
  var v_samolyot = 800;   // km/soat

  var vaqt_piyoda = distance / v_piyoda;
  var vaqt_velesaped = distance / v_velesaped;
  var vaqt_mashina = distance / v_mashina;
  var vaqt_samolyot = distance / v_samolyot;

  elText__1.textContent = vaqt_piyoda.toFixed(2) + " soat";
  elText__2.textContent = vaqt_velesaped.toFixed(2) + " soat";
  elText__3.textContent = vaqt_mashina.toFixed(2) + " soat";
  elText__4.textContent = vaqt_samolyot.toFixed(2) + " soat";

  // var resultHTML = `
  //   <h1>Sayohat Vaqtlari</h1>
  //   <strong>Piyoda:</strong> ${vaqt_piyoda.toFixed(2)} soat<br>
  //   <strong>Velesaped:</strong> ${vaqt_velesaped.toFixed(2)} soat<br>
  //   <strong>Mashina:</strong> ${vaqt_mashina.toFixed(2)} soat<br>
  //   <strong>Samolyot:</strong> ${vaqt_samolyot.toFixed(2)} soat
  // `;

  // document.getElementById("result").innerHTML = resultHTML;
}