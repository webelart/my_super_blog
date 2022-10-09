import React from 'react';
import cl from 'classnames';
import { AiFillGithub, AiFillYoutube, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';

const socialNetworks = [
  {
    id: 1,
    href: 'https://github.com/liveldi',
    icon: AiFillGithub,
  },
  {
    id: 2,
    href: 'https://www.youtube.com/channel/UCdw1R35g3uDj4LVt1-aS-hA',
    icon: AiFillYoutube,
  },
  {
    id: 3,
    href: 'https://twitter.com/webelart',
    icon: AiFillTwitterCircle
  },
  {
    id: 4,
    href: 'https://www.linkedin.com/in/elena-litvinova-574424216/',
    icon: AiFillLinkedin
  }
];

const SocialNetworks = ({
    className
}) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
          {socialNetworks.map((socialNetwork) => (
            <li
              key={socialNetwork.id}
              className={styles.listItem}
            >
              <a
                href={socialNetwork.href}
                target="_blank"
                className={styles.listLink}
                rel="noreferrer"
              >
                {React.createElement(
                  socialNetwork.icon,
                  {
                    color: 'black',
                    size: 50
                  }
                )}
              </a>
            </li>
          ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks;