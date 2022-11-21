import React from 'react';

import {
  Android,
  Craftcms,
  Gatsby,
  Graphql,
  Ios,
  Mongodb,
  Mysql,
  Nodedotjs,
  ReactJs,
  Threedotjs,
  Typescript,
} from '@icons-pack/react-simple-icons';

type Props = {
  label: string;
};

const Icon = (props: Props) => {
  const { label } = props;

  const iconProps = {
    width: '3rem',
    height: '3rem',
    color: ' #0A0A0A',
  };

  switch (label) {
    case 'android':
      return <Android {...iconProps} />;
    case 'craft':
      return <Craftcms {...iconProps} />;
    case 'gatsby':
      return <Gatsby {...iconProps} />;
    case 'graphql':
      return <Graphql {...iconProps} />;
    case 'ios':
      return <Ios {...iconProps} />;
    case 'mongodb':
      return <Mongodb {...iconProps} />;
    case 'mysql':
      return <Mysql {...iconProps} />;
    case 'node.js':
      return <Nodedotjs {...iconProps} />;
    case 'react':
      return <ReactJs {...iconProps} />;
    case 'three.js':
      return <Threedotjs {...iconProps} />;
    case 'typescript':
      return <Typescript {...iconProps} />;
    default:
      return <></>;
  }
};

export default Icon;
