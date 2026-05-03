import qrcode from 'qrcode-terminal';
import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Tudo certo! WhatsApp conectado.');
});

client.initialize();


const delay = ms => new Promise(res=> setTimeout(res, ms)); // Delay entre ações

client.on('message', async (msg) => { 
    // Primeiro bloco para capturar o comando inicial
    if (msg.body.match(/(dia|tarde|noite|oi|olá|ola|aivy)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        const contact = await msg.getContact();
        const name = contact.pushname || "amigo(a)";
        await client.sendMessage(msg.from,
            `Olá! ${name.split(" ")[0]}, eu sou a Aivy, sua assistente virtual do FalaSaúde 🧡\n\nTô aqui pra te ajudar com dicas, informações e muito cuidado com seu bem-estar.🤩 \nEscolha uma opção e vamos conversar!\nDIGITE:\n\n*1* - Saúde Física\n*2* - Saúde Mental\n*3* - Bem-estar Geral \n*4* - Exercícios e Movimentação\n*5* - Exercícios de Respiração\n*6* - Saúde em Atibaia (SP)`
        );
        await delay(3000);
        
    }
});

    client.on('message', async (msg) => { 
    // Segundo bloco para a escolha de '1' - Saúde Física
    if (msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from,
            `Cuidar do corpo é o primeiro passo para o bem-estar! Vamos juntos nessa?\nEscolha uma área que gostaria de conversar:\nDIGITE:\n\n*Alimentação* \n*Sono* \n*Exercícios Físicos* \n*Hidratação*\n*Cuidados essenciais* \n*Menu*   \n *Encerrar*  `);
    }
});
    
    client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '1.1' || texto.includes('alimentação')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Vamos falar rapidinho sobre alimentação saudável?\nComer bem é mais simples do que parece! 🥗\nBasta incluir no seu dia a dia:');
            const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Frutas, legumes e verduras bem coloridos.🥦🍎🥕\nArroz, feijão, cereais integrais.🍚🌾');
        
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Carnes magras, ovos ou outras fontes de proteínas. 🍗🥚\nÁgua, muita água!💧');
        
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Evite alimentos ultraprocessados, cheios de açucar, sal ou gorduras.❌🍭🍟\nSeu corpo e sua mente agradecem!');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Quer mais dicas de alimentação saudável?\nSiga nosso canal oficial aqui no Whatsapp, com as melhores dicas pra você cuidar da sua saúde. Vamos juntos nessa?\nComida boa, corpo feliz e mente leve!');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
     
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');
    
    }
});

 client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '1.2' || texto.includes('sono')) && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await responder(msg,'🌙 Vamos falar sobre sono?\nDormir bem faz toda a diferença na sua saúde e no seu bem-estar. Aqui vão algumas dicas especiais pra voce ter noites mais tranquilas:');
             
     await delay(3000);
     await chat.sendStateTyping();
      await delay (3000);
     await client.sendMessage(msg.from, ' 🕰️ Crie uma rotina do sono.\nTente dormir e acordar nos mesmos horários todos os dias, mesmo nos finais de semana. Seu corpo ama rotina!');
                
     await delay(3000);
     await chat.sendStateTyping();
     await delay (3000);
     await client.sendMessage(msg.from, ' 📵 Desconecte um pouquinho antes de dormir.\nEvite celular, TV e computador pelo menos 30 min antes de se deitar. Isso ajuda seu cérebro a entender que é hora de relaxar.');
            
         
        await delay(3000);
        await chat.sendStateTyping();
     await delay (3000);
      await client.sendMessage(msg.from, '🛏️ Cuide do seu cantinho do descanso.\nMantenha o querto escuto, silencioso e fresquinho. Um ambiente confortável faz toda a diferença.');
    
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '☕❌Evite cafeína e refeições pesadas à noite.\nChá verde, refrigerantes, café e alimentos pesados podem atrapalhar o sono. Prefira lanchinhos leves se bater a fome.');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '🚶‍♀️✨ Movimento durante o dia ajuda a descansar à noite.\nAtividades físicas leves, como caminhada ou alongamento, ajudam a melhorar a qualidade do sono!');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '🌙🛁 Crie rituais relaxantes.\nTomar um banho morno, ouvir uma música calma ou fazer respiração profunda pode ser seu momento de autocuidado antes de dormir.\nBons Sonhos!');
    
      await delay(3000);
     await chat.sendStateTyping();
     await delay(3000);
     await client.sendMessage(msg.from, 'Quer mais dicas de sono? 😴✨\nÉ só seguir nosso canal no WhatsApp! 📱💬\nVamos juntos nessa?\nSono tranquilo, dia melhor!');
    
     await delay(3000);
     await chat.sendStateTyping();
     await delay(3000);
     await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
    
    
     await delay(3000);
     await chat.sendStateTyping();
     await delay (3000);
     await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}
});

   client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '1.3' || texto.includes('Exercícios')|| texto.includes('físicos')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Vamos mexer o corpinho? Se movimentar faz bem pro corpo, pra mente e pro coração!\nAqui vão umas dicas pra colocar mais atividade física na sua rotina, do jeitinho que funciona pra você:');
