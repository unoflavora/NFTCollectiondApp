export default function handler(req, res) {
  const tokenId = req.query.tokenId;
  console.log(req)
  const image_url = `https://raw.githubusercontent.com/unoflavora/nftagaterndimage/main/%20(${tokenId}).png`
  res.status(200).json({
    name: "Agate Dev NFT #" + tokenId,
    description: "Wey TOKEN NI", tokenId,
    image: image_url
  });
}
