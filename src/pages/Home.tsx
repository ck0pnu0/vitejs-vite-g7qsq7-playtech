import CategoryDescription from '../layouts/CategoryDescription';

export default function Home() {
  const title =
    'Discover Your Next Essential: Software, Devices, and Fashion at Your Fingertips';
  const description = `Welcome to your one-stop shop for everything you need to stay ahead in the digital age and beyond. Whether you're looking to enhance your tech arsenal with cutting-edge software, upgrade to the latest mobile devices, or express your unique style with the latest fashion trends, we've got you covered. Explore our diverse collection of premium products, carefully curated to meet all your professional and personal needs. Start shopping now and experience the future of convenience and style, all in one place.`;

  return (
    <>
      <CategoryDescription title={title} description={description} />
    </>
  );
}
