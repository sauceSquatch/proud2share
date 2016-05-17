'use strict';

let guid = 0;

export function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export function getUniqueID(id) {
  guid += 1;
  return (id.length) ? id + '_' + guid : guid;
}
