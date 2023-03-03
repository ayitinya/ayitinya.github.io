type CurrentlyPlayingResponse = {
  item: {
    album: {
      external_urls: {
        spotify: string;
      };
      name: string;
    };
    artists: {
      external_urls: {
        spotify: string;
      };
      name: string;
    }[];
    external_urls: {
      spotify: string;
    };
    name: string;
  };
};

export default defineEventHandler(
  async (event): Promise<CurrentlyPlayingResponse> => {
    const token = await $fetch("/api/spotify/access_token");

    return await $fetch<CurrentlyPlayingResponse>(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
        },
      }
    );
  }
);
