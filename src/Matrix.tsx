import React, {useEffect, useRef} from "react"

const Matrix: React.FC = () => {
    // Crea una referencia al elemento canvas para poder manipularlo directamente
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
            // Verifica si el elemento canvas existe
        if (!canvasRef.current) return
        const canvas: HTMLCanvasElement = canvasRef.current
        const ctx = canvas.getContext("2d")
            // Verifica si el contexto 2D está disponible
        if (!ctx) return

            // Configura el canvas para que ocupe toda la pantalla
        canvas.height = window.innerHeight
        canvas.width = window.innerWidth

            // Define el texto que se mostrará en la animación
        const matrix: string = "leandro-fiadone- fullstack-Developer"
        // Convierte el texto en un array de caracteres
        const matrixArray: string[] = matrix.split("")

        // Define el tamaño de la fuente y calcula el número de columnas basado en el ancho del canvas
        const font_size = 6
        const columns = canvas.width / font_size // Número de columnas para la lluvia
        // Crea un array de gotas, una por cada columna
        const drops: number[] = []

        // Inicializa las gotas en la parte superior del canvas
        for (let x = 0; x < columns; x++) drops[x] = 1000

        // Función para dibujar las gotas y los caracteres
        function draw() {
        // Fondo negro para el canvas
        // Fondo translúcido para mostrar el rastro
        if (!ctx) return

        ctx.fillStyle = "rgba(0, 0, 0, 0.06)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = "#5442f4" // Color de las gotas

        ctx.font = `${font_size}px arial` // Establece el estilo de la fuente
        // Recorre las gotas
        for (let i = 0; i < drops.length; i++) {
            // Selecciona un carácter aleatorio del texto
            const text = matrixArray[Math.floor(Math.random() * matrix.length)]
            // Dibuja el carácter en la posición actual de la gota
            ctx.fillText(text, i * font_size, drops[i] * font_size)

            // Si la gota ha cruzado la pantalla, la envía de vuelta al principio
            // Agrega aleatoriedad para que las gotas se dispersen en el eje Y
            if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
            }

            // Incrementa la posición Y de la gota
            drops[i]++
        }
        }

        // Llama a la función draw cada 35 milisegundos para animar las gotas
        const interval = setInterval(draw, 35)

        // Limpia el intervalo al desmontar el componente para evitar fugas de memoria
        return () => clearInterval(interval)
    }, [])

    // Retorna el elemento canvas con la referencia y clase asignada
    return <canvas className="matrix-container" ref={canvasRef} />
    }

export default Matrix
