export default function handler(req, res) {
  const tokenId = req.query.tokenId;
  const altTokenId = req.query.token_id
  const otherAlt = req.body.token_id
  const otherAlt2 = req.body.tokenId
  console.log(tokenId, altTokenId, otherAlt, otherAlt2)
  const image_url = `https://raw.githubusercontent.com/unoflavora/nftagaterndimage/main/%20(${tokenId}).png`
  res.status(200).json({
    name: "Agate Dev NFT #" + tokenId,
    description: "Debug, URL: " + image_url + 'ALt' + altTokenId, otherAlt, otherAlt2,
    image: image_url
  });
}
