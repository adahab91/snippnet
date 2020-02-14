function showProject(){
    /* ROW ONE*/
    document.getElementById('blaamyra').onclick = function changeContent() {
        document.getElementById('show-project-row2').innerHTML = '';
        document.getElementById('show-project-row1').innerHTML = '<div class="[ row ]">'+ 
            '<div class="[ col-md-8 ][ project ]">' + 
                '<img src="./img/projects/blaamyra-screens.png" class="[ img-fluid ]">' + 
            '</div>' +
            '<div class="[ col-md-4 ][ project ]">' + 
                '<h3 class="[ project__heading ]">Blåmyra</h3>' + 
                '<p><strong>DIGITAL PLATFORM: </strong>Wordpress <br> <strong>DESIGN: </strong>Blåmyra </p>' +
                '<p>Blåmyra er eit designbstudio med fokus på merkevarebygging og produktutvikling. Byrået held til ved Stadhavet i Selje. Eg fekk i oppdrag å byggje den midlertidige heimesida deira.</p>' + 
                '<a href="https://blaamyra.no/" target="blank">blaamyra.no</a>' +
            '</div>' +
        '</div>';
        document.getElementById("show-project-row1").scrollIntoView({behavior: "smooth"});
    }
    document.getElementById('helgasMatblogg').onclick = function changeContent() {
        document.getElementById('show-project-row2').innerHTML = '';
        document.getElementById('show-project-row1').innerHTML = '<div class="[ row ]">'+ 
            '<div class="[ col-md-8 ][ project ]">' + 
                '<img src="./img/projects/helgasmatblogg-screen.jpg" class="[ img-fluid ]">' + 
            '</div>' +
            '<div class="[ col-md-4 ][ project ]">' + 
                '<h3 class="[ project__heading ]">Helgas Matblogg</h3>' + 
                '<p><strong>DIGITAL PLATFORM: </strong>Wordpress</p>' +
                '<p>Å ha ein eigen matblogg har våre draumen til Helga Kvamme i lang tid. Med lidenskap for mat og utdanning som bakar, lagar ho gode og sunne oppskrifter for heile familien. For Helga var det viktig å lage ein nettstad som var enkel, intuitiv og appellerande til alle og einkvar.</p>' + 
                '<a href="https://helgasmatblogg.no/" target="blank">helgasmatblogg.no</a>' +
            '</div>' +
        '</div>';
        document.getElementById("show-project-row1").scrollIntoView({behavior: "smooth"});
    }
    document.getElementById('vitnemaal').onclick = function changeContent() {
        document.getElementById('show-project-row2').innerHTML = '';
        document.getElementById('show-project-row1').innerHTML = '<div class="[ row ]">'+ 
            '<div class="[ col-md-8 ][ project ]">' + 
                '<img src="./img/projects/vitnemaal.jpg" class="[ img-fluid ]">' + 
            '</div>' +
            '<div class="[ col-md-4 ][ project ]">' + 
                '<h3 class="[ project__heading ]">Vitnemål</h3>' + 
                '<p>Fullførte studie innan frontend-utvikling i 2019. Eg tilegna meg kompetanse i grunnleggjande designprensipp, universel utforming, heilhetlige brukaropplevingar og tekniske løysingar som oppfyller dagens krav og behov.</p>' + 
            '</div>' +
        '</div>';
        document.getElementById("show-project-row1").scrollIntoView({behavior: "smooth"});
    }



    /*ROW TWO*/
    document.getElementById('seljeTreningssenter').onclick = function changeContent() {
        document.getElementById('show-project-row1').innerHTML = '';
        document.getElementById('show-project-row2').innerHTML = '<div class="[ row ]">'+ 
            '<div class="[ col-md-8 ][ project ]">' + 
                '<img src="./img/projects/selje-treningssenter.jpg" class="[ img-fluid ]">' + 
            '</div>' +
            '<div class="[ col-md-4 ][ project ]">' + 
                '<h3 class="[ project__heading ]">Selje Treningssenter</h3>' + 
                '<p><strong>DIGITAL PLATFORM: </strong>Angular</p>' +
                '<p>Selje Treningssenter jobbar for å tilby eit variert og godt treningstilbod til innbyggjarane og tilreisande i Selje. Dette var mi avsluttande eksamensoppgåve innan studiet frontend-utvikling (via Noroff, School of technology and digital media). Heimesida er laga i Angular.</p>' + 
                '<a href="https://www.seljetreningssenter.no/#/" target="blank">seljetreningssenter.no</a>' +
            '</div>' +
        '</div>';
        document.getElementById("show-project-row2").scrollIntoView({behavior: "smooth"});
    }
    document.getElementById('gameOfBoards').onclick = function changeContent() {
        document.getElementById('show-project-row1').innerHTML = '';
        document.getElementById('show-project-row2').innerHTML = '<div class="[ row ]">'+ 
            '<div class="[ col-md-8 ][ project ]">' + 
                '<img src="./img/projects/gameofboardsteam.png" class="[ img-fluid ]">' + 
            '</div>' +
            '<div class="[ col-md-4 ][ project ]">' + 
                '<h3 class="[ project__heading ]">Game of Boards</h3>' + 
                '<p><strong>DIGITAL PLATFORM: </strong>HTML, CSS og JavaScript</p>' +
                '<p>Game of Boards er eitt av skuleprosjekta mine. Dette er semester prosjekt 2. Eg fekk i oppdrag å lage eit online brettspel med Game of Thrones tema, der vi skulle bruke ein gitt API. Alle illustrasjonar i dette spelet er laga av meg som ein del av oppgåva.</p>' + 
                '<a href="https://gameofboards.no/" target="blank">gameofboards.no</a>' +
            '</div>' +
        '</div>';
        document.getElementById("show-project-row2").scrollIntoView({behavior: "smooth"});
    }
}
showProject();




/* MOBILE TOGGLE CONTENT, SHOW WHEN CLICKED*/

$(document).ready(function(){
    $(".project").click(function (){
        $(".project").removeClass("active-project");
        $(this).addClass("active-project");   
    });
});
