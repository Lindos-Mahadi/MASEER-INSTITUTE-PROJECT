import React from 'react'
import SlideShow from "./SlideShow";

export default function AppSlide() {
    return (
        <div>
            <div className="mt-5 pt-5">
                <div className="mt-3 pt-1 appSlide"></div>
            </div>
            <SlideShow
                autoPlay={true}
                activeSlideDuration={3000}
                interactionMode="swipe"
                alignCaption="center"
                alignIndicators="center"
                indicatorsColor="#fff"
                useRightLeftTriangles={true}
                rightTriangleColor="#fff"
                leftTriangleColor="#fff"
                rightIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
                    </svg>
                }
                leftIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
                    </svg>
                }
                >
                <div>
                    <img src="https://picsum.photos/id/1/1280/500" alt="" />
                    <div className="carousel-caption">
                    <h3 className="carousel-caption-title">Frist title</h3>
                    <p className="carousel-caption-subtitle">First subtitle</p>
                    </div>
                </div>
                <div>
                    <img src="https://picsum.photos/id/234/1280/500" alt="" />
                    <div className="carousel-caption">
                    <h3 className="carousel-caption-title">Second title</h3>
                    <p className="carousel-caption-subtitle">Second subtitle</p>
                    </div>
                </div>
                <div>
                    <img src="https://picsum.photos/id/790/1280/500" alt="" />
                    <div className="carousel-caption">
                    <h3 className="carousel-caption-title">Third title</h3>
                    <p className="carousel-caption-subtitle">Third subtitle</p>
                    </div>
                </div>
            </SlideShow>
        </div>
    )
}
