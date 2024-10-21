 type properties = {
    BASEURL: string;
    TIMEOUT: number;
  };

// # BASE PROPERTIES FOR HANDLING RESPONSE
export const PROPERTIES: properties = {
  BASEURL: '',
  TIMEOUT: 5000
};

// # ENDPOINT FOR REFRESH TOKEN REQUEST
export const refreshTokenURL: string = '';

// # TOKEN NAME ON STORAGE
export const authTokenName: string = '';
export const refreshTokenName: string = '';

// # ENDPOINT
export const auth:string = 'api/auth/signin';
export const getToken:string = 'api/auth/username';

export const baseBooking:string = 'api/bookings';

export const getMenu:string = 'api/menu';

export const getSettings:string = 'api/settings';

export const baseReview:string = 'api/reviews';


