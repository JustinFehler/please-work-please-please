import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 191 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 0H190.002V7.69238H0V0ZM0 15.3848H190.002V23.0771H0V15.3848ZM0 30.7695H190.002V38.4619H0V30.7695ZM0 46.1543H190.002V53.8467H0V46.1543ZM0 61.5391H190.002V69.2314H0V61.5391ZM0 76.9238H190.002V84.6162H0V76.9238ZM0 92.3086H190.002V100.001H0V92.3086Z'
      fill='#BD3D44'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 7.69238H190.002V15.3848H0V7.69238ZM0 23.0771H190.002V30.7695H0V23.0771ZM0 38.4619H190.002V46.1543H0V38.4619ZM0 53.8467H190.002V61.5391H0V53.8467ZM0 69.2314H190.002V76.9238H0V69.2314ZM0 84.6162H190.002V92.3086H0V84.6162Z'
      fill='white'
    />
    <path fillRule='evenodd' clipRule='evenodd' d='M0 0H76.0007V53.8467H0V0Z' fill='#192F5D' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.30775 2.30771L7.07699 4.46158H9.23086L7.46161 5.76929L8.15393 7.84623L6.30775 6.53853L4.61543 7.84623L5.30774 5.76929L3.46157 4.46158H5.76929L6.30775 2.30771ZM19.0002 2.30771L19.6925 4.46158H21.9233L20.0771 5.76929L20.8464 7.84623L19.0002 6.53853L17.154 7.84623L17.9233 5.76929L16.0771 4.46158H18.3079L19.0002 2.30771ZM31.6926 2.30771L32.3849 4.46158H34.6157L32.7695 5.76929L33.5388 7.84623L31.6926 6.53853L29.8464 7.84623L30.6157 5.76929L28.7695 4.46158H31.0003L31.6926 2.30771ZM44.3081 2.30771L45.0774 4.46158H47.2312L45.462 5.76929L46.1543 7.84623L44.3081 6.53853L42.5389 7.84623L43.2312 5.76929L41.385 4.46158H43.6927L44.3081 2.30771ZM57.0006 2.30771L57.6929 4.46158H59.9237L58.0775 5.76929L58.8467 7.84623L56.9236 6.53853L55.1544 7.84623L55.8467 5.76929L54.0005 4.46158H56.2313L57.0006 2.30771ZM69.693 2.30771L70.3853 4.46158H72.6161L70.7699 5.76929L71.5392 7.84623L69.693 6.53853L67.8468 7.84623L68.6161 5.76929L66.7699 4.46158H69.0007L69.693 2.30771ZM12.6924 7.69238L13.3847 9.84625H15.6155L13.7694 11.154L14.5386 13.2309L12.6924 11.9232L10.8463 13.2309L11.6155 11.154L9.76933 9.84625H12.0001L12.6924 7.69238ZM25.3079 7.69238L26.0772 9.84625H28.231L26.4618 11.154L27.1541 13.2309L25.3079 11.9232L23.5387 13.2309L24.231 11.154L22.3848 9.84625H24.6925L25.3079 7.69238ZM38.0004 7.69238L38.6927 9.84625H40.9235L39.0773 11.154L39.8465 13.2309L38.0004 11.9232L36.1542 13.2309L36.9234 11.154L35.0773 9.84625H37.3081L38.0004 7.69238ZM50.6928 7.69238L51.3851 9.84625H53.6159L51.7697 11.154L52.539 13.2309L50.6928 11.9232L48.8466 13.2309L49.6159 11.154L47.7697 9.84625H50.0005L50.6928 7.69238ZM63.3083 7.69238L64.0776 9.84625H66.1545L64.3852 11.154L65.0776 13.2309L63.2314 11.9232L61.4621 13.2309L62.1545 11.154L60.3083 9.84625H62.616L63.3083 7.69238ZM6.38468 13.0771L7.00007 15.2309H9.30778L7.46161 16.5386L8.15393 18.6156L6.30775 17.3079L4.61543 18.6156L5.30774 16.5386L3.46157 15.2309H5.76929L6.38468 13.0771ZM19.0002 13.0771L19.6925 15.2309H21.9233L20.154 16.5386L20.8464 18.6156L19.0002 17.3079L17.2309 18.6156L17.9233 16.5386L16.0771 15.2309H18.3079L19.0002 13.0771ZM31.6926 13.0771L32.3849 15.2309H34.6157L32.7695 16.5386L33.5388 18.6156L31.6926 17.3079L29.8464 18.6156L30.6157 16.5386L28.7695 15.2309H31.0003L31.6926 13.0771ZM44.3081 13.0771L45.0774 15.2309H47.2312L45.462 16.5386L46.1543 18.6156L44.3081 17.3079L42.5389 18.6156L43.2312 16.5386L41.385 15.2309H43.6927L44.3081 13.0771ZM57.0006 13.0771L57.6929 15.2309H59.9237L58.1544 16.5386L58.8467 18.6156L57.0006 17.3079L55.2313 18.6156L55.9236 16.5386L54.0775 15.2309H56.3082L57.0006 13.0771ZM69.693 13.0771L70.3853 15.2309H72.6161L70.7699 16.5386L71.5392 18.6156L69.693 17.3079L67.8468 18.6156L68.6161 16.5386L66.7699 15.2309H69.0007L69.693 13.0771ZM12.6924 18.4617L13.3847 20.6156H15.6155L13.7694 21.9233L14.5386 24.0002L12.6924 22.6925L10.8463 24.0002L11.6155 21.9233L9.76933 20.6156H12.0001L12.6924 18.4617ZM25.3079 18.4617L26.0772 20.6156H28.231L26.4618 21.9233L27.1541 24.0002L25.3079 22.6925L23.5387 24.0002L24.231 21.9233L22.3848 20.6156H24.6925L25.3079 18.4617ZM38.0004 18.4617L38.6927 20.6156H40.9235L39.1542 21.9233L39.8465 24.0002L38.0004 22.6925L36.2311 24.0002L36.9234 21.9233L35.0773 20.6156H37.3081L38.0004 18.4617ZM50.6928 18.4617L51.3851 20.6156H53.6159L51.7697 21.9233L52.539 24.0002L50.6928 22.6925L48.8466 24.0002L49.6159 21.9233L47.7697 20.6156H50.0005L50.6928 18.4617ZM63.3083 18.4617L64.0776 20.6156H66.1545L64.3852 21.9233L65.0776 24.0002L63.2314 22.6925L61.4621 24.0002L62.1545 21.9233L60.3083 20.6156H62.616L63.3083 18.4617ZM6.38468 23.8464L7.00007 26.0003H9.30778L7.46161 27.308L8.15393 29.3849L6.30775 28.0772L4.61543 29.3849L5.30774 27.308L3.46157 26.0003H5.76929L6.38468 23.8464ZM19.0002 23.8464L19.6925 26.0003H21.9233L20.154 27.308L20.8464 29.3849L19.0002 28.0772L17.2309 29.3849L17.9233 27.308L16.0771 26.0003H18.3079L19.0002 23.8464ZM31.6926 23.8464L32.3849 26.0003H34.6157L32.7695 27.308L33.5388 29.3849L31.6926 28.0772L29.8464 29.3849L30.6157 27.308L28.7695 26.0003H31.0003L31.6926 23.8464ZM44.3081 23.8464L45.0774 26.0003H47.2312L45.462 27.308L46.1543 29.3849L44.3081 28.0772L42.5389 29.3849L43.2312 27.308L41.385 26.0003H43.6927L44.3081 23.8464ZM57.0006 23.8464L57.6929 26.0003H59.9237L58.1544 27.308L58.8467 29.3849L57.0006 28.0772L55.2313 29.3849L55.9236 27.308L54.0775 26.0003H56.3082L57.0006 23.8464ZM69.693 23.8464L70.3853 26.0003H72.6161L70.7699 27.308L71.5392 29.3849L69.693 28.0772L67.8468 29.3849L68.6161 27.308L66.7699 26.0003H69.0007L69.693 23.8464ZM12.6924 29.2311L13.3847 31.3849H15.6155L13.7694 32.6926L14.5386 34.7696L12.6924 33.4619L10.8463 34.7696L11.6155 32.6926L9.76933 31.3849H12.0001L12.6924 29.2311ZM25.3079 29.2311L26.0772 31.3849H28.231L26.4618 32.6926L27.1541 34.7696L25.3079 33.4619L23.5387 34.7696L24.231 32.6926L22.3848 31.3849H24.6925L25.3079 29.2311ZM38.0004 29.2311L38.6927 31.3849H40.9235L39.1542 32.6926L39.8465 34.7696L38.0004 33.4619L36.2311 34.7696L36.9234 32.6926L35.0773 31.3849H37.3081L38.0004 29.2311ZM50.6928 29.2311L51.3851 31.3849H53.6159L51.7697 32.6926L52.539 34.7696L50.6928 33.4619L48.8466 34.7696L49.6159 32.6926L47.7697 31.3849H50.0005L50.6928 29.2311ZM63.3083 29.2311L64.0776 31.3849H66.1545L64.3852 32.6926L65.0776 34.7696L63.2314 33.4619L61.4621 34.7696L62.1545 32.6926L60.3083 31.3849H62.616L63.3083 29.2311ZM6.38468 34.6157L7.00007 36.7696H9.30778L7.46161 38.0773L8.15393 40.1542L6.30775 38.8465L4.61543 40.1542L5.30774 38.0773L3.46157 36.7696H5.76929L6.38468 34.6157ZM19.0002 34.6157L19.6925 36.7696H21.9233L20.154 38.0773L20.8464 40.1542L19.0002 38.8465L17.2309 40.1542L17.9233 38.0773L16.0771 36.7696H18.3079L19.0002 34.6157ZM31.6926 34.6157L32.3849 36.7696H34.6157L32.7695 38.0773L33.5388 40.1542L31.6926 38.8465L29.8464 40.1542L30.6157 38.0773L28.7695 36.7696H31.0003L31.6926 34.6157ZM44.3081 34.6157L45.0774 36.7696H47.2312L45.462 38.0773L46.1543 40.1542L44.3081 38.8465L42.5389 40.1542L43.2312 38.0773L41.385 36.7696H43.6927L44.3081 34.6157ZM57.0006 34.6157L57.6929 36.7696H59.9237L58.1544 38.0773L58.8467 40.1542L57.0006 38.8465L55.2313 40.1542L55.9236 38.0773L54.0775 36.7696H56.3082L57.0006 34.6157ZM69.693 34.6157L70.3853 36.7696H72.6161L70.7699 38.0773L71.5392 40.1542L69.693 38.8465L67.8468 40.1542L68.6161 38.0773L66.7699 36.7696H69.0007L69.693 34.6157ZM12.6924 40.0004L13.3847 42.1543H15.6155L13.7694 43.462L14.5386 45.5389L12.6924 44.2312L10.8463 45.5389L11.6155 43.462L9.76933 42.1543H12.0001L12.6924 40.0004ZM25.3079 40.0004L26.0772 42.1543H28.231L26.4618 43.462L27.1541 45.5389L25.3079 44.2312L23.5387 45.5389L24.231 43.462L22.3848 42.1543H24.6925L25.3079 40.0004ZM38.0004 40.0004L38.6927 42.1543H40.9235L39.1542 43.462L39.8465 45.5389L38.0004 44.2312L36.2311 45.5389L36.9234 43.462L35.0773 42.1543H37.3081L38.0004 40.0004ZM50.6928 40.0004L51.3851 42.1543H53.6159L51.7697 43.462L52.539 45.5389L50.6928 44.2312L48.8466 45.5389L49.6159 43.462L47.7697 42.1543H50.0005L50.6928 40.0004ZM63.3083 40.0004L64.0776 42.1543H66.1545L64.3852 43.462L65.0776 45.5389L63.2314 44.2312L61.4621 45.5389L62.1545 43.462L60.3083 42.1543H62.616L63.3083 40.0004ZM6.38468 45.3851L7.00007 47.5389H9.30778L7.46161 48.8466L8.15393 50.9236L6.30775 49.6159L4.61543 50.9236L5.30774 48.8466L3.46157 47.5389H5.76929L6.38468 45.3851ZM19.0002 45.3851L19.6925 47.5389H21.9233L20.154 48.8466L20.8464 50.9236L19.0002 49.6159L17.2309 50.9236L17.9233 48.8466L16.0771 47.5389H18.3079L19.0002 45.3851ZM31.6926 45.3851L32.3849 47.5389H34.6157L32.7695 48.8466L33.5388 50.9236L31.6926 49.6159L29.8464 50.9236L30.6157 48.8466L28.7695 47.5389H31.0003L31.6926 45.3851ZM44.3081 45.3851L45.0774 47.5389H47.2312L45.462 48.8466L46.1543 50.9236L44.3081 49.6159L42.5389 50.9236L43.2312 48.8466L41.385 47.5389H43.6927L44.3081 45.3851ZM57.0006 45.3851L57.6929 47.5389H59.9237L58.1544 48.8466L58.8467 50.9236L57.0006 49.6159L55.2313 50.9236L55.9236 48.8466L54.0775 47.5389H56.3082L57.0006 45.3851ZM69.693 45.3851L70.3853 47.5389H72.6161L70.7699 48.8466L71.5392 50.9236L69.693 49.6159L67.8468 50.9236L68.6161 48.8466L66.7699 47.5389H69.0007L69.693 45.3851Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
