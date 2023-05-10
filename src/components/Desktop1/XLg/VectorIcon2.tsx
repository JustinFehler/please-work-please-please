import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.146 0.146C0.0994367 0.192446 0.0624939 0.247621 0.0372875 0.308366C0.012081 0.369111 -0.000893831 0.434233 -0.000893831 0.5C-0.000893831 0.565767 0.012081 0.630889 0.0372875 0.691634C0.0624939 0.752379 0.0994367 0.807554 0.146 0.854L11.146 11.854C11.2399 11.9479 11.3672 12.0006 11.5 12.0006C11.6328 12.0006 11.7601 11.9479 11.854 11.854C11.9479 11.7601 12.0006 11.6328 12.0006 11.5C12.0006 11.3672 11.9479 11.2399 11.854 11.146L0.854 0.146C0.807554 0.0994367 0.752379 0.0624939 0.691634 0.0372875C0.630889 0.012081 0.565767 -0.000893831 0.5 -0.000893831C0.434233 -0.000893831 0.369111 0.012081 0.308366 0.0372875C0.247621 0.0624939 0.192446 0.0994367 0.146 0.146V0.146Z'
      fill='#1F2937'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };