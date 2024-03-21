    import {useEffect} from "react"
    import {TweenLite, TweenMax, Linear} from "gsap"

    const DemoComponent = () => {
    useEffect(() => {
        const boxes = document.querySelectorAll(".box")
        const stage = document.querySelector(".stage")

        TweenLite.set(stage, {
        css: {
            perspective: 1100,
            transformStyle: "preserve-3d"
        }
        })

        boxes.forEach((element, index) => {
        TweenLite.set(element, {
            css: {
            rotationY: (index * 360) / 13,
            transformOrigin: "50% 50% -420"
            }
        })
        TweenMax.to(element, 20, {
            css: {
            z: 0.01,
            rotationY: "+=359"
            },
            repeat: -1,
            ease: Linear.easeNone
        })
        })
    }, [])

    return (
      <div>
        <style>
          {`
            html {
                background-image: linear-gradient(207deg, #B4EC51 0px, #419A4A 100%);
                height: 100%;
            }

            body {
                height: 100%;
            }

            .demoWrapper {
                width: 680px;
                height: 400px;
                -webkit-font-smoothing: antialiased;
                margin: 0px auto;
                padding: 1px;
            }

            .stage {
                height: 325px;
                margin-top: 15px;
                margin-left: 15px;
               
                margin-right: 10px;
                font-family: Arial, Helvetica, Verdana;
                position: relative;
            }

            .box {
                position: absolute;
                width: 180px;
                height: 180px;
            
                display: inline-block;
                margin: 10px 20px 20px 235px; 
                display: inline-block;
                overflow: hidden;
            }

            .box > img {
                width: 180px;
                height: auto;
                outline: 0 solid transparent;
                }
            `}
        </style>
        <div className="demoWrapper">
          <div className="stage">
            <div className="box">
              <img
                src="/public/React.png"
                width="285"
                height="285"
                alt="placeholder"
              />
            </div>

            <div className="box">
              <img
                src="TypeScript.png"
                width="285"
                height="285"
                alt="placeholder"
              />
            </div>
            <div className="box">
              <img
                src="http://via.placeholder.com/285x285"
                width="285"
                height="285"
                alt="placeholder"
              />
            </div>

            <div className="box">
              <img
                src="http://via.placeholder.com/285x285"
                width="285"
                height="285"
                alt="placeholder"
              />
            </div>

            <div className="box">
              <img
                src="http://via.placeholder.com/285x285"
                width="285"
                height="285"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default DemoComponent
