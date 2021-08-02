export const deleteCacheFiles = async () => {
  const cachedFiles = await caches.keys();
  await Promise.all(
    cachedFiles.map(
      name =>
        new Promise(async (resolve, reject) => {
          try {
            const cache = await caches.open(name);
            const res1 = await cache.delete('/');
            const res2 = await cache.delete('/.htaccess.bin');
            if (res1 || res2) {
              window.location.reload();
            }
            resolve();
          } catch (err) {
            console.log('here is err', err);
            reject(err);
          }
        }),
    ),
  );
};
