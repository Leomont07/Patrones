1. Factory
El patrón Factory proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases cambiar el tipo de objeto que se crea. Es útil cuando no se sabe de antemano qué tipo de objetos se van a necesitar, pero se quiere delegar la creación de esos objetos a una clase específica.

Aplicación en el Ejemplo:
En el ejemplo de Factory, creamos una VehiculoFactory que puede crear distintos tipos de vehículos, como un Carro o un Camión, según la entrada del usuario.

La clase base, VehiculoFactory, tiene un método createVehicle() que decide qué tipo de objeto crear según el tipo de vehículo que el usuario ingresa.
Las clases concretas, Carro y Camion, implementan métodos específicos para cada tipo de vehículo, como el número de puertas o la capacidad de carga.
El patrón asegura que la creación de vehículos esté centralizada, y se pueda modificar el proceso de creación sin afectar al resto del sistema.

2. Abstract Factory
El patrón Abstract Factory es una extensión del patrón Factory. Proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas. A través de una interfaz abstracta, puedes generar diferentes productos relacionados, como botones y ventanas para diferentes sistemas operativos.

Aplicación en el Ejemplo:
En el ejemplo de Abstract Factory, creamos dos familias de productos: interfaces para Windows y Mac. Cada una tiene sus propias clases de Button y Window.

La clase GUIFactory define métodos abstractos como createButton() y createWindow(), pero las implementaciones concretas (WindowsFactory y MacFactory) crean instancias específicas de los productos según la plataforma seleccionada.
De esta forma, si se quiere añadir soporte para una nueva plataforma (como Linux), se puede hacerlo sin afectar al código existente, simplemente agregando una nueva clase LinuxFactory.
Este patrón es útil cuando se trabaja con múltiples variantes de productos, y quieres que tu código se mantenga flexible y extensible.

3. Adapter
El patrón Adapter permite que dos clases con interfaces incompatibles trabajen juntas. Se implementa un adaptador que actúa como un intermediario entre el cliente y la clase con la interfaz incompatible.

Aplicación en el Ejemplo:
En el ejemplo de Adapter, tenemos un sistema que integra dos servicios de pago. Uno de los servicios tiene una interfaz diferente a la esperada por el sistema.

La clase PaymentAdapter actúa como el adaptador, tomando una solicitud con la interfaz esperada por el sistema (processPayment) y traduciéndola a la interfaz de la API del servicio externo.
Esto permite que el sistema se comunique con el servicio de pago externo sin necesidad de modificar el código cliente que usa la interfaz estándar.
Este patrón es muy útil cuando se quiere integrar bibliotecas o servicios de terceros que no siguen la misma interfaz que el sistema actual.

4. Decorator
El patrón Decorator permite añadir funcionalidades adicionales a un objeto de manera dinámica sin modificar su estructura original. Se usa comúnmente para extender el comportamiento de objetos de manera flexible.

Aplicación en el Ejemplo:
En el ejemplo de Decorator, modelamos un sistema para personalizar pizzas.

La clase Pizza es el objeto base, que tiene un costo básico y una descripción.
El decorador CheeseDecorator y otros (como PepperoniDecorator) añaden ingredientes adicionales a la pizza.
Cada decorador agrega una funcionalidad específica, como modificar el precio o la descripción, pero sin alterar la clase base Pizza.
Este patrón es útil cuando se necesita agregar características adicionales a objetos sin sobrecargar las clases con múltiples variaciones de un mismo objeto.

5. Prototype
El patrón Prototype permite crear nuevos objetos clonando una instancia existente. Este patrón es útil cuando la creación de una instancia es costosa o compleja, y la duplicación de un objeto existente es más eficiente.

Aplicación en el Ejemplo:
En el ejemplo de Prototype, tenemos un sistema para crear documentos clonando una plantilla base.

La clase Document tiene un método clone(), que crea una copia exacta del objeto.
Luego, las instancias pueden ser modificadas para adaptarse a un caso específico sin la necesidad de crear un nuevo objeto desde cero.
Este patrón es ideal cuando la creación de un objeto completo es costosa o compleja, y se puede reutilizar un objeto existente como base.

6. Singleton
El patrón Singleton asegura que una clase tenga solo una instancia y proporciona un punto global de acceso a ella. Este patrón es útil cuando necesitas un único objeto que gestione el acceso a recursos compartidos, como configuraciones o conexiones a bases de datos.

