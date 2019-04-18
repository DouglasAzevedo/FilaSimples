
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
    inserirPosicao(posicao, elemento){

        if(posicao >=0 && posicao < this.length){
            let item = new Item(elemento);
            let itemAtual = this.head;
            let itemAnterior = null;
            let index = 0;

        if(posicao === 0){
            item.next = itemAtual;
            this.head = item;
        }else{

            while(index++ < posicao){
                itemAnterior = itemAtual;
                itemAtual = itemAtual.next;
            }

            item.next = itemAtual;
            itemAnterior.next = item;
        }
        this.length++;
    }   

    }
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
console.log(lista);
lista.inserirPosicao(1,15);
console.log(lista);