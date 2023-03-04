export default defineEventHandler(async (event) => {
  type TokenResponse = {
    access_token: string;
    token_type: "Bearer";
    expires_in: number;
    scope: string;
  };

  const config = useRuntimeConfig();

  const basic = Buffer.from(
    `${config.SPOTIFY_CLIENT_ID}:${config.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response = await $fetch<TokenResponse>(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: config.SPOTIFY_REFRESH_TOKEN,
        }).toString(),
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get access token");
  }
});
