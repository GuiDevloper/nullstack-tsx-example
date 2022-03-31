// @ts-ignore
import Logo from 'nullstack/logo';

type typeLogo = {
  light?: boolean,
  height?: string | number,
  monotone?: boolean
}

function TypedLogo({...args}: typeLogo): SVGElement {
  return Logo({...args})
}

export default TypedLogo;