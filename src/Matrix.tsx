import React, {useEffect, useRef} from "react"

const Matrix: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
            if (!canvasRef.current) return
            const canvas: HTMLCanvasElement = canvasRef.current
            const ctx = canvas.getContext("2d")
            if (!ctx) return

            // Making the canvas full screen
            canvas.height = window.innerHeight
            canvas.width = window.innerWidth

            const matrix: string =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
            // Convertimos `matrix` de un string a un array de strings (caracteres)
            const matrixArray: string[] = matrix.split("")

            const font_size = 8
            const columns = canvas.width / font_size // Number of columns for the rain
            // An array of drops - one per column
            const drops: number[] = []

            // x below is the x coordinate
            // 1 = y coordinate of the drop(same for every drop initially)
            for (let x = 0; x < columns; x++) drops[x] = 1

            // Drawing the characters
            function draw() {
            // Black BG for the canvas
            // Translucent BG to show trail
            if (!ctx) return

            ctx.fillStyle = "rgba(0, 0, 0, 0.09)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = "#5442f4" //
        
            ctx.font = `${font_size}px arial`
            // Looping over drops
            for (let i = 0; i < drops.length; i++) {
                // A random character to print
                const text = matrixArray[Math.floor(Math.random() * matrix.length)]
                // x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i * font_size, drops[i] * font_size)
                
                // Sending the drop back to the top randomly after it has crossed the screen
                // Adding a randomness to the reset to make the drops scattered on the Y axis
                if (drops[i] * font_size > canvas.height && Math.random() > 0.975)

        
                drops[i] = 0
                

                // Incrementing Y coordinate
                drops[i]++

            
        }
        }

        const interval = setInterval(draw, 40)

        // Cleanup on component unmount
        return () => clearInterval(interval)
    }, [])

    return <canvas className="matrix-container" id="c" ref={canvasRef} />
    }

export default Matrix
