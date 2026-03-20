import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// --- LCD Constants ---
const CANVAS_W = 128;
const CANVAS_H = 96;
const LCD_BG = '#c5c8a4';
const LCD_FG = '#2d3214';
const LCD_FILL = '#8a8c6a';
const PX = 3;

const MESSAGES = ['HELLO!', "I'M ZOE!", 'CLICK BUTTON!', 'PLAY WITH ME!'];

// --- Pixel Dog Sprites (side-view, 13x11) ---
// 0=transparent, 1=outline(dark), 2=fill(light)
// Cute puppy facing left with tail up
const DOG = [
  // Frame 0 - standing, tail up
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 2, 2, 1, 1, 2, 2, 1, 0, 0, 1, 0, 0],
    [1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 0],
    [1, 2, 1, 2, 2, 2, 2, 1, 1, 2, 1, 0, 0],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 1, 0, 0, 0, 1, 2, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  ],
  // Frame 1 - walking, tail wagging
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 2, 2, 1, 1, 2, 2, 1, 0, 0, 0, 0, 0],
    [1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0],
    [1, 2, 1, 2, 2, 2, 2, 1, 1, 2, 1, 0, 0],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
  ],
];

// --- Drawing Helpers ---
const drawSprite = (
  ctx: CanvasRenderingContext2D,
  sprite: number[][],
  x: number,
  y: number,
) => {
  for (let r = 0; r < sprite.length; r++) {
    for (let c = 0; c < sprite[r].length; c++) {
      const val = sprite[r][c];
      if (val === 1) {
        ctx.fillStyle = LCD_FG;
        ctx.fillRect(x + c * PX, y + r * PX, PX, PX);
      } else if (val === 2) {
        ctx.fillStyle = LCD_FILL;
        ctx.fillRect(x + c * PX, y + r * PX, PX, PX);
      }
    }
  }
};

const drawBubble = (
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  bottomY: number,
) => {
  ctx.font = '7px monospace';
  const tw = ctx.measureText(text).width;
  const pad = 5;
  const bw = tw + pad * 2;
  const bh = 14;
  const bx = Math.round(cx - bw / 2);
  const by = Math.round(bottomY - bh);

  ctx.strokeStyle = LCD_FG;
  ctx.lineWidth = 1;

  // Speech bubble outline (rect + pointer as single path)
  ctx.beginPath();
  ctx.moveTo(bx, by);
  ctx.lineTo(bx + bw, by);
  ctx.lineTo(bx + bw, by + bh);
  ctx.lineTo(cx + 3, by + bh);
  ctx.lineTo(cx, by + bh + 4);
  ctx.lineTo(cx - 3, by + bh);
  ctx.lineTo(bx, by + bh);
  ctx.closePath();
  ctx.stroke();

  ctx.fillStyle = LCD_FG;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, cx, by + bh / 2 + 1);
};

const drawScanlines = (ctx: CanvasRenderingContext2D) => {
  ctx.strokeStyle = 'rgba(0,0,0,0.04)';
  ctx.lineWidth = 1;
  for (let y = 0; y < CANVAS_H; y += 2) {
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(CANVAS_W, y + 0.5);
    ctx.stroke();
  }
};

// --- Pixel Heart (5x5) for pet effect ---
const HEART = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

const drawHeart = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  alpha: number,
) => {
  ctx.globalAlpha = alpha;
  ctx.fillStyle = LCD_FG;
  for (let r = 0; r < HEART.length; r++) {
    for (let c = 0; c < HEART[r].length; c++) {
      if (HEART[r][c]) {
        ctx.fillRect(cx + c * size, cy + r * size, size, size);
      }
    }
  }
  ctx.globalAlpha = 1;
};

