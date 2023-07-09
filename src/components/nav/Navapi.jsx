import {RiAccountCircleFill} from 'react-icons/ri';
import {AiTwotoneHome} from 'react-icons/ai';
import { FaLaptop } from 'react-icons/fa';
import {BiBook} from 'react-icons/bi';
import {IoMdContacts} from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaFileCode } from 'react-icons/fa';
import {MdMiscellaneousServices} from 'react-icons/md'

const Navbar =[
    {
        id:'#top',
        img:<AiTwotoneHome/>,
    },
    
    {
        id:'#about',
        img:<RiAccountCircleFill/>,
    },
     {
        id:'#portfolio',
      img:  <FaReact />,
    },
    {
       
        id:'#contact',
        img:<IoMdContacts/>,
    },
   
  
];
export default Navbar;