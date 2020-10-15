import React, {useEffect, useRef} from 'react';
import HorizontalScroll from 'horizontal-scroll/src/index';
import "./App.css";


function App() {

    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current.querySelectorAll('.horizontal-scroll-container');
            const blocks = containerRef.current.querySelectorAll('.block');

            new HorizontalScroll({
                container,
                blocks,
                isAnimated: true,
                spring: .2,
                skewReducer: 20,
                skewLimit: 20,
            });
        }

    }, [containerRef])

    return (
        <div className="App">
            <main ref={containerRef}>
                <div className={'horizontal-scroll-container'}>
                    {["#74c309", "#e788fd", "#381602", "#b45a4c", "#aa7fc4"].map((backgroundColor, index) =>
                        <div className="block" key={index}>
                            <div className="block-inner" style={{
                                backgroundColor,
                            }}>
                                <h2>Page {index + 1}</h2>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
