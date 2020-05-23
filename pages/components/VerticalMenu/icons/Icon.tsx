import React from "react";

type Name = "velo" | string;

const iconPaths = {
  "velo": "M5.23223 6.99984C5.50743 6.99984 5.77424 7.03354 6.0359 7.08108L7.61408 1.82062L5.07402 0.973919C4.81232 0.887013 4.67071 0.603794 4.75809 0.341576C4.84551 0.0798726 5.12676 -0.0612683 5.39043 0.025638L8.39043 1.02562C8.64679 1.11108 8.78887 1.3845 8.71124 1.64329L8.00432 3.99975H15.4231L16.4231 1.99973H15.2322C14.9558 1.99973 14.7322 1.77609 14.7322 1.49972C14.7322 1.22334 14.9558 0.999701 15.2322 0.999701H18.2322C18.5086 0.999701 18.7322 1.22334 18.7322 1.49972C18.7322 1.77609 18.5086 1.99973 18.2322 1.99973H17.5413L16.3066 4.46892L18.2444 7.48312C18.8465 7.18368 19.5153 6.9997 20.2322 6.9997C22.7136 6.9997 24.7322 9.01828 24.7322 11.4997C24.7322 13.9811 22.7136 15.9997 20.2322 15.9997C17.9219 15.9997 16.0352 14.2435 15.7827 11.9997H14.1401C13.933 12.5805 13.3832 12.9997 12.7322 12.9997C11.905 12.9997 11.2322 12.3269 11.2322 11.4997C11.2322 11.2001 11.3226 10.9222 11.4745 10.6878L7.5313 5.5762L6.9958 7.36129C8.60277 8.04886 9.73223 9.64425 9.73223 11.4998C9.73223 13.9813 7.71365 15.9998 5.23223 15.9998C2.7508 15.9998 0.732227 13.9813 0.732227 11.4998C0.732227 9.01842 2.75076 6.99984 5.23223 6.99984ZM20.2322 14.9999C22.1619 14.9999 23.7322 13.4295 23.7322 11.4998C23.7322 9.57014 22.1619 7.99983 20.2322 7.99983C19.7144 7.99983 19.2267 8.12001 18.7841 8.3227L20.6526 11.2293C20.7518 11.3831 20.7586 11.5789 20.6712 11.7396C20.5833 11.8997 20.4154 11.9998 20.2322 11.9998H16.7827C17.028 13.6915 18.4738 14.9999 20.2322 14.9999ZM19.3162 10.9998L17.9474 8.87039C17.3293 9.40819 16.9056 10.1519 16.7827 10.9998H19.3162ZM14.1401 10.9998H15.7828C15.9176 9.80109 16.5164 8.7525 17.4054 8.02729L15.7866 5.50912L13.4466 10.1892C13.7676 10.3649 14.0158 10.651 14.1401 10.9998ZM12.7322 11.9999C13.0081 11.9999 13.2322 11.7757 13.2322 11.4998C13.2322 11.224 13.0081 10.9998 12.7322 10.9998C12.4563 10.9998 12.2322 11.2239 12.2322 11.4998C12.2322 11.7757 12.4564 11.9999 12.7322 11.9999ZM12.2689 10.0806C12.3136 10.0659 12.3572 10.0491 12.4038 10.0386L14.9232 4.99983H8.34941L12.2689 10.0806ZM5.23223 14.9999C7.16193 14.9999 8.73224 13.4295 8.73224 11.4998C8.73224 10.0974 7.89773 8.89336 6.70368 8.3354L5.71124 11.6434C5.64632 11.8602 5.44757 11.9998 5.23223 11.9998C5.18488 11.9998 5.13651 11.993 5.08865 11.9788C4.82399 11.8992 4.67409 11.6204 4.75321 11.3563L5.74467 8.05162C5.57601 8.02654 5.40768 7.99983 5.23223 7.99983C3.30252 7.99983 1.73221 9.57014 1.73221 11.4998C1.73221 13.4295 3.30252 14.9999 5.23223 14.9999Z"
}

export const Icon = ({
  color,
  name,
  className,
}: {
  color: string;
  name: Name;
  className: string;
}) => (
  <svg
    width="25"
    height="16"
    viewBox="0 0 25 16"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={iconPaths[name]}
      fill="white"
    />
  </svg>
);
