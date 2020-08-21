import React, { useState } from 'react';
import { useImmer } from 'use-immer';

import { PlayMode } from 'constants/player';

import MiniPlayer from './MiniPlayer';
import NormalPlayer from './NormalPlayer';
import PlayerList from './PlayList';
import Player from '.';

export default {
  title: 'Components/Player',
  component: Player,
};

const playList: any = [
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 92510920,
      name: '天外来物',
      picUrl: 'https://p2.music.126.net/HvB44MNINoLar8HFbRjIGQ==/109951165142435842.jpg',
      pic_str: '109951165142435842',
      pic: 109951165142435840,
    },
    st: 1,
    noCopyrightRcmd: null,
    v: 23,
    mv: 0,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 6174764,
      vd: -49678,
    },
    no: 1,
    fee: 0,
    djId: 0,
    cd: '01',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: '',
    mst: 9,
    cp: 22036,
    crbt: null,
    cf: '',
    dt: 257212,
    h: {
      br: 320000,
      fid: 0,
      size: 10291244,
      vd: -52235,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4116524,
      vd: -48009,
    },
    rtUrl: null,
    ftype: 0,
    name: '天外来物',
    id: 1463165983,
    privilege: {
      id: 1463165983,
      fee: 0,
      payed: 0,
      st: 0,
      pl: 320000,
      dl: 999000,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 320000,
      toast: false,
      flag: 1,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 34780271,
      name: '初学者',
      picUrl: 'https://p2.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg',
      pic_str: '1369991500930171',
      pic: 1369991500930171,
    },
    st: 0,
    noCopyrightRcmd: null,
    v: 71,
    mv: 5342354,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 6701392,
      vd: 0,
    },
    no: 3,
    fee: 8,
    djId: 0,
    cd: '1',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: ['电影《精灵王座》主题曲'],
    pop: 100,
    rt: null,
    mst: 9,
    cp: 14026,
    crbt: null,
    cf: '',
    dt: 279145,
    h: {
      br: 320000,
      fid: 0,
      size: 11168958,
      vd: -2,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4467609,
      vd: -2,
    },
    rtUrl: null,
    ftype: 0,
    name: '我好像在哪见过你',
    id: 417859631,
    privilege: {
      id: 417859631,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 74999481,
      name: '怪咖',
      picUrl: 'https://p2.music.126.net/TOkRGd59o3hAOKsnMMmMMA==/109951163755246383.jpg',
      pic_str: '109951163755246383',
      pic: 109951163755246380,
    },
    st: 0,
    noCopyrightRcmd: null,
    v: 28,
    mv: 10785871,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 6013640,
      vd: 0,
    },
    no: 2,
    fee: 8,
    djId: 0,
    cd: '01',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: null,
    mst: 9,
    cp: 22036,
    crbt: null,
    cf: '',
    dt: 250491,
    h: {
      br: 320000,
      fid: 0,
      size: 10022705,
      vd: 0,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4009108,
      vd: 0,
    },
    rtUrl: null,
    ftype: 0,
    name: '怪咖',
    id: 574921549,
    privilege: {
      id: 574921549,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 2681139,
      name: '意外',
      picUrl: 'https://p1.music.126.net/WPHmBisDxnoF4DrBLKwl3Q==/109951163169021112.jpg',
      pic_str: '109951163169021112',
      pic: 109951163169021120,
    },
    st: 1,
    noCopyrightRcmd: null,
    v: 23,
    mv: 231123,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 5813019,
      vd: -11799,
    },
    no: 8,
    fee: 8,
    djId: 0,
    cd: '1',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: '600907000002830304',
    mst: 9,
    cp: 29001,
    crbt: null,
    cf: '',
    dt: 242000,
    h: {
      br: 320000,
      fid: 0,
      size: 9688337,
      vd: -14299,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3875360,
      vd: -9900,
    },
    rtUrl: null,
    ftype: 0,
    name: '其实',
    id: 27955654,
    privilege: {
      id: 27955654,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 34780271,
      name: '初学者',
      picUrl: 'https://p2.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg',
      pic_str: '1369991500930171',
      pic: 1369991500930171,
    },
    st: 0,
    noCopyrightRcmd: null,
    v: 30,
    mv: 5302569,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 6013013,
      vd: -1600,
    },
    no: 2,
    fee: 8,
    djId: 0,
    cd: '1',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: null,
    mst: 9,
    cp: 0,
    crbt: null,
    cf: '',
    dt: 250482,
    h: {
      br: 320000,
      fid: 0,
      size: 10021660,
      vd: -4100,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4008690,
      vd: -2,
    },
    rtUrl: null,
    ftype: 0,
    name: '刚刚好',
    id: 415792881,
    privilege: {
      id: 415792881,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 3154175,
      name: '绅士',
      picUrl: 'https://p2.music.126.net/qpvBqYIqkRhO9Ry2qOCdJQ==/2942293117852634.jpg',
      pic_str: '2942293117852634',
      pic: 2942293117852634,
    },
    st: 0,
    noCopyrightRcmd: null,
    v: 94,
    mv: 420144,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 6271311,
      vd: 0,
    },
    no: 1,
    fee: 0,
    djId: 0,
    cd: '1',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: null,
    mst: 9,
    cp: 0,
    crbt: null,
    cf: '',
    dt: 261249,
    h: {
      br: 320000,
      fid: 0,
      size: 10452157,
      vd: 0,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4180888,
      vd: -2,
    },
    rtUrl: null,
    ftype: 0,
    name: '演员',
    id: 32507038,
    privilege: {
      id: 32507038,
      fee: 0,
      payed: 0,
      st: 0,
      pl: 320000,
      dl: 999000,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 320000,
      toast: false,
      flag: 0,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 2681139,
      name: '意外',
      picUrl: 'https://p2.music.126.net/WPHmBisDxnoF4DrBLKwl3Q==/109951163169021112.jpg',
      pic_str: '109951163169021112',
      pic: 109951163169021120,
    },
    st: 1,
    noCopyrightRcmd: null,
    v: 37,
    mv: 5309397,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 6900131,
      vd: -19200,
    },
    no: 2,
    fee: 8,
    djId: 0,
    cd: '1',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: '600907000002830296',
    mst: 9,
    cp: 29001,
    crbt: null,
    cf: '',
    dt: 287000,
    h: {
      br: 320000,
      fid: 0,
      size: 11500190,
      vd: -21700,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4600101,
      vd: -17700,
    },
    rtUrl: null,
    ftype: 0,
    name: '意外',
    id: 27890306,
    privilege: {
      id: 27890306,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 3154175,
      name: '绅士',
      picUrl: 'https://p2.music.126.net/qpvBqYIqkRhO9Ry2qOCdJQ==/2942293117852634.jpg',
      pic_str: '2942293117852634',
      pic: 2942293117852634,
    },
    st: 1,
    noCopyrightRcmd: null,
    v: 36,
    mv: 418030,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 6985394,
      vd: -12100,
    },
    no: 2,
    fee: 0,
    djId: 0,
    cd: '1',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: null,
    mst: 9,
    cp: 0,
    crbt: null,
    cf: '',
    dt: 290000,
    h: {
      br: 320000,
      fid: 0,
      size: 11642296,
      vd: -14700,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4656944,
      vd: -10400,
    },
    rtUrl: null,
    ftype: 0,
    name: '绅士',
    id: 32192436,
    privilege: {
      id: 32192436,
      fee: 0,
      payed: 0,
      st: 0,
      pl: 320000,
      dl: 999000,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 320000,
      toast: false,
      flag: 0,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 2681139,
      name: '意外',
      picUrl: 'https://p2.music.126.net/WPHmBisDxnoF4DrBLKwl3Q==/109951163169021112.jpg',
      pic_str: '109951163169021112',
      pic: 109951163169021120,
    },
    st: 1,
    noCopyrightRcmd: null,
    v: 38,
    mv: 214074,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 7464376,
      vd: -400,
    },
    no: 3,
    fee: 8,
    djId: 0,
    cd: '1',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: '600907000002830308',
    mst: 9,
    cp: 29001,
    crbt: null,
    cf: '',
    dt: 310000,
    h: {
      br: 320000,
      fid: 0,
      size: 12440598,
      vd: -3100,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4976265,
      vd: 0,
    },
    rtUrl: null,
    ftype: 0,
    name: '你还要我怎样',
    id: 27955653,
    privilege: {
      id: 27955653,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 36855053,
      name: '渡',
      picUrl: 'https://p1.music.126.net/fNbj5uDwltSDLbETdnEYYQ==/109951163069265719.jpg',
      pic_str: '109951163069265719',
      pic: 109951163069265710,
      alia: ['The Crossing'],
    },
    st: 0,
    noCopyrightRcmd: null,
    v: 38,
    mv: 5541567,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 7494470,
      vd: -5600,
    },
    no: 2,
    fee: 8,
    djId: 0,
    cd: '01',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: null,
    mst: 9,
    cp: 14026,
    crbt: null,
    cf: '',
    dt: 312214,
    h: {
      br: 320000,
      fid: 0,
      size: 12490754,
      vd: -8000,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4996328,
      vd: -3700,
    },
    rtUrl: null,
    ftype: 0,
    name: '暧昧',
    id: 471385043,
    privilege: {
      id: 471385043,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 36855053,
      name: '渡',
      picUrl: 'https://p1.music.126.net/fNbj5uDwltSDLbETdnEYYQ==/109951163069265719.jpg',
      pic_str: '109951163069265719',
      pic: 109951163069265710,
      alia: ['The Crossing'],
    },
    st: 0,
    noCopyrightRcmd: null,
    v: 39,
    mv: 5521812,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 5532778,
      vd: -21300,
    },
    no: 1,
    fee: 8,
    djId: 0,
    cd: '01',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: null,
    mst: 9,
    cp: 14026,
    crbt: null,
    cf: '',
    dt: 230457,
    h: {
      br: 320000,
      fid: 0,
      size: 9221268,
      vd: -23900,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3688533,
      vd: -19800,
    },
    rtUrl: null,
    ftype: 0,
    name: '动物世界',
    id: 468517654,
    privilege: {
      id: 468517654,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
      {
        id: 8334,
        name: '刘惜君',
      },
    ],
    al: {
      id: 80003734,
      name: '尘',
      picUrl: 'https://p1.music.126.net/DHUrNjC-1d6Snpcfg20Umw==/109951164583315133.jpg',
      pic_str: '109951164583315133',
      pic: 109951164583315140,
    },
    st: 1,
    noCopyrightRcmd: null,
    v: 11,
    mv: 10909040,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 7619857,
      vd: -11378,
    },
    no: 10,
    fee: 8,
    djId: 0,
    cd: '01',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: '',
    mst: 9,
    cp: 22036,
    crbt: null,
    cf: '',
    dt: 317425,
    h: {
      br: 320000,
      fid: 0,
      size: 12699733,
      vd: -13999,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 5079919,
      vd: -9607,
    },
    rtUrl: null,
    ftype: 0,
    name: '聊表心意',
    id: 1374061043,
    privilege: {
      id: 1374061043,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 74999481,
      name: '怪咖',
      picUrl: 'https://p2.music.126.net/TOkRGd59o3hAOKsnMMmMMA==/109951163755246383.jpg',
      pic_str: '109951163755246383',
      pic: 109951163755246380,
    },
    st: 1,
    noCopyrightRcmd: null,
    v: 78,
    mv: 10850382,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 5955962,
      vd: 0,
    },
    no: 5,
    fee: 8,
    djId: 0,
    cd: '01',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: '',
    mst: 9,
    cp: 22036,
    crbt: null,
    cf: '',
    dt: 248109,
    h: {
      br: 320000,
      fid: 0,
      size: 9926574,
      vd: 0,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3970656,
      vd: 0,
    },
    rtUrl: null,
    ftype: 0,
    name: '天份',
    id: 1334647784,
    privilege: {
      id: 1334647784,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 36855053,
      name: '渡',
      picUrl: 'https://p1.music.126.net/fNbj5uDwltSDLbETdnEYYQ==/109951163069265719.jpg',
      pic_str: '109951163069265719',
      pic: 109951163069265710,
      alia: ['The Crossing'],
    },
    st: 0,
    noCopyrightRcmd: null,
    v: 34,
    mv: 5780008,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 6123982,
      vd: -12500,
    },
    no: 3,
    fee: 8,
    djId: 0,
    cd: '01',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: null,
    mst: 9,
    cp: 22036,
    crbt: null,
    cf: '',
    dt: 255111,
    h: {
      br: 320000,
      fid: 0,
      size: 10206607,
      vd: -14900,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4082669,
      vd: -10900,
    },
    rtUrl: null,
    ftype: 0,
    name: '像风一样',
    id: 516657051,
    privilege: {
      id: 516657051,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
  },
  {
    rtUrls: [],
    ar: [
      {
        id: 5781,
        name: '薛之谦',
      },
    ],
    al: {
      id: 17074,
      name: '未完成的歌',
      picUrl: 'https://p2.music.126.net/yWtj0UXRJBCT9YI7csmAcw==/109951164190741294.jpg',
      pic_str: '109951164190741294',
      pic: 109951164190741300,
    },
    st: 3,
    noCopyrightRcmd: null,
    v: 93,
    mv: 5308148,
    a: null,
    m: {
      br: 192000,
      fid: 0,
      size: 6135893,
      vd: 33300,
    },
    no: 13,
    fee: 8,
    djId: 0,
    cd: '1',
    rtype: 0,
    rurl: null,
    pst: 0,
    t: 0,
    alia: [],
    pop: 100,
    rt: '',
    mst: 9,
    cp: 7003,
    crbt: null,
    cf: '',
    dt: 255587,
    h: {
      br: 320000,
      fid: 0,
      size: 10226460,
      vd: 30700,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4090610,
      vd: 29705,
    },
    rtUrl: null,
    ftype: 0,
    name: '认真的雪',
    id: 169185,
    privilege: {
      id: 169185,
      fee: 8,
      payed: 0,
      st: 0,
      pl: 128000,
      dl: 0,
      sp: 7,
      cp: 1,
      subp: 1,
      cs: false,
      maxbr: 999000,
      fl: 128000,
      toast: false,
      flag: 4,
      preSell: false,
      playMaxbr: 999000,
      downloadMaxbr: 999000,
      chargeInfoList: [
        {
          rate: 128000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 0,
        },
        {
          rate: 192000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 320000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
        {
          rate: 999000,
          chargeUrl: null,
          chargeMessage: null,
          chargeType: 1,
        },
      ],
    },
    eq: 'pop',
  },
];

