const botoes = document.querySelectorAll('.add-carrinho');
const itensCarrinho = document.getElementById('itens-carrinho');
const total = document.getElementById('total');

let totalPreco = 0;

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const nome = botao.getAttribute('data-nome');
        const preco = parseFloat(botao.getAttribute('data-preco'));

        // Criar elemento <li> para o item
        const li = document.createElement ('li');
        li.textContent = `${nome} - R$ ${preco},00`;
        itensCarrinho.appendChild(li);

        // Criar botão de remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = '🗑️'; // Ícone de lixeira
        botaoRemover.classList.add('remover');
         
        // Adicionar botão ao <li>
        li.appendChild(botaoRemover);              
       
        // Atualizar total
        totalPreco += preco;
        total.textContent = totalPreco.toFixed(0);
    

        // **Evento para remover item**
        botaoRemover.addEventListener('click', () => {
            li.remove(); // Remove o item do carrinho
            totalPreco -= preco; // Atualiza o total corretamente
            total.textContent = totalPreco.toFixed(0);
        });
        
    });
});