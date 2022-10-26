import './ColorInfo.css';
import 'toolcool-color-picker';
import { useEffect, useRef, useState } from 'react';
import ColorDiv from '../../components/ColorDiv/ColorDiv';

declare global {
  namespace JSX {
      interface IntrinsicElements {
          'toolcool-color-picker': any;
      }
  }
}

export default function ColorInfo(){
  const colorPickerRef = useRef<HTMLElement>();

  const [hex, setHex] = useState();
  const [hex8, setHex8] = useState();
  const [rgb, setRgb] = useState();
  const [rgba, setRgba] = useState();
  const [hsl, setHsl] = useState();
  const [hsla, setHsla] = useState();
  const [hsv, setHsv] = useState();
  const [hsva, setHsva] = useState();

  useEffect(() => {

      const colorPicker = colorPickerRef.current;

      const onColorChange = (evt: Event) => {
          const customEvent = evt as CustomEvent;
          document.getElementById("colorDiv")!.style.backgroundColor = customEvent.detail.hex;
          document.getElementById("info")!.style.display = "inherit";
          setHex(customEvent.detail.hex);
          setHex8(customEvent.detail.hex8);
          setRgb(customEvent.detail.rgb);
          setRgba(customEvent.detail.rgba);
          setHsl(customEvent.detail.hsl);
          setHsla(customEvent.detail.hsla);
          setHsv(customEvent.detail.hsv);
          setHsva(customEvent.detail.hsva);
      };

      colorPicker?.addEventListener('change', onColorChange);

      return () => {
          colorPicker?.removeEventListener('change', onColorChange);
      };
  }, []);

  return (
      <div className='colorInfo'>
        <h3>Choose a color:</h3>
        <toolcool-color-picker className='colorPicker' ref={ colorPickerRef }  color="powderblue" />
        <div id='colorDiv' />
        <div id='info'>
          <h3>Color information: <br /></h3>
          hex: {hex} <br />
          hex8: {hex8} <br />
          rgb: {rgb} <br />
          rgba: {rgba} <br />
          hsl: {hsl} <br />
          hsla: {hsla} <br />
          hsv: {hsv} <br />
          hsva: {hsva} <br />
          </div>
      </div>
  )
}