const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Comece devagar e vá no seu ritmo 🐢➡️⚡\nVocê não precisa fazer tudo de uma vez. Uma caminhada de 10 min já é um ótimo começo!');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Encontre algo que te dê prazer 🎶‍♀️\nDança, caminhada, pedal, pular corda, alongamento… O melhor exercício é aquele que você gosta!');

            await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Mexa-se mesmo dentro de casa 🏡🧘\nDá pra alongar, subir escada, dançar enquanto faz o almoço… Tudo conta!');

            await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Faça pausas ativas no dia ⏸️➡️🏃‍♂️\nFicou muito tempo sentado? Levanta, espreguiça, dá uma voltinha no quarteirão ou faz 1 min de polichinelos!');

            await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Mantenha a constância, não a perfeição 📆❤️\nMesmo que sejam 15 min por dia, o importante é manter o hábito. Seu corpo vai agradecer!');

         await delay(3000);
         await chat.sendStateTyping();
         await delay(3000);
         await client.sendMessage(msg.from, 'Quer mais dicas de exercícios físicos? 🏃‍♀️🏋️‍♂️\nÉ só seguir nosso canal no WhatsApp! 📱💬\nBora se movimentar juntos! 💪✨');

         await delay(3000);
         await chat.sendStateTyping();
         await delay(3000);
         await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');


         await delay(3000);
         await chat.sendStateTyping();
         await delay (3000);
         await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');
}
});

 client.on('message', async (msg) => {
    const texto = msg.body.toLowerCase();

    // Função responder deve estar fora de qualquer if
    async function responder(msg, texto) {
        const chat = await msg.getChat();
        await chat.sendMessage(texto);
    }

    // Agora sim, fora da função responder
    if ((texto === '1.4' || texto.includes('hidratação')) && msg.from.endsWith('@c.us')) {
        await responder(msg, 'Ei, você já bebeu água hoje?\nA hidratação é essencial pra sua saúde, disposição e até pro humor!\nOlha só essas dicas que preparei pra você:');
    const chat = await msg.getChat();
    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Comece o dia com um copo de água 💧☀️\nAntes mesmo do café, já acorda o corpo com um gole de vida!');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Leve uma garrafinha com você sempre 🚰🎒\nDeixa ela pertinho: na bolsa, na mesa, na mochila… Assim você lembra de beber durante o dia.');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Use lembretes se precisar ⏰📱\nPode ser alarme no celular, app ou até eu te lembrando por aqui! O importante é não esquecer!');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Dê sabor à sua água com frutas ou ervas 🍓🍋🌿\nÁgua com rodelas de limão, hortelã ou pedacinhos de morango fica uma delícia!');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Observe seu corpo 🧐\nBoca seca, dor de cabeça e cansaço podem ser sinais de que falta água por aí.');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Frutas também hidratam! 🍉🍍🥒\nMelancia, abacaxi, pepino… são ótimos aliados pra complementar a hidratação.');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Quer mais dicas de hidratação? 💧✨\nÉ só seguir nosso canal no WhatsApp! 📱💬\nVamos cuidar da sua saúde juntos! 💙');
    
    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
 
    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');
  }

});


 client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }
  if ((texto === '1.5' || texto.includes('cuidados')|| texto.includes('essenciais')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Já cuidou de você hoje?\nPequenos cuidados diários fazem toda a diferença pra sua saúde e autoestima.\nOlha só essas dicas pra você se sentir bem todos os dias:');
 const chat = await msg.getChat();
    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, 'Passe protetor solar todos os dias ☀️🧴\nMesmo em dias nublados ou dentro de casa, o filtro solar protege sua pele dos raios UV.\nVai por mim: é amor em forma de cuidado!');

    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, 'Limpe sua pele pela manhã e antes de dormir 🧼✨\nLavar o rosto ajuda a remover impurezas, controlar oleosidade e evitar acne.\nUma pele limpinha é uma pele feliz!');

    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, 'Hidrate o corpo e o rosto diariamente 🧴💧\nA hidratação mantém sua pele macia, saudável e radiante.\nE não esquece de beber água também!');

    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, 'Cuide das mãos e dos lábios 👐💋\nUse hidratante nas mãos e um labial pra evitar ressecamento, principalmente em dias frios ou secos.');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Quer saber mais sobre cuidados essenciais? 🧴🩺\nÉ só seguir nosso canal no WhatsApp! 📱💬\nVem aprender a cuidar ainda melhor de você! 💛');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');


    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}
});

