import { RiArrowDownSLine } from 'react-icons/ri';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const LanguageToggle = () => {
  return (
    <Menu
      menuButton={
        <MenuButton>
          <div className="flex items-center gap-3">
            EN <RiArrowDownSLine />
          </div>
        </MenuButton>
      }
      transition
    >
      <MenuItem>FR</MenuItem>
      <MenuItem>AR</MenuItem>
      <div className="text-xl"></div>
    </Menu>
  );
};

export default LanguageToggle;
