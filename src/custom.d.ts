type typeLogo = {
  light?: boolean,
  height?: string | number,
  monotone?: boolean
}

declare module "nullstack/logo" {
  export default function(args: typeLogo): SVGElement
}