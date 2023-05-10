import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.38137 0.3125C6.54546 0.148463 6.76798 0.0563118 7 0.0563118C7.23202 0.0563118 7.45454 0.148463 7.61862 0.3125L13.4347 6.12775C13.5169 6.2099 13.5631 6.32132 13.5631 6.4375C13.5631 6.55368 13.5169 6.6651 13.4347 6.74725C13.3526 6.8294 13.2412 6.87555 13.125 6.87555C13.0088 6.87555 12.8974 6.8294 12.8152 6.74725L7 0.931125L1.18475 6.74725C1.1026 6.8294 0.991179 6.87555 0.875 6.87555C0.758821 6.87555 0.647401 6.8294 0.56525 6.74725C0.483099 6.6651 0.436947 6.55368 0.436947 6.4375C0.436947 6.32132 0.483099 6.2099 0.56525 6.12775L6.38137 0.3125Z'
      fill='#1F2937'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };