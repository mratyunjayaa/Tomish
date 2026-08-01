import Lightfall from "./Lightfall";
export default function Lightfallbg(){
    return (
       <Lightfall
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#0A29FF"
          speed={1.6}
          streakCount={1}
          streakWidth={1.6}
          streakLength={1}
          glow={1}
          density={0.8}
          twinkle={1}
          zoom={1.1}
          backgroundGlow={0.4}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={0.8}
          color1="#A6C8FF"
          color2="#5227FF"
          color3="#39a2bb"
        />
    );
}