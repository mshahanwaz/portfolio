/* eslint-disable @next/next/no-img-element */
import github from '@/assets/svgs/logos/github.svg';
import gitlab from '@/assets/svgs/logos/gitlab.svg';
import vscode from '@/assets/svgs/logos/vscode.svg';
import ts from '@/assets/svgs/logos/ts.svg';
import redux from '@/assets/svgs/logos/redux.svg';
import recoil from '@/assets/svgs/logos/recoil.svg';
import nodejs from '@/assets/svgs/logos/nodejs.svg';
import mongodb from '@/assets/svgs/logos/mongodb.svg';
import firebase from '@/assets/svgs/logos/firebase.svg';
import express from '@/assets/svgs/logos/express.svg';
import tailwind from '@/assets/svgs/logos/tailwind.svg';
import nextjs from '@/assets/svgs/logos/nextjs.svg';
import reactjs from '@/assets/svgs/logos/reactjs.svg';
import mui from '@/assets/svgs/logos/mui.svg';

const technologiesImageList = [
  {
    src: reactjs.src,
    alt: 'ReactJS',
  },
  {
    src: nextjs.src,
    alt: 'NextJS',
  },
  {
    src: ts.src,
    alt: 'TypeScript',
  },
  {
    src: tailwind.src,
    alt: 'TailwindCSS',
  },
  {
    src: mui.src,
    alt: 'Material UI',
  },

  {
    src: redux.src,
    alt: 'Redux',
  },
  {
    src: recoil.src,
    alt: 'Recoil',
  },
  {
    src: nodejs.src,
    alt: 'NodeJS',
  },
  {
    src: express.src,
    alt: 'ExpressJS',
  },
  {
    src: mongodb.src,
    alt: 'MongoDB',
  },
  {
    src: firebase.src,
    alt: 'Firebase',
  },
  {
    src: github.src,
    alt: 'GitHub',
  },
  {
    src: gitlab.src,
    alt: 'GitLab',
  },
  {
    src: vscode.src,
    alt: 'VSCode',
  },
];

export default function Banner() {
  return (
    <div className="group relative h-[60px] overflow-hidden">
      <div className="h-inherit group-hover:pause absolute top-0 left-0 animate-banner whitespace-nowrap">
        {[...technologiesImageList, ...technologiesImageList].map(
          (technologyImage, index) => (
            <div
              key={index}
              className="h-inherit inline-flex aspect-square min-w-[300px] items-center justify-center gap-4 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              title={technologyImage.alt}
            >
              <img
                className="h-inherit inline max-w-none"
                src={technologyImage.src}
                alt={technologyImage.alt}
              />
              <span className="text-lg font-medium">{technologyImage.alt}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
