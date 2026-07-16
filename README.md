# Rutina Full Body — web para GitHub Pages

Sitio estático, responsivo y sin frameworks. Incluye:

- Rutina de lunes, miércoles y viernes.
- Selector entre gimnasio y casa.
- Progreso semanal guardado en `localStorage`.
- Temporizador de descanso de 60, 90 y 120 segundos.
- Guía visual con los GIF enlazados en los códigos QR del PDF.
- Botones de YouTube en los 3 ejercicios cuyos QR apuntaban a búsquedas de video.
- PDF original disponible desde la web.
- Etiquetas `noindex` y `robots.txt` para evitar indexación voluntaria.

## Publicar en GitHub Pages

1. Crea un repositorio y sube todo el contenido de esta carpeta a la raíz.
2. En GitHub entra a **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda y espera a que GitHub muestre la URL publicada.

## Importante sobre “privado”

Un repositorio privado **no vuelve privado automáticamente al sitio de GitHub Pages**. GitHub Pages se publica en internet por defecto. El control de acceso privado real requiere una organización con **GitHub Enterprise Cloud** y configurar la visibilidad del sitio como privada:

https://docs.github.com/es/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site

`noindex`, `nofollow` y `robots.txt` reducen la aparición en buscadores, pero **no son protección de acceso**.

## Archivos

- `index.html`: estructura y contenido.
- `styles.css`: diseño responsivo.
- `app.js`: rutina, progreso, buscador, modales y temporizador.
- `assets/`: PDF original.
- `.nojekyll`: evita el procesamiento de Jekyll.
