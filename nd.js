function Skaiciuoti() {
    const data = document.getElementById('#data').value;
    const gimtadienis = document.getElementById('#gimtadienis').value;
    console.log(data);
    console.log(gimtadienis);}
    document.getElementById("results").innerHTML =`dabar man yra, ${data - gimtadienis}`;