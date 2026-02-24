// Importa a classe 'Buider' do módulo selenium-webdriver para criar e configurar o WebDriver
const { Builder } = require('selenium-webdriver')

// Define uma função assíncrona chamada 'abrirGoogle' para abrir o Google no navegador
async function abrirGoogle() {
    // Cria uma instância do ]erb]driver para navegador Chrome
    // O 'await' garante que a execução aguarde a criação do driver antes de prosseguir
    let driver = await new Builder().forBrowser('chrome').build();

    // Abre a URL do Google no navegador controlado pelo WebDriver
    await driver.get('https://www.google.com');

    // Faz o WebDriver esperar por 3 segundos antes de continuar, para que o usuário possa visualizar a página carregada
    await driver.sleep(3000); // Espera 3 segundos para visualizar o site aberto

    // Encerra a sessão do WebDriver e fecha o navegador
    await driver.quit(); // Fecha o navegador
}

// Chama a função 'abrirGoogle' para executar a automação
abrirGoogle();
