import styles from "@/styles/settings.module.css";
import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import React from "react";
import { useStateContext } from "../stateProvider";
import Image from "next/image";

export default function Settings() {
  const { state, setState } = useStateContext();
  const [selected, setSelected] = useState("");

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "settings",
  });
  const style = transform ? {transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,} : undefined;

  const closeApp = () => {
    setState({ ...state, settings: -1 });
  };
  
  const setAccentColor = (color: string) => {
    setState({...state, accentColor: color});
  }

  const setScheme = (scheme: string) => {
    setState({...state, scheme: scheme});
  }

  return (
    <div
      className={styles.window}
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m 6.5 0 c -3.578125 0 -6.5 2.921875 -6.5 6.5 s 2.921875 6.5 6.5 6.5 c 1.429688 0 2.753906 -0.46875 3.828125 -1.257812 l 2.945313 2.945312 c 0.957031 0.9375 2.363281 -0.5 1.40625 -1.4375 l -2.929688 -2.929688 c 0.785156 -1.074218 1.25 -2.394531 1.25 -3.820312 c 0 -3.578125 -2.921875 -6.5 -6.5 -6.5 z m 0 2 c 2.496094 0 4.5 2.003906 4.5 4.5 s -2.003906 4.5 -4.5 4.5 s -4.5 -2.003906 -4.5 -4.5 s 2.003906 -4.5 4.5 -4.5 z m 0 0"
              fill="currentColor"/>
          </svg>
          <div>Settings</div>
          <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor">
              <path d="m 2 3 h 12 v 2 h -12 z m 0 0"/>
              <path d="m 2 7 h 12 v 2 h -12 z m 0 0"/>
              <path d="m 2 11 h 12 v 2 h -12 z m 0 0"/>
            </g>
          </svg>

        </div>
        <div className={styles.headerRight} onClick={closeApp}>
          {selected}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sections}>
          <div
            className={styles.section}
            onClick={() => setSelected("displays")}
          >
            Displays
          </div>
          <div className={styles.section} onClick={() => setSelected("sound")}>
            Sound
          </div>
          <div className={styles.section} onClick={() => setSelected("power")}>
            Power
          </div>
          <div
            className={styles.section}
            onClick={() => setSelected("appearance")}
          >
            Appearance
          </div>
        </div>
        <div className={styles.content}>
          {selected === 'appearance' && <div className={styles.contentItem}>
            <div className={styles.appearanceContainer}>
              <div className={styles.groupLabel}>Style</div>
              <div className={styles.group}>
                <div className={styles.schemes}>
                  <div>
                    <div className={styles.schemeWrapper} style={{borderColor: state.scheme === 'l' ? state.accentColor : 'transparent'}} onClick={() => setScheme('l')}>
                      <Image src={`/backgrounds/${state.background}-${state.scheme}.webp`} alt='Default Scheme' width={200} height={150} />
                      <div className={styles.mockWindowDark2}>
                        <div></div>
                      </div>
                      <div className={styles.mockWindowLight}>
                        <div></div>
                      </div>
                    </div>
                    Default
                  </div>
                  <div>
                    <div className={styles.schemeWrapper} style={{borderColor: state.scheme === 'd' ? state.accentColor : 'transparent'}} onClick={() => setScheme('d')}>
                      <Image src={`/backgrounds/${state.background}-${state.scheme}.webp`} alt='Dark Scheme'
                             width={200} height={150}/>
                      <div className={styles.mockWindowDark2}>
                        <div></div>
                      </div>
                      <div className={styles.mockWindowDark1}>
                        <div></div>
                      </div>
                    </div>
                    Dark
                  </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.colorSwatches}>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#3584e4'}} onClick={() => setAccentColor('#3584e4')}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#2190a4'}} onClick={() => setAccentColor('#2190a4')}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#3a944a'}} onClick={() => setAccentColor('#3a944a')}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#c88800'}} onClick={() => setAccentColor('#c88800')}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#ed5b00'}} onClick={() => setAccentColor('#ed5b00')}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#e62d42'}} onClick={() => setAccentColor('#e62d42')}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#d56199'}} onClick={() => setAccentColor('#d56199')}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#9141ac'}} onClick={() => setAccentColor('#9141ac')}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#6f8396'}} onClick={() => setAccentColor('#6f8396')}></div>
                </div>
              </div>
              <div className={styles.groupLabel}>Background</div>
              <div className={styles.group}>
                <div className={styles.backgrounds}>
                  <Image src="/backgrounds/bubbles-l.webp" height={120} width={140} alt="background"
                         className={styles.background}/>
                  <Image src="/backgrounds/drool-l.webp" height={120} width={140} alt="background"
                         className={styles.background}/>
                  <Image src="/backgrounds/trees-l.webp" height={120} width={140} alt="background"
                         className={styles.background}/>
                  <Image src="/backgrounds/balloons-l.webp" height={120} width={140} alt="background"
                         className={styles.background}/>
                  <Image src="/backgrounds/amber-l.webp" height={120} width={140} alt="background"
                         className={styles.background}/>
                  <Image src="/backgrounds/default-l.webp" height={120} width={140} alt="background"
                         className={styles.background}/>
                  <Image src="/backgrounds/keys-l.webp" height={120} width={140} alt="background"
                         className={styles.background}/>
                  <Image src="/backgrounds/pills-l.webp" height={120} width={140} alt="background"
                         className={styles.background}/>
                  <Image src="/backgrounds/truchet-l.webp" height={120} width={140} alt="background"
                         className={styles.background}/>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}
