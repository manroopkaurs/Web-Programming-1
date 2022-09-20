//Registrering av billetter
const billettRegister=[];

function bestill(){
    const innFilm = document.getElementById("film").value;
    const innAntall = document.getElementById("antall").value;
    const innFornavn = document.getElementById("fornavn").value;
    const innEtternavn = document.getElementById("etternavn").value;
    const innTelefonnr = document.getElementById("telefonnr").value;
    const innEpost = document.getElementById("epost").value;

    const bestiller = {
        film : innFilm,
        antall : innAntall,
        fornavn : innFornavn,
        etternavn : innEtternavn,
        telefonnr : innTelefonnr,
        epost : innEpost
    };
    billettRegister.push(bestiller);

    //Kode for å skrive ut registerte billetter
    let ut = "<table><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th>" +
        "</tr>";

    for (let info of billettRegister) {
        ut += "<tr>";
        ut +=   "<td>" + info.film + "</td>" +
            "<td>" + info.antall + "</td>" +
            "<td>" + info.fornavn + "</td>" +
            "<td>" + info.etternavn + "</td>" +
            "<td>" + info.telefonnr + "</td>" +
            "<td>" + info.epost + "</td>";
        ut += "</tr>";
    }

    //Kode for feilmelding
    document.getElementById("antall.error").innerHTML = "";
    if(innFilm == ""){
        document.getElementById("film.error").innerHTML = "Må velge en film";
    }
    if(innAntall == 0){
        document.getElementById("antall.error").innerHTML = "Må skrive noe inn antall";
    }

    document.getElementById("fornavn.error").innerHTML = "";
    if(innFornavn == ""){
        document.getElementById("fornavn.error").innerHTML = "Må skrive noe inn fornavn";
    }

    document.getElementById("etternavn.error").innerHTML = "";
    if(innEtternavn == ""){
        document.getElementById("etternavn.error").innerHTML = "Må skrive noe inn etternavn";
    }

    document.getElementById("telefonnr.error").innerHTML = "";
    if(innTelefonnr < 8){
        document.getElementById("telefonnr.error").innerHTML = "Må skrive noe inn riktig telefonnr";
    }

    document.getElementById("epost.error").innerHTML = "";
    if(innEpost == ""){
        document.getElementById("epost.error").innerHTML = "Må skrive noe inn epost-adresse";
    }
    if(innFilm == "", innAntall == 0, innFornavn == "", innEtternavn == "", innTelefonnr == 0, innEpost == ""){
        billettRegister.pop();
    }
    else{
        document.getElementById("billettRegister").innerHTML = ut;

        //Sletter all input fra tabellen etter registrering
        document.getElementById("film").value="";
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("epost").value="";
    }
}

//Kode for å slette billetter
function slettBillett() {
    billettRegister.length = 0;
    document.getElementById("billettRegister").innerHTML = billettRegister;
}
