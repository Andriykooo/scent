import React, { FC, ReactNode } from "react";
import styles from "./slider.module.scss";

type WrapperProps = {
  marks?: boolean;
};

interface DotStyledProps {
  readonly position?: number;
  readonly backgroundColor?: string;
}

type LineFillProps = {
  position?: number;
  backgroundColor?: string;
};

interface Marks {
  min: number;
  max: number;
}

interface SliderProps {
  unFocusColor?: string;
  focusColor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  theme?: any;
  onChange?: (value: number) => void;
  value?: number;
  defaultValue?: number;
  marks?: Marks;
  tooltipVisible?: boolean;
  step: number;
  vertical?: boolean;
  min: number;
  max: number;
  unit?: string;
}

const SliderDot = (props: SliderProps) => {
  const { style, onChange, value, step, vertical, min, max } = props;

  const [enable, setEnable] = React.useState(false);
  const [positionCursorPercentage, setPositionCursorPercentage] =
    React.useState(value ? ((value - min) / (max - min)) * 100 : 0);
  const [positionCursor, setPositionCursor] = React.useState(
    value ? value : min
  );
  const slide = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const rect = slide?.current?.getBoundingClientRect();
    const minPosition = 0;
    const maxPosition = rect?.width || 0;
    const x = rect?.x || 0;
    const y = rect?.y || 0;
    const height = rect?.height || 0;

    let positionAbsolute = positionCursorPercentage;
    window.onmousemove = (ev: MouseEvent): any => {
      const position = vertical ? y + height - ev.clientY : ev.clientX - x;
      if (enable) {
        window.onmouseup = (evMouseUp: MouseEvent): any => {
          setEnable(false);
        };
        if (position < minPosition) {
          positionAbsolute = min;
        } else if (position > maxPosition) {
          positionAbsolute = max;
        } else {
          positionAbsolute = (position / maxPosition) * (max - min) + min;
        }

        if (
          positionAbsolute <= positionCursorPercentage + step &&
          positionAbsolute >= positionCursorPercentage - step
        ) {
          positionAbsolute = positionCursorPercentage;
        }
        positionAbsolute =
          Math.round(positionAbsolute * (1 / step)) / (1 / step);
        if (onChange) {
          onChange(positionAbsolute);
        } else {
          setPositionCursor(positionAbsolute);
        }
      }
    };
  }, [enable]);

  React.useEffect(() => {
    if (value) {
      onChangePositionOfCursor(value);
    } else {
      onChangePositionOfCursor(positionCursor);
    }
  }, [value, positionCursor]);

  const onChangePositionOfCursor = (positionAbsolute: number) => {
    setPositionCursorPercentage(((positionAbsolute - min) / (max - min)) * 100);
  };

  const valueOfCursor =
    Math.round(((positionCursorPercentage / 100) * (max - min) + min) * step) /
    step;

  return (
    <div className={styles.wrapper} ref={slide} style={style}>
      <div className={styles.lineStyled}>
        <div
          className={styles.lineFill}
          style={{ width: positionCursorPercentage + "%" }}
        ></div>
      </div>
      <div
        className={styles.dotStyled}
        onMouseDown={() => setEnable(true)}
        style={{ left: positionCursorPercentage + "%" }}
      ></div>
      <div className={styles.sliderStyles} style={{ left: "20%" }}></div>
      <div className={styles.sliderStyles} style={{ left: "40%" }}></div>
      <div className={styles.sliderStyles} style={{ left: "60%" }}></div>
      <div className={styles.sliderStyles} style={{ left: "80%" }}></div>
    </div>
  );
};

SliderDot.defaultProps = {
  step: 1,
  min: 0,
  max: 5,
  unit: "%",
  focusColor: "#f8b500",
  unFocusColor: "#BBBBBB",
};
export const SliderPoint: FC = () => {
  const [value, setValue] = React.useState(1);

  const onChangeValue = (e: React.SetStateAction<number>) => {
    setValue(e);
  };
  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <SliderDot
          min={1}
          max={6}
          marks={{ min: 1, max: 6 }}
          value={value}
          onChange={(e) => onChangeValue(e)}
          step={1}
          tooltipVisible
        ></SliderDot>
      </div>
    </>
  );
};
