import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://cdn.petsworld.network/v1/s/images/2A8274E020166D590F02BE36726FC66F/1920.webp" },
  { url: "https://cdn.petsworld.network/v1/s/images/D1E47A1ED5E43C6B4B1633611A18D8D9/1920.webp" },
  { url: "https://cdn.petsworld.network/v1/s/images/9825AAA7A33C473BAF47841D34630A72/1920.webp" },
  { url: "https://cdn.petsworld.network/v1/s/images/04C22E8BE153648946C80EE61C5ABAE7/1920.webp" },
  { url: "https://cdn.petsworld.network/v1/s/images/D1E47A1ED5E43C6B4B1633611A18D8D9/1920.webp" },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1366}
        height={350}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default ImageSlider;