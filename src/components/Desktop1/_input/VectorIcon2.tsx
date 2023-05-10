import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.646 0.646C0.692446 0.599437 0.747621 0.562494 0.808366 0.537287C0.869112 0.512081 0.934233 0.499106 1 0.499106C1.06577 0.499106 1.13089 0.512081 1.19163 0.537287C1.25238 0.562494 1.30755 0.599437 1.354 0.646L7 6.293L12.646 0.646C12.6925 0.599512 12.7477 0.562636 12.8084 0.537477C12.8692 0.512317 12.9343 0.499368 13 0.499368C13.0657 0.499368 13.1308 0.512317 13.1916 0.537477C13.2523 0.562636 13.3075 0.599512 13.354 0.646C13.4005 0.692488 13.4374 0.747677 13.4625 0.808416C13.4877 0.869156 13.5006 0.934256 13.5006 1C13.5006 1.06574 13.4877 1.13084 13.4625 1.19158C13.4374 1.25232 13.4005 1.30751 13.354 1.354L7.354 7.354C7.30755 7.40056 7.25238 7.43751 7.19163 7.46271C7.13089 7.48792 7.06577 7.50089 7 7.50089C6.93423 7.50089 6.86911 7.48792 6.80837 7.46271C6.74762 7.43751 6.69245 7.40056 6.646 7.354L0.646 1.354C0.599437 1.30755 0.562494 1.25238 0.537287 1.19163C0.512081 1.13089 0.499106 1.06577 0.499106 1C0.499106 0.934233 0.512081 0.869111 0.537287 0.808366C0.562494 0.747621 0.599437 0.692446 0.646 0.646V0.646Z'
      fill='#6B7280'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