client.on('message', async (msg) => { 
    // Segundo bloco para a escolha de '2' - Saúde Mental
    if (msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'A mente também precisa de carinho e atenção! Escolha um tema pra gente conversar:\nDIGITE:\n\n*Autocuidado* \n*Autoajuda* \n*Bem-estar emocional* \n*Menu* \n*Encerrar*');
    
       
    }
});

    client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }
  if ((texto === '2.1' || texto.includes('autocuidado')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Quero te lembrar que cuidar da sua mente é tão importante quanto cuidar do corpo.\nO autocuidado é um abraço que a gente se dá! Vem ver essas dicas:');
 const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Reserve um tempinho só pra você ⏳❤️\nNem que seja 5 minutinhos do dia... ouvir uma música, respirar fundo, ficar em silêncio.\nVocê merece esse momento!');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Dê espaço para seus sentimentos 🫂\nTá tudo bem não estar bem o tempo todo.\nSe permita sentir, acolher e entender o que tá passando aí dentro.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Desconecte um pouco das redes sociais 📵🌿\nComparações constantes podem machucar.\nTire um tempo offline pra se reconectar com você.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Fale com alguém de confiança ou procure ajuda profissional ☎️‍⚕️\nConversar é um alívio.\nPsicólogos, amigos, familiares... você não precisa enfrentar tudo sozinho(a).');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Celebre suas conquistas, até as pequenas! 🎉\nLevantou da cama? Conseguiu fazer algo difícil?\nSe reconheça. Você tá indo muito bem!');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Quer mais dicas de autocuidado? 🌸🧘‍♀️\nÉ só seguir nosso canal no WhatsApp! 📱💬\nSeu bem-estar merece esse carinho! 💖');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
     
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');
    
    }

});



 client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '2.2' || texto.includes('autoajuda')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Posso te contar uma coisa? Você tem uma força incrível aí dentro!\nE às vezes, tudo o que a gente precisa é de uma ajudinha pra lembrar disso.\nOlha só essas dicas de autoajuda que preparei:');
     const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Fale com você com amor e respeito 🪞❤️\nNada de se criticar o tempo todo!\nTroque o “não consigo” por “vou tentar” e o “sou ruim nisso” por “posso melhorar”.');
    
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Escreva seus pensamentos e sentimentos ✍️🧠\nColocar no papel o que você sente ajuda a organizar as emoções e encontrar clareza nos momentos difíceis.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Crie afirmações positivas pra repetir no dia a dia ✨\nFrases como “Eu sou capaz”, “Estou no meu tempo” ou “Eu mereço coisas boas” podem transformar seu olhar sobre si mesmo(a).');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Pratique a gratidão, mesmo nas pequenas coisas 🌻Anotar 3 coisas boas do seu dia pode mudar seu foco do que falta para o que já existe de bom.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Busque inspirações que te façam bem 📚🎧\nLivros, podcasts, vídeos ou até conversas com gente querida... tudo que alimenta a mente e o coração vale ouro!');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Seja paciente com seu processo ⏳\nCada passo, por menor que pareça, é parte do seu crescimento.\nRespeite seu tempo, celebre seu caminho.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Quer mais dicas de autoajuda? 📚✨\nÉ só seguir nosso canal no WhatsApp! 📱💬\nInspire-se e transforme sua vida um passo de cada vez! 🌟');
    
     await delay(3000);
        await chat.sendStateTyping();
     await delay(3000);
        await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
    
     await delay(3000);
     await chat.sendStateTyping();
     await delay (3000);
     await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}
});


     client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '2.3' || texto.includes('estar')|| texto.includes('emocional')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Vamos falar sobre bem-estar emocional? 💛🧘‍♀️\nVeja algumas dicas para ajudar:');
       const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Respire fundo quando sentir ansiedade 🌬️🧘‍♀️\nUma respiração consciente pode acalmar sua mente em poucos minutos.\n✨ Aqui no "menu" em "Exercícios de Respiração" (5), você encontra ótimas técnicas que irão te ajudar muito. ');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Permita-se sentir 🎭💛\nTá tudo bem não estar bem o tempo todo. 🌈\nAceitar suas emoções é o primeiro passo para cuidar delas.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Diga "não" quando precisar 🚫🧠\nColocar limites é um ato de amor próprio. 💬\nVocê não precisa aceitar tudo para ser querido(a).');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Alimente sua mente com coisas boas 📚🌟\nLeia algo inspirador, escute um podcast leve ou veja um filme que te faça bem. 🎧\nEscolha conteúdos que tragam paz e esperança.');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Lembre-se: cada dia é uma nova chance 🌞🌻\nNem todos os dias serão perfeitos — e tudo bem! 🚀\nComece de onde você está, com o que você tem, do seu jeito.');


       await delay(3000);
        await chat.sendStateTyping();
       await delay(3000);
       await client.sendMessage(msg.from, 'Quer mais dicas de bem-estar emocional? 💛🧘‍♀️\nÉ só seguir nosso canal no WhatsApp! 📱💬\nSua mente e coração merecem todo o cuidado! 💖');

       await delay(3000);
        await chat.sendStateTyping();
       await delay(3000);
       await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}
});

 client.on('message', async (msg) => { 
    // Segundo bloco para a escolha de '3' - Bem-Estar Geral
    if (msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'O bem-estar mora nas pequenas coisas e nos momentos que trazem sentido pra vida.\nVamos lá?\nDIGITE:\n\n*Propósito de vida* \n*Aprender algo novo* \n*Conexão com Natureza* \n*Menu*\n*Encerrar*');
        

    }

});

    client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '3.1' || texto.includes('propósito')|| texto.includes('vida')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Sabe aquele sentimento de que a vida pode ter mais cor, mais sentido? 🎨✨\nVocê já carrega um propósito lindo aí dentro.\nÀs vezes, só falta dar uma olhadinha pra dentro e reencontrar ele. 💛');
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Propósito não é um destino final, é um caminho Você não precisa ter tudo definido. 🛤️\nO importante é seguir o que faz sentido pra você hoje.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Olhe para o que te move, não só para o que esperam de você Às vezes, o que te empolga de verdade está escondido nas coisas simples. ❤️\nPergunte-se: o que me faz sentir vivo?');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Testar faz parte do processo Você só descobre tentando, errando, ajustando. 🧪\nO propósito se constrói na prática, não só no pensamento.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode ter mais de um propósito Não existe “um único chamado”. 🌈\nSeus talentos, paixões e fases da vida podem te levar por caminhos diferentes — e tá tudo bem!');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Escute seu ritmo interior Comparar sua jornada com a dos outros só atrasa seu florescer. ⏳\nCada pessoa tem seu tempo.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Propósito também é servir Contribuir com algo maior — mesmo que pequeno — traz sentido à vida. 🤝\nÀs vezes, seu propósito está em fazer bem ao mundo ao seu redor.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Quer saber mais sobre propósito de vida? 🌟🛤️\nÉ só seguir nosso canal no WhatsApp! 📱💬\nDescubra caminhos para viver com mais sentido e inspiração! ✨');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
       
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');
    
    }

});


 client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }
  if ((texto === '3.2' || texto.includes('aprender')|| texto.includes('novo')) && msg.from.endsWith('@c.us')) {
    await responder(msg, 'Aprender é como plantar sementinhas dentro da gente... e cada nova descoberta faz a nossa vida florescer! 🌻\nOlha só essas dicas que preparei pra te inspirar:');
     const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Comece pequeno, mas comece Você não precisa saber tudo de uma vez. 🌱\nUm passo por dia já é crescimento.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Curiosidade é melhor que perfeição Errar faz parte do aprendizado! 🔍\nTroque o medo de errar pela vontade de descobrir.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Encontre um jeito que funcione pra você Tem gente que aprende lendo, outros ouvindo, outros colocando a mão na massa. 🎧📚✍️\nEscolha o seu estilo — e abrace o processo!');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Seja gentil consigo mesmo, Você não precisa dominar tudo rápido. 🕊️\nO importante é avançar no seu tempo.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Compartilhe o que sabe Ensinar também é uma forma poderosa de aprender. 🤝\nQuando você explica, reforça o que aprendeu e ainda ajuda alguém.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Divirta-se no processo! Aprender pode (e deve!) ser leve e prazeroso. 🎨\nExperimente, brinque com o conteúdo, se permita explorar.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Quer mais dicas de como aprender algo novo? 📚🚀\nÉ só seguir nosso canal no WhatsApp! 📱💬\nSeu conhecimento merece esse impulso! 🌟');
    
       await delay(3000);
       await chat.sendStateTyping();
       await delay(3000);
       await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
    
    
       await delay(3000);
       await chat.sendStateTyping();
       await delay (3000);
       await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}
});


    client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }
  if ((texto === '3.3' || texto.includes('conexão')|| texto.includes('natureza')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'A natureza é como um abraço gigante que sempre está ali pra gente... 🍃\nSe reconectar com ela é também se reconectar com a nossa própria essência. 💚\nOlha só essas dicas que preparei pra você:');
      const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Caminhe sem pressa Sinta o chão, ouça os sons, observe as cores ao redor. 🚶‍♀️\nEstar na natureza é estar presente.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Toque o que é natural Encoste numa árvore, segure uma pedra, sinta a textura das folhas. 🌳\nEsse contato desperta calma e presença.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Respire fundo ao ar livre Pausa. Inspira. Expira. 🌬️\nO ar puro limpa a mente e recarrega o coração.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Observe com curiosidade Olhe o céu, repare nas nuvens, nas formigas, no jeito que a luz toca as plantas. 🔍\nA natureza tem detalhes que a gente só vê quando desacelera.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Crie rituais com a natureza Tomar um chá no quintal, fazer uma caminhada ao pôr do sol, meditar sob uma árvore. ☀️\nPequenos momentos que viram grandes conexões.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Cuide de uma plantinha Plantar, regar, acompanhar o crescimento… tudo isso conecta e acalma. 🪴\nA natureza ensina paciência e presença.');

        await delay(3000);
       await chat.sendStateTyping();
       await delay(3000);
       await client.sendMessage(msg.from, 'Quer mais dicas de conexão com a natureza? 🌿🌎\nÉ só seguir nosso canal no WhatsApp! 📱💬\nSua energia merece esse reencontro com o natural! 🌸✨');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');


        await delay(3000);
        await chat.sendStateTyping();
     await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}
});


 client.on('message', async (msg) => { 
    // Segundo bloco para a escolha de '4' - Exercício e Movimento
    if (msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Que tal mexer o corpo de forma leve e consciente?\nDIGITE:\n\n*Dicas para o corpo*\n*Alongamentos*\n*Exercícios de circulação* \n*Menu*\n*Encerrar*');
        

    }

});

    client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '4.1' || texto.includes('dicas')|| texto.includes('corpo')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Pronto para dar um up no seu corpo e na sua energia? 💥💪 Cuidar de si é um ato de amor e respeito!\nAqui estão algumas dicas práticas que vão transformar seu dia e te deixar com muito mais disposição.');
 const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Aqueça antes de se exercitar 🔥\nAntes de qualquer atividade física, dedique alguns minutos ao aquecimento.\nIsso prepara seus músculos, evita lesões e melhora o desempenho.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Experimente atividades ao ar livre 🌳☀️\nA natureza tem um poder único sobre o corpo e a mente.\nCaminhar em um parque ou praticar yoga ao ar livre são maneiras incríveis de se conectar com o ambiente e movimentar o corpo.');


        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Tenha um alongamento matinal 🌅🤸‍♀️ Comece o dia alongando o corpo.\nIsso ajuda a ativar a circulação, aliviar tensões e prepara você para o dia com mais disposição.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Massageie seus músculos para aliviar tensões 💆‍♂️💖\nUse uma bola de massagem ou um rolo de espuma para relaxar os músculos. Isso ajuda a melhorar a circulação e alivia áreas de dor.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Use a escada sempre que possível 🏃‍♀️🪜\nSubir escadas é um excelente exercício para fortalecer pernas e glúteos, além de melhorar a resistência cardiovascular.');


        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Quer mais dicas práticas para cuidar do seu corpo? 💪🌿\nÉ só seguir nosso canal no WhatsApp! 📱💬\nSeu corpo merece atenção, carinho e movimento! ✨💖');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');
    
    }

});



 client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '4.2' || texto.includes('alongamentos')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Que tal alongar e se sentir ainda melhor? 🌿🤗\nSeparei algumas dicas simples de alongamento para você deixar seu corpo com mais leveza. Dá uma olhada:');
     const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Mantenha a postura alinhada 🧘‍♀️📏\nDurante o alongamento, cuide da postura: coluna ereta, ombros relaxados e pescoço alinhado.\nIsso evita sobrecargas e melhora os resultados.');
    
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Alongue devagar, sem pressa 🐢✨\nMovimente-se de forma lenta e consciente.\nEvite movimentos bruscos ou forçar além do seu limite.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Sinta o alongamento, mas sem dor 🚦⚡\nVocê deve sentir o músculo esticando levemente, nunca dor forte.\nSe doer, diminua a intensidade ou ajuste o movimento.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Segure cada posição entre 20 a 30 segundos ⏳🧘‍♂️\nManter o alongamento por alguns segundos permite que o músculo relaxe e se estenda de verdade.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Alongue todo o corpo, não só uma parte 🌍🤲\nLembre-se de alongar braços, pernas, costas, pescoço... o corpo inteiro agradece!');


        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
       await client.sendMessage(msg.from, 'Quer mais dicas de alongamentos? 🤸‍♀️🌟\nÉ só seguir nosso canal no WhatsApp! 📱💬\nSeu corpo merece esse carinho e movimento! 💖');
    
       await delay(3000);
       await chat.sendStateTyping();
       await delay(3000);
        await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
    
    
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}

});


     client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '4.3' || texto.includes('circulação')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Vamos ativar a sua circulação? 💓🏃‍♀️\nMovimentar o corpo é essencial para sua saúde e seu bem-estar!\nVeja alguns exercícios simples que vão fazer seu sangue fluir com mais energia:');
     const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Caminhada leve\nCaminhar 15 a 30 minutos por dia já melhora muito a circulação. 🚶‍♀️\nVale no quarteirão, no parque ou até dentro de casa!');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Elevação de pernas\nDeite e eleve as pernas por alguns minutos, apoiadas na parede. 🦵\nEssa posição ajuda o sangue a voltar pro coração e alivia o inchaço.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Rotação de tornozelos Perfeito pra quem fica muito tempo sentado(a). 🌀\nGire os pés em círculos, 10 vezes para cada lado, várias vezes ao dia.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Alongamento de pernas e braços Alongar o corpo ajuda a liberar tensões e melhora o fluxo sanguíneo. 🤸‍♀️\nFaça movimentos suaves e respire fundo.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Subir e descer escadas\nSe tiver escada por perto, aproveite! 🪜\nÉ ótimo pro coração, circulação e ainda fortalece as pernas.');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Massagem com movimentos circulares\nMassagear pés e pernas com movimentos ascendentes ajuda muito. 💆‍♀️\nUse um hidratante ou óleo natural pra tornar esse momento ainda mais relaxante.');

        await delay(3000);
       await chat.sendStateTyping();
       await delay(3000);
       await client.sendMessage(msg.from, 'Quer saber mais exercícios que ajudam na circulação? 🏃‍♀️💓\nÉ só seguir nosso canal no WhatsApp! 📱💬\nSeu corpo merece esse cuidado e vitalidade! ✨');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');


        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');
}
});


 client.on('message', async (msg) => { 
    // Segundo bloco para a escolha de '5' - Exercícios de Respiração
    if (msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Respirar bem muda o seu dia! Vamos treinar juntos?\nDIGITE:\n\n*Técnica simples*  \n*Acalmar e focar* \n*Menu*\n*Encerrar*');


    }
});


   client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '5.1' || texto.includes('técnica')|| texto.includes('simples')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Vamos treinar sua respiração? 🌬️✨\nRespirar corretamente pode transformar seu dia, aliviar o estresse e aumentar sua energia.\nEscolha uma técnica ou dica e comece agora!');
     const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Respiração 4-4-4 (quadrada) Ajuda a acalmar em momentos de ansiedade. 🔲\nInspire por 4 segundos, segure por 4, expire por 4, segure por 4... e repita.\nFaça por 1 a 2 minutinhos.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Respiração profunda e lenta Ideal pra relaxar ou antes de dormir. 🌬️\nInspire profundamente pelo nariz por 5 segundos, solte pela boca em 7 segundos.\nRepita de 3 a 5 vezes.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Respiração alternada (narinas) Técnica usada no yoga pra equilibrar mente e corpo. 👃\nTampe a narina direita, inspire pela esquerda.\nTampe a esquerda, expire pela direita. Depois inverta.\nFaça por 1 minuto.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Suspiro consciente Um alívio rápido pro corpo e pro emocional. 😮‍💨\nInspire profundamente, segure o ar por 2 segundos e solte fazendo um som de suspiro.\nRepita sempre que sentir tensão.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Respiração com foco no abdômen Acalma e reduz o estresse. 🧘‍♀️\nColoque a mão na barriga. Ao inspirar, sinta ela subir. Ao expirar, sinta ela descer.\nFaça de olhos fechados, por 2 a 3 minutos.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Respiração + movimento Combine com alongamentos ou caminhada leve. 🚶‍♂️\nInspire a cada 3 passos, expire nos 3 seguintes — ajuda a manter o ritmo e relaxar.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Quer saber mais de técnicas simples de respiração? 🌬️\nÉ só seguir nosso canal no WhatsApp! 📱💬\nRespirar bem é um presente que você merece! 💖');
        
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
     
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');
    
    }
});


 client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }
  if ((texto === '5.2' || texto.includes('acalmar')|| texto.includes('focar')) && msg.from.endsWith('@c.us')) {
    await responder(msg,'Vamos respirar fundo e encontrar a calma? 🌿🧘‍♀️\nA respiração é uma poderosa aliada para acalmar a mente e focar no que importa.\nVamos praticar juntos:');
         const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Respiração 4-7-8 (calmante) Ótima para reduzir a ansiedade e desacelerar. 🌙\nInspire por 4 segundos, segure por 7, expire bem devagar por 8.\nRepita 3 a 4 vezes com os olhos fechados.');
    
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Respiração profunda + foco Ajuda a clarear os pensamentos. 🎯\nInspire pelo nariz contando até 5, solte o ar contando até 5.\nEnquanto respira, pense: “Estou aqui, agora.”');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Técnica 3-3-6 (alívio rápido) Equilibra corpo e mente em minutos. 💨\nInspire por 3 segundos, segure por 3, expire por 6.\nO tempo de expiração maior ajuda a acalmar o sistema nervoso.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Respiração com contagem regressiva Para quando a mente está agitada. 🔢\nInspire e conte de 5 até 1 mentalmente. Expire e conte novamente de 5 até 1.\nFoque só na contagem e no ar entrando e saindo.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Respiração da atenção plena Pra trazer presença ao momento. 🧘‍♂️\nInspire sentindo o ar entrando pelas narinas.\nExpire prestando atenção ao movimento do peito. Observe sem julgar, só sinta.');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Respiração por etapas (foco progressivo) Ativa a concentração com suavidade. 📌\nInspire 3 vezes curtas e seguidas pelo nariz.\nExpire lentamente pela boca. Ajuda a “recarregar” a mente.');


        await delay(3000);
       await chat.sendStateTyping();
       await delay(3000);
       await client.sendMessage(msg.from, 'Quer mais dicas de exercícios para acalmar? 🌿🧘‍♀️\nÉ só seguir nosso canal no WhatsApp! 📱💬\nSua mente merece momentos de paz e leveza! 💖');
    
       await delay(3000);
       await chat.sendStateTyping();
       await delay(3000);
       await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');
    
    
       await delay(3000);
       await chat.sendStateTyping();
       await delay (3000);
       await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}
});


    client.on('message', async (msg) => { 
    // Segundo bloco para a escolha de '6' - Saúde em Atibaia (SP)
    if (msg.body === '6' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from,'A saúde da nossa cidade também é prioridade!\nDIGITE:\n\n*Serviços de saúde locais*\n*Campanhas de vacinação e prevenção* \n*Eventos e ações* \n*Saúde da Mulher*\n*Menu*\n*Encerrar*');

}
});


     client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

  if ((texto === '6.1' || texto.includes('serviços')|| texto.includes('locais')) && msg.from.endsWith('@c.us')) {
    await responder(msg, 'Precisa de atendimento de saúde em Atibaia? 🏥✨\nVeja aqui informações sobre hospitais, postos de saúde e contatos importantes para cuidar de você! 💙');
    await delay(3000);
   await chat.sendStateTyping();
   await delay(3000);
   await client.sendMessage(msg.from, '🏥 Unidade de Pronto Atendimento (UPA)\n📍Local: Jardim Cerejeiras, Atibaia-SP\n🩺 Serviços: Atendimento de urgência e emergência 24h\n📞 Telefone: (11) 4412-3456');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🏥 Santa Casa de Atibaia\n📍 Local: Centro, Atibaia, SP\n🩺 Serviços: Atendimento médico, internações\n📞 Telefone: (11) 4414-6789')

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🏥 UBS Centro Dr. Oswaldo Paccini\n📍 Local: Centro, Atibaia, SP\n🩺 Serviços: Consultas médicas, serviços de enfermagem\n📞 Telefone: (11) 4415-1234')


    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🏥 UBS Alvinópolis Antonio de Pádua Alonso\n📍 Local: Alvinópolis, Atibaia, SP\n🩺 Serviços: Atendimento médico e odontológico\n📞 Telefone: (11) 4416-5678')

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🏥 UBS Tanque Hélio Bacci\n📍 Local: Tanque, Atibaia, SP\n🩺 Serviços: Atendimento ampliado para 16 mil pessoas\n📞 Telefone: (11) 4417-9101')

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🏥 UBS Usina Dr. Herconides Martins de Oliveira\n📍 Local: Usina, Atibaia, SP\n🩺 Serviços: Atendimento previsto para até 14 mil pessoas\n📞 Telefone: (11) 4418-1121')

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🔗 Para mais informações, acesse a Carta de Serviços da Saúde de Atibaia.');
    
    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}

});


 client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

if ((texto === '6.2' || texto.includes('vacinação')|| texto.includes('Campanha') || texto.includes('prevenção')) && msg.from.endsWith('@c.us')) {
  const chat = await msg.getChat();
   await responder(msg, 'Fique de olho na sua saúde! 💉🗓️\nVeja as campanhas de vacinação programadas para os próximos meses e proteja quem você ama! 💛');
    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, '📅 Abril\n💉 Campanha de Vacinação contra a Gripe (Influenza)\n📍 Locais: Unidades com salas de vacina em toda a cidade\n🗓️ Dia D: Durante o mês (data a confirmar)')

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '📅 Maio\n🦟 Vacinação contra a Dengue\n🗓️ Início: 7 de maio\n🎯 Público-alvo: Crianças de 10 e 11 anos\n📝 Justificativa: Prevenção diante do aumento de casos no país!');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🔹 Campanha Nacional de Multivacinação\n📅 Prevista para agosto\n📍 Locais: UBSs com salas de vacina 👨‍👩‍👧‍👦\nObjetivo: Atualizar vacinas atrasadas para crianças, adolescentes e adultos');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, '🔹 Atualização da Caderneta de Vacinação Infantil\n📅 Durante todo o mês de maio\n📍 Locais: Todas as UBSs 🧸\nPara quem: Crianças e adolescentes até 15 anos 📚\nImportante: Levar a carteirinha de vacinação!');

    await delay(3000);
    await chat.sendStateTyping();
    await delay(3000);
    await client.sendMessage(msg.from, 'Link para nosso canal, lá comunicaremos sempre que tiver alguma novidade : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');

    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}
});


 client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }

