export default async function getVenues(): Promise<VenueJson> {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch("hs");
      if (!response.ok) {
        reject(new Error("Failed to fetch venues"));
      }
      resolve(await response.json());
    }, 300);
  });
}
