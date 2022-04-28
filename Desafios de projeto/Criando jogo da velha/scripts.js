var jogador, vencedor = null;
var jogadorselecionado = document.getElementById('jogador-selecionado');
var vencedorselecionado = document.getElementById('vencedor-selecionado');
var quadrado = document.getElementsByClassName('quadrado');

mudarjogador('X');

function escolherQuadrado(id) {

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    }else {
        jogador = 'X';
    }

    mudarjogador(jogador);
    checavencedor();
}

function mudarjogador(valor) {
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;
}

function checavencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checasequencia(quadrado1, quadrado2, quadrado3)) {
        mudarcorquadrado(quadrado1, quadrado2, quadrado3);
        mudarvencedor(quadrado);
        return;
    }

    if(checasequencia(quadrado4, quadrado5, quadrado6)) {
        mudarcorquadrado(quadrado4, quadrado5, quadrado6);
        mudarvencedor(quadrado4);
        return;
    }

    if(checasequencia(quadrado7, quadrado8, quadrado9)) {
        mudarcorquadrado(quadrado7, quadrado8, quadrado9);
        mudarvencedor(quadrado7);
        return;
    }

    if(checasequencia(quadrado1, quadrado4, quadrado7)) {
        mudarcorquadrado(quadrado1,quadrado4, quadrado7);
        mudarvencedor(quadrado1);
        return;
    }

    if(checasequencia(quadrado2, quadrado5, quadrado8)) {
        mudarcorquadrado(quadrado2, quadrado5, quadrado8);
        mudarvencedor(quadrado2);
        return;
    }

    if(checasequencia(quadrado3, quadrado6, quadrado9)) {
        mudarcorquadrado(quadrado3, quadrado6, quadrado9);
        mudarvencedor(quadrado3);
        return;
    }

    if(checasequencia(quadrado1, quadrado5, quadrado9)) {
        mudarcorquadrado(quadrado1, quadrado5, quadrado9);
        mudarvencedor(quadrado1);
        return;
    }
    if(checasequencia(quadrado3, quadrado5, quadrado7)) {
        mudarcorquadrado(quadrado3, quadrado5, quadrado7);
        mudarvencedor(quadrado3);
        return;
    }

}
function mudarvencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorselecionado.innerHTML = vencedor;
}


function mudarcorquadrado(quadrado1,quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checasequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorselecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++) {
        //executa o codigo até menor/igual a nove
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarjogador('X');
}