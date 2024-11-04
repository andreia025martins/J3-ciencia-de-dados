const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json';

async function visualizarInformacoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        console.log(dados)
    
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `Já parou para pensar que somos no mundo mais de <span>${dados.total_pessoas_mundo}</span> Com tantos esportes e novas maneiras de se movimentar, o tempo médio semanal praticando esportes é de <span>${dados.total_pessoas_que_praticam_esportes_regularmente}</span> Embora o número total de pessoas que praticam regularmente seja de cerca de<span>${dados.tempo_medio_semana_praticando_esportes}</span>. eles perdem para os praticantes
        da "apreciação do esporte", os quais somam quase<span>${dados.total_pessoas_que_assistem_esportes}</span>, que acreditam que podem queimar calorias apenas torcendo
        pelo time, como se vibrar na frente da TV contasse como treino, afinal, quem precisa de academia quando se tem o sofá
        como melhor amigo? `
        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo);
    }
    
    visualizarInformacoesGlobais()


   