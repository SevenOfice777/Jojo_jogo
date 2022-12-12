// Sons de PC
const final_hit = new Audio('../musica/som_kamehameha.mp3')
const ms_fundo = new Audio('../musica/som_fundo_game.mp3');
const som_de_motoserra = new Audio('../musica/som_')
const som_tiro = new Audio('../musica/som_metralhadora_bom.mp3')
const pulo_som = new Audio('../musica/som_pulo_do_mario.mp3')
const som_de_dragon = new Audio('../musica/som_explosion.mp3')
const mission_passed = new Audio('../musica/som_mission_passed.mp3')
const correndo_som = new Audio('../musica/som_passos_floresta.mp3')
const kratos_sound = new Audio('../musica/som_kratos.mp3')
const som_ousa = new Audio('../musica/som_ousa.mp3')
const som_smash = new Audio('../musica/som_smash.mp3')

// Elementos do site
const body = document.body
const tutorial = document.querySelector(".tutorial_or_game")
const kratos = document.querySelector('.kratos')
const dragon = document.querySelector(".dragon")
const missil = document.querySelector(".missil")
const boss = document.querySelector(".boss")
const hero = document.querySelector(".hero")
const button = document.querySelector(".iniciar")
const all = document.querySelector(".all")
const kamehame = document.querySelector(".kameha")
// Variaveis para realizar movimentos
var x = 20;
var y = 70;

boss.onclick = function () {
    som_de_motoserra.play();
}

function fecharTutorial() {
    tutorial.style.display = 'none';
}

function clicou() {
    document.querySelector(".fundo").style.display = "none";
    document.querySelector(".container").style.display = "block";
    ms_fundo.play();
    tutorial.style.display = 'block'

}



body.addEventListener("keydown", (evento) => {
    // Evento em Body (keydown)


    // Alerta de Eventos

    if(evento.key == ' ') {
        document.querySelector(".container").style.display = 'none';
         all.style.display = 'block';
         som_smash.play();
         ms_fundo.pause();

         setTimeout(function () {
            mission_passed.play();
            document.querySelector('.passou').style.display = "block"
            document.querySelector(".container").style.display = 'block';
            som_smash.pause();
            ms_fundo.play();
            all.style.display = 'none';
            
            if(boss.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/boss/boss_motossera.avif') {
                boss.src = 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/assets/explosion.gif';
                boss.style.width = '300px'
                boss.style.bottom = '70px'
            }
        }, 5000)

        setTimeout(() => {
            voltarInicio();
        },7000);

    }

    if (evento.key == 'd' || evento.key == 'D') {
        hero.style.left = `${x = x + 10}px`;
        correndo_som.play()
        if (hero.classList.contains("inverte")) {
            hero.classList.remove("inverte")
        }
        if (hero.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/atirador/parado.png') {
            hero.src = '../personagens/atirador/correndo_direto.gif'

        }
    }
    // Ir para frente

    if (evento.key == 'a' || evento.key == 'A') {
        hero.style.left = `${x = x - 10}px`;
        hero.classList.add("inverte")
        correndo_som.play();
        if (hero.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/atirador/parado.png') {
            hero.src = '../personagens/atirador/correndo_direto.gif'

        }
    }

    if (evento.key == 'q') {
        som_tiro.play();
        if (hero.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/atirador/parado.png' || hero.src == 'file:///E:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/atirador/correndo_direto.gif') {
            hero.src = 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/atirador/parado_atirando.gif'
            hero.style.width = '300px'
        }
    }

    if (evento.key == 'ArrowLeft') {
        if (boss.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/boss/boss_motossera.avif') {


            missil.classList.add("missil_cai")
            missil.style.display = 'block'

            setTimeout(function () {
                som_de_motoserra.pause();
                ms_fundo.pause();
                boss.src = '../personagens/assets/explosion.gif'
                mission_passed.play();
            }, 1000)


            setTimeout(function () {
                document.querySelector('.passou').style.display = "block"

            }, 1200)


        } else {
            boss.src = '../personagens/boss/boss_motossera.avif'
        }

    }

    if (evento.key == 'ArrowRight') {
        if(dragon.classList.contains('meteoro_cai')) {
            dragon.classList.remove('meteoro_cai')
        } else {
            dragon.classList.add('meteoro_cai')
        }

        setTimeout(function () {
            som_de_motoserra.pause();
            ms_fundo.pause();
            som_de_dragon.play()
        }, 1200)



        setTimeout(function () {
            mission_passed.play();
            document.querySelector('.passou').style.display = "block"
            
            if(boss.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/boss/boss_motossera.avif') {
                boss.src = 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/assets/explosion.gif';
            }
        }, 1500)


    }

    if (evento.key == 'ArrowUp') {
        kamehame.style.display = 'block';
        final_hit.play();
        setTimeout(() => {
            kamehame.style.display = 'none';
            mission_passed.play();
            document.querySelector('.passou').style.display = "block"
            ms_fundo.pause();
            boss.src = '../personagens/assets/explosion.gif';
        }, 10000)
    }

    if (evento.key == 'ArrowDown') {
        kratos.style.display = 'block';
        kratos_sound.play();
        som_ousa.play();
        setTimeout(() => {
            kratos.style.display = 'none';

            mission_passed.play();
            document.querySelector('.passou').style.display = "block"
            ms_fundo.pause();
            som_ousa.pause();
            kratos_sound.pause();
            boss.src = '../personagens/assets/explosion.gif';
        }, 10000)
    }



})

// Evento de KeyDown()

body.addEventListener("keyup", (evento) => {
    if (evento.key == 'q') {
        som_tiro.pause();
        if (hero.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/atirador/parado_atirando.gif') {
            hero.src = 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/atirador/parado.png';
            hero.style.width = '250px'
        }
    }


    if (evento.key == 'd' || evento.key == 'a') {
        correndo_som.pause()
        if (hero.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/atirador/correndo_direto.gif') {
            hero.src = 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/atirador/parado.png'
            hero.style.width = '250px'
        }
    }
    if (evento.key == 'ArrowLeft') {
        setTimeout(() => {
            missil.style.display = 'none'

        }, 900)
        setTimeout(() => {
            mission_passed.pause();
        }, 7000)

    }

    if (evento.key == 'ArrowRight') {
        
        setTimeout(() => {
            mission_passed.pause();
            if (boss.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/assets/explosion.gif') {
                boss.src = 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/boss/boss_motossera.avif';
            }
            document.querySelector('.passou').style.display = "none"
            ms_fundo.play();
        },7000);

    }


})


function voltarInicio() {
    document.querySelector('.passou').style.display = "none"
    ms_fundo.play();
    if (boss.src == 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/assets/explosion.gif') {
                boss.src = 'file:///F:/BACKUP/Jojo%20Bizarras%20Aventuras/personagens/boss/boss_motossera.avif';
                boss.style.width = '250px'
    }
    som_smash.currentTime = 0;


}

// Evento de KeyUp() Soltou a tecla
