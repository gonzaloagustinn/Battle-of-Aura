# Generar la aplicacion POO con Test Unitarios que cumple los siguientes requerimientos: Combate 

# 1- Se requiere tener Soldados, Tanques, Buques
# 2- Todos pueden disparar.
# 3- Todos pueden recibir un disparo
# 4- El soldado muere de un solo disparo 
# 5- El tanque queda sin vida en 2 disparos
# 6- El buque queda sin vida en 3 disparos
# 7- Todos deberían poder preguntar si esta vivo.
# 8- Se requiere poder armar un Escudo y pasarlo a un item (sea Soldado, Tanque o Buque)
# 9- El escudo puede tener un porcentaje que  disminuye el daño (Si el escudo tiene un 50%, entonces el daño hace solo el 50% cuando se recibe)
# 10- Se podrá generar un arma diferente que tenga municiones (en cada uso las municiones se descuentan), al no tener más municiones el arma no hace daño. Queda por parte del alumno generar por lo menos 2 (dos) tipos de armas

--

1- Primero lo pienso como UML
Antes de escribir una clase se observa que soldado, tanque y buque son tres clases en el que comparten una cosa, todos pueden disparar.

2- S e observa que el soldado muere con 1 un disparo, el tanque con 2 disparos, el buque con 3. 
Esto es una diferencia en cada objeto.

3- El soldado muere de un solo disparo y todos deberian preguntar si esta vivo. 
Entonces si yo quiero hacer un test deberia representar una regla del dominio. 
ej: 
describe(`soldado`, ()=> {
    it (`muere al resicibir un disparo`, ()=> {
        const soldado = new soldado()
        
        soldado.recibirDisparo()
        expect(soldado.estaVivo()).toBe (fasle)


    })
})

aca en el testo hay cosas que todavia no tengo en clases porque las voy a completar en clase soldado desp de idear el comportamiento de mi clase. (new soldado, soldado.recibirDisparo, soldado.estaVivo)

y podria poner un private vida = 1 porque el soldado muere con un disparo y en private porque la vida es un estado interno del soldado nadie la puede modificar. 
entonces pensando seria: vida > 0 = vivo / vida = 0 = muerto


