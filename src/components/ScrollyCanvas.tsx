// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

// export default function ScrollyCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [images, setImages] = useState<HTMLImageElement[]>([]);
//   const { scrollYProgress } = useScroll(); // tracks the whole page scroll

//   // 192 frames loaded
//   const frameCount = 192;

//   useEffect(() => {
//     // Preload images
//     const loadedImages: HTMLImageElement[] = [];
//     let loadedCount = 0;

//     for (let i = 0; i < frameCount; i++) {
//         const img = new Image();
//         const numStr = i.toString().padStart(3, "0");
//         img.src = `/sequence/frame_${numStr}_delay-0.041s.webp`;
        
//         img.onload = () => {
//             loadedCount++;
//             if (loadedCount === frameCount) {
//                // When all loaded, update state
//                setImages(loadedImages);
//             }
//         };
//         // fallback in case of load error to not break the counter
//         img.onerror = () => {
//             loadedCount++;
//             if (loadedCount === frameCount) {
//                setImages(loadedImages);
//             }
//         };
//         loadedImages.push(img);
//     }
//   }, []);

//   // Frame index mapped from 0 to 191 based on roughly 90% of scroll (leaving 10% for the footer)
//   const frameIndex = useTransform(scrollYProgress, [0, 0.9], [0, frameCount - 1]);

//   useMotionValueEvent(frameIndex, "change", (latest) => {
//      if (images.length > 0 && canvasRef.current) {
//         const ctx = canvasRef.current.getContext("2d");
//         const idx = Math.max(0, Math.min(frameCount - 1, Math.floor(latest)));
//         if (ctx && images[idx]) {
//            drawCover(ctx, images[idx], canvasRef.current.width, canvasRef.current.height);
//         }
//      }
//   });

//   const drawCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvasWidth: number, canvasHeight: number) => {
//     if (!img || !img.width || !img.height) return;
//     const imgRatio = img.width / img.height;
//     const canvasRatio = canvasWidth / canvasHeight;

//     let renderWidth, renderHeight, x, y;

//     if (canvasRatio > imgRatio) {
//         renderWidth = canvasWidth;
//         renderHeight = canvasWidth / imgRatio;
//         x = 0;
//         y = (canvasHeight - renderHeight) / 2;
//     } else {
//         renderWidth = canvasHeight * imgRatio;
//         renderHeight = canvasHeight;
//         x = (canvasWidth - renderWidth) / 2;
//         y = 0;
//     }

//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     ctx.drawImage(img, x, y, renderWidth, renderHeight);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//        if (canvasRef.current && images.length > 0) {
//           canvasRef.current.width = window.innerWidth;
//           canvasRef.current.height = window.innerHeight;
//           const ctx = canvasRef.current.getContext("2d");
//           if (ctx) {
//              const idx = Math.max(0, Math.min(frameCount - 1, Math.floor(frameIndex.get())));
//              drawCover(ctx, images[idx], canvasRef.current.width, canvasRef.current.height);
//           }
//        }
//     };
    
//     // Initial setup
//     handleResize();
    
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [images, frameIndex]);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0a0a0a]">
//       {images.length < frameCount ? (
//         <div className="flex w-full h-full items-center justify-center text-white/50 animate-pulse">
//            Loading Sequence...
//         </div>
//       ) : (
//         <canvas
//           ref={canvasRef}
//           className="w-full h-full block"
//         />
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Reference for the scroll height
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // 1. INCREASE SCROLL TIME: 
  // We track the scroll progress of the containerRef specifically.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. SMOOTHING (Optional but recommended):
  // This adds a slight "weight" to the scroll so frames don't jump.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameCount = 192;

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const numStr = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${numStr}_delay-0.041s.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) setImages(loadedImages);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frameCount) setImages(loadedImages);
      };
      loadedImages.push(img);
    }
  }, []);

  // Map the smooth scroll progress (0 to 1) to your frame count
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length > 0 && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      const idx = Math.max(0, Math.min(frameCount - 1, Math.floor(latest)));
      if (ctx && images[idx]) {
        drawCover(ctx, images[idx], canvasRef.current.width, canvasRef.current.height);
      }
    }
  });

  const drawCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvasWidth: number, canvasHeight: number) => {
    if (!img || !img.width || !img.height) return;
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;
    let renderWidth, renderHeight, x, y;

    if (canvasRatio > imgRatio) {
      renderWidth = canvasWidth;
      renderHeight = canvasWidth / imgRatio;
      x = 0;
      y = (canvasHeight - renderHeight) / 2;
    } else {
      renderWidth = canvasHeight * imgRatio;
      renderHeight = canvasHeight;
      x = (canvasWidth - renderWidth) / 2;
      y = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && images.length > 0) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          const idx = Math.max(0, Math.min(frameCount - 1, Math.floor(frameIndex.get())));
          drawCover(ctx, images[idx], canvasRef.current.width, canvasRef.current.height);
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    /** * THE FIX:
     * h-[500vh] creates the scrollable room. 
     * If you want it even slower, change it to h-[800vh].
     */
    <div ref={containerRef} className="relative h-[500vh] bg-[#0a0a0a]">
      
      {/* Sticky wrapper keeps the canvas in the viewport while you scroll through the 500vh */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {images.length < frameCount ? (
          <div className="flex w-full h-full items-center justify-center text-white/50 animate-pulse">
            Loading Sequence...
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
          />
        )}
      </div>

      {/* Optional: Add content over the animation here */}
      <div className="relative z-10 pointer-events-none">
        {/* Your text or UI could go here */}
      </div>
    </div>
  );
}