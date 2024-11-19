"use client"
import React, { useEffect, useRef, useState } from "react";
import '../../app/globals.css'
import Matter from "matter-js";
import icon1 from "../../../public/icon1.svg";
import icon2 from "../../../public/icon2.svg";
import icon3 from "../../../public/icon3.svg";
import icon4 from "../../../public/icon4.svg";
import icon5 from "../../../public/icon5.svg";
import icon6 from "../../../public/icon6.svg";

const FarmerMotion = () => {
  const sceneRef = useRef(null);
  const maxWidth = 1200;
  const [dimensions, setDimensions] = useState({
    width: Math.min(window.innerWidth, maxWidth),
    height: 400
  });

  const [icons, setIcons] = useState([]);

  function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  useEffect(() => {
    const iconSources = [icon1, icon2, icon3, icon4, icon5, icon6];

    const loadImage = (icon) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = icon.src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${icon.src}`));
      });
    };

    Promise.all(iconSources.map(icon => loadImage(icon)))
      .then((loadedIcons) => {
        setIcons(loadedIcons);
      })
      .catch((error) => {
        console.error('Error loading images:', error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth, maxWidth);
      const height = 400;
      setDimensions({ width, height });
    };

    window.addEventListener("resize", handleResize);

    const engine = Matter.Engine.create();
    const world = engine.world;
    const runner = Matter.Runner.create();

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: '#FFFBF4',
      },
    });

    const isMobile = dimensions.width <= 768;
    const blockHeight = isMobile ? 30 : 40;
    const fontSize = isMobile ? "16px" : "24px";
    const widthPadding = isMobile ? 15 : 30;
    const heightPadding = isMobile ? 5 : 10;

    const textBlocks = ["Fear of Failure", "Lack of direction", "Financial Stress", "Job Stress",
      "Lack of Motivation", "Procrastination", "Burnout", "Career Anxiety", "Imposter Syndrome",
      "Peer pressure", "Perfectionism", "Self-doubt"].map((text) => {
        const textWidth = isMobile ? 120 : 180;
        const rectWidth = textWidth + widthPadding * 2;
        const rectHeight = blockHeight + heightPadding;
        const block = Matter.Bodies.rectangle(
          Math.random() * dimensions.width,
          dimensions.height * 0.6,
          rectWidth,
          rectHeight,
          {
            label: text,
            chamfer: { radius: isMobile ? 15 : 25 },
            render: {
              fillStyle: "#FFD700",
              strokeStyle: "#FFD700",
              lineWidth: 1,
              rectWidth,
              rectHeight,
            },
          }
        );
        return block;
      });

    const iconBlocks = icons.map((icon, index) => {
      const iconSize = isMobile ? Math.random() * 20 + 20 : Math.random() * 20 + 30;
      const block = Matter.Bodies.circle(
        Math.random() * dimensions.width,
        dimensions.height * 0.6,
        iconSize / 2,
        {
          label: `icon${index + 1}`,
          render: {
            fillStyle: "#FFD700",
            strokeStyle: "#FFD700",
            lineWidth: 1,
            iconSize,
            borderRadius: "100%",
          },
        }
      );
      return block;
    });

    const bucket = Matter.Bodies.rectangle(dimensions.width / 2, dimensions.height, dimensions.width, 1, {
      isStatic: true,
      render: { fillStyle: "#FCDF00" },
    });

    const leftWall = Matter.Bodies.rectangle(0, dimensions.height / 2, 0.0000000000001, dimensions.height, {
      isStatic: true,
      render: { fillStyle: "#FCDF00" },
    });

    const rightWall = Matter.Bodies.rectangle(dimensions.width, dimensions.height / 2, 0.0000000000001, dimensions.height, {
      isStatic: true,
      render: { fillStyle: "#FCDF00" },
    });

    Matter.World.add(world, [...textBlocks, ...iconBlocks, bucket, leftWall, rightWall]);

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(world, mouseConstraint);

    // Custom render for text and icon
    Matter.Events.on(render, "afterRender", () => {
      const context = render.context;
      context.font = `${fontSize} 'Inter', sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      textBlocks.forEach((block) => {
        const { x, y } = block.position;
        const angle = block.angle;
        const rectWidth = block.render.rectWidth;
        const rectHeight = block.render.rectHeight;

        context.save();
        context.translate(x, y);
        context.rotate(angle);

        // Draw a gradient-filled rectangle with rounded corners
        const gradient = context.createLinearGradient(-rectWidth / 2, -rectHeight / 2, -rectWidth / 2, rectHeight / 2);
        gradient.addColorStop(0, "#FCEB00");
        gradient.addColorStop(1, "#FFDD60");

        context.fillStyle = gradient;
        drawRoundedRect(context, -rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight, isMobile ? 15 : 25); // Adjust radius as needed
        context.clip();
        context.fill();

        context.fillStyle = "#000";
        context.fillText(block.label, 0, 0);

        context.restore();
      });

      iconBlocks.forEach((block, index) => {
        const { x, y } = block.position;
        const angle = block.angle;
        const iconSize = block.render.iconSize;

        context.save();
        context.translate(x, y);
        context.rotate(angle);
        context.drawImage(icons[index], -iconSize / 2, -iconSize / 2, iconSize, iconSize);
        context.restore();
      });
    });


    // Apply random movement when mouse is close
    Matter.Events.on(mouseConstraint, "mousemove", (event) => {
      const { mouse } = event;
      [...iconBlocks].forEach((block) => {
        const distance = Matter.Vector.magnitude(Matter.Vector.sub(block.position, mouse.position));

        if (distance < 50) {
          const randomX = (Math.random() - 0.5) * 0.01;
          const randomY = (Math.random() - 0.5) * 0.01;
          Matter.Body.applyForce(block, block.position, {
            x: randomX,
            y: randomY,
          });
        }
      });
    });
    Matter.Events.on(mouseConstraint, "mousemove", (event) => {
      const { mouse } = event;
      [...textBlocks].forEach((block) => {
        const distance = Matter.Vector.magnitude(Matter.Vector.sub(block.position, mouse.position));

        if (distance < 50) {
          const randomX = (Math.random() - 0.5) * 0.5;
          const randomY = (Math.random() - 0.5) * 0.5;
          Matter.Body.applyForce(block, block.position, {
            x: randomX,
            y: randomY,
          });
        }
      });
    });

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      Matter.World.clear(world);
      render.canvas.remove();
      render.textures = {};
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions, icons]);

  return <div ref={sceneRef} className="container" />;
};


export default FarmerMotion;
