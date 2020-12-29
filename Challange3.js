hitungBMI = (bb, tb) => {
    bb = bb.split(" ");
    tb = tb.split(" ");
    let berat,
      tinggi = 0;
    if (bb[1] === "kg") berat = Number(bb[0]);
    else if (bb[1] === "g" || bb[1] === "gram") berat = Number(bb[0]) / 1000;
    if (tb[1] === "m") tinggi = Number(tb[0]);
    else if (tb[1] === "cm") tinggi = Number(tb[0]) / 100;
    return berat / Math.pow(tinggi, 2);
  };
  
  cekStatus = (bmi) => {
    console.log("BMI = " + bmi);
    if (bmi < 18.5) console.log("Kekurangan Berat Badan");
    else if (bmi > 18.4 && bmi < 25) console.log("Normal (Ideal)");
    else if (bmi > 24.9 && bmi < 30) console.log("Kelebihan Berat Badan");
    else if (bmi > 29.9) console.log("Kegemukan (Obesitas)");
    else console.log("error gan wkwk");
  };
  
  cekStatus(hitungBMI("90 kg", "170 cm"));
  
  
  //output
  // "BMI = 30";
  // "Kegemukan (Obesitas)";