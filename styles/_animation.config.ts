import { keyframes } from 'styled-components';

export const slideInRight = keyframes`
from {
    transform: translateX(100%);
}
to {
    transform: translateX(0);
}
`;

export const slideOutRight = keyframes`
from {
  transform: translateX(0%);
}
to {
  transform: translateX(100%);
}
`;

export const slideInLeft = keyframes`
from {
    transform: translateX(-100%);
}
to {
    transform: translateX(0);
}
`;

export const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