// --- Component ---
const TamagotchiModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const frameRef = useRef(0);

  // Button interaction state
  const msgIndex = useRef(0);
  const jumpTimer = useRef(0);
  const heartTimer = useRef(0);
  const buttonFlash = useRef<number | null>(null);
  const buttonFlashTimer = useRef(0);

  const onTalk = () => {
    msgIndex.current = (msgIndex.current + 1) % MESSAGES.length;
    buttonFlash.current = 0;
    buttonFlashTimer.current = 10;
  };

  const onJump = () => {
    jumpTimer.current = 20;
    buttonFlash.current = 1;
    buttonFlashTimer.current = 10;
  };

  const onPet = () => {
    heartTimer.current = 40;
    buttonFlash.current = 2;
    buttonFlashTimer.current = 10;
  };

  const buttonHandlers = [onTalk, onJump, onPet];

  const { canvasEl, lcdTexture } = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = CANVAS_W;
    c.height = CANVAS_H;
    const ctx = c.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = LCD_BG;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    const tex = new THREE.CanvasTexture(c);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    return { canvasEl: c, lcdTexture: tex };
  }, []);

  // Rounded body shape (more circular like Tamagotchi Connection)
  const bodyGeometry = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    for (let i = 0; i <= 48; i++) {
      const t = i / 48;
      const th = t * Math.PI;
      // Rounder shape: wider, less egg-like
      const baseR = Math.sin(th);
      const r = baseR * (1 + 0.05 * Math.cos(th)) * 0.9;
      const y = Math.cos(th) * 1.0;
      pts.push(new THREE.Vector2(r, y));
    }
    return new THREE.LatheGeometry(pts, 48);
  }, []);

  const labelTexture = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 32;
    const ctx = c.getContext('2d')!;
    ctx.clearRect(0, 0, 256, 32);
    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = '#9b7dd4';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('ZOE-GOTCHI', 128, 16);
    const tex = new THREE.CanvasTexture(c);
    tex.magFilter = THREE.NearestFilter;
    return tex;
  }, []);

  useFrame(() => {
    frameRef.current++;
    const frame = frameRef.current;
    const ctx = canvasEl.getContext('2d')!;

    // Tick timers
    if (jumpTimer.current > 0) jumpTimer.current--;
    if (heartTimer.current > 0) heartTimer.current--;
    if (buttonFlashTimer.current > 0) {
      buttonFlashTimer.current--;
      if (buttonFlashTimer.current === 0) buttonFlash.current = null;
    }

    // LCD background
    ctx.fillStyle = LCD_BG;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Dog animation
    const spriteIdx = Math.floor(frame / 15) % 2;
    const dogW = DOG[0][0].length * PX;
    const dogH = DOG[0].length * PX;
    const dogX = CANVAS_W / 2 - dogW / 2 + Math.sin(frame * 0.03) * 15;

    // Jump effect
    const jumpOffset =
      jumpTimer.current > 0
        ? Math.sin((jumpTimer.current / 20) * Math.PI) * 18
        : 0;
    const bounceY = Math.sin(frame * 0.08) * 2;
    const dogY = CANVAS_H - dogH - 4 + bounceY - jumpOffset;

    drawSprite(ctx, DOG[spriteIdx], dogX, dogY);

    // Speech bubble
    drawBubble(ctx, MESSAGES[msgIndex.current], CANVAS_W / 2, dogY - 6);

    // Heart particles when petting
    if (heartTimer.current > 0) {
      const progress = 1 - heartTimer.current / 40;
      // Draw 3 floating hearts
      for (let i = 0; i < 3; i++) {
        const hx =
          dogX + dogW / 2 + (i - 1) * 14 + Math.sin(frame * 0.1 + i * 2) * 4;
        const hy = dogY - 10 - progress * 20 - i * 6;
        const alpha = Math.max(0, 1 - progress * 1.2 + i * 0.15);
        drawHeart(ctx, hx, hy, 2, alpha);
      }
    }

    // LCD scanline effect
    drawScanlines(ctx);

    lcdTexture.needsUpdate = true;

    // Gentle idle wobble
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(frame * 0.01) * 0.12;
      groupRef.current.rotation.z = Math.sin(frame * 0.02) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body - rounder, flatter */}
      <mesh geometry={bodyGeometry} scale={[1, 1, 0.55]}>
        <meshStandardMaterial
          color="#c4b3e3"
          roughness={0.3}
          metalness={0.08}
        />
      </mesh>

      {/* Screen outer bezel (white/light) */}
      <mesh position={[0, 0.15, 0.49]}>
        <boxGeometry args={[1.0, 0.82, 0.02]} />
        <meshStandardMaterial color="#e8e0f5" roughness={0.5} />
      </mesh>

      {/* Screen inner frame (dark border) */}
      <mesh position={[0, 0.15, 0.5]}>
        <boxGeometry args={[0.88, 0.7, 0.01]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.9} />
      </mesh>

      {/* LCD screen */}
      <mesh position={[0, 0.15, 0.51]}>
        <planeGeometry args={[0.82, 0.64]} />
        <meshBasicMaterial map={lcdTexture} />
      </mesh>

      {/* Label text (below screen) */}
      <mesh position={[0, -0.35, 0.5]}>
        <planeGeometry args={[0.6, 0.1]} />
        <meshBasicMaterial map={labelTexture} transparent />
      </mesh>

      {/* Chain ring (top-right) */}
      <group position={[0.55, 0.85, 0]} rotation={[0, 0, -0.3]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.1, 0.025, 8, 16]} />
          <meshStandardMaterial
            color="#c0c0c0"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </group>

      {/* Ball chain (3 small spheres) */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={`chain-${i}`}
          position={[0.72 + i * 0.12, 0.95 + i * 0.08, 0]}
        >
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color="#c0c0c0"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Buttons - 3 interactive round buttons */}
      {(['talk', 'jump', 'pet'] as const).map((id, i) => (
        <group key={id} position={[[-0.3, 0, 0.3][i], -0.62, 0.46]}>
          {/* biome-ignore lint/a11y/noStaticElementInteractions: R3F mesh is not a DOM element */}
          <mesh
            rotation={[Math.PI / 2, 0, 0]}
            onClick={(e) => {
              e.stopPropagation();
              buttonHandlers[i]();
            }}
            onPointerOver={() => {
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'default';
            }}
          >
            <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
            <meshStandardMaterial
              color={buttonFlash.current === i ? '#ffffff' : '#ddd2f0'}
              roughness={0.25}
            />
          </mesh>
          {/* Button top highlight */}
          <mesh position={[0, 0, 0.035]}>
            <sphereGeometry
              args={[0.065, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]}
            />
            <meshStandardMaterial
              color={buttonFlash.current === i ? '#ffffff' : '#e8e0f5'}
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default TamagotchiModel;
