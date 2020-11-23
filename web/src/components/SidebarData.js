import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Fazer Login',
    path: '/login',
    icon: <BsIcons.BsArrowBarRight />,
    
    cName: 'nav-text'
  },
  {
    title: 'Produtos',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'História da Associação',
    path: '/associacao',
    icon: <BsIcons.BsFillAwardFill />,
    cName: 'nav-text'
  },
  {
    title: 'Rota do Queijo',
    path: '/rotaqueijo',
    icon: <AiIcons.AiFillCar />,
    cName: 'nav-text'
  },
  {
    title: 'Lista de Desejos',
    path: '/desejos',
    icon: <BsIcons.BsHeartFill />,
    cName: 'nav-text'
  },
  {
    title: 'Adicionar Produto',
    path: '/create',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
];