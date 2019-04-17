
class ListaSimples{

    constructor(){
        this.head = null;
        this.length = 0;
    }

    //adicionar um elemento no final da lista
    adicionarElemento(elemento){

        let item = new Item(elemento);
        let current = null;
        
        if(this.head === null){
            this.head = item;
        }else{

            current = this.head;

            //percorre o item atual (current) enquanto ele for verdadeiro.
            while(current.next){
                current = current.next;
            }

            current.next = item;
        }

        this.length++;

    }
    //adicionar com base na posição do params
    inserirPosicao(posicao, elemento){}
    //remoção do ultimo elemento
    removerElemento(){}
    //remover com base no params
    removerPosicao(posicao){}
    //Retorna o indice do elemento
    indexOf(elemento){}
    //verificar se o elemento esta vazio
    isEmpty(){}
    //mostrar os elementos
    size(){}
    //mostrar os elementos
    toString(){}

}

lista = new ListaSimples();
lista.adicionarElemento(10);
lista.adicionarElemento(20);
console.log|(lista);