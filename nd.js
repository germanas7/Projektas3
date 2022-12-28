function Skaiciuoti() {
    event.preventDefault();
    const data = document.getElementById("data").value;
    console.log(data);
    const gimtadienis = document.getElementById("gimtadienis").value;
    console.log(gimtadienis);
    }
    document.getElementById("demo").innerHTML = `dabar man yra, ${"data" - "gimtadienis"}`;
   