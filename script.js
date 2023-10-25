var botaoImagem = document.getElementById('botaoImagem');
        var meuIframe = document.getElementById('meuIframe');
        var visivel = false;

        botaoImagem.addEventListener('click', function() {
            if (!visivel) {
                meuIframe.style.display = 'block';
            } else {
                meuIframe.style.display = 'none';
            }
            visivel = !visivel;
        });
