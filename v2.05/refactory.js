// Sons de PC
const  som_fundo= new Audio('../musica/som_fundo_game.mp3');
const  som_kamehame= new Audio('../musica/som_kamehameha.mp3');
const  som_arma= new Audio('../musica/som_metralhadora_bom.mp3');
const  som_explosion= new Audio('../musica/som_explosion.mp3');
const  som_mission= new Audio('../musica/som_mission_passed.mp3');
const  som_passos= new Audio('../musica/som_passos_floresta.mp3');
const  som_kratos= new Audio('../musica/som_kratos.mp3');
const  som_voz_do_kratos= new Audio('../musica/som_ousa.mp3');
const  som_smash= new Audio('../musica/som_smash.mp3');
// Elementos do site
const body = document.body;
const tutorial = document.querySelector(".tutorial_or_game");
const kratos = document.querySelector('.kratos');
const dragon = document.querySelector(".dragon");
const missil = document.querySelector(".missil");
const boss = document.querySelector(".boss");
const hero = document.querySelector(".hero");
const button = document.querySelector(".inic;iar");
const all = document.querySelector(".all");
const kamehame = document.querySelector(".kameha");
// Variaveis para realizar movimentos
var x = 20;
var y = 70;

// Funçoes anonimas nescessárias para iniciar as ações do jogo...
function clicou() {
    document.querySelector(".fundo").style.display = "none";
    document.querySelector(".container").style.display = "block";
    ms_fundo.play();
    tutorial.style.display = 'block'

}

function fecharTutorial() {
     tutorial.style.display = 'none';
}

function voltarInicio() {
     document.querySelector('.passou').style.display = "none"
     ms_fundo.play();
     if (boss.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/assets/explosion.gif') {
          boss.src = 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/boss/boss_motossera.avif';
          boss.style.width = '250px'
     }
}

