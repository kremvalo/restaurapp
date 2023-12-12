# Restaurapp

Aplicación movil en la que se puede ver restaurantes disponibles asì como categorias y productos favoritos. Ademas se puede tambien agregar una direcciòn de entrega dejando por defecto la dirección de ubicaciòn del usuario. 


| Visual del App | Visual del App | Visual del App | Visual del App | Visual del App |
| ---      | ---       | ---       | ---       | ---       |
| ![simulator_screenshot_04EB2733-AB62-44AE-BC4C-BC1958691392](https://github.com/kremvalo/restaurapp/assets/32576306/2f327f61-854c-4142-ac4a-1cfe89f0613d) | ![simulator_screenshot_3745C2CD-018B-4480-9A07-DB3DFC05111C](https://github.com/kremvalo/restaurapp/assets/32576306/a930fc63-53e2-436e-9fe1-a438417f5c0a) | ![simulator_screenshot_B0DD96DC-AE39-4BC9-8CF2-C03F2B17695C](https://github.com/kremvalo/restaurapp/assets/32576306/d1126851-5680-442e-a8a9-1d23f7086192) | ![simulator_screenshot_97A50CDB-1206-4C2B-A72E-DDD0D81040EB](https://github.com/kremvalo/restaurapp/assets/32576306/3dfed0b6-3601-45c6-9538-99340fbd1a8c) | ![simulator_screenshot_435CD12E-4C26-4CB3-8C24-9784FD1A023D](https://github.com/kremvalo/restaurapp/assets/32576306/0a8f2960-8a2b-4102-925a-8d735e142913) |




Construida con React Native y las siguientes herramientas adicionales: 

| Name     | Descripcion |
| ---      | ---       |
| Redux Toolkit | Manejador de estado |
| I18n     | Internacionalizaciòn        |
| Styled Components     | Manejo de estilos visuales        |
| React Native Maps     | Manejo de mapas en React Native        |
| Reverse Geocoding (Here)     | Api para obtener una direcciòn apartir de latitud y longitud        |
| Typescript     | Lenguaje tipado        |


# Como empezar

>**Note**: Asegurate de tener configurado tu entorno para correr aplicaciones en React Native. Por si no lo tienes las instrucciones las encuentras aquí [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup).


## Paso 1: Clonar proyecto: 

Primero que todo asegurate de clonar el proyecto en tu equipo. 

## Paso 2: Instalar dependencias: 

Abre una terminal o consola en tu equipo apuntando a la ruta en la cual clonaste el proyecto. 
Luego de eso, ejecuta el siguiente comando: 

```bash
# using npm
npm i

# OR using Yarn
yarn
```
## Paso 3: Verifica que tengas un dispositivo movil fisico o un emulador configurado: 

### Instrucciones Android

- En dado caso que no desees correr la aplicaciòn en tu dispositivo fisico, conectalo a tu equipo (pc, laptop) y verifica que el telefono tiene habilitado el modo desarrollador y permite el debug de aplicaciones en el.
- En el caso que prefieras un emulador y aun no lo tengas instalado y configurado, mira las siguientes instrucciones  [Configuración Emulador Android](https://developer.android.com/studio/run/emulator?hl=es-419)

## Paso 4: Ejecutar Metro: 

Abre una terminal o consola en tu equipo apuntando a la ruta en la cual clonaste el proyecto. 
Luego de eso ejecuta el siguiente comando: 

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Paso 5: Ejecutar Aplicación: 

Abre una terminal o consola en tu equipo apuntando a la ruta en la cual clonaste el proyecto. 

### Android 
Luego ejecuta el siguiente comando: 

```bash
# using npx
npx react-native run-android
```

### IOS 
Luego ejecuta el siguiente comando: 

```bash
# using npx
npx react-native run-ios

```

## Felicitaciones! :tada:

Corriste exitosamente la aplicación. :partying_face:

# Problemas

Si no lograste ejecutar la aplicaciòn consulta esta [documentación](https://reactnative.dev/docs/troubleshooting).