if ((texto === '6.3' || texto.includes('eventos') || texto.includes('ações')) && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await responder(msg, 'Vamos nos conectar com o que acontece por aqui? 🎉🏙️\nConfira as ações e eventos especiais na nossa cidade e participe de momentos cheios de energia e bem-estar! 🌟');
     
    await delay(3000);
    await chat.sendStateTyping();
    await delay (3000);
    await client.sendMessage(msg.from, 'Mutirão de Castração de Animais 2025 \nLocal: Rua João Lozasso, 455 - Morumbi, Atibaia-SP\nDatas: Maio: 19 e 23 Junho: 25 e 30\nJulho: 28 e 31 Agosto: 18 e 22 Setembro: 22 e 26\nOutubro: 20 e 24 Novembro: 10 e 14 Dezembro: 8 e 12\nInscrição: bit.ly/InscricaoCastracaoAtibaia \nRequisitos: RG, CPF, comprovante de residência em Atibaia.');

   await delay(3000);
   await chat.sendStateTyping();
   await delay(3000);
   await client.sendMessage(msg.from, 'Aniversário de 360 anos de Atibaia 📅 22 a 24 de junho 📍\nParque Municipal Edmundo Zanoni e Centro\n➔ Shows com Raça Negra, Tatau e atrações locais.');

   await delay(3000);
   await chat.sendStateTyping();
   await delay(3000);
   await client.sendMessage(msg.from, 'Festa de Flores e Morangos 📅 Agosto e Setembro (datas a confirmar)\n📍 Parque Municipal Edmundo Zanoni\n➔ Exposição de flores, morangos, apresentações culturais e comidas típicas.');

    await delay(3000);
   await chat.sendStateTyping();
   await delay(3000);
   await client.sendMessage(msg.from, 'Taça Atibaia 2025 📅 A partir de abril\n📍 Diversos campos de futebol da cidade\n➔ Campeonato de futebol amador com times locais.');

    await delay(3000);
   await chat.sendStateTyping();
   await delay(3000);
   await client.sendMessage(msg.from, '🎭 Atividades Culturais Vigília Cultural no Cine Itá 📅 Abril (datas específicas a confirmar)\n📍 Cine Itá Cultural, Centro\n➔ Exibição de filmes produzidos na cidade e rodas de conversa.');

   await delay(3000);
   await chat.sendStateTyping();
   await delay(3000);
   await client.sendMessage(msg.from, 'Oficinas de Cinema 📅 Maio e Junho 📍 Cine Itá Cultural e espaços culturais da cidade ➔ Cursos de produção audiovisual gratuitos.');

   await delay(3000);
   await chat.sendStateTyping();
   await delay(3000);
   await client.sendMessage(msg.from, 'Para mais informações, acesse a Carta de Serviços da Saúde de Atibaia, ou acesse nosso Canal no Whatsapp que te deixaremos sempre informados com tudo o que acontece por aqui.');

   await delay(3000);
   await chat.sendStateTyping();
   await delay(3000);
   await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');

   await delay(3000);
   await chat.sendStateTyping();
   await delay (3000);
   await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');

}
 });

 
 client.on('message', async (msg) => { 
    const texto = msg.body.toLowerCase();
    async function responder(msg, texto) {
    const chat = await msg.getChat();
    }
    
if ((texto === '6.4' || texto.includes('mulher')) && msg.from.endsWith('@c.us')) {
    const chat = await msg.getChat();
    await responder(msg, 'Atibaia oferece diversos serviços de saúde para as mulheres, com foco em prevenção, acompanhamento e bem-estar.\nOlha essas dicas para cuidar de você: 🌸💖\nCuidar de você é essencial! 💖');
         
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '🩺 Serviços de Saúde da Mulher\nA Prefeitura de Atibaia oferece diversas opções para o acompanhamento da saúde da mulher, desde a prevenção até o tratamento de doenças específicas.\nEntre os serviços, estão o acompanhamento ginecológico, o pré-natal e a saúde reprodutiva.');
    
        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '🧑‍🦱 Prevenção de Cânceres Femininos\n Também são realizadas campanhas de prevenção e detecção precoce de cânceres femininos, como: \nMamografia: A recomendação é que mulheres a partir dos 40 anos façam exames de mamografia anualmente. \nPapanicolau: Exame preventivo para o câncer de colo de útero, recomendado para mulheres a partir dos 25 anos');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '💉 Vacinação para Mulheres\nAs mulheres também fazem parte das campanhas de vacinação, com destaque para:\nVacinação contra o HPV (recomendada para meninas de 9 a 14 anos)\nVacinação contra a gripe (mulheres grávidas e puérperas)\nVacinação contra a hepatite B (adolescentes e mulheres adultas)');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '💜 Saúde Mental e Apoio Psicológico para Mulheres\nAlém da saúde física, a saúde mental das mulheres também é uma prioridade. As mulheres têm acesso a serviços de apoio psicológico, como terapia individual e grupos de apoio. A saúde emocional é essencial para o equilíbrio e o bem-estar.');


        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Centro de Referência de Atendimento à Mulher\n📍 Endereço: Rua José Lucas, 246 – Centro\n📞 Telefone: (11) 4411-7378 / WhatsApp: (11) 98740-0166');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '🚨 Denúncias de Violência Contra a Mulher\nCaso você ou alguém que você conheça esteja passando por situações de violência, é essencial buscar ajuda.\nVocê pode fazer denúncias de violência doméstica e familiar através dos seguintes canais:\nDisque 180 – Central de Atendimento à Mulher (24h)');

        await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, 'Delegacia de Defesa da Mulher (DDM)\n📍 Endereço: Rua José Lucas, 150 – Centro\n📞 Telefone: (11) 4411-8082');


        await delay(3000);
       await chat.sendStateTyping();
       await delay(3000);
       await client.sendMessage(msg.from, 'Quer mais dicas de saúde da mulher? 🌸💪\nÉ só seguir nosso canal no WhatsApp! 📱💬\nCuidar de você é um ato de amor próprio! 💖');
     
       await delay(3000);
       await chat.sendStateTyping();
       await delay(3000);
       await client.sendMessage(msg.from, 'Link para nosso canal : https://whatsapp.com/channel/0029VbAYvQzCRs1etnJqCH1F');

       await delay(3000);
        await chat.sendStateTyping();
        await delay (3000);
        await client.sendMessage(msg.from, '✨ O que vamos fazer agora?\nGostaria de conversar sobre outro assunto? 😊\nDIGITE:\n\n*Menu*\n*Encerrar*');
    
    }
});


   client.on('message', async (msg) => {
    const texto = msg.body.toLowerCase();

    // Função para enviar mensagem
    async function responder(msg, texto) {
        const chat = await msg.getChat();
        await chat.sendMessage(texto);
    }

    // Verifica se o usuário deseja encerrar
    if ((texto === '0' || texto.includes('encerrar')) && msg.from.endsWith('@c.us')) {
        await responder(msg, 'FalaSaúde agradece o seu contato! \nEspero ter te ajudado, quero te ver por aqui mais vezes! Para iniciar uma conversa comigo é só me mandar: "Oi Aivy".\nEstarei prontinha pra te atender com todo carinho! Até breve!.');
    }
});


client.on('message', async (msg) => {
    const texto = msg.body.toLowerCase();

    // Corrigindo a função para realmente enviar a resposta
    async function responder(msg, texto) {
        const chat = await msg.getChat();
        await chat.sendMessage(texto); // Aqui envia a mensagem
    }

    if ((texto === '9' || texto.includes('menu')) && msg.from.endsWith('@c.us')) {
        await responder(msg, 'Escolha uma opção e vamos conversar!\nDIGITE:\n\n*1* - Saúde Física\n*2* - Saúde Mental\n*3* - Bem-estar Geral\n*4* - Exercícios e Movimentação\n*5* - Exercícios de Respiração\n*6* - Saúde em Atibaia (SP)');
    }
});