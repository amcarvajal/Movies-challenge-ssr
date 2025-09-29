🎬 Movies Challenge – SSR con React + Vite + Express + Redux

Aplicación de películas construida con React 19, Redux Toolkit, React Router 7 y SSR con Vite + Express. Consume la API de The Movie Database (TMDB) para mostrar películas populares, detalle de películas y gestión de lista de deseos (wishlist).

Incluye:

Renderizado del lado del servidor (SSR).

Rutas con React Router.

Gestión de estado con Redux Toolkit.

Integración con API externa (TMDB).

Testing con Vitest + Testing Library + Supertest.

🚀 Instalación y ejecución

Clonar el repositorio git clone https://github.com/amcarvajal/Movies-challenge.git cd Movies-challenge

Instalar dependencias npm install

Variables de entorno

Crea un archivo .env en la raíz del proyecto con tu API key de TMDB:

TMDB_API_KEY=tu_api_key_aqui

Ejecutar en modo desarrollo npm run dev
Esto levanta el servidor con Nodemon en http://localhost:5173.

Compilar para producción npm run build

Previsualizar en producción npm run preview

🧪 Testing

El proyecto incluye tests unitarios e integración para garantizar la calidad del código.

Ejecutar todos los tests npm run test

🛠️ Tecnologías utilizadas

⚛️ React 19 – UI declarativa.

🛤 React Router 7 – Navegación y rutas anidadas.

📦 Redux Toolkit – Gestión global de estado.

⚡ Vite 7 – Bundler ultrarrápido + SSR.

🌐 Express 5 – Servidor SSR y API proxy.

🎨 Sass – Estilos modernos.

✅ Vitest + Testing Library + Supertest – Testing unitario e integración.

🔑 dotenv – Variables de entorno.
