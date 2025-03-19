export default async function getVenues(): Promise<VenueJson> {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch(
        "https://a08-frontend-3zfm.vercel.app/api/v1/venues"
      );
      if (!response.ok) {
        reject(new Error("Failed to fetch venues"));
      }
      resolve(await response.json());
    }, 300);
  });
}
