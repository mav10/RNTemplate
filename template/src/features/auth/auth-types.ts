export type AuthState =
  | {
      state: 'Unauthorized';
    }
  | {
      state: 'Authorized';
      accessToken: string;
      refreshToken: string;
    };
