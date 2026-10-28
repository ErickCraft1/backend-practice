# Backend Practice

Repositorio de práctica para desarrollar, de forma progresiva, los conceptos y
herramientas necesarios para construir aplicaciones backend.

## Organización del proyecto

Las carpetas están separadas por tecnología porque cada sección se ejecutará y
se desarrollará de forma independiente:

```text
.
├── node/       # Node.js y TypeScript sin framework
├── express/    # Aplicaciones con Express
└── nest/       # Aplicaciones con NestJS
```

Actualmente, la sección en desarrollo es `node/`. Las secciones de Express,
NestJS y las demás herramientas se incorporarán progresivamente.

```text
node/
└── src/
    ├── Promise/
    └── NodeJS-Fundamentals/
```

Estructura prevista:

```text
express/
└── src/

nest/
└── src/
```

Los ejercicios se organizan por temas dentro de `node/src/`. Actualmente, la
carpeta `Promise/` practica `Promise.all`, `Promise.allSettled`, `Promise.race`,
`Promise.any`, `finally`, operaciones secuenciales, ejecución concurrente y
transformación de datos.

## Roadmap

El contenido se desarrollará en el siguiente orden:

1. Node.js y TypeScript.
2. Express.
3. NestJS.
4. Herramientas y prácticas complementarias del backend, como validación con
   Zod, testing y seguridad.

La base de datos y su configuración se mantendrán en un repositorio separado.

## Requisitos

- Node.js
- pnpm

La versión de pnpm utilizada por el proyecto es `12.15.0`.

## Instalación

Desde la raíz del repositorio:

```bash
pnpm install
```

## Ejecutar los ejercicios de Node.js

Los ejercicios se ejecutan de forma independiente con `tsx`. Por ejemplo:

```bash
pnpm exec tsx node/src/Promise/exercise1.ts
pnpm exec tsx node/src/Promise/exercise10.ts
```

Para ejecutar otro ejercicio, cambia el número del archivo en el comando.

## Verificación de TypeScript

Para comprobar los tipos sin generar archivos compilados:

```bash
pnpm run check
```

## Tecnologías

- Node.js
- TypeScript
- Express
- NestJS
