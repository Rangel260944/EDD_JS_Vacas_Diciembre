
class Node {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.next = null;
        this.previous = null;
    }
}
class LinkedList{
    constructor(){
        this.first = null;
        this.final = null;
    }
    insertar(nombre, apellido, edad) {
       let new_node = new Node(nombre, apellido, edad)
       if(this.first == null){
           this.first = new_node;
           this.final = new_node;
           new_node.next = new_node
       }
       else{
        let temporary = this.final;
       if(temporary != null){
           temporary.next = new_node;
           new_node.next = this.first;
           this.final = new_node;
           new_node.previous = this.first;
       }
       }
    }
    imprimir(){
        let temporary = this.first
        while(temporary.next != null){
            console.log(temporary.nombre+" "+ temporary.apellido + " " + temporary.edad)
            temporary = temporary.next
        if(temporary == this.first){
            break
        }   
        }
        while(temporary != null){
            console.log(temporary.nombre+" "+ temporary.apellido + " " + temporary.edad)
            temporary = temporary.previous
            if(temporary == this.first){
                break
            } 
        }
    }
}


var Instancia = new LinkedList()

Instancia.insertar("Carlos", "Rangel", "20")
Instancia.insertar("Katherine", "Rosales", "19")
Instancia.insertar("Luis", "Castellanos", "21")
Instancia.imprimir()

