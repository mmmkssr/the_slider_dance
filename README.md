# The Slider Dance

Cuando se crea un slider se necesita un mínimo, un máximo y un rango de inicio.

Para obtener el valor del control del slider `(slider.value())`
Otra manera de cambiar el valor es llamar la función `value` y dar un argumento, por ejemplo, `151`, de la siguiente manera:

```html
slider.value(151);
```

DOM `(Document Object Model)`

## Sine Wave / Onda Sinusoidal

Forma geométrica que oscila, se mueve hacia arriba, abajo o a los lados periódicamente. Onda suave en forma de S, oscila por encima y por debajo de 0.

Se utiliza la función `sin()` para generar valores oscilantes que se mapean al rando del slider mediante la función `map()`.

Cada slider en el array se controla con una onda sinusoidal ligeramente desplazada, lo que genera un efecti de baile sincronizado entre sliders.

Se utiliza el evento `input` para detectar cambios en el valor de un slider y se ajustan los demás sliders en función de esa entrada.

**map funtion**
La función `map()` convierte un valor de un rango a otro.
