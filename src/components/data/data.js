import {UilEstate, UilClipboardAlt, UilUsersAlt, UilPackage} from '@iconscout/react-unicons';


export const sidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Announce"
    },
    {
        icon: UilUsersAlt,
        heading: "User"
    },

    {
        icon: UilPackage,
        heading: "Post"
    }
]
export const cardsData = [
    {
      title: "Announcements",
      color: {
        backGround: "#017143",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilClipboardAlt,
    },
    {
      title: "Users",
      color: {
        backGround: "#017143",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilUsersAlt,

    },
    {
      title: "Post",
      color: {
        backGround:
          "#017143",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilPackage,
    }
  ];