
class Kraftfahrzeug{
    Gang
    Schiebedach=false
    FensterscheibenVorne
    FensterscheibenHinten
    Geschwindigkeit
    Beschleunigung
    Hersteller
    Fahrzeuglänge
    Fahrzeughöhe
    Fahrzeugfarbe


    constructor(Geschwindigkeit, Beschleunigung,Gang,Hersteller,länge,höhe,farbe) {
        this.Gang=Gang
        this.Geschwindigkeit=Geschwindigkeit
        this.Beschleunigung=Beschleunigung
        this.Fahrzeuglänge=länge
        this.Fahrzeughöhe=höhe
        this.Hersteller=Hersteller
        this.Fahrzeugfarbe=farbe

    }
}

function testFahrzeug(){
    auto1= new Kraftfahrzeug(50,10,6,8,4,2,grün)
}


class Bücher{
    Titel
    Seitenzahl
    Anzahl
    Buchfarbe
    Autor

    constructor(Titel,Seitenzahl,Anzahlbuch,Buchfarbe,Autor) {
        this.Anzahl=Anzahlbuch
        this.Seitenzahl=Seitenzahl
        this.Titel=Titel
        this.Autor=Autor
        this.Buchfarbe=Buchfarbe

        function verkauft(){
            Buch1.Anzahl= Buch1.Anzahl-1
        }
    }

}

function Bucharten(){
    Buch1= new Bücher("Unterm Rad",50,5,"Grün","Hermann Hesse")
    Buch2= new Bücher ("50 Tierarten",60,20,"Schwarz","Goethe")
    Buch3= new Bücher ("Mathebuch 11",250,2,"Gelb","Dr. Joachim ")
    Buch4 = new Bücher ("Englischbuch",500,15,"Orange","David")
    console.log("Es sind noch "+Buch1.Anzahl+" Bücher vorhanden")


}

function verfuegbar(){
}
//die Frage stellen wir uns immer obs funktioniert hat
