export default interface SessionInterface {
  expires_at: number;
  expires_in: number;
  token_type: string;
  access_token: string;
  refresh_token: string;
  provider_token: null;
  provider_refresh_token: null;
  user: {
    id: string;
    factors: null;
    aud: string;
    iat: number;
    iss: string;
    email: string;
    phone: string;
    app_metadata: { provider: string; providers: [] };
    user_metadata: { username: string };
    role: string;
    aal: string;
    amr: [[]];
    session_id: string;
    is_anonymous: boolean;
  };
}