Aplicación en el Ejemplo:
En el ejemplo de Singleton, se crea una clase Configuration que solo permite una instancia.

La clase Configuration tiene un método estático getInstance() que garantiza que siempre se devuelva la misma instancia de configuración.
Así, cualquier parte del sistema que necesite acceder a la configuración usa la misma instancia, evitando la creación de múltiples instancias de configuración.
Este patrón es ideal cuando se quiere garantizar que una clase tenga solo una instancia durante toda la ejecución del programa, como un gestor de configuración o una conexión a una base de datos.

7. Builder
El patrón Builder permite la construcción de objetos complejos paso a paso. Es útil cuando los objetos que se crean tienen muchos parámetros opcionales o configuraciones complejas.

Aplicación en el Ejemplo:
En el ejemplo de Builder, tenemos un sistema para construir computadoras personalizadas.

El ComputerBuilder es responsable de ensamblar la computadora paso a paso, permitiendo elegir diferentes configuraciones como CPU, RAM, y almacenamiento.
El Computer es el objeto final que se crea al llamar a build(). Este patrón permite tener un proceso de creación de objetos flexible y controlado, ideal para sistemas donde los objetos tienen muchas configuraciones opcionales.
Este patrón es útil cuando un objeto tiene muchos componentes y queremos tener control sobre cómo se crean.

8. Observer
El patrón Observer define una relación uno a muchos entre objetos, de modo que cuando uno cambia de estado, todos los objetos que están observando son notificados y actualizados.

Aplicación en el Ejemplo:
En el ejemplo de Observer, tenemos un sistema de notificaciones donde los usuarios se suscriben a ciertos eventos, como una actualización de estado.

Los usuarios (Observer) se suscriben a eventos específicos en el Subject (como un blog). Cuando el Subject cambia, todos los usuarios suscritos son notificados automáticamente.
Esto permite mantener a todos los usuarios actualizados con los cambios sin necesidad de que cada uno consulte el sistema de manera constante.
Este patrón es ideal cuando tienes que manejar eventos o cambios de estado que afectan a múltiples partes del sistema.

9. State
El patrón State permite que un objeto altere su comportamiento cuando su estado interno cambia. Este patrón ayuda a evitar tener múltiples sentencias condicionales para manejar el comportamiento según el estado.

Aplicación en el Ejemplo:
En el ejemplo de State, tenemos una puerta que puede estar en tres estados: Abierta, Cerrada y Bloqueada.

Cada estado tiene un comportamiento diferente. Por ejemplo, cuando la puerta está cerrada, solo puede abrirse, pero cuando está bloqueada, no puede abrirse ni cerrarse.
El patrón ayuda a manejar la transición entre estados de manera más limpia, evitando complicadas condiciones dentro de la clase de la puerta.
Este patrón es útil para manejar comportamientos que dependen de un estado que cambia a lo largo del tiempo.

10. Strategy
El patrón Strategy permite definir una familia de algoritmos, encapsularlos y hacerlos intercambiables. El patrón permite que el comportamiento de un objeto se cambie en tiempo de ejecución.

En el ejemplo de Strategy, tenemos un sistema de cálculo de descuentos para diferentes tipos de clientes (regular, VIP, navideño).

Cada estrategia de descuento se implementa como una clase diferente que calcula el descuento basado en el tipo de cliente.
El cliente elige qué estrategia usar en tiempo de ejecución, permitiendo que el sistema sea más flexible y fácil de modificar si se agregan nuevos tipos de descuentos.
Este patrón es ideal para sistemas que requieren aplicar diferentes comportamientos o algoritmos dependiendo del contexto.

11. Template Method
El patrón Template Method define la estructura de un algoritmo en un método base, dejando que las subclases definan pasos específicos sin cambiar la estructura general.

Aplicación en el Ejemplo:
En el ejemplo de Template Method, tenemos un proceso de publicación de documentos.

La clase Document define un algoritmo que incluye pasos como load(), process(), y publish().
Las subclases Report y Blog implementan pasos específicos de acuerdo con el tipo de documento, pero el flujo general se mantiene constante.
Esto permite que cada tipo de documento siga el mismo proceso de publicación, pero con variaciones según el tipo.
Este patrón es útil cuando tienes un flujo de trabajo general con pasos específicos que deben ser implementados por subclases.
