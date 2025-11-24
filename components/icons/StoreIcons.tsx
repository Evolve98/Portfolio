import React from 'react';

// Interface for icons that will now be images
interface ImageIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const PlayStoreIcon: React.FC<ImageIconProps> = ({ className, ...rest }) => (
  <img src="/icons/playstore.png" alt="Google Play Store" className={`${className || ''} object-contain`} {...rest} />
);

export const AppStoreIcon: React.FC<ImageIconProps> = ({ className, ...rest }) => (
  <img src="/icons/appstore.png" alt="Apple App Store" className={`${className || ''} object-contain`} {...rest} />
);