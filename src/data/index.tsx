import { FaHouse, FaUserGroup } from "react-icons/fa6";
import { FaPlusSquare, FaEnvelope, FaIcons } from "react-icons/fa";

// 사이드바에 들어갈 아이콘 리스트
const Nav_Buttons = [
  {
    index: 0,
    icon: <FaHouse />, // home(main)
    title: "main",
  },
  {
    index: 1,
    icon: <FaPlusSquare />, // create contents
    title: "create",
  },
  {
    index: 2,
    icon: <FaEnvelope />, // message
    title: "message",
  },
  {
    index: 3,
    icon: <FaIcons />, // exlpore contents
    title: "explore",
  },
  {
    index: 4,
    icon: <FaUserGroup />, // community
    title: "community",
  },
];

export { Nav_Buttons };
