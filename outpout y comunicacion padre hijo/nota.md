

# outpouts 


1. para realizar una comunicacion padre e hijo debemos declarar el outpout en el hijo  @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();

2. este oupout realizara la comunicacion entre ambas y para invocarla en la funcion del hijo se devlara asi this.onNuevoPersonaje.emit(this.nuevo);

3. en el html del padre debe venir asi  <app-agregar [nuevo]="nuevo" (onNuevoPersonaje)="agregarNuevoPersonaje($event)"></app-agregar> el cual el output es agregarNuevoPersonaje y su evente de recibe como $event que sera lo que queremos recibir 

4. en el componente padre se debe declarar la funcion que recibira el evento para completar el ciclo  !!!----->>>> agregarNuevoPersonaje(argumento:personaje){}