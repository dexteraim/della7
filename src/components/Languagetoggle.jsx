import { RiArrowDownSLine } from 'react-icons/ri';

const LanguageToggle = () => {
  return (
    <div className="flex items-center gap-3">
      EN
      <div className="text-xl">
        <RiArrowDownSLine />
      </div>
    </div>
  );
};

export default LanguageToggle;
