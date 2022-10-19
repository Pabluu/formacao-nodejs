# CONECTANDO AO SERVIDOR REMOTO

1. Criando uma chave pública  
    `ssh-keygen -t rsa`

2. Acessando o diretorio onde salvou as chaves  
   `cd ~/.ssh/`

3. Exibindo o conteúdo da chave  
   `cat id_rsa.pub`

4. Cole o conteudo do arquivo no servidor para que possamos fazer a conexão

5. Transferindo a chave para o servidor  
   `ssh-copy-id user@host-remoto`

6. Fazendo a conexão  
   `ssh user@host-remoto`