export const DefaultMiniPlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <MiniPlayer
        playing={playing}
        song={playList[0]}
        percent={0.5}
        onShowListButtonClick={() => alert('show list')}
        onPlayButtonClick={(status) => setPlaying(status)}
      />
    </div>
  );
};

export const DefaultNormalPlayer = () => {
  const [mode, setMode] = useState(PlayMode.loop);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(1000);
  const [speed, setSpeed] = useState(1);
  const duration = 3600;

  return (
    <div>
      <NormalPlayer
        song={playList[0]}
        mode={mode}
        speed={speed}
        playing={playing}
        currentTime={currentTime}
        duration={duration}
        percent={currentTime / duration}
        onChangeMode={() => {
          setMode((mode + 1) % 3);
        }}
        onPrevButtonClick={() => alert('prev')}
        onNextButtonClick={() => alert('next')}
        onShowListButtonClick={() => alert('show list')}
        onBackButtonClick={() => alert('back')}
        onPlayButtonClick={(status) => setPlaying(status)}
        onPercentProgressBarChange={(p) => {
          setCurrentTime(p * duration);
        }}
        onSelectSpeed={(s) => setSpeed(s)}
      />
    </div>
  );
};

export const DefaultPlayerList = () => {
  const [list, setList] = useImmer(playList);
  const [show, setShow] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [mode, setMode] = useState(PlayMode.loop);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        显示列表
      </button>
      <PlayerList
        show={show}
        mode={mode}
        list={list}
        song={list[songIndex]}
        onHideList={() => {
          setShow(false);
        }}
        onDeleteItemSong={(_, index) => {
          setList((l) => {
            l.splice(index, 1);
          });
        }}
        onSelectItemSong={(_, index) => {
          setSongIndex(index);
        }}
        onCleanList={() => {
          setList((_) => [] as any);
        }}
        onChangePlayMode={() => {
          setMode((mode + 1) % 3);
        }}
      />
    </div>
  );
};

export const DefaultPlayer = () => {
  const [list, setList] = useImmer(playList);
  const [songIndex, setSongIndex] = useState(0);
  const [mode, setMode] = useState(PlayMode.loop);
  const [fullScreen, setFullScreen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  return (
    <div>
      <Player
        mode={mode}
        currentSong={list[songIndex]}
        currentSongIndex={songIndex}
        playList={list}
        playing={playing}
        fullScreen={fullScreen}
        speed={speed}
        onToggleFullScreen={(status) => {
          setFullScreen(status);
        }}
        onPlayButtonClick={(status) => {
          setPlaying(status);
        }}
        onChangePlayMode={() => {
          setMode((mode + 1) % 3);
        }}
        onDeleteItemSong={(_, index) => {
          setList((l) => {
            l.splice(index, 1);
          });
        }}
        onSelectItemSong={(_, index) => {
          setSongIndex(index);
        }}
        onCleanList={() => {
          setList((_) => [] as any);
        }}
        onSelectSpeed={(s) => {
          setSpeed(s);
        }}
        onError={(msg) => {
          alert(msg);
        }}
      />
    </div>
  );
};
